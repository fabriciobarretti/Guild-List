let headerBtn = document.getElementById("header-btn");

headerBtn.onclick = function(){
	window.location = `./index.html`;
}

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
			<h1>${guildList[i].name}</h1>
			<p><b>Game:</b> ${guildList[i].game}</p>
			<p><b>Number of Players:</b> ${guildList[i].size}</p>
			<p><b>Status:</b> ${status}</p>
			`

			guildExists = true;
		}
	}
}

// Go-back Button
let goBackBtn = document.getElementById("go-back-btn");

goBackBtn.onclick = async function(){
	window.location = `./index.html`;
}