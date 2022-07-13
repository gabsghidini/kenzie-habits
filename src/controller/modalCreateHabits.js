import Habit from "../models/habit.models.js";
import Habits from "./habits.controller.js";

document.addEventListener("DOMContentLoaded", addOnClickEvents);

function addOnClickEvents() {
    //closeModal('.modal_habits')
console.log(11111111111111111111111)
    let criarHabitButton = document.querySelector(".container--title--buttonCriar")
    criarHabitButton.addEventListener("click", function(){openModal('.modal_habits')})

    
    let closeModalButton = document.querySelector(".close_card_div")
    closeModalButton.addEventListener("click", function(){closeModal('.modal_habits')})

    

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