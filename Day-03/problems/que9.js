// Calculate the average score from an array of test results

const testResult = [80, 90, 70, 100];

const testAvg = testResult.reduce((acc, curr) => {
    return acc + curr;
}, 0) / testResult.length;

console.log(testAvg);
