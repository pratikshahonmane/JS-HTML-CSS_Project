const butnEles = document.getElementsByClassName("btn");
const equalBtnEle = document.getElementById("equ");
const inputEle = document.getElementById("input");
const clearEle = document.getElementById("clear");
const backEle = document.getElementById("back");

Array(...butnEles).forEach((butnEle) => {
    butnEle.addEventListener("click", () => {
        inputEle.value += butnEle.innerHTML;


    })
})

equalBtnEle.addEventListener("click", () => {
    try {
        inputEle.value = eval(inputEle.value);
    } catch (err) {
        inputEle.value = "Error";

    }

})

clearEle.addEventListener("click", () => {
    inputEle.value = null;
})

backEle.addEventListener("click", () => {
    inputEle.value = inputEle.value.slice(0, -1);
})

document.addEventListener("keydown", function (event) {
    const allowedKeys = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", // numbers
        "+", "-", "*", "/", "%", ".",                    // symbols
        "Backspace", "Delete", "ArrowLeft", "ArrowRight", // editing keys
        "Enter", "=", "Tab"                              // functional keys
    ];

    if (!allowedKeys.includes(event.key)) {
        event.preventDefault(); // block anything not in the list
    }
    if (event.key === "Enter") {
        equalBtnEle.click();
    }

    if (event.key === "Backspace") {
        backEle.click();
    }
});

window.onload = () => {
  inputEle.focus();
};