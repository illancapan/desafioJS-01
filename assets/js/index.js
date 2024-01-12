// elementos del DOM
const cantidadDom = document.querySelector('.cantidad');
const precioInicial = document.querySelector('.precio-inicial');
const valorTotal = document.querySelector('.valor-total');
const aumentarBoton = document.querySelector('.card button:nth-of-type(1)');
const disminuirBoton = document.querySelector('.card button:nth-of-type(2)');

// defino variables entregadas
const precioBase = 400000;
let cantidad = 0;

// funcion para actualizar el total
function cantidadTotal() {
  const total = precioBase * cantidad;
  valorTotal.innerHTML = total.toLocaleString();
}

// boton de aumento
aumentarBoton.addEventListener('click', function () {
  cantidad++;
  cantidadDom.innerHTML = cantidad; //CREO QUE ES MAS ADECUADO TEXTCONTENT, POR UN TEMA DE SEGURIDAD. EL EJERCICIO ME SOLICITA INNERHTML PERO EN MI CASO UTILIZARIA TEXTCONTENT
  cantidadTotal();
});

// boton de disminucion
disminuirBoton.addEventListener('click', function () {
  if (cantidad > 0) {
    cantidad--;
    cantidadDom.innerHTML = cantidad;
    cantidadTotal();
  }
});

// iniciar valores
cantidadDom.innerHTML = cantidad;
precioInicial.innerHTML = precioBase.toLocaleString();
cantidadTotal();
