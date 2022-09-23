fetch("guests.json")
  .then((response) => response.json())
  .then((json) => {
    var container = document.querySelector("#container");
    var ul = document.createElement("ul");

    json.forEach(function (item) {
      var li = document.createElement("li");

      li.textContent = "Meno: " + item.name + ", stôl: " + item.table;
      ul.appendChild(li);
    });

    container.appendChild(ul);
  });
