import { getProducts } from './component/catalog.js';
import { variable } from './variable.js';
import {loupeRun} from "./component/productLoupe.js"

export function ifParserFits(urlPageName) {
  if (urlPageName === '/home.html') {
    getProducts(variable.url);
  } else if(urlPageName === '/productsLoupe.html'){
    loupeRun()
  }
}
