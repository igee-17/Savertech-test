// select all elements needed to add functionality
const companyDOM = document.querySelector(".company");
const dropDown = document.querySelector(".nav-drop-down");
const companyDropDown = document.querySelector(".company-drop-down");

const companyDOMLarge = document.querySelector(".more-info div");
const companyDropLarge = document.querySelector(".drop-down");
const navTop = document.querySelector(".nav-top");
// the suffix 'large' added to means for a 'large screen'

const toggleCompanyDropdown = () => {
  // EVENT LISTENERS TO ADD AND REMOVE COMPANY DROP DOWN ON SMALL screen
  //   const {companyDOM, }
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
export default toggleCompanyDropdown;
