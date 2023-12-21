document.addEventListener("DOMContentLoaded", function () {
    var coaBottom = document.getElementById("coa_bottom");
    var shieldBottom = document.getElementById("shield_bottom");

    coaBottom.addEventListener("mouseover", function () {
        coaBottom.style.opacity = 0;
        shieldBottom.style.opacity = 1;
    });

    coaBottom.addEventListener("mouseout", function () {
        shieldBottom.style.opacity = 0;
        coaBottom.style.opacity = 1;
    });
});