var button = document.getElementById("button");

function sayHello() {
    document.getElementById("target").innerHTML = "Hello world!!";
}

button.addEventListener('click', function() {
    sayHello();
});