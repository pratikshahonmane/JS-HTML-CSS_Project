const incrementEle = document.getElementById("increment");
const decrementEle = document.getElementById("decrement");
const resetEle = document.getElementById("reset");
const counterValue = document.getElementById("counterValue");


incrementEle.addEventListener("click", ()=>{
    counterValue.innerHTML = parseInt(counterValue.innerHTML) + 1;
})

decrementEle.addEventListener("click", ()=>{
    counterValue.innerHTML = parseInt(counterValue.innerHTML) - 1;
})

resetEle.addEventListener("click", ()=>{
    counterValue.innerHTML = 0
})



