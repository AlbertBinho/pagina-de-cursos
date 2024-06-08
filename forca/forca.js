const teclado = document.querySelector('.teclado')
let palavraSecreta = ''
let tentativas = 6
const img = document.querySelector('.img-forca')
let letrasCorretas = []
let palavraEmFormacao = ''


// Clique do teclado 
teclado.addEventListener('click', (event) => {

    if (!event.target.classList.value.includes('teclado')) {
        //só entra aqui se não tiver a classe teclado
        event.target.style.backgroundColor = '#DD5746'
        const letra = event.target.textContent

        if (palavraSecreta.includes(letra)) {
            letrasCorretas.push(letra)
        } else {
            tentativas = tentativas - 1
        }

        if (tentativas === 6) {
            img.setAttribute('src', './img/robo_forca_0.png')
        }
        else if (tentativas === 5) {
            img.setAttribute('src', './img/robo_forca_1.png')
        }
        else if (tentativas === 4) {
            img.setAttribute('src', './img/robo_forca_2.png')
        }
        else if (tentativas === 3) {
            img.setAttribute('src', './img/robo_forca_3.png')
        }
        else if (tentativas === 2) {
            img.setAttribute('src', './img/robo_forca_4.png')
        }
        else if (tentativas === 1) {
            img.setAttribute('src', './img/robo_forca_5.png')
        }
        else if (tentativas === 0) {
            img.setAttribute('src', './img/robo_forca_6.png')

            alert(`Você perdeu ! A palavra secreta era ${palavraSecreta}`)
        }

        exibirPalavra()
        


    }




})

// capturas dos valores de novo jogo 
const inputPalavraSecreta = document.querySelector('.palavra-secreta')
const inputPalavraDica = document.querySelector('.palavra-dica')
const dica = document.querySelector('.dica')
const botaoIniciar = document.querySelector('.botao-iniciar')

botaoIniciar.addEventListener('click', (event) => {
    palavraSecreta = inputPalavraSecreta.value.toUpperCase()
    
    exibirPalavra()
    inputPalavraDica.value = ''
    inputPalavraSecreta.value = ''

})

const saidaPalavraSecreta = document.querySelector('.saida-palavra-secreta')
function exibirPalavra() {
    dica.textContent = inputPalavraDica.value
    palavraEmFormacao = ''

    for (letra in palavraSecreta)
        if(letrasCorretas.includes(palavraSecreta[letra])){
            palavraEmFormacao = palavraEmFormacao + ' ' + palavraSecreta[letra] + ' '

        }else{
            palavraEmFormacao = palavraEmFormacao + ' _ ' 

        }
        saidaPalavraSecreta.textContent = palavraEmFormacao







}