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
    ListSum.innerHTML= `<span>${productNumer}</span> х <span class ="product_name_price">${elProductPrice}</span>сўм `
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
