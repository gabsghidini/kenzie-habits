import Login from "../controller/login.controller.js";

class entrar {
  static logIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {
      email: email,
      password: password,
    };

    Login.requestLogin(data);
  }

  static logout() {
    localStorage.clear();

    window.location.href = "../index.html";
  }
}

const btnLogin = document.querySelector("#btnLogin");

btnLogin.addEventListener("click", function (event) {
  event.preventDefault();
  entrar.logIn();

  if (localStorage.getItem("@kenzie-habits:token" === undefined)) {
	window.alert("Email ou senha incorreto.");
} else {
    window.location.href = "./homepage.html";
  }
});
