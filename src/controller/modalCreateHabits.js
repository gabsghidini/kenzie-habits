import Habit from "../models/habit.models.js";
import Habits from "./habits.controller.js";

setTimeout(addOnClickEvents, 1500);

function addOnClickEvents() {
    closeModal('.body_modal_create')

    let criarHabitButton = document.querySelector(".container--title--buttonCriar")
    criarHabitButton.addEventListener("click", function(){openModal('.body_modal_create')})

    let closeModalButton1 = document.querySelector(".close_card_div")
    closeModalButton1.addEventListener("click", function(){closeModal('.body_modal_create')})
 

    let modalForm = document.querySelector(".modal_create")
    modalForm.addEventListener("submit", function(e){sendHabits(e)})
}

function closeModal(elementToClose) {
	document.querySelector(elementToClose).style.display = "none";
}

function openModal(elementToOpen) {
	document.querySelector(elementToOpen).style.display = "flex";
}

async function sendHabits(event) {
	event.preventDefault();

	let titleValue = document.querySelector("#title").value;
	let descriptionValue = document.querySelector("#description").value;
	let categoryValue = document.querySelector("#category").value;

	if ((titleValue + descriptionValue + categoryValue).length == 20) {
		alert("Todos os campos devem estar preenchidos");
	} else {
		let habit = new Habit(
			"",
			titleValue,
			descriptionValue,
			categoryValue,
			""
		);
		let ans = await Habits.createHabit(habit);
		if (ans != null) {
			alert("Seu habito foi adicionado com sucesso");
			closeModal(".body_modal");
			document.location.reload(true);
		} else {
			alert("Detectamos um erro ao adicionar. Tente mais tarde.");
		}
	}
}

export { addOnClickEvents, closeModal, openModal, sendHabits };
