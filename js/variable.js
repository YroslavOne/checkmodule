export let variable = {
  $idElemCatalogHtml: document.getElementById('catalog_block'),
  elemHtml: '',
  thisLinkNow: String(window.location.href),
  url: `https://course-api.com/javascript-store-products`,
};

export let variableLoupe = {
$htmlGenerateBreadCrumbs: document.getElementById('breadCrumbs'),
$htmlGenerateTitle: document.getElementById('breadTitle'),
$htmlGenerateCardItem: document.getElementById('cardItem'),
}
export let variableCard = {
  $htmlBasketOpen: document.getElementById('basket_open'),
  basketProductArray: [],
  quantityElemCard: 0,
  
}
export let product = {
nameProduct: '',
priceProduct: '',
companyProduct: 'All',
arrayCompanyProduct: ['All'],
$htmlCompanyProduct: document.getElementById('all_company'),
$valuePriseInputRange: document.getElementById('value_price_input'),
$valuePriceInInput: document.getElementById('value_price_in_input'),
arrayProduct: [],
}