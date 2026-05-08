// Filter and return only names longer than 5 characters

const arr = ['Alice', 'Bob', 'Kaushik'];

const filterArray = arr.filter((d) => {
    return d.length > 5;
})

filterArray.forEach((d) => {
    console.log(d);
})