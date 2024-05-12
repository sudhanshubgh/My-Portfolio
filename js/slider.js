let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot"); // Get all dots
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active"); // Remove active-dot class from all dots
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].classList.add("active"); // Add active-dot class to the current dot
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

