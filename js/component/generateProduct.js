import { product } from '../variable.js';
 
  export function elementAssembly(productsFeatured) {
    let priceWithDot = roundUpPrice(productsFeatured.fields.price);
  
    let CatalogElemHtml = `
        <div class="card_product_home">
        <div class="home_background_featured" style="Background: url(${productsFeatured.fields.image[0].url}); background-size: cover; object-fit: contain; background-position: center">
        <div class="basket_and_loupe"> 
        <a href="./productsLoupe.html"><button onclick=loupeOnClick("${productsFeatured.id}") class="loupe"><i class="bi bi-search"></i></button></a>
        <button id="prostochek" onclick=toDoBasketOpen("${productsFeatured.id}") class="basket_tap"><i class="bi bi-cart3"></i></button>
        </div>
        </div>
        <h4 class="product_featured_name">${productsFeatured.fields.name}</h4>
        <p class="product_featured_price">$${priceWithDot}</p>
        </div>
        `;
    return CatalogElemHtml;
  }
  
  function roundUpPrice(valueForRounding) {
    let resultValue;
    let maxValueStartTwoSymble = String(valueForRounding).slice(0, -2);
    let maxValueEndTwoSymble = String(valueForRounding).slice(-2);
    resultValue = Number(maxValueStartTwoSymble + '.' + maxValueEndTwoSymble);
    return resultValue;
  }

//   const keksfasdfdsdf = document.getElementById('prostochek')

//   if (keksfasdfdsdf) {keksfasdfdsdf.addEventListener("click",
//   function () {
//           Console.log("да бляяяяя");
//       }, 
//       false,
//   );}
//   window.addEventListener("DOMContentLoaded", (event) => {
//     const keksfasdfdsdf = document.getElementById('prostochek');
//     if (keksfasdfdsdf) {
//         keksfasdfdsdf.addEventListener('click', function () {
//         Console.log("да бляяяяя");
//     }, false);
//     }
// });