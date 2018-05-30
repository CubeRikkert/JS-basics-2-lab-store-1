
let shoppingCart = []
let products = [
  { referenceNumber: 1, name: "Super Lite Mat", price: 10 },
  { referenceNumber: 2, name: "Power Mat", price: 20 },
  { referenceNumber: 3, name: "Block", price: 30 },
  { referenceNumber: 4, name: "Meditation cushion", price: 30 },
  { referenceNumber: 5, name: "The best T-shirt", price: 200 },
  { referenceNumber: 6, name: "The cutest yoga pants", price: 300 },
  { referenceNumber: 7, name: "Bring Yoga To Life", price: 30 },
  { referenceNumber: 8, name: "Light On Yoga", price: 10 }
]

var shopFromStore =  function () {
   askUserForReferenceNumber();

  console.log(shoppingCart)

  displayProductsFromShoppingCart();


  // calculate the total price of your cart, and use it:
  displayTotalPrice(/*The variable holding the totol price*/);

  // Ask the user if they want to continue shopping,
  // if yes, call this function again
  // if no, print the goodbye message
};

var displayProductsFromShoppingCart = function() {

  // iterate over the shoppingCart and display the contents

  // use the printProductsOnScreen function for inspiration
};

var askUserForReferenceNumber = function() {
  let refNr = window.prompt('please return the reference number of the item you would like to buy')

  refNr = Number(refNr)
  let addToShoppingCart = products.find(product => product.referenceNumber === refNr)
  shoppingCart.push(addToShoppingCart)

  let response2 = window.prompt('would you like to shop for more or check out? please answer y or n')
  if (response2 === 'n') {
    console.log('Goodbye :)')
   } else {
    askUserForReferenceNumber();
  }
  // Use window.prompt to ask the user a question and capture their response,
  // then, return the response from this function back to our caller
};

//
// do not change the code below (but feel free to change it if your WHOLE project works!)
//

var displayTotalPrice = function (amount = 0) {
  document.getElementById('total-price').innerText = amount;
};

var printProductsOnScreen = function () {
  for(var product of products){

    // create elements for refNr, name, price, with a class and the proper innerText
    var referenceNumberElement = document.createElement('span');
    referenceNumberElement.className  = 'referenceNumber';
    referenceNumberElement.innerText = product.referenceNumber;

    var nameElement = document.createElement('span');
    nameElement.className  = 'name';
    nameElement.innerText = product.name;

    var priceElement = document.createElement('span');
    priceElement.className  = 'price';
    priceElement.innerText = product.price;

    // Wrap our just created elements in a div
    var productElement = document.createElement('div');
    productElement.className = 'product';

    productElement.appendChild(referenceNumberElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);

    // Hang that div on the page
    document.getElementById('product-overview').appendChild(productElement);


  }
};

var runApp = function () {
  printProductsOnScreen();

  shopFromStore();
};

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    runApp();
  }
};
