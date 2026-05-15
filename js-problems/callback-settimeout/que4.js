// 4. Simulate food ordering system using callbacks. 


function openApp(callback) {
    console.log("App opened")
    setTimeout(callback, 3000);

}
function addItems(callback) {
    console.log("Items added");
    setTimeout(callback, 1000);

}
function payAmount(callback) {
    console.log("Payement done");
    setTimeout(callback, 1500);
}
function riderStarted(callback) {
    console.log("Rider is on the way");
    setTimeout(callback, 3000);
}
function orderDelivered() {
    console.log("Order delivered");
}

openApp(() => {
    addItems(() => {
        payAmount(() => {
            riderStarted(() => {
                orderDelivered();
            });
        });
    });
});
