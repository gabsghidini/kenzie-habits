export default class Habit {
    constructor (id, tittle, description, category, status) {
        this.habit_id = id;
        this.habit_title = tittle;
        this.habit_description = description;
        this.habit_category = category;
        this.habit_status = status;
    }
}