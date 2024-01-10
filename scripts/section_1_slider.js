const imageSources = [
  "media/images/promo/slider/discord_server_launch.jpg",
  "media/images/promo/slider/spotify_release_chapter2.jpg",
  // Add more image sources as needed
];

const descSources = [
  "After over 3 years of frequent development cycles, brand updates, and community functionality revamps, the Discord server is finally officially released. Will you join us?",
  "The Chapter 2 album, released on May 20, 2023, is AvatarKage's latest album featuring his top songs, Dream and Electro Lights II. Stream it today!",
  // Add more description sources as needed
];

const linkSources = [
  "https://avatarka.ge/join",
  "https://avatarka.ge/chapter2",
  // Add more link sources as needed
];

let currentImageIndex = 0;
let currentDescIndex = 0;
let currentLinkIndex = 0;

function changeImage(direction) {
  if (direction === 'next') {
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    currentDescIndex = (currentDescIndex + 1) % descSources.length;
    currentLinkIndex = (currentLinkIndex + 1) % linkSources.length;
  } else if (direction === 'prev') {
    currentImageIndex = (currentImageIndex - 1 + imageSources.length) % imageSources.length;
    currentDescIndex = (currentDescIndex - 1 + descSources.length) % descSources.length;
    currentLinkIndex = (currentLinkIndex - 1 + linkSources.length) % linkSources.length;
  }

  // Update the src attribute of the image
  document.getElementById('section_1_image').src = imageSources[currentImageIndex];
  document.getElementById('section_1_text').textContent = descSources[currentDescIndex];
  document.getElementById('section_1_link').href = linkSources[currentLinkIndex];
}

// Add event listeners to the arrow elements
document.getElementById('section_1_right').addEventListener('click', function () {
  changeImage('next');
});

document.getElementById('section_1_left').addEventListener('click', function () {
  changeImage('prev');
});

// Set up interval to run the changeImage function every 5 seconds
setInterval(function () {
  changeImage('next');
}, 5000);
