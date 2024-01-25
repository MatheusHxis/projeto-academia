function addExercicio() {
    let addTreino = document.getElementById("exercicio").value
    let reps = document.getElementById("reps").value
    let kg = document.getElementById("kg").value
    let diasDaSemana = document.getElementById('diasDaSemana').value
    

    if (addTreino && reps && kg) {
        let novoExercicioTexto = document.createElement("li")
        novoExercicioTexto.textContent = `${addTreino} | Peso: ${kg} | reps: ${reps}`;
        
        document.getElementById('listaDeTreino').appendChild(novoExercicioTexto)


        let novoExercicio = document.createElement('li')

        let textoExercicio = document.createElement('span');
        textoExercicio.textContent = novoExercicioTexto

        novoExercicio.appendChild(textoExercicio)

        let listaDeExerciciosDia = document.getElementById(`listaDeExercicios -${diasDaSemana}`)

        listaDeExerciciosDia.appendChild(novoExercicio)

        // codigo para limpa o formulario

        document.getElementById('addTreino').value = ""
        document.getElementById('reps').value = ""
        document.getElementById('kg').value = ""
    } else {
        alert('Por favor, preencha todos os campos.')
    }
}
