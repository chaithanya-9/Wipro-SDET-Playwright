// 2. Build a countdown timer. 

let countdown = 10;

function countdownTimer(countdown) {
    const timer = setInterval(() => {
        console.log(countdown);
        countdown--;
        if (countdown <= 0) {
            clearInterval(timer);
            console.log(`times up!`);
        }
    }, 1000);
}

countdownTimer(countdown);