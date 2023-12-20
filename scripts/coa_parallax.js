coa_center = document.getElementById('coa_center')

document.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    const parallaxValue = scrollValue * 0.25; // Adjust the multiplier for the desired parallax effect

    // Apply parallax effect to the background image
    coa_center.style.top = `${parallaxValue}px`;
});