const iconMenu = document.querySelector(".burger"),
  nav = document.querySelector(".nav"),
  popUp = document.querySelector(".pop-up"),
  closePopup = document.querySelector(".pop-up__close");

iconMenu.addEventListener("click", function () {
  iconMenu.classList.toggle("js-active");
  nav.classList.toggle("js-active");
});

arrButton = document.querySelectorAll(".button__blue");
arrButton.forEach((el) => {
  el.addEventListener("click", function () {
    popUp.classList.add("js-active");
  });
  closePopup.addEventListener("click", function () {
    popUp.classList.remove("js-active");
  });
});

$(document).ready(function () {
  $(".reasons__container").slick({
    arrows: true,
    dots: true,
    variableWidth: true,
    variable: true,
  });
  $("#telephone").intlTelInput({
    preferredCountries: ["ua", "pl", "us"],
    autoHideDialCode: false,
    separateDialCode: true,
    geoIpLookup: function (callback) {
      $.get("http://ipinfo.io", function () {}, "jsonp").always(function (
        resp
      ) {
        var countryCode = resp && resp.country ? resp.country : "";
        callback(countryCode);
      });
    },
    utilsScript: "utils.js",
  });
});
