// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  // console.log(product);
  const price = product.querySelector('.price span');
  const priceValue = price.innerHTML;
  //console.log('price:', priceValue);

  const quantity = product.querySelector('.quantity input');
  const quantityValue = quantity.value;
  // console.log('quantity:', quantityValue);

  const subtotal = quantityValue * priceValue;
  // console.log('subtotal:', subtotal);

  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const items = Array.from(document.getElementsByClassName('product'));

  let sum = 0;

  for (let i = 0; i < items.length; i++) {
    sum += updateSubtotal(items[i]);
  }
  //console.log('sum:', sum);
  //return sum;

  // ITERATION 3

  const totalPrice = document.querySelector('#total-value span');
  totalPrice.innerText = sum;
  //console.log('totalPrice:', totalPrice);
  return totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
