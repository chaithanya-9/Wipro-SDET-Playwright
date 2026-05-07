// ### Question 1: The Flight Booking Data Cleaner
// **Problem Statement:**
// You are given a list of raw flight strings from a travel agency's database. The data is unformatted and needs to be standardized into objects for a front-end display.
// **Requirements:**
// 1. **Parsing:** Iterate through an array of strings formatted as: "CITY_A-CITY_B:PRICE".
// 2. **Object Creation:** Convert each string into an object with three properties: from, to, and price.
// 3. **Validation & Coercion:**
//   * The price must be explicitly converted to a **Number**.
//   * If the price is not a valid number or is missing, set the price to 0.
// 4. **Filtering:** Create a new array containing only flights where the price is between **$100 and $500** (inclusive).
// 5. **Sorting:** Sort the final array of objects by price in **ascending order** (cheapest first).
// 6. **Return:** Return the final array as a **JSON string**.
// **Input Data Example:**
// ```javascript
// const rawFlights = [
//  "London-Paris:150",
//  "New York-Tokyo:invalid",
//  "Dubai-Mumbai:450",
//  "Berlin-Rome:95"
// ];


const rawFlights = [
    "London-Paris:150",
    "New York-Tokyo:invalid",
    "Dubai-Mumbai:450",
    "Berlin-Rome:95"
];

// create flights array and used forEach to traverser rawFlights array and split each index value based on ":" this character and split method returns array and push that array into flights
const flights = [];
rawFlights.forEach((d) => { return flights.push(d.split(":")) });

//flightObject stores array of objects which returns by flights.map() and inside map() use split each index value of flights array based on "-" this character, returns array of 3 indexes containing 2 cities and 1 price and that price is string so converted into number and checked if it is actual number if not insert 0 and flights.map() returns object contains from,to,price 
const flightsObject = flights.map((d) => {
    return {
        from: d[0].split("-")[0],
        to: d[0].split("-")[1],
        price: Number(d[1]) || 0
    }
});

//flightObject.filter() returns objects whose price is between 100 and 500 and store in newFlights
const newFlights = flightsObject.filter((d) => { return d.price >= 100 && d.price <= 500 });

//newFlights is sorted in oascending order based on its price
const sortedFlights = newFlights.toSorted((a, b) => a.price - b.price);

// return final array as json string
console.log(JSON.stringify(sortedFlights));







