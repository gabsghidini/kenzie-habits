import Habits from "./habits.controller.js";

setTimeout(addOnClickEvents, 1500)

function addOnClickEvents() {
	let openModalButton = document.querySelector(".container--habits--dataEdit")
	openModalButton.addEventListener("click", function () { openModal('.body_modal_delete') })

	let closeModalButton1 = document.querySelector(".close_card_div_delete");
	closeModalButton1.addEventListener("click", function () {
		closeModal(".body_modal_delete");
	});

	let closeModalButton2 = document.querySelector("#cancel");
	closeModalButton2.addEventListener("click", function () {
		closeModal(".body_modal_delete");
	});

	let modalForm = document.querySelector(".modal_form_delete")
	modalForm.addEventListener("submit", function (e) { sendHabits(e) })
}

function closeModal(elementToClose) {
	document.querySelector(elementToClose).style.display = "none";
}

function openModal(elementToClose) {
	document.querySelector(elementToClose).style.display = "flex";
}

export default { addOnClickEvents, closeModal, openModal };
