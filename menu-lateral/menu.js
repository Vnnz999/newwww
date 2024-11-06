//declarar variavel da class menu 
var menui = document.querySelectorAll('.item-menu')

//seleção quando clicar nos itens
//removendo a classe ativo dde um iten que nao clicou e adicionando ao iten que clicou pra ficar selecionado
function selecionar(){
    menui.forEach((item)=>
    item.classlist.remove('ativo')
    )
    this.classlist.add('ativo')
}

//(addEventLister(click) escutador de eventos)   (click= verificar quando o usuario clicar)
menui.forEach((item)=>
    item.addEventListener('click',selecionar)
)

//expandirmenu

var btne = document.querySelector('#btn-exp')
var menul = document.querySelector('.menulateral')

btne.addEventListener('click', function(){
    menul.classList.toggle('expandir')
})


// var menui = document.querySelectorAll('.item-menu')
//var= declarar variavel; dentro do ('') chama variavel declarada no html para trabalhar no js

// Para adicionar JavaScript a um arquivo HTML, usa a tag <script></script>