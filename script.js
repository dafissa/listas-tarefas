const input = document.getElementById('input')
const button = document.getElementById('button')
const display = document.getElementById('display')

function inserirTarefa(){
    let tarefa = input.value

    if(tarefa == ''){
        alert ('Favor, insira uma tarefa')
        return
    }

    display.innerHTML += 
    `<div class="tarefa">
        ${tarefa}
        <div>
            <button class="delete">Deletar</button>
            <button class="edit">Editar</button>
        </div>
    </div>`
    input.value = ''
}
button.addEventListener("click", inserirTarefa)


display.addEventListener("click", function(event){
    if(event.target.classList.contains('delete')){
        event.target.parentElement.parentElement.remove()
    }

    if(event.target.classList.contains('edit')){
        let novaTarefa = prompt("Edite sua tarefa")

        display.innerHTML = 
        `<div class="tarefa">
            ${novaTarefa}
            <div>
                <button class="delete">Deletar</button>
                <button class="edit">Editar</button>
            </div>
            </div>`
    }
})
