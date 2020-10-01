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


 var bag = new Products('bag','img/bag.jpg');
 var banana = new Products('banana','img/banana.jpg');
 var boots = new Products('boots','img/boots.jpg');
 var breakfast = new Products('bathroom','img/bathroom.jpg');
 var bubblegum = new Products('bubblegum','img/bubblegum.jpg');
 var chair = new Products('chair','img/chair.jpg');
 var cthulhu = new Products('cthulhu','images/cthulhu');
 var dogDuck = new Products('dog-duck','img/dog-duck.jpg');
 var dragon = new Products('dragon','img/dragon.jpg');
 var pen = new Products('pen','img/pen.jpg');
 var petSweep = new Products('pet-sweep','img/pet-sweep.jpg');
 var scissors = new Products('scissors', 'img/scissors.jpg');
 var shark = new Products('shark', 'img/shark.jpg');
 var sweep = new Products('sweep', 'img/sweep.png');
 var tauntaun = new Products('tauntaun', 'tauntaun.jpg');
 var unicorn = new Products('unicorn', 'img/unicorn.jpg');
 var usb = new Products('usb', 'img/usb.gif');
 var waterCan = new Products('water-can', 'img/water-can.jpg');
 var wineGlass = new Products('wine-glass', 'img/wine-glass.jpg');
 

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
 centerImg.src =[randomIndexValue].image;

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
  roundsOfVoting - + 1;
  roundsOfVoting < (1); {
    leftImg.style.display = 'none'
    leftImg.removeEventListener('click', handleClick);
    centerImg.removeEventListener('click', handleClick);
    rightImg.removeEventListener('click', handleClick);
 }
 //stinginfy
 //place in local storage