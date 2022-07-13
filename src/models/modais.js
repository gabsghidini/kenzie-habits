
function modalCreateHabits(){
    let div =document.createElement("div")
    div.innerHTML='<div class="body_modal"> <div class="modal_habits" id="modal_box"><div class="upside"><h1>Criar Hábito</h1><div class="close_card_div"><i class="close_card_button">x</i></div></div><form class="modal_form"><label for="Título" class="text">Título</label><input type="text" name="Título" id="title" placeholder="Digitar Título"><label for="Descrição" class="text">Descrição</label><input type="text" name="Descrição" id="description" placeholder="Digitar descrição"><label for="category" class="text">Categoria</label><select id="category" name="category"><option selected disabled>Selecionar Categoria</option><option value="saude">Saúde</option><option value="estudos">Estudos</option><option value="casa">Casa</option><option value="trabalho">Trabalho</option><option value="lazer">Lazer</option></select><button type="submit" class="send">Inserir</button></form></div></div>'
    let body = document.querySelector("body")
    body.appendChild(div)
    return div
}

function modalDeleteHabit(){
    let div =document.createElement("div")
    div.innerHTML='<div class="body_modal"><div class="modal_habits--delete" id="modal_box" ><div class="upside"><h1>Excluir hábito</h1><div class="close_card_div"><i class="close_card_button">x</i></div></div><h2>Certeza que deseja excluir esse hábito?</h2><h3>Após executar essa ação não será possível desfazer</h3><form class="modal_form_delete"><button type="submit" class="sendDecision" id="cancel" >Cancelar</button><button type="submit" class="sendDecision" id="delete">Sim, excluir esse hábito</button></form></div></div>'
    let body = document.querySelector("body")
    body.appendChild(div)
    return div

}
function modalEditProfile(){
    let div =document.createElement("div")
    div.innerHTML='  <div class="body_modal"><div class="modal_editar--perfil" id="modal_box"><div class="upside"><h1>Editar Perfil</h1><div class="close_card_div"><i class="close_card_button">x</i></div></div><form class="modal_form"><label for="Nome" class="text">Nome</label><input type="text" name="Nome" id="name" placeholder="Digitar Nome"><label for="URL" class="text">URL da imagem do perfil</label><input type="url" name="url" id="url" placeholder="Digitar URL"><button type="submit" class="send" >Salvar Alterações</button></form></div></div>'
    let body = document.querySelector("body")
    body.appendChild(div)
    return div

}

modalCreateHabits()
modalDeleteHabit()
modalEditProfile()
