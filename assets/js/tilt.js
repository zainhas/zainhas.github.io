// Talk thumbnails tilt slightly toward the cursor, with a soft light that follows it.
(function () {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.querySelectorAll(".talk").forEach(function (card) {
    var thumb = card.querySelector(".talk-thumb");
    if (!thumb) return;

    card.addEventListener("pointermove", function (e) {
      var r = thumb.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width;
      var py = (e.clientY - r.top) / r.height;
      thumb.style.transform = "perspective(700px) rotateX(" + (0.5 - py) * 6 + "deg) rotateY(" + (px - 0.5) * 8 + "deg) translateY(-2px)";
      thumb.style.setProperty("--light-x", px * 100 + "%");
      thumb.style.setProperty("--light-y", py * 100 + "%");
      thumb.classList.add("is-tilting");
    });

    card.addEventListener("pointerleave", function () {
      thumb.style.transform = "";
      thumb.classList.remove("is-tilting");
    });
  });
})();
