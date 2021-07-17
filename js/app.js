/*
* @Author: Khamidullo khudoyberdiyev
* @Date:   2021-07-16 16:18:56
* @Last Modified by:   Khamidullo khudoyberdiyev
* @Last Modified time: 2021-07-17 18:06:04
*/



const product = [
{
	id:1,
	productName:'Weber Белый 105',
	productPrice:89000,
	productBonus:5,
	productBrand:'Weber',
	productType:'Краска', 
	productMeasurement:'Кг'
},
{
	id:2,
	productName:'Weber Белый 107',
	productPrice:95000,
	productBonus:5,
	productBrand:'Weber',
	productType:'Краска', 
	productMeasurement:'Кг'
},
{
	id:3,
	productName:'Weber Белый 105',
	productPrice:83000,
	productBonus:5,
	productBrand:'Weber',
	productType:'Краска', 
	productMeasurement:'Кг'
},
{
	id:4,
	productName:'Weber Белый 105',
	productPrice:80000,
	productBonus:5,
	productBrand:'Weber',
	productType:'Краска', 
	productMeasurement:'Кг'
}

]



const elHiddenModal = document.querySelector('.modal-hidden');
const elModalClose = document.querySelector('#modal-close');
const elMyModal = document.querySelector('#myModal');


const currentBuyurtmalar = [
{
	id: "asdasd",
	tovar_id: 2,
	soni: 10,
	nomi:"Kluch",
	summma: 10000
},
]

function addBuyurtma() {
	let buyurtma = ""
	let jamisumma = 0
	currentBuyurtmalar.forEach(d=> {
		jamisumma +=d.summa * d.soni
		buyurtma += `<div> <span>${d.kluch}<span>  <span>${d.soni}/${d.soni * d.summa}</span></div>`
	})

	// document.querySelector("buyurtma_container").innerHTML = currenstBuyurtmalar
	console.log('ok');
}


addBuyurtma()
const productPriceRender = (productPrice, productId,productName)=>{ //productPriceRender yaratyapman
	const elProductNumbers = document.querySelector('.product__number');
	const elProductAdd = document.querySelector('.increase-number__products');
	const elProductReduce = document.querySelector('.reduce-number__products');
	const elProductTotal = document.querySelector('.product-sum__total');
	const elProduct__number = document.querySelector('.product-number');
	const elProductSave = document.querySelector('.product-save');
	const elProductPayName = document.querySelector('.product-pay-name');
	let elProductPrice =0;	
	let productNumer = 0;
	const elProductNameList = document.querySelector('.product-name-list');
	const elProductNumberPriceList = document.querySelector('.product-number__price-list');
	let ListName = document.createElement('li');
	let ListSum = document.createElement('li');
	elProductPayName.innerText =productName ;
	elProductTotal.innerText = elProductPrice;
	elProduct__number.innerText = productNumer;

	elProductAdd.addEventListener('click', ()=>{
		productNumer++;
		elProductPrice+=productPrice
		elProductNumbers.innerText = productNumer;
		elProduct__number.innerText = productNumer;
		elProductTotal.innerText = elProductPrice;
	});
	elProductReduce.addEventListener('click', ()=>{
		if(productNumer > 0){
			productNumer--;
			elProductPrice-=productPrice
			elProductNumbers.innerText = productNumer;
			elProduct__number.innerText = productNumer;
			elProductTotal.innerText = elProductPrice;
		}
	});
	const elProductSumTotalAll = document.querySelector('.product__sum--total');
	let ProductSumTotalAll =0;
	elProductSave.addEventListener('click',()=>{
		ListName.innerText = "";
		ListSum.innerText = "";
		ListName.innerText = productName;
		elProductNameList.appendChild(ListName);
		elHiddenModal.classList.remove('show-modal');
		ListSum.innerHTML= `<li><div class="product__name">Weber Белый sasa</div>div class="product-summa"><span>1</span>х <span  class ="product_name_price">89000</span>сўм</div></li>`
		elProductNumberPriceList.appendChild(ListSum);
		let elProductNamePrice = document.querySelectorAll('.product_name_price');
		console.log(elProductNamePrice.length);

		for(let i = 0 ;i<elProductNamePrice.length ; i++){
			ProductSumTotalAll+= + elProductNamePrice[i].innerText;
		}

		ProductSumTotalAll+=elProductPrice;
		elProductSumTotalAll.innerText = ProductSumTotalAll;
		console.log(ProductSumTotalAll);
	});
}



const elTableTr = document.querySelectorAll('tbody tr'); //show and hidden modal menu
for(let i =0; i <elTableTr.length; i++){
	elTableTr[i].addEventListener('click', ()=>{
		for(let j =0; j<product.length; j++){
			if(elTableTr[i].id == product[j].id){
				console.log(elTableTr[i]);
				elHiddenModal.classList.add('show-modal');
				elModalClose.addEventListener('click',()=>{
					elHiddenModal.classList.remove('show-modal');
				});
				window.onclick = function(event){
					if(elHiddenModal == event.target){
						console.log(event.target);
						console.log(elHiddenModal);
						elHiddenModal.classList.remove('show-modal');
					}
				}
				window.addEventListener("keydown", function(event) {
					if(event.key == 'Escape'){
						elHiddenModal.classList.remove('show-modal');
					}
				})
				const elProductPrice = document.querySelector('.product-price'); ///productning narxi
				elProductPrice.innerText = product[i].productPrice;

				productPriceRender(product[i].productPrice,product[i].id,product[i].productName,) //functiya chaqirilyapti

			}
		}
	});	
}


