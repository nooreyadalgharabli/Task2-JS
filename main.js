const customers= [
    {
        "id": 1,
        "name": "Dave"
    },
    {
        "id": 2,
        "name": "Sarah"
    },
    {
        "id": 5,
        "name": "Otis"
    },
    {
        "id": 33,
        "name": "Marry"
    }
]
    
const packages= [
    {
        "id": "pak1",
        "weight": "3kg",
        "customerid": 1,
        "price": 10,
        "shippingOrder": 4
    },
    {
        "id": "pak2",
        "weight": "4kg",
        "customerid": 1,
        "price": 20,
        "shippingOrder": 3
    },
    {
        "id": "pak3",
        "weight": "6kg",
        "customerid": 2,
        "price": 50,
        "shippingOrder": 1
    },
    {
        "id": "pak4",
        "weight": "2kg",
        "customerid": 2,
        "price": 14,
        "shippingOrder":2
    },
    {
        "id": "pak5",
        "weight": "23kg",
        "customerid": 5,
        "price": 2400,
        "shippingOrder":5
    }
]


// 1- using map() method to print all customers

let newarr = customers.map(mapFunction)
function mapFunction(item){
    return item.name
}
console.log(newarr);


// 2- get the customer name (from the customers' array) for all packages which have customerid = 1 (so for customerid = 1, the customer name is "Dave")

for (let i =0; i<packages.length ;i++){
    for(let j=0; j<customers.length; j++){
        if (packages[i].customerid == 1){
            if(customers[j].id == 1){
                console.log(`customerid = 1, the customer name is ${customers[j].name}`)
            } 
        }
    }   
}


// 3- use reduce() method to calculate the total price of packages

  
let totalPrice = packages.reduce(package, 0)
function package(total, num){
    return total + num.price;
}
console.log(totalPrice);


// let total = 0;
// for(let i=0; i<packages.length; i++){
//     total += packages[i].price;
// }
// console.log(total)




// 4- use filter() method to delete all packages related to customer Sarah (customerid = 2)

const result = packages.filter((user) => user.customerid != 2);

console.log(result);


// 5- use find() method to get the package of customer "Otis"

// let customerPackage = packages.find((name) => name.customerid == 5);
// console.log(customerPackage)

let customerName = customers.find((customer) => customer.name == 'Otis')
// console.log(customerName)
let customerPackage = packages.find((name) => name.customerid == customerName.id);
console.log(customerPackage)

// function findPackage(){
    // for(let i=0; i<customers.length; i++){
    //     for(let j=0; j<packages.length; j++){
    //         if(customers[i].name == 'Otis'){
    //             if(packages[j].customerid == customers[i].id){
    //                 return packages[j];
    //             }
    //         }
    //     }
    // }
// }

// console.log(findPackage())





