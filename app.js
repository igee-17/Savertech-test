// select all elements to add functionality
const companyBtn = document.querySelector(".company-btn");
const companyDOM = document.querySelector(".company");
const dropDown = document.querySelector(".nav-drop-down");
const companyDropDown = document.querySelector(".company-drop-down");
const toggleNav = document.querySelector(".toggle-nav");

const companyDOMLarge = document.querySelector(".more-info div");
const companyDropLarge = document.querySelector(".drop-down");
const navTop = document.querySelector(".nav-top");
// the suffix 'large' added to mean for a 'large screen'

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
// console.log(arrow);

const toggleCompanyDropdown = () => {
  // EVENT LISTENERS TO ADD AND REMOVE COMPANY DROP DOWN ON SMALL screen
  const mouseOver = companyDOM.addEventListener("mouseover", () => {
    if (!companyDropDown.classList.contains("show-company-drop-down")) {
      companyDropDown.classList.add("show-company-drop-down");
      dropDown.style.height = "300px";
      return;
    }
    removeCompanyDropDown();
  });

  const removeCompanyDropDown = () => {
    dropDown.addEventListener("mouseover", (e) => {
      // console.log(e.target);
      if (e.target.classList.contains("nav-accordion")) {
        companyDropDown.classList.remove("show-company-drop-down");
        dropDown.style.height = "10rem";
      }
    });
  };

  companyDOM.addEventListener("click", () => {
    if (!companyDropDown.classList.contains("show-company-drop-down")) {
      companyDropDown.classList.add("show-company-drop-down");
      return;
    }
    if (companyDropDown.classList.contains("show-company-drop-down")) {
      companyDropDown.classList.remove("show-company-drop-down");
      return;
    }
  });

  // EVENT LISTENERS TO ADD AND REMOVE COMPANY DROP DOWN ON LARGE SCREEN
  // and also
  // configurations for the position of the company drop down on a large screen
  companyDOMLarge.addEventListener("mouseover", () => {
    // console.log("hello");
    const dimensions = companyDOMLarge.getBoundingClientRect();
    const { left, bottom } = dimensions;
    if (!companyDropLarge.classList.contains("show-drop-down")) {
      companyDropLarge.classList.add("show-drop-down");
      companyDropLarge.classList.remove("drop-down");
    }
    companyDropLarge.style.top = `${bottom + 10}px`;
    companyDropLarge.style.left = `${left - 20}px`;

    // the values of the position of the companyDom is first gotten using the 'getBoundingClientRect' method above
    // then the position of the drop down is set to be below it using the values returned
    // this allows the position of the drop-down to be dynamic, regarding the screen-size, the drop down would always be below the companyDom
    navTop.addEventListener("mouseover", (e) => {
      // console.log(e.target);
      if (
        e.target.classList.contains("nav-center") ||
        e.target.classList.contains("nav-top") ||
        e.currentTarget.classList.contains("first-section")
      ) {
        companyDropLarge.classList.remove("show-drop-down");
        companyDropLarge.classList.add("drop-down");
      }
    });
  });
  companyDOMLarge.addEventListener("click", () => {
    if (!companyDropLarge.classList.contains("show-drop-down")) {
      companyDropLarge.classList.add("show-drop-down");
      companyDropLarge.classList.remove("drop-down");
      return;
    }
    if (companyDropLarge.classList.contains("show-drop-down")) {
      companyDropLarge.classList.remove("show-drop-down");
      companyDropLarge.classList.add("drop-down");
      return;
    }
  });
};

// function to toggle the navbar
const navToggle = () => {
  toggleNav.addEventListener("click", () => {
    if (!dropDown.classList.contains("show-nav-drop-down")) {
      dropDown.classList.add("show-nav-drop-down");
      dropDown.style.height = "10rem";
      return;
    }
    if (dropDown.classList.contains("show-nav-drop-down")) {
      dropDown.classList.remove("show-nav-drop-down");
      companyDropDown.classList.remove("show-company-drop-down");
      dropDown.style.height = "0";
      // height is set to zero here in order to remove the navbar from view
      // companyDropDown is also removed incase it is still open when user clicks
    }
  });
};

// this function is used to animate the arrows in the 'get started' buttons and remove the border by adding the css class: 'no-border'
const animateArrow = () => {
  getStartedDOM.map((dom, index) => {
    dom.addEventListener("mouseover", (e) => {
      item.map((arrow, index) => {
        if (!arrow.classList.contains("rotate-arrow")) {
          arrow.style.transform = "rotate(40deg);";
          arrow.classList.add("rotate-arrow");
          dom.classList.add("no-border");
          return;
        }
      });
    });
    dom.addEventListener("mouseout", (e) => {
      item.map((arrow, index) => {
        arrow.style.transform = "rotate(40deg);";
        arrow.classList.remove("rotate-arrow");
        dom.classList.remove("no-border");
      });
    });
  });
};

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

// init function here runs by default
function init() {
  toggleCompanyDropdown();
  navToggle();
  animateArrow();
  scrollTestimonia();
  scaleImages();
}
init();

// window.addEventListener("mouseover", (e) => {
//   console.log(e.target);
// });
