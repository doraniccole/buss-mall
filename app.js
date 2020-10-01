'use strict'

var productHistory = [];
Products.allProducts= [];

 function Products(nameAsAParameter, imagePathAsAParameter) {
     this.name = nameAsAParameter;
     this.image = imagePathAsAParameter;
     this.votes = 0;
     this.views = 0;
 }

//create 3 variables
 var img1 = document.getElementById('left');
 var img2 = document.getElementById('center');
 var img3 = document.getElementById('right');


 new Products('bag','img/bag.jpg');
 new Products('banana','img/banana.jpg');
 new Products('boots','img/boots.jpg');
 new Products('bathroom','img/bathroom.jpg');
 new Products('bubblegum','img/bubblegum.jpg');
 new Products('chair','img/chair.jpg');
 new Products('cthulhu','img/cthulhu');
 new Products('dog-duck','img/dog-duck.jpg');
 new Products('dragon','img/dragon.jpg');
 new Products('pen','img/pen.jpg');
 new Products('pet-sweep','img/pet-sweep.jpg');
 new Products('scissors', 'img/scissors.jpg');
 new Products('shark', 'img/shark.jpg');
 new Products('sweep', 'img/sweep.png');
 new Products('tauntaun', 'img.tauntaun.jpg');
 new Products('unicorn', 'img/unicorn.jpg');
 new Products('usb', 'img/usb.gif');
 new Products('water-can', 'img/water-can.jpg');
 new Products('wine-glass', 'img/wine-glass.jpg');
 

 //bag.randomNumberGen(); //logs all properties of bag. {name, image, votes}
 function randomNumberGen() {
     var randomIndexValue = Math.floor(Math.random() * allProducts.length);
     return randomIndexValue;
 }
//  for(var i = 0; i < allProducts.length; i++) {
//      //allProducts[i].image=> every image path that we've created
//      allProducts[i].votes += 1;
//      if (event.target.attributes[1].value === allProducts[i].image) {
//          allProducts[i].votes += 1;
//      };

//  }
    console.log(randomNumberGen);
Products.allProducts.push(this);

 function renderProducts() {
 leftImg.src = [randomIndexValue].image;
 rightImg.src = [randomIndexValue].image;
 centerImg.src = [randomIndexValue].image;

 }
 var handleClick = function (event) {

    var itemClicked = event.target.id;//left right center

    if (itemClicked === leftImg.id || itemClicked === centerImg.id || itemClicked === rightImg.id) {
        mallVotes++;

        if (itemClicked === 'left') {
            Products.allItems[leftImg].clicked++;
        } else if (itemClicked === 'center') {
            Products.allItems[centerImg].clicked++;
        } else if (itemClicked === 'right') {
            Products.allItems[rightImg].clicked++;
        } else {
            alert('You clicked incorrectly');
        }
    }
    if (productVotes === totalRounds) {
        itemParent.removeEventListener('click', handleClickOnItem);
        alert('Thank you for your votes');

        for (var i = 0; i < Products.allProducts.length; i++) {
            var item = Products.allProducts[i];
            console.log(`${product.name} received ${product.clicked} votes with ${product.views} views.`);
        }
    } else {
        renderProducts();
    }
    // console.log('Product:', productClicked);
    updateStorage();

    console.log(event);
}

 leftImg.addEventListener('click', handleClick);
 rightImg.addEventListener('click', handleClick);
 centerImg.addEventListener('click', handleClick);


 //new notes
//   roundsOfVoting - + 1;
//   roundsOfVoting < (1); {
//     leftImg.style.display = 'none'
//     leftImg.removeEventListener('click', handleClick);
//     centerImg.removeEventListener('click', handleClick);
//     rightImg.removeEventListener('click', handleClick);
//  }
 //stinginfy
 //place in local storage