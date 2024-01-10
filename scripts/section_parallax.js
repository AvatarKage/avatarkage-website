document.addEventListener('DOMContentLoaded', () => {
    const section_2 = document.getElementById('section_2');
    const section_3 = document.getElementById('section_3');
  
    let fadedIn2 = false;
    let fadedIn3 = false;
  
    document.addEventListener('scroll', () => {
      const scrollValue = window.scrollY;
      const minScroll2a = 200;
      const maxScroll2a = 300;
  
      const minScroll3a = 700;
      const maxScroll3a = 800;
  
      if (scrollValue >= minScroll2a && scrollValue <= maxScroll2a) {
        // Opacity increases linearly from 0 to 1 in the first interval
        const opacity2a = Math.min(1, (scrollValue - minScroll2a) / (maxScroll2a - minScroll2a));
        section_2.style.opacity = 1;
  
        if (opacity2a >= 1) {
          fadedIn2 = true;
        }
      }
  
      if (scrollValue >= minScroll3a && scrollValue <= maxScroll3a) {
        // Opacity increases linearly from 0 to 1 in the second interval
        const opacity3a = Math.min(1, (scrollValue - minScroll3a) / (maxScroll3a - minScroll3a));
        section_3.style.opacity = 1;
  
        if (opacity3a >= 1) {
          fadedIn3 = true;
        }
      }
    });
  });  