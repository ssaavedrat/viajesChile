$(document).ready(function () {
    // Navbar cambia de color al hacer scroll
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        $(".navbar").addClass("bg-info");
      } else {
        $(".navbar").removeClass("bg-info");
      }
    });
  });