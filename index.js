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
let guildPage = [];
let guildList = JSON.parse(localStorage.getItem("guildList"));;
// console.log(localStorage.getItem("guildList"));

let listContentEl = document.getElementById("show-content");

// Get the guild name from the URL
let pageURL = window.location.search;
let urlParam = new URLSearchParams(pageURL);
let guildURL = urlParam.get("guild");
console.log(guildURL);

// This "if-else" at the very beginning is definitely not a good practice. 
if (guildURL !== null){
	let guildExists = false;

	for (let i = 0; i<guildList.length; i++){
		if (guildURL.toLowerCase() == guildList[i].name.toLowerCase()){
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
}

// ===== MOVED TO GUILDLIST.JS =======
// async function renderList(){
// 		listContentEl.innerHTML = ``;
// 		guildListHolder = ``;

// 		for (let i=0; i<guildList.length; i++){
// 			// Converting boolean to "Active" and "Inactive"
// 			let status;
// 			if (guildList[i].isActive === true){
// 				status = `Active`
// 			} else {
// 				status = `Inactive`
// 			}

// 			guildListHolder += `
// 				<tr>
// 					<td><a id="${guildList[i].name}-guild" href="./index.html?guild=${guildList[i].name}">${guildList[i].name}</a></td>
// 					<td>${guildList[i].game}</td>
// 					<td>${guildList[i].size}</td>
// 					<td>${status}</td>
// 				</tr>
// 			`
// 		}
	
// 		listContentEl.innerHTML = `
// 			<table id="list-content">
// 			<thead>
// 			<tr>
// 				<th>Guild Name</th>
// 				<th>Game</th>
// 				<th># of Players</th>
// 				<th>Status</th>
// 			</tr>
// 			</thead>
// 		`+ guildListHolder + `</table>
// 		<button class="big-btn" id="go-back-btn" href="index.html">Go back</button>
// 		`;
// }

showGuildBtn.onclick = async function(){
	// renderList();
	window.location = `./guildlist.html`;
}

findGuildBtn.onclick = function(){
	let guild = findGuildInput.value;
	let guildExists = false;

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
			<p id="guild-bottom"><b>Status:</b> ${status}</p>
			`

			guildExists = true;
		}
	}

	if (guildExists === false){
		listContentEl.innerHTML = `
			<p id="not-guild"><b>This guild does not exist.</b></p>
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
		<p><b>Guild name</b>: <input type="text" class="add-guild-input" id="guild-name-input"></p>
		<p><b>Game</b>: <input type="text" class="add-guild-input" id="guild-game-input"></p>
		<p><b>Number of Players</b>: <input type="text" class="add-guild-input" id="guild-size-input"></p>
		<p><b>Status</b>: <input type="text" class="add-guild-input" id="guild-status-input"></p>

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
		
		window.location = `guild.html?guild=${guildNameInput.value}`
	  }
}

let headerBtn = document.getElementById("header-btn");

headerBtn.onclick = function(){
	window.location = `./index.html`;
}

let goBackBtn = document.getElementById("go-back-btn");
goBackBtn.onclick = async function(){
	window.location = `./index.html`;
}