async function printJSON() {
  const response = await fetch("guests.json");
  const json = await response.json();
  console.log(json);
}
