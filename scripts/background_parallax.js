document.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    const parallaxValue = scrollValue * 0.15; // Adjust the multiplier for the desired parallax effect

    // Apply parallax effect to the background image
    document.body.style.backgroundPositionY = `-${parallaxValue}px`;
});