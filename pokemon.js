fetch("https://pokeapi.co/api/v2/pokemon/").then((res) => {
  res.json().then((data) => {
    console.log(data.results);
    if (data.results.length > 0) {
      let temp = "";
      data.results.forEach((result) => {
        temp += "<tr>";
        // temp += "<td>" + itemData.id + "</td>";
        temp += "<td>" + result.name + "</td>";
        temp += "<td>" + result.url + "</td></tr>";
      });
      document.getElementById("data").innerHTML = temp;
    }
  });
});
