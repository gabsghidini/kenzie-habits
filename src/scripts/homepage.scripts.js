import HomepageController from "../controller/homepage.Controller.js";

HomepageController.listCards();

addCreateHabitModal()
addEditProfile()

function addCreateHabitModal() {
	fetch("src/views/modalCreateHabits.html")
		.then((data) => {
			return data.text();
		})
		.then((data) => {
			let body = document.querySelector("body");
			let footer = document.createElement("footer");
			footer.innerHTML = footer.innerHTML + data;
			body.appendChild(footer);
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'module';
            script.src = './src/controller/modalCreateHabits.js';
            head.appendChild(script);
        })
}

function addEditProfile() {
    fetch("src/views/modalEditProfile.html")
        .then(data => {
            return data.text()
        })
        .then(data => {
            let body = document.querySelector("body")
            let div = document.createElement("div")
            div.innerHTML = div.innerHTML + data;
            body.appendChild(div)

            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'module';
            script.src = './src/controller/modalEditProfile.js';
            head.appendChild(script);
        })
}

function init() {
	HomepageController.loadUserData();

	setTimeout(() => {
        console.log("3 segundos depois do carregamento da pagina, os listeners são ativados");
        HomepageController.habitCompletionController();
    }, 3000);
}

init();
