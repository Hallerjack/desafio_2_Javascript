function verificar() {
    let input1 = Number(document.querySelector('#input-1').value);
    let input2 = Number(document.querySelector('#input-2').value);
    let input3 = Number(document.querySelector('#input-3').value);
    
    let suma = input1 + input2 + input3;
    if (suma >= 10) {
        let message = document.querySelector('#message');
        message.innerHTML = "Llevas demasiados stickers";
    } else if (suma < 10) {
        message.innerHTML = "Llevas" + " " + suma + " " + "stickers";
    } else {
        message.innerHTML = "Ingresa solo números";
    };
};