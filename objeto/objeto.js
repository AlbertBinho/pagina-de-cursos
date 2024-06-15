class Pessoa {
    nome
    foto
    idade
    cidade
    sexo
    profissao
    escolaridade

    constructor(nome, foto, idade,cidade,sexo,profissao,escolaridade){
        this.nome = nome
        this.foto = foto
        this.idade = idade
        this.cidade = cidade
        this.sexo = sexo
        this.profissao = profissao
        this.escolaridade = escolaridade

    }

    apresentar(){
        const apresentacao = `Olá me chamo ${this.nome} , tenho ${this.idade} anos de idade , moro na ${this.cidade} , e minha profissão é ser ${this.profissao}`
        console.log(apresentacao)
    }
}

const pessoas = []
pessoas.push(new Pessoa('Albert', 'motomoto.jpg', 18 , 'Aluminío' , 'M' , 'Estudante', 'Superior'))
pessoas.push(new Pessoa('Naruto Uzumaki', 'nana.jpeg', 33 , 'Aldeia da Folha' , 'M' , 'Hokage',"Sem escola"))
pessoas.push(new Pessoa('Goku','goku.jpg', 36 , 'Planeta Vegeta' , 'M' ,'Ajudar as pessoas', 'Ensino médio' ))
pessoas.push(new Pessoa('Peter Parker','peter.jpeg', 17 , 'Queens' , 'M' ,'Fotógrafo', 'Ensino técnico' ))
const cartoesPessoas = document.querySelector('.pessoas')
pessoas.forEach(pessoa =>{

    const cartao = document.createElement('div')
    cartao.classList.add('cartao')

    const foto = document.createElement('img')
    foto.classList.add('foto')
    foto.setAttribute('src', pessoa.foto)

    const nome = document.createElement('h2')
    nome.classList.add('nome')
    nome.textContent = pessoa.nome

    const idade = document.createElement('p')
    idade.classList.add('idade')
    idade.textContent = pessoa.idade

    const cidade = document.createElement('p')
    cidade.classList.add('cidade')
    cidade.textContent = pessoa.cidade

    const profissao = document.createElement('p')
    profissao.classList.add('profissao')
    profissao.textContent = pessoa.profissao

    const escolaridade = document.createElement('p')
    escolaridade.classList.add('escolaridade')
    escolaridade.textContent = pessoa.escolaridade

    cartao.appendChild(foto)
    cartao.appendChild(nome)
    cartao.appendChild(idade)
    cartao.appendChild(cidade)
    cartao.appendChild(profissao)
    cartao.appendChild(escolaridade)
    cartoesPessoas.appendChild(cartao)

})



