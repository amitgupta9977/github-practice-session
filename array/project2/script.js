document.querySelector("#search").addEventListener("click", searchArray);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function searchArray(e) {
  const name = document.querySelector("#inputValue").value;
  const inputValue = lowerCaseName(name);

  fetch(`https://fakestoreapi.com/products/${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
       document.querySelector(".valueFetch").innerHTML = `
      <div class= "card">
        <h1 class="title"> ${values.title}</h1>
        <img src=${values.image} alt="img" class="images">
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>`;
    })
    .catch((err) => {
      document.querySelector(".valueFetch").innerHTML = `
      <h4>Data not found 😞</h4>
      `;
      console.log("Data not found", err);
    });

  e.preventDefault();
}