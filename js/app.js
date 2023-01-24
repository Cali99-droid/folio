eventListeners();
function myFunction() {
  var x = document.getElementById("nav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}
function eventListeners() {
  var typed = new Typed("#typed", {
    stringsElement: "#typed-strings",
    backSpeed: 40,
    typeSpeed: 40,
    loop: true,
  });
}

$(document).ready(function () {
  irArriba();
}); //Hacia arriba

function irArriba() {
  $(".ir-arriba").click(function () {
    $("body,html").animate({ scrollTop: "0px" }, 1000);
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".ir-arriba").slideDown(600);
    } else {
      $(".ir-arriba").slideUp(600);
    }
  });
  $(".ir-abajo").click(function () {
    $("body,html").animate({ scrollTop: "1000px" }, 1000);
  });
}
