function randomColor() {
  return Math.floor(Math.random() * 256);
}
let color = "white";
let num = 32;
function createInitialChartFunction() {
  let chart = document.getElementById("chart");
  for (let i = 0; i < num * num; i++) {
    let cell = document.createElement("div");
    cell.className = "cellDiv";
    cell.style.backgroundColor = "black";
    chart.appendChild(cell);
  }
  document.getElementById("chart").style.cssText =
    "grid-template-columns: repeat(" +
    num +
    ", 1fr); grid-template-rows: repeat(" +
    num +
    ", 1fr)";
  let cellDivList0 = document.querySelectorAll(".cellDiv");
  cellDivList0.forEach((cellDiv0) => {
    cellDiv0.addEventListener("mouseover", () => {
      if (color === "random") {
        cellDiv0.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
      } else {
        cellDiv0.style.backgroundColor = color;
      }
    });
  });
}

function sizerGlowEffectsFunction() {
  let optionsList = document.querySelectorAll(".options");
  optionsList.forEach((option) => {
    option.addEventListener("mousedown", () => {
      option.style.cssText =
        "box-shadow: 0 0 15px purple; text-shadow: 0 0 12px rgba(204, 7, 99, 0.945)";
    });
    option.addEventListener("mouseup", () => {
      option.style.cssText = "";
    });
  });
}
function clearOptionFunction() {
  let clearOption = document.querySelector("#clear");
  clearOption.addEventListener("click", () => {
    let cellDivList = document.querySelectorAll(".cellDiv");
    cellDivList.forEach((cellDiv) => {
      cellDiv.style.backgroundColor = "#000000";
    });
  });
}

function whiteOptionFunction() {
  let whiteOption = document.querySelector("#white");
  whiteOption.addEventListener("click", () => {
    let cellDivList1 = document.querySelectorAll(".cellDiv");
    cellDivList1.forEach((cellDiv1) => {
      cellDiv1.addEventListener("mouseover", () => {
        cellDiv1.style.backgroundColor = `#ffffff`;
      });
    });
    color = "white";
  });
}

function rainbowOptionFunction() {
  let rainbowOption = document.querySelector("#rainbow");
  rainbowOption.addEventListener("click", () => {
    let cellDivList2 = document.querySelectorAll(".cellDiv");
    cellDivList2.forEach((cellDiv2) => {
      cellDiv2.addEventListener("mouseover", () => {
        cellDiv2.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
      });
    });
    color = "random";
  });
}

function colorPickerOptionFunction() {
  let colorPickerOption = document.querySelector("#colorPicker");
  colorPickerOption.addEventListener("input", (e) => {
    let cellDivList3 = document.querySelectorAll(".cellDiv");
    cellDivList3.forEach((cellDiv3) => {
      cellDiv3.addEventListener("mouseover", () => {
        cellDiv3.style.backgroundColor = e.target.value;
      });
    });
    color = e.target.value;
  });
}

function sizePickerOptionFunction() {
  let sizePickerNumber = document.querySelector("#sizePickerNumber");
  let sizePicker = document.querySelector("#sizePicker");
  sizePickerNumber.textContent = sizePicker.value;
  sizePicker.addEventListener("input", (e) => {
    sizePickerNumber.textContent = sizePicker.value;
    num = sizePicker.value;
    let divsToRemove = document.querySelectorAll(".cellDiv");
    for (let j = 0; j < divsToRemove.length; j++) {
      divsToRemove[j].remove();
    }
    createInitialChartFunction();
  });
}

createInitialChartFunction();
sizerGlowEffectsFunction();
whiteOptionFunction();
rainbowOptionFunction();
colorPickerOptionFunction();
sizePickerOptionFunction();
clearOptionFunction();
