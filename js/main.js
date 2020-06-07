const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
// document.getElementById("hero__container").style.marginTop = "135px";

navToggle.addEventListener("click", () => {
   nav.classList.toggle("nav--visible");
   var h = document.getElementById("header").clientHeight;
   document.getElementById("hero__container").style.marginTop = "calc(" + h + "px" + " - 30px)";
});

document.getElementsByTagName("BODY")[0].onresize = function () {
   marginal();
};

function marginal() {
   var h = document.getElementById("header").clientHeight;
   document.getElementById("hero__container").style.marginTop = "calc(" + h + "px" + " - 30px)";
}

$(document).ready(function () {
   // Add smooth scrolling to all links
   $("a").on("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
         // Prevent default anchor click behavior
         event.preventDefault();

         // Store hash
         var hash = this.hash;

         // Using jQuery's animate() method to add smooth page scroll
         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
         $("html, body").animate(
            {
               scrollTop: $(hash).offset().top,
            },
            800,
            function () {
               // Add hash (#) to URL when done scrolling (default click behavior)
               window.location.hash = hash;
            }
         );
      } // End if
   });
});
