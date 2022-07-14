import Habits from "./habits.controller.js";

setTimeout(addOnClickEvents, 1500)

function addOnClickEvents() {

	let closeModalButton1 = document.querySelector(".close_card_div_delete");
	closeModalButton1.addEventListener("click", function () {
		closeModal(".body_modal_delete");
	});

	let closeModalButton2 = document.querySelector("#cancel");
	closeModalButton2.addEventListener("click", function () {
		closeModal(".body_modal_delete");
	});

	let modalForm = document.querySelector(".modal_form_delete")
	modalForm.addEventListener("submit", function (e) { deleteHabits(e) })
}

function closeModal(elementToClose) {
	document.querySelector(elementToClose).style.display = "none";
}

function openModal(elementToClose) {
	document.querySelector(elementToClose).style.display = "flex";
}

async function deleteHabits(event) {
	event.preventDefault();

	let id_habitValue = document.querySelector("#id_habit").value;

	let ans = await Habits.deleteHabit(id_habitValue);
	if (ans != null) {		
		let label_habit = document.querySelector("#label_" + id_habitValue).remove();

		alert("Seu habito foi removido com sucesso");
		closeModal(".body_modal_delete");
	} else {
		alert("Detectamos um erro ao adicionar. Tente mais tarde.");
	}
	
}

export default { addOnClickEvents, closeModal, openModal };
