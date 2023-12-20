var section_2 = document.getElementById("section_2");
var section_3 = document.getElementById("section_3");

window.addEventListener("scroll", function() {
    var scrollValue = window.scrollY;

    if (scrollValue <= 100) {
        section_2.style.right = "1500px";
    }
    if (scrollValue >= 100) {
        section_2.style.right = "0px";
    }
    if (scrollValue <= 800) {
        section_3.style.right = "1500px";
    }
    if (scrollValue >= 800) {
        section_3.style.right = "0px";
    }
});