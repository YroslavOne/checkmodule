export function apiProductCatalog() {
  let url = `https://course-api.com/javascript-store-products`;
  fetch(url)
    .then((response) => response.json())
    .then((product) => localStorageAdd(product));
}

function createMenu(logo, basket, blackColorClass) {
  document.getElementById('menu').innerHTML = `
	<div class="menu_block">
	<div class="menu width_30">
		<ul >
			<li><a class="${blackColorClass}" href="./home.html">Home</a></li>
			<li><a class="${blackColorClass}" href="./products.html">Products</a></li>
			<li><a class="${blackColorClass}" href="./products.html">About</a></li>
		</ul>
	</div>
	<div class="width_30 logo_menu">
	<img src="${logo}" alt="">
	</div>
	<div class="width_30 basket" onclick=basketOpen()>
	<button class="basket_fixed"><i class="bi bi-cart4" style="color: ${basket}"></i></button>
	<span class="basket_summ_items" >
	<div id="basket_summ_items">0</div>
	</span>
	</div>
	</div>`;
}

export function checkingWhatColorMakesLogo(linkNow) {
  let logo;
  let basket;
  if (linkNow === '/home.html') {
    basket = '#fff';
    logo = 'img/logo/logo-white.svg';
    createMenu(logo, basket);
  } else {
    basket = '#222';
    logo = 'img/logo/logo-black.svg';
    let blackColorClass = 'black_li_menu';
    createMenu(logo, basket, blackColorClass);
  }
}

function localStorageAdd(element) {
  localStorage.storage = JSON.stringify(element);
}

function loupeOnClick(idLoupe) {
  console.log('idLoupe');
  localStorage.idLoupe = idLoupe;
}
