// Extract and return an array of product titles from the products array

const products = [
    { id: 1, title: 'Laptop' },
    { id: 2, title: 'Mouse' }
];

const titlesArray = products.map((d) => {
    return d.title
});

console.log(titlesArray);
