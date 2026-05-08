// Filter out minors and return only adults (age 18 and above)

const obj = [{ name: 'Li', age: 16 }, { name: 'Dan', age: 22 }, { name: 'Sarah', age: 17 }]

const adultsObj = obj.filter((d) => { return d.age > 17 });

console.log(adultsObj);
