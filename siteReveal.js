const revealSite = () => {
  window.addEventListener("scroll", reveal);
  function reveal() {
    const reveals = [...document.querySelectorAll(".reveal")];
    console.log(reveals);
  }
};

export default revealSite;
