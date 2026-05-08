// Convert an array of Celsius temperatures to Fahrenheit

const temp = [0, 10, 20, 30];

const fahTemp = temp.map((d) => { return ((d * 1.8) + 32) });

fahTemp.forEach((d) => { console.log(d) });