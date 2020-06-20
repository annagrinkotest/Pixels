document.addEventListener('DOMContentLoaded', () => {
  const pixelClick = document.querySelectorAll('.pixel');
  const colorClick = document.querySelectorAll('.color');
  const toolClick = document.querySelectorAll('.tool');
  const widthCanvas = 14;

  toolClick.forEach(element => {
    element.addEventListener("click", () => {
      document.querySelector(".tool-selected").classList.remove("tool-selected");
      element.classList.add("tool-selected");
    })
  })
  colorClick.forEach(element => {
    element.addEventListener("click", () => {
      document.querySelector(".color-selected").classList.remove("color-selected");
      element.classList.add("color-selected");
    })
  })
  pixelClick.forEach((element, i) => {
    element.addEventListener("click", () => {
      if (document.querySelector(".tool-selected").id === "tool-pencil") {
        element.style.background = document.querySelector(".color-selected").style.background;
      }
      else if (document.querySelector(".tool-selected").id === "tool-fill") {
        pixelClick.forEach(element => {
          element.style.background = document.querySelector(".color-selected").style.background;
        })
      }
      else if (document.querySelector(".tool-selected").id === "tool-erase") {
        element.style.background = "#eee";
      }
      else {
        pixelClick[i].style.background = document.querySelector(".color-selected").style.background;
        if (i > 0 && i < (widthCanvas - 1)) {
          pixelClick[i + 1].style.background = document.querySelector(".color-selected").style.background;
          pixelClick[i - 1].style.background = document.querySelector(".color-selected").style.background;
          pixelClick[i + widthCanvas].style.background = document.querySelector(".color-selected").style.background;
        }
        else if (i % widthCanvas === 0 && i !== 0) {
          pixelClick[i + 1].style.background = document.querySelector(".color-selected").style.background;
          pixelClick[i - widthCanvas].style.background = document.querySelector(".color-selected").style.background;
          pixelClick[i + widthCanvas].style.background = document.querySelector(".color-selected").style.background;
        }
        else if (i % widthCanvas === widthCanvas - 1 && i !== widthCanvas - 1) {
          pixelClick[i - 1].style.background = document.querySelector(".color-selected").style.background;
          pixelClick[i - widthCanvas].style.background = document.querySelector(".color-selected").style.background;
          pixelClick[i + widthCanvas].style.background = document.querySelector(".color-selected").style.background;
        }
        else if (i === 0) {
          pixelClick[i + 1].style.background = document.querySelector(".color-selected").style.background;
          pixelClick[i + widthCanvas].style.background = document.querySelector(".color-selected").style.background;
        }
        else if (i === widthCanvas - 1) {
          pixelClick[i - 1].style.background = document.querySelector(".color-selected").style.background;
          pixelClick[i + widthCanvas].style.background = document.querySelector(".color-selected").style.background;
        }
        else {
          pixelClick[i + 1].style.background = document.querySelector(".color-selected").style.background;
          pixelClick[i - 1].style.background = document.querySelector(".color-selected").style.background;
          pixelClick[i - widthCanvas].style.background = document.querySelector(".color-selected").style.background;
          pixelClick[i + widthCanvas].style.background = document.querySelector(".color-selected").style.background;
        }
      }
    })
  })
});