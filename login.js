const input = document.querySelector('.login_input');
const button = document.querySelector('.btn');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {//função que vai ser executada quando o input for alterado
    if (target.value.length > 3) {//se o input tiver mais de 3 caracteres, o botão é habilitado e a função é finalizada
        button.removeAttribute('disabled');//habilita o botão
        return;//se o input tiver mais de 3 caracteres, o botão é habilitado e a função é finalizada
    }

    button.setAttribute('disabled', '');//desabilita o botão
}

const handleSubmit = (event) => { //função que vai ser executada quando o form for submetido
    event.preventDefault(); //previne o comportamento padrão do form

    localStorage.setItem('player', input.value);//armazenando o nome do player no local storage
    window.location = 'jogo.html';//redirecionando para a página do jogo
}

input.addEventListener('input', validateInput);//adicionando um evento de input no input
form.addEventListener('submit', handleSubmit);//adicionando um evento de submit no form