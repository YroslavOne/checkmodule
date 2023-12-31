import {product} from "../variable.js"
import {elementAssembly} from "./generateProduct.js"


export function searchIngredientDrink(func) {
  let url = `https://course-api.com/javascript-store-products`;
  fetch(url)
    .then((response) => response.json())
    .then((product) => func(product));
}

export function foreachProductArray(products) {
  products.forEach((element) => {
    product.arrayProduct.push(element);
  });
  return product.arrayProduct;
}

text_input.oninput = function () {
  product.nameProduct = text_input.value;
  activator();
};

value_price_input.oninput = function () {
  product.priceProduct = value_price_input.value;
  valueInInput(product.priceProduct);
  activator();
};

export function valueInInput(valueInput) {
  product.$valuePriceInInput.innerHTML = `Value: ${valueInput}`;
}

export function collectAllData(arrayProducts) {
  maxValueInput(arrayProducts);
  createArrayCompanyProduct(arrayProducts);
}

function maxValueInput(arrayProducts) {
  let maxValue = 0;
  arrayProducts.forEach((element) => {
    if (element.fields.price > maxValue) {
      maxValue = element.fields.price;
    }
  });
  maxValue = roundUpPrice(maxValue);

  product.$valuePriseInputRange.setAttribute('max', maxValue);
  product.$valuePriseInputRange.setAttribute('value', maxValue);
  product.priceProduct = maxValue;
  valueInInput(maxValue);
}

function createArrayCompanyProduct(arrayProducts) {
  arrayProducts.forEach((element) => {
    let n = 0;
    for (let i = 0; i < product.arrayCompanyProduct.length; i++) {
      if (element.fields.company === product.arrayCompanyProduct[i]) {
        n = 1;
        return;
      }
    }

    if (n > 0) {
    } else {
      product.arrayCompanyProduct.push(element.fields.company);
    }
  });
  addHtmlCompanyProduct(product.arrayCompanyProduct);
}

function addHtmlCompanyProduct(arrayCompanyProducts) {
  let htmlCompanyProduct = '';
  arrayCompanyProducts.forEach((element) => {
    htmlCompanyProduct =
      htmlCompanyProduct +
      `<li onclick=filterCompany("${element}")>${element}</li>`;
  });
  product.$htmlCompanyProduct.innerHTML = `<ul class="ul_products">${htmlCompanyProduct}</ul>`;
}

export function filterCompany(valueCompany) {
  product.companyProduct = valueCompany;
  activator();
}

export function activator() {
  searchIngredientDrink(enterCatalogInProduct);
}

function enterCatalogInProduct(products) {
  let arrayАorFilter = [];
  products.forEach((element) => {
    if (product.nameProduct === '' || element.fields.name.indexOf(product.nameProduct) >= 0) {
      if (
        element.fields.company === product.companyProduct ||
        product.companyProduct === 'All'
      ) {
        let elemForFilterPrice = roundUpPrice(element.fields.price);
        if (elemForFilterPrice <= product.priceProduct) {
          arrayАorFilter.push(element);
        }
      }
    }
  });
  localStorage.arrayАorFilter = JSON.stringify(arrayАorFilter);
  arrayaProduct(arrayАorFilter)
  console.log(arrayАorFilter)
}

function roundUpPrice(valueForRounding) {
  let resultValue;
  let maxValueStartTwoSymble = String(valueForRounding).slice(0, -2);
  let maxValueEndTwoSymble = String(valueForRounding).slice(-2);
  resultValue = Math.ceil(
    Number(maxValueStartTwoSymble + '.' + maxValueEndTwoSymble)
  );
  return resultValue;
}

const $idElemCatalogProductHtml = document.getElementById('catalog_block_products');
let elemHtml = '';
let localStorageFilterProduct = JSON.parse(localStorage.storage)
arrayaProduct(localStorageFilterProduct)


function onClickSidbar(){
    localStorageFilterProduct = JSON.parse(localStorage.arrayАorFilter)
    arrayaProduct(localStorageFilterProduct)
}


function arrayaProduct(products) {
  elemHtml = ""
    console.log(products)
  products.forEach((element) => {
    pageCheckForHome(element);
  });
}

function pageCheckForHome(productsFeatured) {
     elemHtml = elemHtml + elementAssembly(productsFeatured);
     document.getElementById('catalog_block').innerHTML = elemHtml;
}
