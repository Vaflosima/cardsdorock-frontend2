const containerRef = document.querySelector('.containerCards');

const userTituloRef = document.querySelector('#tituloCard');
const userUrlRef = document.querySelector('#urlCard');
const userDescricaoRef = document.querySelector('#descricaoCard');
const cadastroButtonRef = document.querySelector('#cadastroButton');

var formsErrors = {
    tituloCard: true,
    urlCard: true,
    descricaoCard: true
}

var userData = {

    titulo : '',
    url: '',
    descricao: ''

};

function checarFormulario() {
    
    const formErrorsArray = Object.values(formsErrors);
    const formValidacao = formErrorsArray.every(item => item === false);
    
    console.log(formValidacao);

    cadastroButtonRef.disabled = !formValidacao;

    console.log(cadastroButtonRef.disabled);

}

function validarTitulo (titulo) {
    userData.titulo = titulo;
}

function validarUrl (url) {
    userData.url = url;
}

function validarDescricao (descricao) {
    userData.descricao = descricao;
}

function validateInput (input) {

    const inputValid = input.checkValidity();
    const elementFatherRef = input.parentElement;

    if (inputValid) {
       // True
        elementFatherRef.classList.remove('error');
    } else {
        elementFatherRef.classList.add('error');
    }

    // True -> False
    formsErrors[input.id] = !inputValid;

    checarFormulario();

}


function cadastrarCard(event) {

    event.preventDefault();

    containerRef.innerHTML += `
    
    <div class="card">
        <h3> ${userData.titulo} </h3>
        <img src="${userData.url}" alt="" srcset=""> 
        <p> ${userData.descricao} </p>
    </div>
    
    `
    userTituloRef.value = '';
    userUrlRef.value = '';
    userDescricaoRef.value = '';

    cadastroButtonRef.disabled = true;
    

}

userTituloRef.addEventListener('keyup', (event) => validarTitulo(event.target.value));
userUrlRef.addEventListener('keyup', (event) => validarUrl(event.target.value));
userDescricaoRef.addEventListener('keyup', (event) => validarDescricao(event.target.value));

userTituloRef.addEventListener('keyup', () => validateInput(userTituloRef));
userUrlRef.addEventListener('keyup', () => validateInput(userUrlRef));
userDescricaoRef.addEventListener('keyup', () => validateInput(userDescricaoRef));

cadastroButtonRef.addEventListener('click', (event) => cadastrarCard(event));