async function loupeOnClick(idLoupe) {
    let positionStoregaLoupe = await import('./js/component/menu.js');
    positionStoregaLoupe.loupeOnClick(idLoupe);
  }
  async function toDoBasketOpen(productsFeatured){
	let openCard = await import("./js/component/card.js")
		
	openCard.basketAdd(productsFeatured);
	openCard.basketOpen();
		
	}
	async function toDoBasketClose(){
	let menu = await import("./js/component/menu.js")
	let closeCard = await import("./js/component/card.js")
	menu.checkingWhatColorMakesLogo(String(window.location.pathname));
	closeCard.basketClose(); 
	closeCard.checkLocalStorage();}