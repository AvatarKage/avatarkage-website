function closeBanner() {
    const banner = document.getElementById("announcement_banner");
    const top = document.getElementsByClassName("top")[0];

    if (banner && banner.style.display === "flex") {
        top.style.top = "40px";
        banner.style.display = "flex";
    } else {
        top.style.top = "0px";
        banner.style.top = "-40px";
        setTimeout(() => {
            banner.style.display = "none";
        }, 400);
    }
}

// Example: call the function on button click
const closeButton = document.getElementById("banner_close");
closeButton.addEventListener("click", closeBanner);
