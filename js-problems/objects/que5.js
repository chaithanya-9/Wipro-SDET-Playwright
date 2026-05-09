// 5. Create a shopping cart object and calculate total bill amount. 

const shoppingCart = {
    apple: { price: 50, quantity: 3 },
    bread: { price: 30, quantity: 2 },
    milk: { price: 45, quantity: 1 },
    eggs: { price: 80, quantity: 2 }
};
let pricesArray = Object.entries(shoppingCart);
let totalBill = 0;

pricesArray.forEach((d) => {
    totalBill += d[1].price * d[1].quantity;
})
console.log(totalBill);