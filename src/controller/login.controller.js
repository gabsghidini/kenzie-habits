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

        console.log(resp);
        const token = JSON.stringify(resp.token);
        const response = JSON.stringify(resp.response);

        localStorage.setItem("@kenzie-habits:user", response);
        localStorage.setItem("@kenzie-habits:token", token);

				return resp;
			})
			.catch((err) => window.alert(err));
	}
}

/*

{
    "response": {
        "usr_name": "Grupo5 Nicoletl",
        "usr_email": "grupo5Nicole@mail.com",
        "usr_image": "https://www.google.com/images/Nicole"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTc4MTAwNTcsImV4cCI6MTY1ODQxNDg1Nywic3ViIjoiMzAifQ.YBtPAgdmxI0ecRmAQo1XBD7aeIqABLIQK5ZUM2Swohg"
}

*/
