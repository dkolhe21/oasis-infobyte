document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.slider img');
  let currentIndex = 0;
  const totalImages = images.length;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.remove('active');
      if (i === index) {
        img.classList.add('active');
      }
    });
  }

  function autoSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
  }

  showImage(currentIndex);

  setInterval(autoSlide, 3000);
});

