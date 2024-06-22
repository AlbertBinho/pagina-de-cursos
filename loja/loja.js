class Produto {
    constructor(titulo, preco, descricao, categoria, imagem, quantidade) {
        this.titulo = titulo;
        this.preco = preco;
        this.descricao = descricao;
        this.categoria = categoria;
        this.imagem = imagem;
        this.quantidade = quantidade;
    }
}

const produtos = [];
fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
        json.forEach(item => {
            const produto = new Produto(
                item.title,         // aqui estava item.title, alterado para item.titulo
                item.price,
                item.description,
                item.category,
                item.image,
                1                   // item.rating.count não está disponível no JSON, coloquei 1 como padrão
            );
            produtos.push(produto);
        });
        atualizarHtml();
    });

function atualizarHtml() {
    const cartoesProdutos = document.querySelector('.produtos'); // renomeei para cartoesProdutos
    
    produtos.forEach(produto => {
        const cartao = document.createElement('div');
        cartao.classList.add('cartao');
    
        const titulo = document.createElement('h2');
        titulo.classList.add('titulo');
        titulo.textContent = produto.titulo;
    
        const preco = document.createElement('p');
        preco.classList.add('preco');
        preco.textContent = produto.preco;
    
        const descricao = document.createElement('p');
        descricao.classList.add('descricao');
        descricao.textContent = produto.descricao;
    
        const categoria = document.createElement('p');
        categoria.classList.add('categoria');
        categoria.textContent = produto.categoria;
    
        const foto = document.createElement('img');
        foto.classList.add('foto');
        foto.setAttribute('src', produto.imagem); // corrigido para produto.imagem
    
        cartao.appendChild(titulo);
        cartao.appendChild(foto);
        cartao.appendChild(preco);
        cartao.appendChild(descricao);
        cartao.appendChild(categoria);
        
       
        cartoesProdutos.appendChild(cartao); // corrigido para cartoesProdutos
    });
}
