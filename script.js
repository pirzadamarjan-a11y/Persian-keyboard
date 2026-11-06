
let display = document.getElementById("display");

let buttons = document.querySelectorAll(".row button");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let value = button.innerText;

        if (button.classList.contains("delete")) {

            display.value = display.value.slice(0, -1);

        } 
        else if (button.classList.contains("space")) {

            display.value += " ";

        } 
        else {

            display.value += value;

        }

    });

});

let clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", function() {

    display.value = "";

});
