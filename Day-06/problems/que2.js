// ### Question 2: The E-Commerce Discount Applicator
// **Problem Statement:**
// You are building a promo-code system for a shopping cart. You need to write a function applyPromo(cart, promoCallback) that calculates which items qualify for a specific discount.
// **Requirements:**
// 1. **The Pipeline:** The applyPromo function should accept an array of product objects and a callback function.
// 2. **The Callback (isEligible):** You must define a separate callback function to be passed in. This callback should return true only if a product belongs to the **"Electronics"** category **AND** has a price greater than **$200**.
// 3. **Transformation:**
//   * Use the callback to identify eligible items.
//   * For those items, reduce their price by **10%**.
//   * Add a new property to **all** items in the array called isDiscounted (set to true for eligible items and false for others).
// 4. **Final Summary:** Once the processing is complete, use a **Template Literal** to log to the console: "Promotion applied! [X] items were discounted for a total saving of $[Y]."
// 5. **Delayed Return:** Wrap the final return statement in a setTimeout of **1000ms** to simulate a server calculation, returning the updated cart array.
// **Input Data Example:**
// ```javascript
// const cart = [
//  { name: "Smartphone", price: 800, category: "Electronics" },
//  { name: "Toaster", price: 50, category: "Home" },
//  { name: "Headphones", price: 250, category: "Electronics" },
//  { name: "Monitor", price: 150, category: "Electronics" }
// ];


const cart = [
    { name: "Smartphone", price: 800, category: "Electronics" },
    { name: "Toaster", price: 50, category: "Home" },
    { name: "Headphones", price: 250, category: "Electronics" },
    { name: "Monitor", price: 150, category: "Electronics" }
];


// isEligible function validates if item belongs to Electronics and price is greate rthan 200
function isEligible(category, price) {
    return ((category === "Electronics" && price > 200)) ? true : false;
}

function applyPromo(cart, promoCallback) {
    // create totalPriceBeforeDiscount variable and add all the prices to use to get tottal savings at the end
    let totalPriceBeforeDiscount = 0;
    // traversing into each value of cart array and if value belongs to electronics and price is greaterthan 200 then give discount of 10% and add isDiscounted property to the object and value is true or else give no discount and put value of false to isDidscounted property 
    cart.forEach((d) => {
        if (promoCallback(d.category, d.price)) {
            totalPriceBeforeDiscount += d.price;
            d.price -= (d.price * 0.1);
            d.isDiscounted = true;
        } else {
            d.isDiscounted = false;
        }
    })
    // use reduce() to calculate items got discount
    let totalDiscountedItems = cart.reduce((acc, curr) => { return curr.isDiscounted ? acc + 1 : acc; }, 0);
    let totalDistcountedItemsCost = cart.reduce((acc, curr) => { return curr.isDiscounted ? acc + curr.price : acc }, 0)

    console.log(`Promotion applied! ${totalDiscountedItems} items were discounted for a total savings of $ ${totalPriceBeforeDiscount - totalDistcountedItemsCost}`);
}

applyPromo(cart, isEligible);

// setTimeout prints result after the delay of 1000 milliseconds 
setTimeout(() => {
    console.log(cart);
}, 1000)