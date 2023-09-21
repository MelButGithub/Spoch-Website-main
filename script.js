
baguetteBox.run('.tz-gallery');
 

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("stickynav");
var sticky = navbar.offsetTop;
function myFunction() {
  if ($(window).scrollTop() >= 1000 & $(window).width() > 1024) {
    navbar.classList.add("sticky");
    $('#stickynav').fadeIn();
  } else {
    navbar.classList.remove("sticky");
  }
} 

window.addEventListener("load", (event) => {
  new cursoreffects.fairyDustCursor({
    colors: ["FF00FF", "#FF00FF", "#FF00FF"],
  });
});