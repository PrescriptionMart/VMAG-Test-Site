/* VMAG Bridge City — small progressive-enhancement helpers */
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    // Close the menu after tapping a link (mobile)
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      }
    });
  }

  // "Home"/logo links should go to the very top, not stop at the
  // sticky-header offset that scroll-padding-top applies to anchors.
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function scrollToVeryTop(e) {
    if (e) e.preventDefault();
    var supportsSmooth = "scrollBehavior" in document.documentElement.style;
    if (supportsSmooth && !reduceMotion) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
      if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }
  var brand = document.querySelector(".brand");
  if (brand) brand.addEventListener("click", scrollToVeryTop);
  document.querySelectorAll('a[href="#top"], a[href="#"]').forEach(function (link) {
    if (link !== brand) link.addEventListener("click", scrollToVeryTop);
  });

  // Current year in footer
  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  // Single-open FAQ accordion (close siblings when one opens)
  var faqItems = document.querySelectorAll(".faq__item");
  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });
})();
