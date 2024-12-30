let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide .carousel-slides');

// Function to hide all slides
function hideSlides() {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
}

// Function to show the current slide
function showSlide(index) {
    slides[index].style.display = 'block';
}

// Function to move to the next or previous slide
function moveSlide(direction) {
    // Hide the current slide
    hideSlides();

    // Update the currentIndex based on the direction (prev or next)
    currentIndex += direction;

    // If the index goes below 0, wrap to the last slide
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    // If the index exceeds the last slide, wrap to the first slide
    else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    // Show the new current slide
    showSlide(currentIndex);
}

// Initially show the first slide
showSlide(currentIndex);




