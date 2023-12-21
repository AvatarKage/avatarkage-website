var section_2 = document.getElementById("section_2");
var section_3 = document.getElementById("section_3");

window.addEventListener("scroll", function() {
    var scrollValue = window.scrollY;

    // Calculate the new right position based on the scroll value
    var section2Right = Math.max(0, 400 - scrollValue);
    var section3Right = Math.max(0, 1000 - scrollValue);

    // Set the new right positions for the sections
    section_2.style.right = section2Right * 4 + "px";
    section_3.style.right = section3Right * 4 + "px";
});