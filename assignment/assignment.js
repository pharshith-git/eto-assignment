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

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Trigger skill-fill animations
        const skillFills = entry.target.querySelectorAll('.skill-fill');
        skillFills.forEach(skillFill => {
          const width = skillFill.style.getPropertyValue('--width');
          skillFill.style.width = width;
        });

        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  }, { threshold: 0.2 });

  const percentageSection = document.querySelector('.percentage-section');
  observer.observe(percentageSection);
});

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  const sections = document.querySelectorAll('.hidden');
  sections.forEach((section) => observer.observe(section));
});


document.addEventListener("DOMContentLoaded", () => {
  const statsSection = document.querySelector(".stats-section");
  const numbers = document.querySelectorAll(".number");
  let started = false;

  const animateNumbers = () => {
    numbers.forEach((number) => {
      const target = +number.getAttribute("data-target");
      const increment = target / 200;

      const updateNumber = () => {
        const currentValue = +number.innerText;
        if (currentValue < target) {
          number.innerText = Math.ceil(currentValue + increment);
          setTimeout(updateNumber, 10);
        } else {
          number.innerText = target;
        }
      };
      updateNumber();
    });
  };

  const onScroll = () => {
    const statsSectionPosition = statsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (statsSectionPosition < screenPosition && !started) {
      started = true;
      animateNumbers();
    }
  };

  window.addEventListener("scroll", onScroll);
});

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs and panes
      tabs.forEach(t => t.classList.remove("active"));
      tabPanes.forEach(pane => {
        pane.classList.remove("active");
        pane.style.display = "none";
      });

      // Add active class to the clicked tab
      tab.classList.add("active");

      // Show corresponding pane with animation
      const targetPane = document.querySelector(`#${tab.dataset.tab}`);
      targetPane.style.display = "flex";
      setTimeout(() => {
        targetPane.classList.add("active");
      }, 50);
    });
  });
});





