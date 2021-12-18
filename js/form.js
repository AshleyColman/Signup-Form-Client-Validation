const submit = document.querySelector('.form-button');
const inputs = document.querySelectorAll('input');
submit.addEventListener('click', validateAllInputs)

function validateAllInputs() {
    for (const input of inputs) {
        checkIfInputEmpty(input, input.value);
        validateIfEmail(input.value, input);
    }
}

function checkIfInputEmpty(_input, _inputValue) {
    if (_inputValue === '') {
        addErrorClass(_input);
    }
    else
    {
        removeErrorClass(_input);
    }
}

function validateIfEmail(_email, _input) 
{
    if (_input.type == 'email') {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(_email))
        {
            removeErrorClass(_input);
        }
        else
        {
            addErrorClass(_input);
        }
    }
}

function addErrorClass(_input) {
    _input.parentElement.classList.add('error');
}

function removeErrorClass(_input) {
    _input.parentElement.classList.remove('error');
}