// ASCII portrait on the home page: characters assemble on load, then scatter away from the
// cursor and spring back. Falls back to the plain <pre> when motion is reduced or the
// portrait is hidden (small screens show an image instead).
(function () {
  var pre = document.querySelector(".ascii-profile");
  if (!pre || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var text = pre.textContent.replace(/\n$/, "");
  var lines = text.split("\n");
  var cols = Math.max.apply(
    null,
    lines.map(function (l) {
      return l.length;
    })
  );
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var RADIUS = 46;
  var canvas, ctx, parts, font, colors, width, height;
  var mouse = { x: -9999, y: -9999 };
  var running = false;

  function readColors() {
    var s = getComputedStyle(document.documentElement);
    colors = {
      text: s.getPropertyValue("--global-text-color").trim(),
    };
  }

  function build(scatter) {
    var rect = pre.getBoundingClientRect();
    if (!rect.width) return false;
    width = rect.width;
    height = rect.height;
    var cw = width / cols;
    var ch = height / lines.length;
    font = getComputedStyle(pre).fontSize + ' "JetBrains Mono", monospace';

    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.className = "ascii-canvas";
      canvas.setAttribute("aria-hidden", "true");
      pre.parentNode.insertBefore(canvas, pre);
      ctx = canvas.getContext("2d");
    }
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    parts = [];
    lines.forEach(function (line, row) {
      for (var c = 0; c < line.length; c++) {
        if (line[c] === " ") continue;
        var hx = c * cw;
        var hy = row * ch;
        var angle = Math.random() * Math.PI * 2;
        var dist = scatter ? 30 + Math.random() * 90 : 0;
        parts.push({
          ch: line[c],
          hx: hx,
          hy: hy,
          x: hx + Math.cos(angle) * dist,
          y: hy + Math.sin(angle) * dist,
          vx: 0,
          vy: 0,
        });
      }
    });
    pre.style.visibility = "hidden";
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
    ctx.textBaseline = "top";
    ctx.fillStyle = colors.text;

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
      if (Math.abs(p.vx) + Math.abs(p.vy) > 0.02) moving = true;

      ctx.fillText(p.ch, p.x, p.y);
    }

    // Keep animating while anything is in motion or the cursor is over the portrait.
    var near = mx > -RADIUS && my > -RADIUS && mx < width + RADIUS && my < height + RADIUS;
    if (moving || near) {
      requestAnimationFrame(frame);
    } else {
      running = false;
    }
  }

  function start() {
    if (!running && canvas) {
      running = true;
      requestAnimationFrame(frame);
    }
  }

  readColors();
  if (!build(true)) return;
  start();

  if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener(
      "pointermove",
      function (e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        start();
      },
      { passive: true }
    );
    document.addEventListener("pointerleave", function () {
      mouse.x = mouse.y = -9999;
    });
  }

  // Repaint in the new colors when the theme changes.
  new MutationObserver(function () {
    readColors();
    start();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  // Rebuild if the layout changes size; restore the plain text if the portrait is hidden.
  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      pre.style.visibility = "";
      if (build(false)) {
        start();
      } else if (canvas) {
        canvas.style.width = canvas.style.height = "0";
      }
    }, 150);
  });
})();
