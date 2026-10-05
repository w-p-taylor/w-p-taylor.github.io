/* Smooth scroll effects: the profile header eases away and content fades in. */
(function () {
  var root = document.documentElement;
  window.wtMotion = true;

  // Clicking the TL;DR label also opens/closes the full version
  var tldrLabel = document.querySelector(".wt-tldr__label");
  var tldrFull = document.querySelector(".wt-full");
  if (tldrLabel && tldrFull) {
    tldrLabel.addEventListener("click", function () { tldrFull.open = !tldrFull.open; });
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    root.classList.remove("wt-js");
    return;
  }

  // Fade/slide content in as it enters the viewport
  var targets = document.querySelectorAll(
    "#main .page__title, #main .page__content > *, #main .archive > h2, #main .list__item"
  );
  var observer = new IntersectionObserver(function (entries) {
    var shown = 0;
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.style.transitionDelay = (shown++ * 70) + "ms";
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -6% 0px", threshold: 0.05 });
  targets.forEach(function (el) {
    el.classList.add("wt-reveal");
    observer.observe(el);
  });

  // Profile header: shrink and fade a little as you scroll past it
  var header = document.querySelector("#main .sidebar");
  if (!header) return;
  var ticking = false;
  function update() {
    var p = Math.min(Math.max(window.scrollY / (header.offsetHeight || 1), 0), 1);
    header.style.setProperty("--wt-p", p.toFixed(3));
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  update();
})();
