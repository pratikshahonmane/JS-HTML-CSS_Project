const sectionEl = document.getElementById("data");
const tableEl = document.querySelector("table");

async function fetchData(){
    await fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => showData(data));
}

const showData = (rawData) => {
    rawData.forEach(data => {
        const trEl = document.createElement("tr");

        const idEl = document.createElement("td");
        idEl.innerHTML = data.id;
        
        const userIdEl = document.createElement("td");
        userIdEl.innerHTML = data.userId;
        
        const titleEl = document.createElement("td");
        titleEl.innerHTML = data.title;
        
        const bodyEl = document.createElement("td");
        bodyEl.innerHTML = data.body;
        
        trEl.appendChild(idEl);
        trEl.appendChild(userIdEl);
        trEl.appendChild(titleEl);
        trEl.appendChild(bodyEl);
        
        
        tableEl.appendChild(trEl);   
    });

}

fetchData();
