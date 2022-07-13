import Habit from "../models/habit.models.js";
import Habits from "./habits.controller.js";

document.addEventListener("DOMContentLoaded", addOnClickEvents);

function addOnClickEvents() {
    console.log(111111)
    closeModal('.modal_habits')

    //let criarHabitButton = document.querySelector(".container--title--buttonCriar")
    //criarHabitButton.addEventListener("click", function(){openModal('.body_modal')})

    
    let closeModalButton1 = document.querySelector(".close_card_div")
    closeModalButton1.addEventListener("click", function(){closeModal('.body_modal')})

    

    let modalForm = document.querySelector(".modal_form")
    modalForm.addEventListener("submit", function(e){sendHabits(e)})

}

function closeModal(elementToClose) {
    document.querySelector(elementToClose).style.display = "none"
}

function openModal(elementToClose) {
    document.querySelector(elementToClose).style.display = "flex"
}

function sendHabits(event){
    
    event.preventDefault()

    let titleValue = document.querySelector("#title").value;
    let descriptionValue = document.querySelector("#description").value;
    let categoryValue = document.querySelector("#category").value;
    
    let habit = new Habit("", titleValue, descriptionValue, categoryValue, "")

}

export default {addOnClickEvents,closeModal, openModal, sendHabits}