let showGuildBtn = document.getElementById("show-guild-list");
let findGuildBtn = document.getElementById("find-guild-btn");
let findGuildInput = document.getElementById("find-guild-input");
let addGuildBtn = document.getElementById("add-guild-btn");


// Code that I brought from guild-list.html

// let guildList = [
//     {
//         name: "Emphasis",
//         game: "Ragnarok",
//         size: 10,
//         isActive: false,
//     },
//     {
//         name: "Scream",
//         game: "Tibia",
//         size: 9,
//         isActive: true,
//     }
// ];

let guildListHolder = ``;
// console.log(guildList)

let guildList = JSON.parse(localStorage.getItem("guildList"));;
// console.log(localStorage.getItem("guildList"));

let listContentEl = document.getElementById("show-content");

async function renderList(){
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
					<td>${guildList[i].name}</td>
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
		`+ guildListHolder + `</table>`;
}

showGuildBtn.onclick = async function(){
	renderList();
}

findGuildBtn.onclick = function(){
	let guild = findGuildInput.value;
	let guildExists = false;

	// console.log(guild.toLowerCase());
	// console.log(guildList[0].name.toLowerCase());
	
	for (let i = 0; i<guildList.length; i++){
		if (guild.toLowerCase() == guildList[i].name.toLowerCase()){
			let status;

			if (guildList[i].isActive === true){
				status = `Active`
			} else {
				status = `Inactive`
			}

			listContentEl.innerHTML = `
			<p><b>Guild name:</b> ${guildList[i].name}</p>
			<p><b>Game:</b> ${guildList[i].game}</p>
			<p><b>Number of Players:</b> ${guildList[i].size}</p>
			<p><b>Status:</b> ${status}</p>
			`

			guildExists = true;
		}
	}

	if (guildExists === false){
		listContentEl.innerHTML = `
			<p><b>This guild does not exist.</p>
			`
	}
	
}

findGuildInput.addEventListener("keypress", function(event) {
	// If the user presses the "Enter" key on the keyboard
	if (event.key === "Enter") {
	  // Cancel the default action, if needed
	  event.preventDefault();
	  // Trigger the button element with a click
	  document.getElementById("find-guild-btn").click();
	}
  });

addGuildBtn.onclick = async function (){
	  listContentEl.innerHTML = `
		<p>Guild name: <input type="text" id="guild-name-input"></p>
		<p>Game: <input type="text" id="guild-game-input"></p>
		<p>Number of Players: <input type="text" id="guild-size-input"></p>
		<p>Status: <input type="text" id="guild-status-input"></p>

		<button id="add-btn">Add guild</button>
	  `;

	let addBtn = document.getElementById("add-btn");
	let guildNameInput = document.getElementById("guild-name-input");
	let guildGameInput = document.getElementById("guild-game-input");
	let guildSizeInput = document.getElementById("guild-size-input");
	let guildStatusInput = document.getElementById("guild-status-input");
	
	addBtn.onclick = async function(){
		guildList.push({
			name: guildNameInput.value,
			game: guildGameInput.value,
			size: guildSizeInput.value,
			isActive: guildStatusInput.value
		}
		);
		localStorage.setItem("guildList", JSON.stringify(guildList));
		
		console.log(guildList);
	  }
}