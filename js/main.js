const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
// document.getElementById("hero__container").style.marginTop = "135px";

navToggle.addEventListener("click", () => {
   nav.classList.toggle("nav--visible");
   var h = document.getElementById("header").clientHeight;
   document.getElementById("hero__container").style.marginTop = "calc(" + h + "px" + " - 30px)";
   console.log(h);
});

document.getElementsByTagName("BODY")[0].onresize = function () {
   marginal();
};

function marginal() {
   var h = document.getElementById("header").clientHeight;
   document.getElementById("hero__container").style.marginTop = "calc(" + h + "px" + " - 30px)";
}
