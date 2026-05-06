// Encapsulation: data and methods are bundled together as a class and hiding internal details and its achived using access modifiers

// example 1:
class BankAccount {
    #balance = 0;  // # makes it private, cannot be accessed outside

    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`${this.owner}, your current balance is ${this.#balance}`);
        } else {
            console.log("Balance should be positive");
        }
    }
    withdraw(amount) {
        if (amount > this.#balance) {
            console.log(`${this.owner}, Insufficient Balance`);
        } else {
            this.#balance -= amount;
            console.log(`${this.owner}, your current balance: ${this.#balance}`);
        }
    }
    getBalance() {
        return this.#balance;
    }
}

const user1 = new BankAccount("Butcher", 10000);
user1.deposit(10000);
user1.withdraw(5000);
console.log(user1.getBalance());

// example 2:
class Hospital {
    #patientName;
    #report;

    constructor(patientName, report, doctorName) {
        this.#patientName = patientName;
        this.#report = report;
        this.doctorName = doctorName;
    }
    addReport(report) {
        this.#report = report;
    }
    getReport() {
        console.log(`Patient: ${this.#patientName}, report: ${this.#report}`);

    }
    getDoctorName() {
        console.log(`Doctor name: ${this.doctorName}`);

    }
}

let patient1 = new Hospital("John", "fever", "Dr. Smith");

patient1.getReport();
patient1.getDoctorName();