fetch("guests.json")
  .then((response) => response.json())
  .then((json) => {
    var mainTable = json.filter((element) => element.table == 1);
    var table1 = json.filter((element) => element.table == 2);
    var table2 = json.filter((element) => element.table == 3);
    // var table3 = json.filter((element) => element.table == 4);
    // var table4 = json.filter((element) => element.table == 5);
    // var table5 = json.filter((element) => element.table == 6);
    // var table6 = json.filter((element) => element.table == 7);

    var container = document.querySelector("#main");
    var ul = document.createElement("ul");

    json.forEach(function (item) {
      var li = document.createElement("li");
      li.textContent = "Meno: " + item.name + ", stôl: " + item.table;
      ul.appendChild(li);
    });

    const renderButtons = (arr, x) => {
      for (let i in arr) {
        let button = document.createElement("button");
        button.textContent = arr[i].name;
        button.setAttribute("id", arr[i].key);
        button.setAttribute("class", "seatplan");
        button.setAttribute("onClick", "showText()");
        document.getElementById(x).appendChild(button);
      }
    };
    const showText = () => {
      document.getElementById(json.key);
      this.style.backgroundColor = "red";
    };
    renderButtons(table2, "3");
    renderButtons(table1, "2");
    renderButtons(mainTable, "1");

    // container.appendChild(ul);
    console.log(table2);
  });
