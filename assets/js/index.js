document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const toggleBtn = document.querySelector(".toggle-btn");
  const openBtn = document.querySelector(".open-btn");
  const closeBtn = document.querySelector(".close-btn");

  // Toggle Menu
  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("show");
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Sticky header
  window.onscroll = function () {
    toggleStickyHeader();
    scrollFunction();
  };

  function toggleStickyHeader() {
    var header = document.querySelector(".headers");
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  // Preloader
  window.onload = function () {
    document.getElementById("preloader").style.display = "none";
  };

  // Scroll to Top Button
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }
});
