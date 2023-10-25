import { apiProductCatalog, checkingWhatColorMakesLogo, loupeOnClick} from './component/menu.js';
import {checkLocalStorage} from "./component/card.js"
import {valueInInput, searchIngredientDrink, foreachProductArray, collectAllData, activator } from "./component/product.js";

valueInInput(0);
searchIngredientDrink(foreachProductArray);
searchIngredientDrink(collectAllData);
activator();

checkLocalStorage();
apiProductCatalog();
checkingWhatColorMakesLogo(String(window.location.pathname));