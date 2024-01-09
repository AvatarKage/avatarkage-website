function closeBanner() {
    const banner = document.getElementById("announcement_banner");
    const top = document.getElementsByClassName("top")[0];
    const center = document.getElementsByClassName("center")[0];
    const left = document.getElementsByClassName("left")[0];
    const right = document.getElementsByClassName("right")[0];

    if (banner && banner.style.display === "flex") {
        top.style.top = "40px";
        center.style.top = "calc(50% + 40px)";
        left.style.top = "40px";
        right.style.top = "40px";
        banner.style.display = "flex";
    } else {
        top.style.top = "0px";
        center.style.top = "calc(50%)";
        left.style.top = "0px";
        right.style.top = "0px";
        banner.style.top = "-40px";
        setTimeout(() => {
            banner.style.display = "none";
        }, 400);
    }
}

// Example: call the function on button click
const closeButton = document.getElementById("banner_close");
closeButton.addEventListener("click", closeBanner);
