const startBtnEle = document.getElementById("startbtn");
const submitBtnEle = document.getElementById("submitbtn");
const numEle = document.getElementById("num");
const outputEle = document.getElementById("output");
const resultEle = document.getElementById("result");


let value;

let output = "Your Guess"


startBtnEle.addEventListener("click", () => {
    numEle.value = null;
    resultEle.innerHTML = null;
    outputEle.innerHTML = null;
    value = Math.floor(Math.random() * 101);

    submitBtnEle.disabled = false;
    startBtnEle.disabled = true;
    console.log(value);

})


const printGuessNumbers = (guessedNumber) => {
    if (!outputEle.innerHTML) {
        outputEle.innerHTML = "Your guess: " + guessedNumber;
    } else {
        outputEle.innerHTML += (", " + guessedNumber);
    }
}

submitBtnEle.addEventListener("click", () => {
    if (!numEle.value) {
        return;
    }

    if (value < numEle.value) {
        resultEle.innerHTML = "high value";

    }
    else if (value > numEle.value) {
        resultEle.innerHTML = "Low value";

    }
    else {
        resultEle.innerHTML = "Correct guess value";
        submitBtnEle.disabled = true;
        startBtnEle.disabled = false;
    }

    printGuessNumbers(numEle.value);
    numEle.value = null;
    numEle.focus();
})

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        submitBtnEle.click()

    }
})

startBtnEle.click();
