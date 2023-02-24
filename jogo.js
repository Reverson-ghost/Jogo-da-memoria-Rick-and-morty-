const grid = document.querySelector('.grid'); // seleciona a classe grid

const spanPlayer = document.querySelector('.Player'); // seleciona a classe player

const timer = document.querySelector('.times'); // seleciona a classe times

const personagens = [ /*
Array onde esta localizados os personagens */

    'beth',
    'bethespacial',
    'evilmorty',
    'fred',
    'itirick',
    'jerry',
    'mortycolegial',
    'piclerick',
    'rickemortylogo',
    'rickfeliz',
    'summer',
    'wee',
    'portal',
    'frase',
    'portalrick',

];



const criarELemento = (tag, className) => {

    const elemento = document.createElement(tag);
    elemento.className = className;
    return elemento;


}

let firstCard = '';
let secondCard = '';


const checkEndGame = () => {

    const disabled = document.querySelectorAll('.disabled-card');

    if (disabled.length === 30) {

        // clearIntervals(this.loop);

        alert("Você venceu!");


    }

};
const checkCards = () => {

    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter) {

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();


    } else {

        setTimeout(() => {

            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';


        }, 500);

    }

}
const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) {

        return;
    }

    if (firstCard === '') {

        target.parentNode.classList.add('reveal-card');

        firstCard = target.parentNode;

    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');

        secondCard = target.parentNode;

        checkCards();

    }

}


const criarCarta = (personagens) => {
    /*
       const carta = document.createElement('div');
       const front = document.createElement('div');
       const back = document.createElement('div');  
       
       carta.className = 'card';
       front.className = 'face front';
       back.className = 'face back';
       para não precisar ficar repetindo o código, criamos uma função para criar elementos
       */
    const carta = criarELemento('div', 'card');
    const front = criarELemento('div', 'face front');
    const back = criarELemento('div', 'face back');

    front.style.backgroundImage = `url('Personagens/${personagens}.jpg')`;


    carta.appendChild(front);
    carta.appendChild(back);

    carta.addEventListener('click', revealCard);

    carta.setAttribute('data-character', personagens);


    return carta;
}

const loadGame = () => {

    const duplicarPersonagens = [...personagens, ...personagens];

    const embaralhar = duplicarPersonagens.sort(() => Math.random() - 0.5);


    embaralhar.forEach((personagens) => {

        const carta = criarCarta(personagens);
        grid.appendChild(carta);
    });

}

const startTimmer = () => {

    this.loop = setInterval(() => {
        tempoAtual = + timer.innerHTML;
        timer.innerHTML = tempoAtual + 1;

    }, 1000);


};


window.onload = () => {

    const playerName = localStorage.getItem('player');

    spanPlayer.innerHTML = playerName;

    loadGame();
    startTimmer();

}


