/*
* @Author: Khamidullo khudoyberdiyev
* @Date:   2021-07-16 16:18:56
* @Last Modified by:   Aspire
* @Last Modified time: 2021-07-17 10:35:08
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

const productPriceRender = (productPrice)=>{
	const elProductNumbers = document.querySelector('.product__number');
	const elProductAdd = document.querySelector('.increase-number__products');
	let productNumer = 0;
	elProductAdd.addEventListener('click', ()=>{
		productNumer++;
		elProductNumbers.innerText = productNumer;
		console.log(productNumer)
	});
}



const elTableTr = document.querySelectorAll('tbody tr');
for(let i =0; i <elTableTr.length; i++){

	elTableTr[i].addEventListener('click', ()=>{
		for(let j =0; j<product.length; j++){
			if(elTableTr[i].id == product[j].id){

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

				productPriceRender(product[i].productPrice)

			}
		}
	});	
}
