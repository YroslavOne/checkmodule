import { ifParserFits } from './ParserObj.js';
import { apiProductCatalog, checkingWhatColorMakesLogo } from './menu.js';
apiProductCatalog();
checkingWhatColorMakesLogo(String(window.location.pathname));
ifParserFits(String(window.location.pathname));
