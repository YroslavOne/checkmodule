import { getProducts } from './catalog.js';
import { variable } from './variable.js';

export function ifParserFits(urlPageName) {
  if (urlPageName === '/home.html') {
    getProducts(variable.url);
  }
}
