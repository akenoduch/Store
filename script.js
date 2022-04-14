const items = [
    {
        id: 0,
        nome: "Blusa",
        preco: 199.99,
        img: "./Assets/blusa.jpg",
        quantidade: 0,
        preco: 50.15
    },
    {
        id: 1,
        nome: "Bermuda",
        preco: 159.99,
        img: "./Assets/bermuda.jpg",
        quantidade: 0,
        preco: 30.50
    },
    {
        id: 2,
        nome: "Boné",
        preco: 109.99,
        img: "./Assets/bone.jpg",
        quantidade: 0,
        preco: 40.99
    },
    {
        id: 3,
        nome: "Boné",
        img: "./Assets/bone.jpg",
        quantidade: 0,
        preco: 60.0
    },
]


// function items(id, nome, img, quantidade){
//     this.id = id;
//     this.nome = nome;
//     this.img = img;
//     this.quantidade = quantidade;
// }

// var a = new items(0, Blusa, "./Assets/blusa.jpg", 0)

inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        containerProdutos.innerHTML+= `
        
        <div class='produto-single'>
            <img src="`+val.img+`" />
            <p id='descrição'>`+val.nome+`</p>
            <p id='descrição'>`+val.preco+`</p>
            <a key="`+val.id+`" href="#">Adicionar ao carrinho! <a/>
        </div>
        
        `;
    })
}

inicializarLoja();

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    items.map((val)=>{
        if(val.quantidade > 0){
        containerCarrinho.innerHTML+= `
        <div class="display-carrinho">
            <p style="float:left;">`+val.nome+`</p>
            <p style="float:right;">R$ `+val.preco+`</p>
            <p id="quantidade-valor"style="float:right;">Quantidade: `+val.quantidade+`</></p>
            <div style="clear:both"></div>
        </div>
        `;
        }
    })
}


let precoFinal = 0;
function valorTotal(precoProduto){
    precoFinal = precoProduto + precoFinal;
    document.getElementById('total').innerHTML = precoFinal;
}

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener('click',function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        valorTotal(items[key].preco);
        return false;
    })
}

// pegar dados da tela e fazer o calculo
// criar botão para visualizar o preço final ou usando a função preçoFinal