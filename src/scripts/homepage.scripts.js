import HomepageController from "../controller/homepage.Controller.js";

HomepageController.listCards()

addCreateHabitModal()

function addCreateHabitModal() {
    fetch("src/views/modalCreateHabits.html")
        .then(data => {
            return data.text()
        })
        .then(data => {
            let body = document.querySelector("body")
            let footer = document.createElement("footer")
            footer.innerHTML = footer.innerHTML + data;
            body.appendChild(footer)

            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'module';
            console.log(head)
            script.src = './src/controller/modalCreateHabits.js';
            head.appendChild(script);
        })
}
