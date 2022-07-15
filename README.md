## Principais conceitos utilizados

OOP

1.  Sintaxe de classe
2.  Classes estáticas

Desconstrução
Consumo de API;
LocalStorage.
Manipulação dos elementos com o DOM

## Requisitos técnicos/funcionalidades

- **Mobile first:**

  1.  Tela de login feita em mobile first
  2.  Tela homepage feita em mobile first

- **Tela de Login:**

  1.  Tem aparência semelhante ao figma
  2.  Botão "Entrar" deve percorrer o formulário e realizar a requisição de login
  3.  Caso a requisição esteja correta deve adicionar o token e dados do usuário no localstorage
  4.  Redirecionar para a homepage caso o email e senha estejam corretos
  5.  Retorno visual caso o usuário passar dados inválidos no input

      [documentação input invalid](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid)

- **Tela Homepage:**

  1.  Deve ter aparência semelhante ao figma
  2.  Realizar a requisição de pegar os hábitos
  3.  Deve renderizar o nome e imagem do usuário (será necessário realizar uma requisição para pegar os dados do usuário)
  4.  Ao clicar na foto do usuário deve abrir um dropDownMenu com os as funcionalidades de editar perfil e sair/logout

      [documentação dropDownMenu](https://www.w3schools.com/css/css_dropdowns.asp)

  5.  No dropDownMenu na opção de editar perfil deve abrir menu de edição do usuário
  6.  No dropDownMenu na opção de sair/logout deve apagar os dados do localstorage e redirecionar o usuário para a página de login
  7.  Adicionar a lista de habitos a página
  8.  Botão de "Concluídos" deve exibir apenas os hábitos concluídos
  9.  Botão "Todos" deve exibir todos os hábitos do usuário
  10. Botão "Criar" deve abrir modal para criar novos hábitos

  11. "..." deve abrir modal de atualização de hábitos

  12. Dentro do modal de atualização de hábitos também deve ter a opção de excluir que realiza a requisição de deletar hábito

  13. Checkbox deve realizar uma requisição de atualizar o hábito o tornando concluído ou não concluído

- **Modais:**

1.  Devem ter a aparência semelhante ao figma
2.  Os modais devem ser construídos com formulários
3.  Deve capturar as informações do formulário
4.  Realizar as requisições de acordo com o tipo de formulário, criar, atualizar ou deletar
5.  Retorno visual caso o usuário passar dados inválidos no input

    [documentação input invalid](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid)

## Extras:

- Animação nos botões
- Animação durante as transições de tela
- Animação durante o popup dos modais
- Padronização nos nomes das branches
- Os commits seguem um padrão

  [Padrão de commits Coventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/)

- Estilização da checkbox
- Popup de erro para as requisições

## Layout - Kenzie Habit

Você e sua equipe deverão seguir o layout proposto, [Clique aqui](https://www.figma.com/file/3hcoHtXlfxGQjUhd4tb6G8/M2-CAPSTONE?node-id=2%3A232) para acessar o figma!

## API - Kenzie Habits

Você deverá seguir os padrões estabelecidos pela API, para realizar as requisições [Clique aqui](https://kenzie-academy-brasil-developers.github.io/habits-kenzie-doc/)

## Iniciando desenvolvimento:

Para iniciar, acesse esse [link](https://classroom.github.com/a/jQYkT2AH) e clone o repositório. Todos irão trabalhar no mesmo repositório, então **apenas o líder (scrum master) irá clonar** e os demais integrantes do grupo deverão ser adicionados ao repositório e realizar o clone.

Ao clonar o repositório já será dada uma estrutura básica para o projeto. Essa estrutura é um modelo que sugerimos que sigam, mas cabe ao grupo decidir usar ou seguir uma outra estrutura, fiquem a vontade para alterar como preferirem, mas será exigido que exista uma organização dos arquivos e pastas.

- **Assets:**

  Nesta pasta são armazenados arquivos de imagens(png, svg, jpg), logos e icones

- **Models:**

  Nas models ficam seus arquivos de classes referêntes a instâncias, como Pet, Pessoa, Empresa, Banco, etc

- **Controller:**

  Nesta pasta serão feitas suas classes estáticas como requisições para API, criação de elementos DOM, uso das classes modelo entre outras funções que necessite

- **Views:**

  Na pasta views, devem ser armazenados seus arquivos de páginas html, como dashboard, homepage, login, register, etc

- **Script:**

  Na pasta scripts são adicionados seus arquivos de js referentes as paginas, onde serão chamadas as funções vindas dos controller para realizar a construção da página

- **Css:**

  Na pasta css são adicionados seus arquivos de estilização, reset.css, style.css, entre outros paginas de estilização que achar necessário

**Aviso**

Durante o desenvolvimento o repositório deve permanecer private, após as apresentações poderá ficar público e compartilhar nas redes sociais.

---

## Entrega

Faça o push do código para o seu repositório GitHub e implemente-o GitHub pages. Não esqueçam de colocar o repositório como **Private** e adicionar em **Configurações -> Colaboradores e Times**, o time **team-m2-correcoes**. No Canvas, por favor, enviar a url do GitHub Pages: (ex: https://nomedeusuario.github.io/oregon-trail-inheritance), enviar o link do repositório e o nome de todos os integrantes da equipe nos comentários.
