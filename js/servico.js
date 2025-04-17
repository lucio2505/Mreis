//Animação de Movimento de Elementos ao Rolar a Página//

const moveElements = document.querySelectorAll('.move-element');

// Função para verificar se o elemento está na tela
function checkMovementOnScroll() {
    moveElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5; // Ajuste o valor para ativar mais cedo ou mais tarde

        // Se o elemento estiver na tela, adiciona a classe 'visible'
        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
}

// Adiciona o evento de rolar para verificar a posição dos elementos
window.addEventListener('scroll', checkMovementOnScroll);

// Chama a função ao carregar a página para elementos que já estão visíveis
checkMovementOnScroll();


//CARROSSEL//
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider(){
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider(){
    slider[currentSlide].classList.add('on')
}

function nextSlider() {
    hideSlider()
    if(currentSlide == slider.length -1) {
        currentSlide = 0
    }else{
        currentSlide++
    }
    showSlider()
}

function prevSlider() {
    hideSlider()
    if(currentSlide == 0) {
        currentSlide = slider.length -1
    }else{
        currentSlide--
    }
    showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

setInterval(nextSlider, 6000);

console.log(slider)

const moveElementsslider = document.querySelectorAll('.move-on-scroll');

function moveOnScroll() {
    moveElementsslider.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (position < screenPosition) {
            element.classList.add('move');
        }
    });
}

window.addEventListener('scroll', moveOnScroll);

moveOnScroll();
