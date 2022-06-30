const burgerMenu = document.querySelector(".burger-menu");
const bar1Ele = document.querySelector(".burger-menu>.bar:nth-child(1)");
const bar2Ele = document.querySelector(".burger-menu>.bar:nth-child(2)");
const bar3Ele = document.querySelector(".burger-menu>.bar:nth-child(3)");

const mainNav = document.querySelector(".main-nav");
const overlayEle = document.querySelector(".overlay");

const courseSlider = document.querySelector(".course-slider");
const courseSlide = document.querySelector(".course-slide");
const courseSlides = document.querySelectorAll(".course-slide");

courseCurrentSlide = 0;
courseZIndex = 0;

const sliderFunction = (slider, slides, currentSlide, zIndex) => {
  slider.style.height = `${getComputedStyle(courseSlide).height}`;

  slides.forEach((slide, i) => [
    (slide.style.transform = `translateX(calc(-50% + ${i * 100}%))`),
  ]);

  const nextSlide = () => {
    zIndex++;

    if (currentSlide == slides.length - 1) return;
    currentSlide++;

    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(calc(-50% + ${
        (i - currentSlide) * 100
      }%)) ${i === currentSlide ? `scale(1.1)` : `scale(.7)`}`;
      if (i == currentSlide) {
        slide.style.filter = "blur(0px)";
      } else slide.style.filter = "blur(2px)";
    });
    slides[currentSlide].style.zIndex = zIndex;
  };
  nextSlide();
  const prevSlide = () => {
    zIndex++;

    if (currentSlide == 0) return;

    currentSlide--;
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(calc(-50% + ${
        (i - currentSlide) * 100
      }%)) ${i === currentSlide ? `scale(1.2)` : `scale(.7)`}`;
      if (i == currentSlide) {
        slide.style.filter = "blur(0px)";
      } else slide.style.filter = "blur(2px)";
    });
    slides[currentSlide].style.zIndex = zIndex;
  };

  return [nextSlide, prevSlide];
};

const [courseNextSlide, coursePrevSlide] = sliderFunction(
  courseSlider,
  courseSlides,
  courseCurrentSlide,
  courseZIndex
);

window.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key == "ArrowLeft") {
    coursePrevSlide();
  } else if (e.key == "ArrowRight") {
    courseNextSlide();
  }
});

let touchstartX = 0;
let touchendX = 0;

function checkDirection() {
  if (touchendX < touchstartX) courseNextSlide();
  if (touchendX > touchstartX) coursePrevSlide();
}

document.addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].screenX;
  checkDirection();
  console.log("Hi");
});

// Burger menu functionalities
let navMenuActive = false;

const toggleNavMenuActive = () => {
  navMenuActive ? (navMenuActive = false) : (navMenuActive = true);
};

const stopScrolling = () => {
  window.scrollTo(0, 0);
};
const animateMenuBar = () => {
  if (!navMenuActive) {
    bar1Ele.style.width = "30px";
    bar3Ele.style.width = "30px";
    bar2Ele.style.transform = `translateX(-50px)`;
    bar2Ele.style.opacity = `0`;
    bar1Ele.style.transform = `translateY(8.5px) rotate(45deg)`;
    bar3Ele.style.transform = `translateY(-8.5px) rotate(-45deg)`;
  } else {
    bar1Ele.style.width = "40px";
    bar3Ele.style.width = "40px";
    bar2Ele.style.transform = `translateX(0)`;
    bar2Ele.style.opacity = `1`;
    bar1Ele.style.transform = `rotate(0deg)`;
    bar3Ele.style.transform = `rotate(0deg)`;
  }
};

const toggleNavBar = () => {};
burgerMenu.addEventListener("click", function () {
  // Burger Menu animation
  animateMenuBar();

  //   Toggle navbar
  if (window.innerWidth < 850) {
    if (!navMenuActive) {
      mainNav.classList.add("moveInNav");
      overlayEle.classList.add("active-overlay");
      window.addEventListener("scroll", stopScrolling);
    } else {
      mainNav.classList.remove("moveInNav");
      overlayEle.classList.remove("active-overlay");
      window.removeEventListener("scroll", stopScrolling);
    }
  }

  toggleNavMenuActive();
});
