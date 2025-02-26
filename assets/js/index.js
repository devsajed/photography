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
});
