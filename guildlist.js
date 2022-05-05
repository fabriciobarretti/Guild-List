let guildPage = [];
let guildList = JSON.parse(localStorage.getItem("guildList"));;
// console.log(localStorage.getItem("guildList"));

let listContentEl = document.getElementById("show-content");

listContentEl.innerHTML = ``;
guildListHolder = ``;

for (let i=0; i<guildList.length; i++){
    // Converting boolean to "Active" and "Inactive"
    let status;
    if (guildList[i].isActive === true){
        status = `Active`
    } else {
        status = `Inactive`
    }

    guildListHolder += `
        <tr>
            <td><a id="${guildList[i].name}-guild" href="./guild.html?guild=${guildList[i].name}">${guildList[i].name}</a></td>
            <td>${guildList[i].game}</td>
            <td>${guildList[i].size}</td>
            <td>${status}</td>
        </tr>
    `
}

listContentEl.innerHTML = `
    <table id="list-content">
    <thead>
    <tr>
        <th>Guild Name</th>
        <th>Game</th>
        <th># of Players</th>
        <th>Status</th>
    </tr>
    </thead>
`+ guildListHolder + `</table>
`;

let headerBtn = document.getElementById("header-btn");
headerBtn.onclick = function(){
	window.location = `./index.html`;
}

let goBackBtn = document.getElementById("go-back-btn");
goBackBtn.onclick = function(){
	window.location = `./index.html`;
}