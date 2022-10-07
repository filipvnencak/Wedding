fetch("guests.json")
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
        button.setAttribute("id", arr[i].key);
        button.setAttribute("class", "seatplan");
        button.setAttribute("onClick", "showText()");
        document.getElementById(x).appendChild(button);
      }
    };
    renderButtons(table3, "4");
    renderButtons(table2, "3");
    renderButtons(table1, "2");
    renderButtons(mainTable, "1");
  });
