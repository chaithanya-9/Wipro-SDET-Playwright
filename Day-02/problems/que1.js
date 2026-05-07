// Format guest list by removing the host (first name) and labeling the rest as guests

let guests = ["Java Script", "Java", "Python", "React"];

guests.shift();

guests = guests.map((d) => { return `Guest: ${d}` });

guests.forEach((d) => { console.log(d) });