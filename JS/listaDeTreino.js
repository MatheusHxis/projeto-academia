document.addEventListener('DOMContentLoaded', function () {
    preencherListaDeExercicios();
    carregarTreinos();
});

function preencherListaDeExercicios() {
    let exercicios = [
        "Supino", "Triceps", "Voador", "Ombro", // ... até 100 exercícios
    ];

    let selectExercicios = document.getElementById('exercicios');

    exercicios.forEach(function (exercicio) {
        let option = document.createElement('option');
        option.value = exercicio.toLowerCase().replace(/\s/g, '');
        option.textContent = exercicio;
        selectExercicios.appendChild(option);
    });
}

function addExercicio() {
    let exercicios = document.getElementById('exercicios');
    let nomeTreino = document.getElementById('nomeTreino').value.trim();
    let pesoKg = parseFloat(document.getElementById('pesoKg').value);
    let reps = parseInt(document.getElementById('reps').value);
    let diaSelecionado = document.getElementById('diasDaSemana').value;

    if ((exercicios.value || nomeTreino) && pesoKg && reps) {
        let novoExerciciotexto = `${exercicios.value || nomeTreino} - Peso: ${pesoKg} kg - Repetições: ${reps}`;

        let novoExercicio = criarElementoLiComBotaoExcluir(diaSelecionado, novoExerciciotexto);

        let listaDeExercicios = document.getElementById('listaDeExercicios');
        listaDeExercicios.appendChild(novoExercicio);

        salvarTreino(diaSelecionado, novoExerciciotexto);
    } else {
        alert("Por favor, selecione um exercício ou digite o nome do treino e preencha todos os campos.");
    }
}

function criarElementoLiComBotaoExcluir(dia, texto) {
    let novoExercicio = document.createElement("li");
    novoExercicio.setAttribute("data-dia", dia);

    let textoExercicio = document.createElement("span");
    textoExercicio.textContent = texto;

    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.classList.add("excluir-treino");
    botaoExcluir.addEventListener("click", function () {
        excluirTreino(dia, texto);
    });

    novoExercicio.appendChild(textoExercicio);
    novoExercicio.appendChild(botaoExcluir);

    return novoExercicio;
}

function excluirTreino(dia, treino) {
    let listaDeExercicios = document.getElementById('listaDeExercicios');
    let treinosSalvos = JSON.parse(localStorage.getItem('treinos')) || {};

    treinosSalvos[dia] = treinosSalvos[dia].filter(function (item) {
        return item !== treino;
    });

    localStorage.setItem('treinos', JSON.stringify(treinosSalvos));

    // Remove o item da lista no DOM
    Array.from(listaDeExercicios.children).forEach(function (item) {
        if (item.getAttribute("data-dia") === dia && item.textContent.includes(treino)) {
            item.remove();
        }
    });
}

function salvarTreino(dia, treino) {
    let treinosSalvos = JSON.parse(localStorage.getItem('treinos')) || {};

    if (!treinosSalvos[dia]) {
        treinosSalvos[dia] = [];
    }

    treinosSalvos[dia].push(treino);
    localStorage.setItem('treinos', JSON.stringify(treinosSalvos));
}

function carregarTreinos() {
    let diaSelecionado = document.getElementById('diasDaSemana').value;
    let listaDeExercicios = document.getElementById('listaDeExercicios');
    listaDeExercicios.innerHTML = "";

    let treinosSalvos = JSON.parse(localStorage.getItem('treinos')) || {};

    if (treinosSalvos[diaSelecionado]) {
        treinosSalvos[diaSelecionado].forEach(function (treino) {
            if (treino.includes(diaSelecionado)) {
                let novoExercicio = criarElementoLiComBotaoExcluir(diaSelecionado, treino);
                listaDeExercicios.appendChild(novoExercicio);
            }
        });
    }
}

function limparLista() {
    let diaSelecionado = document.getElementById('diasDaSemana').value;
    let listaDeExercicios = document.getElementById('listaDeExercicios');

    // Remove os treinos específicos do dia selecionado
    Array.from(listaDeExercicios.children).forEach(function (item) {
        if (item.getAttribute("data-dia") === diaSelecionado) {
            item.remove();
        }
    });

    // Atualiza o localStorage apenas para o dia selecionado
    let treinosSalvos = JSON.parse(localStorage.getItem('treinos')) || {};
    treinosSalvos[diaSelecionado] = [];
    localStorage.setItem('treinos', JSON.stringify(treinosSalvos));
}
