const uName = document.getElementById("username");
const pass = document.getElementById("password");
const loginButton = document.getElementById("login");

function login(username, password) {
    if (username === "admin" && password === "admin123") {
        window.location.href = "./app.html"
    } else {
        alert("Incorrect credentials!");
    }
}

loginButton.addEventListener('click', () => {
    login(uName.value, pass.value);
});