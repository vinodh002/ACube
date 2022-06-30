const burgerMenu = document.querySelector(".burger-menu");
const bar1Ele = document.querySelector(".burger-menu>.bar:nth-child(1)");
const bar2Ele = document.querySelector(".burger-menu>.bar:nth-child(2)");
const bar3Ele = document.querySelector(".burger-menu>.bar:nth-child(3)");

const mainNav = document.querySelector(".main-nav");
const overlayEle = document.querySelector(".overlay");

// const courseSlider = document.querySelector(".course-slider");
// const courseSlide = document.querySelector(".course-slide");
// const courseSlides = document.querySelectorAll(".course-slide");

// Slider initial conditions
// courseSlider.style.height = `${getComputedStyle(courseSlide).height}`;

// courseSlides.forEach((slide, i) => [
//   (slide.style.transform = `translateX(calc(-50% + ${i * 100}%))`),
// ]);

// let courseCurrentSlide = 0;
// let curSlideZindex = 1;

// function getTranslateX(ele) {
//   var style = window.getComputedStyle(ele);
//   var matrix = new WebKitCSSMatrix(style.transform);
//   console.log("translateX: ", matrix.m41);
//   return matrix.m41;
// }
// const scaleCurrentSlide = (curSlide) => {
//   const curSlideTransformX = getTranslateX(courseSlides[curSlide]);
//   console.log(getComputedStyle(courseSlides[curSlide]).transform);
//   courseSlides[
//     curSlide
//   ].style.transform = `translateX(${curSlideTransformX}px) scale(1.5)`;
//   console.log(getComputedStyle(courseSlides[curSlide]).transform);
// };

// const courseNextSlide = () => {
//   curSlideZindex++;
//   courseCurrentSlide++;
//   courseSlides.forEach((slide, i) => [
//     (slide.style.transform = `translateX(calc(-50% + ${
//       (i - courseCurrentSlide) * 100
//     }%)) ${i === courseCurrentSlide ? `scale(1.2)` : ""}`),
//   ]);
//   courseSlides[courseCurrentSlide].style.zIndex = curSlideZindex;

//   // scaleCurrentSlide(courseCurrentSlide);
// };
// const coursePrevSlide = () => {
//   curSlideZindex++;
//   courseCurrentSlide--;
//   courseSlides.forEach((slide, i) => [
//     (slide.style.transform = `translateX(calc(-50% + ${
//       (i - courseCurrentSlide) * 100
//     }%)) ${i === courseCurrentSlide ? `scale(1.2)` : ""}`),
//   ]);
//   courseSlides[courseCurrentSlide].style.zIndex = curSlideZindex;
// };

// window.addEventListener("keydown", function (e) {
//   console.log(e);
//   if (e.key == "ArrowLeft") {
//     coursePrevSlide();
//   } else if (e.key == "ArrowRight") {
//     courseNextSlide();
//   }
// });

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
