const input = document.getElementById('input')
const button = document.getElementById('add')
const display = document.getElementById('display')


function salvarLista(){

    let lista = []

    document.querySelectorAll('.tarefa').forEach(tarefa => {
        lista.push(
            tarefa.querySelector('.item').textContent +
            ' - ' +
            tarefa.querySelector('.qtd').textContent
        )
    })

    localStorage.setItem('listaCompras', lista)
}

function inserirItem(){
    let item = input.value

    if(item == ''){
        alert('Favor, insira um item')
        return
    }

    display.innerHTML +=
    `<div class="tarefa">
        <span class="item">${item}</span>

        <div class="quantidade">
            <button class="menos">-</button>
            <span class="qtd">1</span>
            <button class="mais">+</button>
        </div>

        <div>
            <button class="delete">Deletar</button>
            <button class="edit">Editar</button>
        </div>
    </div>`

    input.value = ''

    salvarLista()
}

button.addEventListener("click", inserirItem)

display.addEventListener("click", function(event){

    const tarefa = event.target.closest('.tarefa')

    if(event.target.classList.contains('delete')){
        tarefa.remove()
        salvarLista()
    }

    if(event.target.classList.contains('edit')){

        const item = tarefa.querySelector('.item')

        let novoItem = prompt(
            "Edite o item",
            item.textContent
        )

        if(novoItem){
            item.textContent = novoItem
            salvarLista()
        }
    }

    if(event.target.classList.contains('mais')){

        const qtd = tarefa.querySelector('.qtd')

        qtd.textContent = Number(qtd.textContent) + 1

        salvarLista()
    }

    if(event.target.classList.contains('menos')){

        const qtd = tarefa.querySelector('.qtd')

        if(qtd.textContent > 1){
            qtd.textContent--
            salvarLista()
        }
    }
})
