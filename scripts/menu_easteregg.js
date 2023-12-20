const menuTextSelected = document.getElementById('menu_text_selected');
let clickCount = 0;
let oldText = menuTextSelected.textContent
let msg = ""

menuTextSelected.addEventListener('click', () => {
    clickCount++;
    menuTextSelected.style.transform = "scale(2)";
    if (clickCount == 3) {
        const announcement_banner_text = document.getElementById("announcement_banner_text");
        const old_banner_text = announcement_banner_text.textContent
        announcement_banner_text.textContent = `${old_banner_text} - ok, maybe not that..`
    }
    if (clickCount >= 10) {
        msg = "- Bro.."
    }
    if (clickCount >= 25) {
        msg = "- You ok??"
    }
    if (clickCount >= 50) {
        msg = "- DUDE STOP!!"
    }
    if (clickCount >= 80) {
        msg = "- Calling admins"
        setTimeout(() => {
            document.body.innerHTML = '<div style="position: absolute; z-index: 1; opacity: 0.25; top: 50%; left: -770px; scale: 1.2; transform-origin: center center;"><img id="coa_center" src="media/images/avatarkage/branding/avatarkage_coat_of_arms_transparent_1000_png.png" style="transform-origin: center center;"></img></div><div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; font-family: \'Jost-Medium\'; font-size: 28px;"><p>You\'ve been banned. Refresh to be unbanned.</p></div>';
        return;
        }, 5000);
    }
    const newText = `${oldText} ${clickCount} ${msg}`;

    // Add a class to trigger the animation
    menuTextSelected.classList.add('text-change-animation');

    // Updates the text
    menuTextSelected.textContent = newText;
    menuTextSelected.classList.remove('text-change-animation');

    setTimeout(() => {
    menuTextSelected.style.transform = "scale(1.05)";
    }, 80);
});
