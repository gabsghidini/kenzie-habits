import Habits from "../controller/habits.controller.js";
import HomepageController from "../controller/homepage.Controller.js";
import Login from "../controller/login.controller.js";
// import EditProfile from "../controller/modalEditProfile.js";

function dropDown() {
	const btnDrop = document.querySelector("#btnDrop");
	const menu = document.querySelector(".dropdown-content");

	function toggle() {
		if (menu.classList.contains("dropdown-content-show")) {
			menu.classList.remove("dropdown-content-show");
		} else {
			menu.classList.add("dropdown-content-show");
		}
	}

	function showModal() {
		modal.style.display = "block";
	}

	btnDrop.addEventListener("click", function () {
		toggle();
	});
}
dropDown();

function logOut() {
	const exit = document.querySelector("#logout");

	exit.addEventListener("click", function () {
		Login.logout();
	});
}

const incomplete = await Habits.onlyIncompleteHabits();

HomepageController.listCards(incomplete);

//Adiciona modal Create Habits
addModal(
	"src/views/modalCreateHabits.html",
	"./src/controller/modalCreateHabits.js"
);

//Adiciona modal Edit Profile
addModal(
	"src/views/modalEditProfile.html",
	"./src/controller/modalEditProfile.js"
);

//Adiciona modal Delete Habits
addModal(
	"src/views/modalDeleteHabits.html",
	"./src/controller/modalDeleteHabits.js"
);

//Adiciona modal Edit Habits
addModal(
	"src/views/modalEditHabits.html",
	"./src/controller/modalEditHabits.js"
);

function addModal(viewPath, scriptPath) {
	fetch(viewPath)
		.then((data) => {
			return data.text();
		})
		.then((data) => {
			let body = document.querySelector("body");
			let div = document.createElement("div");
			div.innerHTML = div.innerHTML + data;
			body.appendChild(div);

			var head = document.getElementsByTagName("head")[0];
			var script = document.createElement("script");
			script.type = "module";
			script.src = scriptPath;
			head.appendChild(script);
		});
}

function listenersForHabits() {
	const complete = document.querySelector(
		".container--title--buttonConcluidos"
	);
	const all = document.querySelector(".container--title--buttonTodos");

	complete.addEventListener("click", async () => {
		const session = document.getElementById("container");
		session.innerHTML = "";
		const complete = await Habits.onlyCompleteHabits();
		HomepageController.listCards(complete);
		listenersForHabits();
	});

	all.addEventListener("click", async () => {
		const session = document.getElementById("container");
		session.innerHTML = "";
		const all = await Habits.getHabits();
		HomepageController.listCards(all);
		listenersForHabits();
	});
}

function init() {
	HomepageController.loadUserData();

	setTimeout(() => {
		console.log(
			"2 segundos depois do carregamento da pagina, os listeners são ativados"
		);
		HomepageController.habitCompletionController();
		listenersForHabits();
	}, 2000);
}
init();
