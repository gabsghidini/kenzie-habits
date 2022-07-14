

export default class ValidateLogin {
    
    static async login() {
        return await fetch("https://habits-kenzie.herokuapp.com/api/userLogin", {
            method: "POST",
            headers: {
                "Content-Type": "application.json",
            },
            body: JSON.stringify({
                email: "grupo5Nicole@mail.com",
                password: "3af0f90c8579f89631bdd828b2007050"
            }),
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.token === undefined) {
                    window.alert("Email ou senha incorreto.")
                }
            })
            .catch((err) => {
                console.log(err)
            })
        
    }
}

ValidateLogin.login()