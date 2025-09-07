document.addEventListener("DOMContentLoaded", () => {
  let currentSlideLeft = 0;
  const slidesLeft = document.querySelectorAll('.slides-left .slide');

  let currentSlideRight = 0;
  const slidesRight = document.querySelectorAll('.slides-right .slide');

  function showSlide(slides, index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide(slides, currentIndex) {
    return slides.length ? (currentIndex + 1) % slides.length : 0;
  }

  function autoSlide() {
    currentSlideLeft = nextSlide(slidesLeft, currentSlideLeft);
    showSlide(slidesLeft, currentSlideLeft);

    currentSlideRight = nextSlide(slidesRight, currentSlideRight);
    showSlide(slidesRight, currentSlideRight);
  }

  showSlide(slidesLeft, currentSlideLeft);
  showSlide(slidesRight, currentSlideRight);
  setInterval(autoSlide, 4000);

  
  window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      const redirect = confirm("You've reached the end of the page. Do you want to proceed to the next page?");
      if (redirect) window.location.href = "recognition.html";
    }
  });
});
