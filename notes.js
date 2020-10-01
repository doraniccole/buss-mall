'use strict'

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// function Products(nameAsAParameter, imagePathAsAParameter) {
//     this.name= name;
//     this.image= image;
//     this.votes=0;
//    // this.imagePathAsAParameter;
//     this.timesRendered=0;
//     this.previouslySeen=false;
//     this.name = nameAsAParameter;

//     //product.allProducts.push(this);
//     //instead
//     this.allProducts = [this];


// Products.prototype.methodName = function(){
//     console.log(this);
// }
// }

//var new Products('name');
// var product = new Products('name');
// var product2 = new Products('new name');
// allProducts.push(product);

// var bag = new Products('bag', 'img/bag.jpg');
// bag.votes += 1;

// var bathroom = new Products('bathroom', 'img/bathroom.jpg');
// bathroom.votes += 1;


//product.allProducts;
//product2.allProducts;
