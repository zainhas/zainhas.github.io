// ASCII portrait on the home page: characters assemble on load, then scatter away from the
// cursor and spring back.
//
// Exactly one version is visible at a time: the canvas while characters are moving, and the
// original <pre> (crisp text) once everything has settled. The inline script in about.liquid
// hides the <pre> before first paint so the static portrait never flashes before the canvas.
(function () {
  var root = document.documentElement;
  var pre = document.querySelector(".ascii-profile");
  if (!pre) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    root.classList.remove("portrait-pending");
    return;
  }

  var lines = pre.textContent.replace(/\n$/, "").split("\n");
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var RADIUS = 46;
  var canvas, ctx, parts, font, color, width, height;
  var mouse = { x: -9999, y: -9999 };
  var running = false;

  function showCanvas(on) {
    canvas.style.visibility = on ? "visible" : "hidden";
    pre.style.visibility = on ? "hidden" : "visible";
    root.classList.remove("portrait-pending");
  }

  function readColor() {
    color = getComputedStyle(root).getPropertyValue("--global-text-color").trim();
  }

  // Character advance and line height, measured from the rendered <pre> so canvas glyphs
  // land exactly where the text would.
  function measure() {
    var rect = pre.getBoundingClientRect();
    if (!rect.width) return null;
    var range = document.createRange();
    range.selectNodeContents(pre);
    var widest = 0;
    var boxes = range.getClientRects();
    for (var i = 0; i < boxes.length; i++) widest = Math.max(widest, boxes[i].width);
    var cols = Math.max.apply(
      null,
      lines.map(function (l) {
        return l.length;
      })
    );
    return { width: rect.width, height: rect.height, cw: (widest || rect.width) / cols, ch: rect.height / lines.length };
  }

  function build(scatter) {
    var m = measure();
    if (!m) return false;
    width = m.width;
    height = m.height;
    var style = getComputedStyle(pre);
    font = style.fontSize + " " + style.fontFamily;

    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.className = "ascii-canvas";
      canvas.setAttribute("aria-hidden", "true");
      pre.parentNode.insertBefore(canvas, pre);
      ctx = canvas.getContext("2d");
    }
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    parts = [];
    lines.forEach(function (line, row) {
      for (var c = 0; c < line.length; c++) {
        if (line[c] === " ") continue;
        var hx = c * m.cw;
        var hy = row * m.ch + m.ch / 2;
        var angle = Math.random() * Math.PI * 2;
        var dist = scatter ? 30 + Math.random() * 90 : 0;
        parts.push({ ch: line[c], hx: hx, hy: hy, x: hx + Math.cos(angle) * dist, y: hy + Math.sin(angle) * dist, vx: 0, vy: 0 });
      }
    });
    return true;
  }

  function frame() {
    var rect = canvas.getBoundingClientRect();
    var mx = mouse.x - rect.left;
    var my = mouse.y - rect.top;
    var moving = false;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    ctx.font = font;
    ctx.textBaseline = "middle";
    ctx.fillStyle = color;

    for (var i = 0; i < parts.length; i++) {
      var p = parts[i];
      var dx = p.x - mx;
      var dy = p.y - my;
      var d2 = dx * dx + dy * dy;
      if (d2 < RADIUS * RADIUS) {
        var d = Math.sqrt(d2) || 1;
        var force = (1 - d / RADIUS) * 2.2;
        p.vx += (dx / d) * force;
        p.vy += (dy / d) * force;
      }
      p.vx = (p.vx + (p.hx - p.x) * 0.08) * 0.78;
      p.vy = (p.vy + (p.hy - p.y) * 0.08) * 0.78;
      p.x += p.vx;
      p.y += p.vy;
      if (Math.abs(p.vx) + Math.abs(p.vy) > 0.02 || Math.abs(p.x - p.hx) + Math.abs(p.y - p.hy) > 0.1) {
        moving = true;
      } else {
        p.x = p.hx;
        p.y = p.hy;
        p.vx = p.vy = 0;
      }
      ctx.fillText(p.ch, p.x, p.y);
    }

    if (moving) {
      requestAnimationFrame(frame);
    } else {
      // Settled: hand back to the crisp text until the cursor disturbs it again.
      running = false;
      showCanvas(false);
    }
  }

  function start() {
    if (running || !canvas) return;
    running = true;
    showCanvas(true);
    requestAnimationFrame(frame);
  }

  function cursorNear() {
    var rect = canvas.getBoundingClientRect();
    return mouse.x > rect.left - RADIUS && mouse.x < rect.right + RADIUS && mouse.y > rect.top - RADIUS && mouse.y < rect.bottom + RADIUS;
  }

  function init() {
    readColor();
    if (!build(true)) {
      // The portrait is hidden (small screens show an image); leave the page as is.
      root.classList.remove("portrait-pending");
      return;
    }
    start();

    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener(
        "pointermove",
        function (e) {
          mouse.x = e.clientX;
          mouse.y = e.clientY;
          if (cursorNear()) start();
        },
        { passive: true }
      );
    }

    new MutationObserver(function () {
      readColor();
    }).observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (!running) build(false);
      }, 150);
    });
  }

  // Measure only after the monospace web font has loaded, otherwise the glyph grid is wrong.
  var started = false;
  function once() {
    if (!started) {
      started = true;
      init();
    }
  }
  if (document.fonts && document.fonts.load) {
    document.fonts.load('3px "JetBrains Mono"').then(once, once);
    setTimeout(once, 2000);
  } else {
    once();
  }
})();
