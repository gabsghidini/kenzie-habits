export default class Habits {
	static base_url = "https://habits-kenzie.herokuapp.com/api/habits";

	static async createHabit(data) {
		const rawToken = localStorage.getItem("@kenzie-habits:token");

		const token = rawToken.replace(/\"/g, "");

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(data),
		};

		return await fetch(Habits.base_url, options)
			.then((res) => res.json())
			.then((res) => res)
			.catch((err) => console.log(err));
	}

	static async getHabits() {
		const rawToken = localStorage.getItem("@kenzie-habits:token");

		const token = rawToken.replace(/\"/g, "");

		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};

		return await fetch(Habits.base_url, options)
			.then((res) => res.json())
			.then((res) => res)
			.catch((err) => console.log(err));
	}

	static async getHabitsByCat(category) {
		const rawToken = localStorage.getItem("@kenzie-habits:token");

		const token = rawToken.replace(/\"/g, "");

		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};

		return await fetch(`${Habits.base_url}/category/${category}`, options)
			.then((res) => res.json())
			.then((res) => res)
			.catch((err) => console.log(err));
	}

	static async deleteHabit(id) {
        const rawToken = localStorage.getItem("@kenzie-habits:token");

		const token = rawToken.replace(/\"/g, "");

		const options = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};

		return await fetch(`${Habits.base_url}/${id}`, options)
			.then((res) => res.json())
			.then((res) => res)
			.catch((err) => console.log(err));
	}
}
