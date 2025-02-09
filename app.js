//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Selecionando os elementos do DOM
const inputNome = document.getElementById('nomeAmigo');
const botaoAdicionar = document.getElementById('adicionar');
const listaAmigos = document.getElementById('listaAmigos');
const botaoSortear = document.getElementById('sortear');
const resultado = document.getElementById('resultado');

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
botaoAdicionar.addEventListener('click', () => {
    const nome = inputNome.value.trim();

    if (nome) {
        if (!amigos.includes(nome)) {
            amigos.push(nome);
            atualizarLista();
            inputNome.value = ''; // Limpa o campo de texto
        } else {
            alert('Este nome já foi adicionado!');
        }
    } else {
        alert('Por favor, insira um nome válido.');
    }
});

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizar
    amigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

// Função para sortear um amigo secreto
 botaoSortear.addEventListener('click', () => {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear!');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceSorteado];
    resultado.textContent = `O amigo secreto é: ${amigoSecreto}`;
});

