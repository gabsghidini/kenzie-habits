import User from "../models/user.models.js";
import UserController from "./user.controller.js";

setTimeout(loadContent, 1500)

function loadContent() {
    let nameInput = document.querySelector("#name");
    let urlInput = document.querySelector("#url");

    let storedUser = UserController.getLoggedUserIformation()
    if (storedUser == null) {
        return;
    }
    nameInput.value = storedUser.usr_name;
    urlInput.value = storedUser.usr_image;

    let editarHabitButton = document.querySelector(".user__image--header")
    editarHabitButton.addEventListener("click", function () { openModal('.body_modal_edit') })

    let closeModalButton = document.querySelector(".close_card_div_edit")
    closeModalButton.addEventListener("click", function () { closeModal('.body_modal_edit') })

    let modalForm = document.querySelector(".modal_edit")
    modalForm.addEventListener("submit", function (e) { sendUpdate(e) })
}

function closeModal(elementToClose) {
    document.querySelector(elementToClose).style.display = "none";
}

function openModal(elementToOpen) {
    document.querySelector(elementToOpen).style.display = "flex"
}

async function sendUpdate(event) {
    event.preventDefault()

    let nameValue = document.querySelector("#name").value;
    let urlValue = document.querySelector("#url").value;

    if ((nameValue + urlValue).length == 0) {
        alert("Todos os campos devem estar preenchidos")
    } else {
        let userToUpdate = new User(nameValue, "", urlValue)
        let ans = await UserController.updateUser(userToUpdate)
        if (ans != null) {
            alert("Seu perfil foi editado com sucesso")
            closeModal('.body_modal_edit')
        } else {
            alert("Detectamos um erro ao editar. Tente mais tarde.")
        }
    }

}

export { closeModal, loadContent, sendUpdate, openModal }
