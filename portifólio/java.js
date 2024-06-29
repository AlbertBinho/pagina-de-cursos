// Carrossel simples para imagens
let slideIndex = 0;
const intervalTime = 3000; // Tempo em milissegundos entre os slides

function showSlides() {
    const slides = document.getElementsByClassName('carousel-item');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, intervalTime);
}

// Função para avançar ou retroceder os slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Inicia o carrossel quando o documento é carregado
document.addEventListener('DOMContentLoaded', function() {
    showSlides();
});
