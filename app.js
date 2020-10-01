'use strict'

var allProducts = [];
product.allProducts= [];

function Products(nameAsAParameter, imagePathAsAParameter) {
    this.name='';
    this.image='';
    this.votes=0;
    this.imagePathAsAParameter;
    this.timesRendered=0;
    this.previouslySeen=false;
    this.name = nameAsAParameter;

    //product.allProducts.push(this);
    //instead
    this.allProducts = [this];
    
    
Products.prototype.methodName = function(){
    console.log(this);
}
}

var new Products('name');
var product = new Products('name');
var product2 = new Products('new name');
allProducts.push(product);

var bag = new Products('bag', 'assets/bag.jpg');
bag.votes += 1;

var bathroom = new Products('bathroom', 'assets/bathroom.jpg');
bathroom.votes += 1;


//product.allProducts;
//product2.allProducts;

function Products(nameAsAParameter, imagePathAsAParameter) {
    this.name = nameAsAParameter;
    this.image = imagePathAsAParameter;
    this.votes = 0;
}

Products.prototype.methodName = function () {

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
 

 bag.methodName(); //logs all properties of bag. {name, image, votes}
 var randomIndexValue = Math.floor(Math.random() * allProducts.length);

 for(var i = 0; i < allProducts.length; i++) {
     //allProducts[i].image=> every image path that we've created
     allProducts[i].votes += 1;
     if (event.target.attributes[1].value === allProducts[i].image) {
         allProducts[i].votes += 1;
     };

 }
 console.log(allProducts);

 leftImg.src = [randomIndexValue].image;
 
 function handleClick (
     bag.votes
 ) //something

 leftImg.addEventListener('click', handleClick);


 //new notes
 roundsOfVoting -+= 1;
  roundsOfVoting< 1) {
     leftImg.style.display = 'none'
     leftImg.removeEventListener('click', handleClick);
     centerImg.removeEventListener('click', handleClick);

 }
 //stinginfy
 //place in local storage