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
        localStorage.setItem(
          "@kenzie-habits:user",
          JSON.stringify(resp.response)
        );
        localStorage.setItem(
          "@kenzie-habits:token",
          JSON.stringify(resp.token)
        );
        
		return resp;
        
      })
      .catch((err) => console.log(err));
  }
}
