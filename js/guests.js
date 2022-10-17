fetch("../guests.json")
  .then((response) => response.json())
  .then((json) => {
    var mainTable = json.filter((element) => element.table == 1);
    var table1 = json.filter((element) => element.table == 2);
    var table2 = json.filter((element) => element.table == 3);
    var table3 = json.filter((element) => element.table == 4);

    const renderButtons = (arr, x) => {
      for (let i in arr) {
        let button = document.createElement("button");
        button.textContent = arr[i].name;
        button.setAttribute("id", arr[i].name);
        button.setAttribute("class", "seatplan");
        document.getElementById(x).appendChild(button);
      }
    };
    renderButtons(table3, "right");
    renderButtons(table2, "center");
    renderButtons(table1, "left");
    renderButtons(mainTable, "main");
  });

let chair;
var myElement = document.getElementById("finder");
myElement.addEventListener("change", (event) => {
  chair = event.target.value;
  console.log(chair);
  document.getElementById(chair).className += "Show";
});

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add(".seatplan:hover");
//     }
//   });
// });

// const hiddenElements = document.querySelectorAll(".hidden");
// hiddenElements.forEach((el) => observer.observe(el));
