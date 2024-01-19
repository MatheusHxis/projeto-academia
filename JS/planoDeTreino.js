function addExercicio(){
    let addTreino = document.getElementById("exercicio").value
    let reps = document.getElementById("reps").value
    let kg = document.getElementById("kg").value

    if (addTreino && reps && kg){
        let novoExercicio = document.createElement("li")
            novoExercicio.textContent = `${addTreino} | Peso: ${kg} | reps: ${reps}`;
        document.getElementById('listaDeTreino').appendChild(novoExercicio)


        // codigo para limpa o formulario
        
        document.getElementById('addTreino').value = ""
        document.getElementById('reps').value = ""
        document.getElementById('kg').value = ""
    } else{
        alert('Por favor, preencha todos os campos.')
    }
}
document.getElementById('diasDaSemana').addEventListener('change', function(){
    let diaSelecionado = this
}

)