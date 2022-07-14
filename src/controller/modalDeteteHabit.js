import Habits from "./habits.controller.js";

document.addEventListener("DOMContentLoaded", addOnClickEvents);

function addOnClickEvents() {
	/*let openModalButton = document.querySelector(".open_modal")
    openModalButton.addEventListener("click", function(){openModal('.modal_habits')})*/

	let closeModalButton1 = document.querySelector(".close_card_div");
	closeModalButton1.addEventListener("click", function () {
		closeModal(".modal_habits--delete");
	});

	let closeModalButton2 = document.querySelector("#cancel");
	closeModalButton2.addEventListener("click", function () {
		closeModal(".modal_habits--delete");
	});

	//let modalForm = document.querySelector(".modal_form")
	//modalForm.addEventListener("submit", function(e){sendHabits(e)})
}

function closeModal(elementToClose) {
	document.querySelector(elementToClose).style.display = "none";
}

function openModal(elementToClose) {
	document.querySelector(elementToClose).style.display = "flex";
}

export default { addOnClickEvents, closeModal, openModal };
