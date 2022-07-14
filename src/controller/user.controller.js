import User from "../models/user.models.js";

export default class UserController {
	static base_url = "https://habits-kenzie.herokuapp.com/api/user/profile";

	static async updateUser(data) {
		const rawToken = localStorage.getItem("@kenzie-habits:token");

		if (rawToken == null) {
			throw "Deve-se fazer login primeiro.";
		}

		const token = rawToken.replace(/\"/g, "");

		return await fetch(this.base_url, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				usr_name: data.usr_name,
				usr_image: data.usr_image,
			}),
		})
			.then((res) => res.json())
			.then((resp) => {
				this.updateLoggedUserIformation(data);
				return resp;
			})
			.catch((err) => console.log(err));
	}

	static getLoggedUserIformation() {
		let storedUser = JSON.parse(
			localStorage.getItem("@kenzie-habits:user")
		);
		if (storedUser == null) {
			return null;
		}
		return new User(
			storedUser.usr_name,
			storedUser.usr_email,
			storedUser.usr_image
		);
	}

	static updateLoggedUserIformation(data) {
		let storedUser = this.getLoggedUserIformation();
		storedUser.usr_name = data.usr_name;
		storedUser.usr_image = data.usr_image;

		localStorage.setItem("@kenzie-habits:user", JSON.stringify(storedUser));
	}
}
