left = document.getElementById('left');
right = document.getElementById('right');

document.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    const minScroll = 0;
    const maxScroll1 = 1050;
    const maxScroll2 = 1150;

    let opacity;

    if (scrollValue >= minScroll && scrollValue <= maxScroll1) {
        // Opacity remains constant between 0 and 800
        opacity = 1;
    } else if (scrollValue > maxScroll1 && scrollValue <= maxScroll2) {
        // Opacity decreases linearly from 800 to 1200
        opacity = 1 - (scrollValue - maxScroll1) / (maxScroll2 - maxScroll1);
    } else {
        // Opacity is 0 beyond 1200
        opacity = 0;
    }

    // Make sure opacity is between 0 and 1
    const clampedOpacity = Math.max(0, Math.min(opacity, 1));

    // Apply opacity to the elements
    left.style.opacity = `${clampedOpacity}`;
    right.style.opacity = `${clampedOpacity}`;
});
