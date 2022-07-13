import HomepageController from "../controller/homepage.Controller.js";

HomepageController.listCards()

document.addEventListener("DOMContentLoaded", addCreateHabitModal);

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
        })
}
