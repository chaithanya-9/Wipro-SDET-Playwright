// 3. Exhaustiveness Checking (The never Type)
// Scenario: You want to ensure that if a new member is added to a Union, your logic must be updated to handle it.
// Task:
// Create a union type TaskStatus = 'Open' | 'InProgress' | 'Closed'.
// Write a function handleTask(status: TaskStatus) using a switch statement.
// In the default case, assign the status to a variable of type never.
// The Test: Add 'Archived' to the union and verify that the code fails to compile until you add the new case.


type TaskStatus = "Open" | "InProgress" | "Closed" | "Archived";

function handleTask(status: TaskStatus) {
    switch (status) {
        case "Open":
            console.log("Open");
            break;
        case "InProgress":
            console.log("InProgress");
            break;
        case "Closed":
            console.log("Closed");
            break;
        case "Archived":
            console.log("Archived");
            break;
        default:
            const unknown: never = status;
            break;
    }
}

handleTask("Open");