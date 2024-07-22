// Capturando o elemento pai, para colocar o título dentro desse elemento
let corpo = document.querySelector("body");
// Criando um Elemento chamado título
let titulo = document.createElement("h1");
// Colocando um id no Elemento chamado título
titulo.id ="titulo";
// Adicionando o nome do título
titulo.innerText = "Esse aqui é o Título";
// Adicionando o elemento título no DOM
corpo.appendChild(titulo);

// _______________________________________

let div = document.createElement("div");
div.id = "produtos";
// Usando innerHTML, para que possamos utilizar os comandos do HTML... Ex:<h3></h3>
// Usando Template Strings `` para que possamos fazer tudo em uma só string.
div.innerHTML = (`
    <div>
    <img src="https://i.pinimg.com/564x/41/34/9b/41349b20dcade9a639847b531d507e3a.jpg" width=200px alt="Produto">
    <h3>"Nome Do Produto"</h3>
    <p>Um <strong>produto</strong> de fato curioso, que voce ainda deve colocar para que possamos vender.</p>
    <p id="Valor">R$ 00.00</p>
    </div>`);
corpo.appendChild(div);
