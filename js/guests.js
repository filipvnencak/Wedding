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
    let arrayofPeople = [];
    for (let i in json) {
      arrayofPeople = i.name;
    }
    function autocompleteMatch(input) {
      if (input == "") {
        return [];
      }
      var reg = new RegExp(input);
      return arrayofPeople.filter(function (term) {
        if (term.match(reg)) {
          return term;
        }
      });
    }

    function showResults(val) {
      res = document.getElementById("result");
      res.innerHTML = "";
      let list = "";
      let terms = autocompleteMatch(val);
      for (i = 0; i < terms.length; i++) {
        list += "<li>" + terms[i] + "</li>";
      }
      res.innerHTML = "<ul>" + list + "</ul>";
    }
  });

var form = document.getElementById("form");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

let chair;
var myElement = document.getElementById("finder");
myElement.addEventListener("change", (event) => {
  chair = event.target.value;
  document.getElementById(chair).classList.add("seatplanShow");
});
