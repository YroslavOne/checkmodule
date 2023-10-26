import { elementAssembly } from './generateProduct.js';
import {variable} from "../variable.js"

export function getProducts(url) {
  fetch(url)
    .then((response) => response.json())
    .then((products) => arrayProduct(products));
}
export function arrayProduct(products) {
  localStorage.storage = JSON.stringify(products);
  let arrayaProductInStorega = JSON.parse(localStorage.storage);
  arrayaProductInStorega.forEach((element) => {
    pageCheckForHome(element);
  });
}

function pageCheckForHome(productsFeatured) {
  if (productsFeatured.fields.featured === true) {
    variable.elemHtml = variable.elemHtml + elementAssembly(productsFeatured);
    
  }
  variable.$idElemCatalogHtml.innerHTML = variable.elemHtml;
}


const keksfasdfdsdf = document.getElementById("prostochek")
keksfasdfdsdf?.addEventListener("click",
  function () {
          alert("да бляяяяя");
      }, 
      false,
  );