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

const moreButton = document.querySelector(".arrowtoggle");
const moreButtonArrow = document.querySelector(".arrow");
const moreProducts = document.querySelector(".moreproducts");

moreButton.addEventListener("click", () => {
   if (moreButtonArrow.classList.contains("fa-arrow-down")) {
      moreButtonArrow.classList.remove("fa-arrow-down");
      moreButtonArrow.classList.add("fa-arrow-up");
      moreButton.classList.remove("more");
      moreButton.classList.add("less");
      moreProducts.classList.remove("hide");
   } else {
      moreButtonArrow.classList.add("fa-arrow-down");
      moreButtonArrow.classList.remove("fa-arrow-up");
      moreButton.classList.remove("less");
      moreButton.classList.add("more");
      moreProducts.classList.add("hide");
   }
});
