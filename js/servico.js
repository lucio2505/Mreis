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
    const carrosseis = document.querySelectorAll('.carrosel-conteiner');

        carrosseis.forEach(container => {
    const images = container.querySelectorAll('img');
    const imgWidth = 152 + 10; // largura da imagem + gap
    let index = 0;

    function moveCarrosel() {
        index++;
        if (index > images.length - 5) {
            index = 0;
        }
        container.style.transform = `translateX(-${index * imgWidth}px)`;
    }

    setInterval(moveCarrosel, 3000);
    });
