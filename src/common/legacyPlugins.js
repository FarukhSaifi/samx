// Centralized, SSR-safe legacy plugin loader and tiny init helpers.

export const loadScript = src =>
  new Promise(resolve => {
    if (typeof window === "undefined") return resolve();
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => resolve();
    document.body.appendChild(s);
  });

function idle(callback) {
  if (typeof window === "undefined") return;
  const rir =
    window.requestIdleCallback ||
    function (cb) {
      return setTimeout(cb, 1);
    };
  rir(() => callback());
}

function isPresent(selector) {
  if (typeof document === "undefined") return false;
  return !!document.querySelector(selector);
}

export async function loadLegacyCore() {
  await loadScript("/js/jquery.js");
  await loadScript("/js/bootstrap.bundle.js");
}

export async function loadRevolution() {
  if (!isPresent(".rev_slider")) return; // load only if slider exists
  await loadScript("/revolution/js/jquery.themepunch.tools.min.js");
  await loadScript("/revolution/js/jquery.themepunch.revolution.min.js");
  await loadScript("/revolution/js/extensions/revolution.extension.navigation.min.js");
  await loadScript("/revolution/js/extensions/revolution.extension.layeranimation.min.js");
  await loadScript("/revolution/js/extensions/revolution.extension.slideanims.min.js");
  await loadScript("/revolution/js/extensions/revolution.extension.parallax.min.js");
}

export async function loadUxPlugins() {
  await loadScript("/js/jquery.easing.1.3.js");
  await loadScript("/js/smooth-scroll.js");
  await loadScript("/js/page-scroll.js");
  await loadScript("/js/jquery.nav.js");
  await loadScript("/js/classie.js");
  await loadScript("/js/hamburger-menu.js");
}

export async function loadMediaPlugins() {
  if (isPresent(".swiper, .swiper-container")) await loadScript("/js/swiper.min.js");
  if (isPresent(".portfolio-grid")) {
    await loadScript("/js/imagesloaded.pkgd.min.js");
    await loadScript("/js/isotope.pkgd.min.js");
  }
  if (isPresent(".mfp-link, .mfp-image, .lightbox")) await loadScript("/js/jquery.magnific-popup.min.js");
  if (isPresent(".justified-gallery")) await loadScript("/js/justified-gallery.min.js");
  if (isPresent("iframe, .fitvids")) await loadScript("/js/jquery.fitvids.js");
}

export async function loadCountersAndVisuals() {
  if (isPresent(".timer")) {
    await loadScript("/js/jquery.appear.js");
    await loadScript("/js/jquery.count-to.js");
    await loadScript("/js/counter.js");
  }
  if (isPresent(".chart")) await loadScript("/js/jquery.easypiechart.min.js");
  if (isPresent(".skillbar")) await loadScript("/js/skill.bars.jquery.js");
  if (isPresent("[data-stellar-background-ratio]")) await loadScript("/js/jquery.stellar.js");
  await loadScript("/js/wow.min.js");
  await loadScript("/js/bootsnav.js");
  await loadScript("/js/retina.min.js");
}

export function initWowIfAvailable() {
  if (typeof window !== "undefined" && window.WOW) {
    new window.WOW().init();
  }
}

export async function initializeTheme() {
  await loadLegacyCore();
  // Guard: prevent ReferenceError if theme checks duplicate jQuery before rev scripts
  if (typeof window !== "undefined" && typeof window.revslider_showDoubleJqueryError === "undefined") {
    window.revslider_showDoubleJqueryError = function () {};
  }
  // Ensure Swiper is available as early as possible
  await loadScript("/js/swiper.min.js");
  // Ensure critical jQuery plugins are available before theme init
  await loadScript("/js/jquery.appear.js");
  await loadScript("/js/jquery.magnific-popup.min.js");
  await loadScript("/js/jquery.fitvids.js");
  // Ensure countdown plugin used by main.js is available
  await loadScript("/js/counter.js");
  // Ensure skill bars plugin used by theme is available
  await loadScript("/js/skill.bars.jquery.js");
  // Load Revolution core before any theme code that may reference it
  await loadRevolution();
  // non-critical loads deferred to idle time and gated by DOM presence
  idle(async () => {
    await loadUxPlugins();
    await loadMediaPlugins();
    await loadCountersAndVisuals();
    await loadScript("/js/main.js");
    initWowIfAvailable();
  });
}
