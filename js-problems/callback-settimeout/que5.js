// 5. Execute functions sequentially using callbacks.

function callback1(callback) {
    console.log("callback1 is executed");
    callback();
}
function callback2(callback) {
    console.log("callback2 is executed");
    callback();
}
function callback3(callback) {
    console.log("callback3 is executed");
}

callback1(() => {
    callback2(() => {
        callback3();
    });
});