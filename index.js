let color = "red";
let num = 32;
let chart = document.getElementById("chart");
for (let i = 0; i < 32 * 32; i++) {
  let cell = document.createElement("div");
  cell.setAttribute("class", "cellDiv");
  cell.setAttribute("style", "background-color: black");
  cell.addEventListener("mouseover", () => {
    cell.setAttribute("style", "background-color: white");
  });
  chart.appendChild(cell);
}
document.getElementById("chart").style.cssText =
  "grid-template-columns: repeat(" +
  num +
  ", 1fr); grid-template-rows: repeat(" +
  num +
  ", 1fr)";

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
let clearOption = document.querySelector("#clear");
clearOption.addEventListener("click", () => {
  let cellDivList = document.querySelectorAll(".cellDiv");
  cellDivList.forEach((cellDiv) => {
    cellDiv.style.backgroundColor = "#000000";
  });
});
