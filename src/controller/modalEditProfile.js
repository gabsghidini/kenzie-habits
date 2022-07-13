import User from "../models/user.models.js";
import UserController from "./user.controller.js";


document.addEventListener("DOMContentLoaded", loadContent);

function loadContent() {

    let nameInput = document.querySelector("#name");
    let urlInput = document.querySelector("#url");

    let storedUser = UserController.getLoggedUserIformation()
    if (storedUser == null) {
        return;
    }
    nameInput.value = storedUser.usr_name;
    urlInput.value = storedUser.usr_image;

    let closeModalButton = document.querySelector(".close_card_div")
    closeModalButton.addEventListener("click", function(){closeModal('.modal_editar--perfil')})

    let modalForm = document.querySelector(".modal_form")
    modalForm.addEventListener("submit", function(e){sendUpdate(e)})

}

function closeModal(elementToClose) {
    document.querySelector(elementToClose).style.display = "none"
}

function sendUpdate(event){
    
    event.preventDefault()

    let nameValue = document.querySelector("#name").value;
    let urlValue = document.querySelector("#url").value;
    
    let userToUpdate = new User(nameValue,"", urlValue)
    
    UserController.updateUser(userToUpdate)
}

export default {closeModal, loadContent, sendUpdate}