// IMPORTS
import toggleCompanyDropdown from "./modules/toggleCompany.js";
import navToggle from "./modules/toggleNav.js";
import animateArrow from "./modules/arrowAnimation.js";
// import revealSite from "./modules/siteReveal.js";
// // select all elements to add functionality

const sectionSeven = document.querySelector(".section-seven");
const reviews = document.querySelector(".reviews");

// selections for scaling images in section 8
const sectionEight = document.querySelector(".section-eight");
const textOverlay = [
  ...document.querySelectorAll(".section-eight .text-overlay"),
];
const textMain = [...document.querySelectorAll(".section-eight .text")];
console.log(textMain);
const text = [...textOverlay, ...textMain];
const images = [...document.querySelectorAll(".section-eight img")];

const getStartedDOM = [...document.querySelectorAll(".get-started")];
const item = [...document.querySelectorAll(".get-started button")];

// function to start scrolling the testimonia when scroll has reached the section
const scrollTestimonia = () => {
  const dimensions = sectionSeven.getBoundingClientRect();
  window.addEventListener("scroll", () => {
    if (window.scrollY > dimensions.top - 50) {
      reviews.classList.add("reviews-slider");
    }
    return;
  });
};

console.log(sectionEight);
// function to increase the scale of the images on section 8
const scaleImages = () => {
  sectionEight.addEventListener("mouseover", (e) => {
    console.log(e.target);
    if (
      !e.target.classList.contains("text-overlay") &&
      !e.target.classList.contains("overlay-text") &&
      !e.target.classList.contains("text")
    ) {
      images.map((image) => {
        image.classList.remove("hover-image");
      });
    } else {
      textOverlay.map((dom, index) => {
        const image = images[index];
        dom.addEventListener("mouseover", () => {
          if (!image.classList.contains("hover-image")) {
            image.classList.add("hover-image");
          }
        });
      });
    }
  });
};

// function to add animations on scrollTestimonia
const revealSite = () => {
  window.addEventListener("scroll", reveal);
  function reveal() {
    const reveals = [...document.querySelectorAll(".reveal")];
    // console.log(reveals);
    for (let i = 0; i < reveals.length; i++) {
      let windowheight = window.innerHeight;
      let revealtop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 180;
      if (revealtop < windowheight - revealPoint) {
        reveals[i].classList.add("active");
      }
      // else {
      //   reveals[i].classList.remove("active");
      // }
    }
  }
};
// init function here runs by default
function init() {
  revealSite();
  navToggle();
  toggleCompanyDropdown();
  animateArrow();
  scrollTestimonia();
  scaleImages();
}
init();

// window.addEventListener("mouseover", (e) => {
//   console.log(e.target);
// });
