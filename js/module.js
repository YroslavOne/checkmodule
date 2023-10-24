import { ifParserFits } from './ParserObj.js';
import { apiProductCatalog, checkingWhatColorMakesLogo, loupeOnClick} from './component/menu.js';
import {checkLocalStorage} from "./component/card.js"

console.log(localStorage.basketProduct)

checkLocalStorage();
apiProductCatalog();
checkingWhatColorMakesLogo(String(window.location.pathname));
ifParserFits(String(window.location.pathname));

