function validacion() {
    let number1 = Number(document.querySelector('#selector-1').value);
    let number2 = Number(document.querySelector('#selector-2').value);
    let number3 = Number(document.querySelector('#selector-3').value);

    let passInput = "" + number1 + number2 + number3;
    
    let pass1 = "911";
    let pass2 = "714";
    
    if (passInput == pass1) {
        let message = document.querySelector('#pass-message');
        message.innerHTML = "Password 1 correcto"; 
    } else if (passInput == pass2) {
        let message = document.querySelector('#pass-message');
        message.innerHTML = "Password 2 correcto"; 
    } else {
        let message = document.querySelector('#pass-message');
        message.innerHTML = "Password incorrecto";
    };
};