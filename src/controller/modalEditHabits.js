import Habit from "../models/habit.models.js";
import Habits from "./habits.controller.js";

setTimeout(addOnClickEvents, 4000);

function addOnClickEvents() {
    closeModal('.body_modal_edit_habits')
	
    let closeModalButton1 = document.querySelector(".close_habit_div_edit")
    closeModalButton1.addEventListener("click", function(){closeModal(".body_modal_edit_habits")})
 

	let deleteButton = document.querySelector(".removeHabit")
	deleteButton.addEventListener("click", function (e) { openModal(".body_modal_delete") })
	deleteButton.addEventListener("click", function (e) {closeModal(".body_modal_edit_habits")})

    let modalForm = document.querySelector(".modal_edit_habit_form")
    modalForm.addEventListener("submit", function(e){updateHabits(e)})
}

function closeModal(elementToClose) {
	document.querySelector(elementToClose).style.display = "none";
}

function openModal(elementToOpen) {
	document.querySelector(elementToOpen).style.display = "flex";
}

async function updateHabits(event) {
	event.preventDefault();
	let id_habitValue = document.querySelector("#id_habit").value;
	let titleValue = document.querySelector("#title_edit").value;
	let descriptionValue = document.querySelector("#description_edit").value;
	let categoryValue = document.querySelector("#category_edit").value;

	if ((titleValue + descriptionValue).length == 0) {
		alert("Todos os campos devem estar preenchidos");
	} else {
		let habit = {
			habit_title: titleValue,
			habit_description: descriptionValue,
			habit_category: categoryValue
		} 
		let ans = await Habits.updateHabit(id_habitValue, habit);
		if (ans != null) {

			document.querySelector("#title_"+id_habitValue).innerHTML = titleValue;
			document.querySelector("#description_"+id_habitValue).innerHTML = descriptionValue;
			document.querySelector("#category_"+id_habitValue).innerHTML = categoryValue;

			alert("Seu habito foi adicionado com sucesso");
			closeModal(".body_modal_edit_habits");
		} else {
			alert("Detectamos um erro ao adicionar. Tente mais tarde.");
		}
	}
}

export { addOnClickEvents, closeModal, openModal, updateHabits };
