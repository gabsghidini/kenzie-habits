import Homepage from "../models/homepage.models";
import Habits from "./habits.controller";
import HomepageController from "./homepage.Controller";

function filterCompletedHabits() {
    const completedBtn = document.querySelector(".container--title--buttonTodos");
    completedBtn.addEventListener("click", completedHabits);
}

function completedHabits() {
    const completed = Habits.getHabits();
    completed.filter((habit) => {
        return habit.habit_status === true;
    });
    
    Homepage.getCardTitle();
}

function filterAllHabits() {
    const allHabits = document.querySelector(".container--title--buttonTodos");
    allHabits.addEventListener("click", habits)
}

function habits() {
    HomepageController.listCards();
}
filterAllHabits()
filterCompletedHabits()
export { filterCompletedHabits, filterAllHabits }

