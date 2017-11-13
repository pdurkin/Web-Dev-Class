var fake = require("faker");

// Print header
console.log("=====================");
console.log(" WELCOME TO MY SHOP! ")
console.log("=====================");

// Print 10 fake products
for (var i = 0; i < 10; i++){
    console.log(fake.commerce.productName() + " - $" + fake.commerce.price());
}
