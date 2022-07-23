const getStartedDOM = [...document.querySelectorAll(".get-started")];
const item = [...document.querySelectorAll(".get-started button")];

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

export default animateArrow;
