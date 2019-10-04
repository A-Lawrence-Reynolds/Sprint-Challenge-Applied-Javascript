// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function headercreator() {
  const header = document.createElement("div");
  header.classList.add("header");

  const date = document.createElement("span");
  date.classList.add("date");
  date.textContent = "SOCTOBER 4,2019";
  header.appendChild(date);

  const times = document.createElement("h1");
  times.textContent = "Lambda Times";
  header.appendChild(times);

  const temp = document.createElement("span");
  temp.classList.add("temp");
  temp.textContent = "43˚";
  header.appendChild(temp);

  return header;
}

function fetchHeader() {
  container = document.querySelector(".header-container");
  const header = headercreator();
  container.appendChild(header);
}

window.addEventListener("load", () => {
  fetchHeader();
});
