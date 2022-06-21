let products = [];

fetch("https://fakestoreapi.com/products?limit=10")
  .then((promise) => promise.json())
  .then((store) => {
    products = store;
    console.log(products);

    products.forEach((product) => {
      console.log(product);
      document.querySelector("#holder").innerHTML += `


      <div class="card" style="width: 18rem;">
      <img src="${product.image}" class="card-img-top" alt="item">
      <div class="card-body">
      <h3 class="card-text">${product.title}</h3>
      <p>R${product.price}</p>
      </div>
      </div>

      `;
    });
  });

function Add() {
  // AddItem = document.getElementById("add_btn").product.image;
  // products.push(AddItem);
  // document.getElementById("#holder").innerHTML += AddItem;
  // console.log(products);

  title = document.querySelector("#title").value;
  price = document.querySelector("#price").value;
  // description = document.querySelector("#description").value;
  image = document.querySelector("#image").value;
}
