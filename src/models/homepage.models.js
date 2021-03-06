export default class Homepage {
	constructor(id, title, description, category, status) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.category = category;
		this.status = status;
	}

	getCardTitle() {
		const card = document.createElement("div");
		const h1 = document.createElement("h1");
		const buttonTodos = document.createElement("button");
		const buttonConcluidos = document.createElement("button");
		const buttonCriar = document.createElement("button");

		card.classList.add("container--title");
		buttonTodos.classList.add("container--title--buttonTodos");
		buttonConcluidos.classList.add("container--title--buttonConcluidos");
		buttonCriar.classList.add("container--title--buttonCriar");

		h1.innerText = "Tarefas";
		buttonTodos.innerText = "Todos";
		buttonConcluidos.innerText = "Concluidos";
		buttonCriar.innerText = "Criar";

		card.append(h1, buttonTodos, buttonConcluidos, buttonCriar);

		return card;
	}

	getCardHabitsTitle() {
		const header = document.createElement("div");
		const statusHeader = document.createElement("p");
		const statusTitle = document.createElement("p");
		const statusDescription = document.createElement("p");
		const statusCategory = document.createElement("p");
		const statusEdit = document.createElement("p");

		header.classList.add("container--habits--header");
		statusHeader.classList.add("container--habits--headerStatus");
		statusTitle.classList.add("container--habits--headerTitle");
		statusDescription.classList.add("container--habits--headerDescription");
		statusCategory.classList.add("container--habits--headerCategory");
		statusEdit.classList.add("container--habits--headerEdit");

		statusHeader.innerText = "Status";
		statusTitle.innerText = "Título";
		statusDescription.innerText = "Descrição";
		statusCategory.innerText = "Categoria";
		statusEdit.innerText = "Editar";


		header.append(
			statusHeader,
			statusTitle,
			statusDescription,
			statusCategory,
			statusEdit
		);

		return header;
	}

	getCardHabitsDate() {
		const dataLabel = document.createElement("label");
		dataLabel.id = "label_" + this.id
		const data = document.createElement("div");
		const dataInput = document.createElement("input");
		const dataTitle = document.createElement("p");
		const dataDescription = document.createElement("p");
		const dataCategory = document.createElement("p");
		const dataCategorySpan = document.createElement("span");
		const dataEdit = document.createElement("p");
		const dataButton = document.createElement("button");

		data.classList.add("container--habits--data");
		dataTitle.classList.add("container--habits--dataTitle");
		dataTitle.id = "title_" + this.id;
		dataDescription.classList.add("container--habits--dataDescription");
		dataDescription.id = "description_" + this.id;
		dataCategory.classList.add("container--habits--dataCategory");
		dataEdit.classList.add("container--habits--dataEdit");
		dataEdit.id = "edit_" + this.id;
		dataEdit.setAttribute("onclick", "loadEditModal('"+this.id+"')"); 

		const id = this.id;
		dataInput.type = "checkbox";
		dataInput.id = id;	
		dataInput.classList.add("checkbox")
		dataInput.name = "checkbox" + this.id;
		dataInput.value = "checkbox" + this.id;
		
		if (this.status) {
			dataInput.checked = true
		}

		dataLabel.for = dataInput.name;
		dataTitle.innerText = this.title;
		dataDescription.innerText = this.description;

		dataCategorySpan.innerText = this.category;
		dataCategorySpan.id = "category_" + this.id
		dataCategory.appendChild(dataCategorySpan);

		dataButton.innerText = "•••";
		dataEdit.appendChild(dataButton);

		data.append(
			dataInput,
			dataTitle,
			dataDescription,
			dataCategory,
			dataEdit
		);
		dataLabel.appendChild(data);

		return dataLabel;
	}

	getCardFooter() {
		const footer = document.createElement("div");
		const footerButton = document.createElement("input");
	
		footerButton.classList.add("container--habits--footer--btn");
		footer.classList.add("container--habits--footer");

	
		footerButton.value = "Atualizar"
		footerButton.id = "btnReload"
		footerButton.type = "button"
		footerButton.setAttribute("onclick", "window.location.reload()");
		footer.append(footerButton);

		return footer;
	}
}



