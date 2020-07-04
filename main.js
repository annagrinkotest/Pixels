document.addEventListener('DOMContentLoaded', () => {
  const pixels = document.querySelectorAll('.pixel');
  const tools = document.querySelectorAll('.tool');
  const widthCanvas = 14;
  let currentTool = document.querySelector(".tool-selected").id;
  let currentColor = document.querySelector(".color-selected").style.background;

  document.querySelector(".colors").addEventListener("click", (e) => {
    document.querySelector(".color-selected").classList.remove("color-selected");
    e.target.classList.add("color-selected");
    currentColor = document.querySelector(".color-selected").style.background;
  })

  tools.forEach(element => {
    element.addEventListener("click", () => {
      document.querySelector(".tool-selected").classList.remove("tool-selected");
      element.classList.add("tool-selected");
      currentTool = document.querySelector(".tool-selected").id;
    })
  })

  pixels.forEach((element, i) => {
    element.addEventListener("click", () => {
      if (currentTool === "tool-pencil") {
        drawWithPencil (element);
      }
      else if (currentTool === "tool-fill") {
        drawWithFill (element);
      }
      else if (currentTool === "tool-erase") {
        drawWithErase (element);
      }
      else if (currentTool === "tool-brush") {
        drawWithBrush (element,i);
      }
    })
  })

  function drawWithPencil (element) {
    element.style.background = currentColor;
  }

  function drawWithFill (element) {
    let colorClickPixel =  element.style.background;
    
    pixels.forEach((element, i) => {
     if (element.style.background === colorClickPixel) {
      element.style.background = currentColor;
      }  
    })  
  }

  function drawWithErase (element) {
    element.style.background = "#eee";
  }

  function drawWithBrush (element,i) {
    pixels[i].style.background = currentColor;
    if (i > 0 && i < (widthCanvas - 1)) {
      pixels[i + 1].style.background = currentColor;
      pixels[i - 1].style.background = currentColor;
      pixels[i + widthCanvas].style.background = currentColor;
    }
    else if (i % widthCanvas === 0 && i !== 0) {
      pixels[i + 1].style.background = currentColor;
      pixels[i - widthCanvas].style.background = currentColor;
      pixels[i + widthCanvas].style.background = currentColor;
    }
    else if (i % widthCanvas === widthCanvas - 1 && i !== widthCanvas - 1) {
      pixels[i - 1].style.background = currentColor;
      pixels[i - widthCanvas].style.background = currentColor;
      pixels[i + widthCanvas].style.background = currentColor;
    }
    else if (i === 0) {
      pixels[i + 1].style.background = currentColor;
      pixels[i + widthCanvas].style.background = currentColor;
    }
    else if (i === widthCanvas - 1) {
      pixels[i - 1].style.background = currentColor;
      pixels[i + widthCanvas].style.background = currentColor;
    }
    else {
      pixels[i + 1].style.background = currentColor;
      pixels[i - 1].style.background = currentColor;
      pixels[i - widthCanvas].style.background = currentColor;
      pixels[i + widthCanvas].style.background = currentColor;
    }
  }
  
});