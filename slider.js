

window.addEventListener("load", () => {
    onLoadAndResize();
  });
  
  window.addEventListener("resize", () => {
    onLoadAndResize();
  });
  
  function onLoadAndResize() {
  
    const left = document.querySelectorAll(".left-label");
    const center = document.querySelectorAll(".center-label");
    const right = document.querySelectorAll(".right-label");
  
    const leftDot = document.querySelector(".left-dot");
    const centerDot = document.querySelector(".center-dot");
    const rightDot = document.querySelector(".right-dot");
  
    const leftItem = document.querySelector(".left-item");
    const centerItem = document.querySelector(".center-item");
    const rightItem = document.querySelector(".right-item");
  
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
  
    const sliderContainer = document.querySelector(".destinations-list");
  
    const sliderItem = document.querySelector(".destinations-item").clientWidth;
    const destinations = document.querySelector(".destinations").clientWidth;
    //console.log("destinations-item = ", sliderItem);
  
    for (let item of left) {
      item.addEventListener("click", () => {
        sliderContainer.classList.add("transformAnimation");
        centerDot.classList.remove("active");
        centerItem.classList.remove("active");
        rightDot.classList.remove("active");
        rightItem.classList.remove("active");
        leftDot.classList.add("active");
        leftItem.classList.add("active");
        leftArrow.classList.remove("active");
        rightArrow.classList.add("active");
        if (destinations <= 768) {
          sliderContainer.style.transform = "translateX(" + `${+92.3}vw)`;        
          //console.log(1);
        } else {
          //sliderContainer.style.transform = "translateX(" + `${+sliderItem}px)`;
          sliderContainer.style.transform = "translateX(" + `${+59.7221}vw)`;
        }
      });
    }
    for (let item of center) {
      item.addEventListener("click", () => {
        sliderContainer.classList.add("transformAnimation");
        leftDot.classList.remove("active");
        leftItem.classList.remove("active");
        rightDot.classList.remove("active");
        rightItem.classList.remove("active");
        centerDot.classList.add("active");
        centerItem.classList.add("active");
        leftArrow.classList.add("active");
        rightArrow.classList.add("active");
        sliderContainer.style.transform = "translateX(0px)";
      });
    }
    for (let item of right) {
      item.addEventListener("click", () => {
        sliderContainer.classList.add("transformAnimation");
        leftDot.classList.remove("active");
        leftItem.classList.remove("active");
        centerDot.classList.remove("active");
        centerItem.classList.remove("active");
        rightDot.classList.add("active");
        rightItem.classList.add("active");
        leftArrow.classList.add("active");
        rightArrow.classList.remove("active");
        if (destinations <= 768) {
          sliderContainer.style.transform = "translateX(" + `${-92.3}vw)`;        
          //console.log(2);
        } else {
          //sliderContainer.style.transform = "translateX(" + `${(-sliderItem * 67.5) / 100}px)`;
          sliderContainer.style.transform = "translateX(" + `${-59.7221}vw)`;
        }
      });
    }
  }