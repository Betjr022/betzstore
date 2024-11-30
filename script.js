let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
const totalItems = items.length;

function updateCarousel() {
  items.forEach((item, index) => {
    const offset = (index - currentIndex) * 100;
    item.style.transform = `translateX(${offset}%)`;
  });

  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === currentIndex) {
      dot.classList.add('active');
    }
  });
}

function handleTouchStart(e) {
  startX = e.touches[0].clientX;
}

function handleTouchEnd(e) {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    currentIndex = (currentIndex + 1) % totalItems; 
  } else if (endX - startX > 50) {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; 
  }
  updateCarousel();
}

let startX;
document.querySelector('.carousel').addEventListener('touchstart', handleTouchStart);
document.querySelector('.carousel').addEventListener('touchend', handleTouchEnd);

updateCarousel(); 