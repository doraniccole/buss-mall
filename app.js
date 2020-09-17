'use strict'

var allProducts = [];
product.allProducts= [];

function Products(nameAsAParameter, imagePathAsAParameter) {
    this.name='';
    this.image='';
    this.votes=0;
    this. = imagePathAsAParameter;
    this.timesRendered=0;
    this.previoulySeen=false;
    this.name = nameAsAParameter;

    //product.allProducts.push(this);
    //instead
    this.allProducts = [this];
    
    
Products.prototype.methodName = function(){
    console.log(this);
}
}

var new Product ('name');
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


 var bag = new Products('bag, 'assets/bag.jpg');
 var banana = new Products('banana', 'assets/banana.jpg');
 var boots = new Products('boots, assets/boots.jpg');
 var breakfast = new Products('bathroom', 'assets/bathroom.jpg');
 var bubblegum = new Products('bubblegum', 'assets/bubblegum.jpg');
 

 bag.methodName(); //logs all properties of bag. {name, image, votes}
 var randomIndexValue = Math.floor(Math.random() * allProducts.length);

 for(var i = 0; i < allProducts.length; i++{
     //allProducts[i].image=> every image pateh that we've created
     allProducts[i].votes += 1;
     if (event.target.attributes[1}.value === allProducts[i].image){
         allProducts[i].votes += 1;
     };

 }
 console.log(allProducgs);
}
 leftImg.src = [randomIndexValue].image;
 
 function handleClick {
     bag.votes
 } //something

 leftImg.addEventListener('click', hancleClick);


 //new notes
 roundsOfVoting -+= 1;
  roundOfVoting< 1) {
     leftImg.style.display = 'none'
     leftImg.removeEventListener('click', handleClick);
     centerImg.removeEventListener('click', handleClick);

 }
 //stinginfy
 //place in local storage