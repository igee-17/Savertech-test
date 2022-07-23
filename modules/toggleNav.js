// select elements
const toggleNav = document.querySelector(".toggle-nav");
const dropDown = document.querySelector(".nav-drop-down");
const companyDropDown = document.querySelector(".company-drop-down");

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
export default navToggle;
