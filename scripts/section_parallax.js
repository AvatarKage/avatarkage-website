document.addEventListener('DOMContentLoaded', () => {
  const section_2 = document.getElementById('section_2');
  const section_3 = document.getElementById('section_3');

  let fadedIn2 = false;
  let fadedIn3 = false;

  if (window.innerWidth > 768) {
    section_2.style.opacity = 1;
    section_3.style.opacity = 1;
  }

  document.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    const minScroll2a = 200;
    const maxScroll2a = 300;

    const minScroll3a = 700;
    const maxScroll3a = 800;

    // Check if the screen width is less than 768 pixels (adjust the threshold as needed)
    const isMobile = window.innerWidth < 1000;

    if (!isMobile) {
      // Desktop version
      if (scrollValue >= minScroll2a && scrollValue <= maxScroll2a) {
        const opacity2a = Math.min(1, (scrollValue - minScroll2a) / (maxScroll2a - minScroll2a));
        section_2.style.opacity = opacity2a;

        if (opacity2a >= 1) {
          fadedIn2 = true;
        }
      }

      if (scrollValue >= minScroll3a && scrollValue <= maxScroll3a) {
        const opacity3a = Math.min(1, (scrollValue - minScroll3a) / (maxScroll3a - minScroll3a));
        section_3.style.opacity = opacity3a;

        if (opacity3a >= 1) {
          fadedIn3 = true;
        }
      }
    } else {
      section_2.style.opacity = 1;
      section_3.style.opacity = 1;
    } 
  });
});