import Habits from "./habits.controller.js"
import Homepage from "../models/homepage.models.js"

class HomepageController {

    static async listCards (){
        
        const session = document.getElementById("container")
        const habitsDataBase = await Habits.getHabits()
        console.log(habitsDataBase)

        const titleHabits = new Homepage ()
        const cardTitle = titleHabits.getCardTitle()
        const cardHabitsTitle = titleHabits.getCardHabitsTitle()
        session.appendChild(cardTitle)
        session.appendChild(cardHabitsTitle)
        console.log(cardTitle)

        habitsDataBase.forEach((habits) =>{
            const Habits = new Homepage (habits.habit_id, habits.habit_title, habits.habit_description, habits.habit_category, habits.habit_status)
            
            console.log(habits)
            const cardsHabits = Habits.getCardHabitsDate(habits)

            session.appendChild(cardsHabits)

            console.log(cardsHabits)

            return cardsHabits
            
        });


        const cardFooter = titleHabits.getCardFooter()
        session.appendChild(cardFooter)
       
    }

}

export default HomepageController