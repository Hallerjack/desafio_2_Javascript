let cantidadClicks = 0;

function clickImagen() {
    cantidadClicks = cantidadClicks + 1;
    
    let imagen = document.getElementById('img-problem-1');
    
    if (cantidadClicks % 2 === 0) {
        imagen.style.border = '0';
    } else {
        imagen.style.border = 'solid 2px red';
    };    
};