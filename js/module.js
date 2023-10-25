import { apiProductCatalog, checkingWhatColorMakesLogo, loupeOnClick} from './component/menu.js';
import {checkLocalStorage} from "./component/card.js"
// import {valueInInput, searchIngredientDrink, foreachProductArray, collectAllData, activator } from "./component/product.js";
import { getProducts } from './component/catalog.js';
import { variable } from './variable.js';
import {loupeRun} from "./component/productLoupe.js"
ifParserFits(String(window.location.pathname))
function ifParserFits(urlPageName) {
  if (urlPageName === '/home.html') {
        getProducts(variable.url);
    } else if(urlPageName === '/productsLoupe.html'){
    loupeRun()
  }
}

checkLocalStorage();
apiProductCatalog();
checkingWhatColorMakesLogo(String(window.location.pathname));

