// ### Question 4: The Automated Payroll Processor
// **Problem Statement:**
// You are developing a payroll system. You need to write a function calculatePayroll(employees, taxCallback) that applies tax deductions and calculates final payouts.
// **Requirements:**
// 1. Create a callback function (taxLogic) that determines the tax rate: If a salary is > 5000, the tax is 20%. Otherwise, the tax is 10%.
// 2. The calculatePayroll function should use this callback to process each employee.
// 3. Calculate the netSalary (Salary minus Tax). Add a property status to each employee: If the net salary is > 4000, set status to "Premium", otherwise set it to "Standard".
// 4. Use a Template Literal to log: "Payroll Processed: Total Net Payout is $[Z] for [X] employees."
// 5. The function must use setTimeout to wait 2000ms before returning the final array of processed employee objects.
// **Input Data Example:**
// ```javascript
// const employees = [
//  { id: 101, name: "Alice", salary: 6000 },
//  { id: 102, name: "Bob", salary: 3500 },
//  { id: 103, name: "Charlie", salary: 5200 }
// ];

const employees = [
    { id: 101, name: "Alice", salary: 6000 },
    { id: 102, name: "Bob", salary: 3500 },
    { id: 103, name: "Charlie", salary: 5200 }
];

// validate if salary is greater than 5000, tax is 20% or else 10%
function taxLogic(salary) {
    return salary > 5000 ? 20 : 10;
}

function calculatePayroll(employees, taxCallback) {
    // check for salary and add netSalary property to the employee object to differentiate original salary 
    employees.forEach((d) => {
        if (taxCallback(d.salary) === 20) {
            d.netSalary = d.salary - (d.salary * 0.2);
        } else {
            d.netSalary = d.salary - (d.salary * 0.1);
        }
        // add status property and put premium if netsalary is greater than 4000 or else standard
        if ((d.netSalary) > 4000) {
            d.status = "Premium";
        } else {
            d.status = "Standard";
        }
    })
    // calculate total net salary using reduce()
    let totalNetSalary = employees.reduce((acc, curr) => { return acc + curr.netSalary }, 0);

    console.log(`Payroll Processed: Total Net Payout is $${totalNetSalary} for ${employees.length} employees.`);

    // return updated employees array after 2000 milli seconds
    setTimeout(() => {
        console.log(employees);
    }, 2000);
}

calculatePayroll(employees, taxLogic);

