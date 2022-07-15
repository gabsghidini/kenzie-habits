export default class Login {
	static base_url = "https://habits-kenzie.herokuapp.com/api/userLogin";

	static async requestLogin(data) {
		await fetch(this.base_url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((resp) => {

        const token = JSON.stringify(resp.token);
        const response = JSON.stringify(resp.response);

        localStorage.setItem("@kenzie-habits:user", response);
        localStorage.setItem("@kenzie-habits:token", token);

				return resp;
			})
			.catch((err) => window.alert(err));
	}

	static logout() {
		localStorage.clear();
	
		window.location.href = "index.html";
	  }
}
