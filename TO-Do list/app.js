const inputTextEle = document.getElementById("text");
const addbtnEle = document.getElementById("addbtn");
const outputEle = document.getElementById("output");

let taskList = [];

const getButton = (taskEl, taskName) => {
    const buttonEl = document.createElement("button");
    buttonEl.innerHTML = "❌";

    buttonEl.addEventListener("click", () => {
        taskEl.style="display:none;";
        taskList = taskList.filter(task => task !== taskName);
    });

    return buttonEl;
  };
                                       
addbtnEle.addEventListener("click",()=>{

    if (!inputTextEle.value) {    
        inputTextEle.focus();
        return;
    }

const filteredTaskList = taskList.filter(task=>task===inputTextEle.value);

    if (filteredTaskList.length !== 0) {
        alert("Duplicate task");
        inputTextEle.focus();
        inputTextEle.value = null;
        return;
    }

    const taskEl = document.createElement("div");
    taskEl.innerHTML = inputTextEle.value;

    const buttonEl = getButton(taskEl, inputTextEle.value);
    taskEl.appendChild(buttonEl);
    taskList.push(inputTextEle.value);

    
    outputEle.appendChild(taskEl);

    inputTextEle.value = null;
    inputTextEle.focus();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addbtnEle.click();
    }
});
