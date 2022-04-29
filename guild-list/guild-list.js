let guildList = [
    {
        name: "Emphasis",
        game: "Ragnarok",
        size: 10,
        isActive: false,
    },
    {
        name: "Scream",
        game: "Tibia",
        size: 9,
        isActive: true,
    }
];

let listContentEl = document.getElementById("list-content");
// let guildNameEl = document.getElementById("guild-name");
// let guildGameEl = document.getElementById("guild-game");
// let guildSizeEl = document.getElementById("guild-size");
// let guildStatusEl = document.getElementById("guild-status");
let guildListHolder = "";

function renderList(){
    listContentEl.innerHTML = `
        <thead>
        <tr>
            <th>Guild Name</th>
            <th>Game</th>
            <th># of Players</th>
            <th>Status</th>
        </tr>
        </thead>
    `
    for (let i=0; i<guildList.length; i++){
        let status;
        if (guildList[i].isActive === true){
            status = `Active`
        } else {
            status = `Inactive`
        }

        guildListHolder += `
            <tr>
                <td>${guildList[i].name}</td>
                <td>${guildList[i].game}</td>
                <td>${guildList[i].size}</td>
                <td>${status}</td>
            </tr>
        `
    }
    listContentEl.innerHTML += guildListHolder;
    // console.log(listContentEl);
}


renderList();

let returnBtn = document.getElementById("return-btn");

returnBtn.onclick = function(){
    location.href = ("../index.html");
};