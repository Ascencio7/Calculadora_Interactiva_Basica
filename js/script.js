// declaro la variable a usar
let pantalla = document.getElementById('pantalla');

// creo la funcion para agregar valores
function agregar(valor){
    pantalla.value += valor;
}

// creo la funcion para calcular
function calcular(){
    try{
        pantalla.value = eval(pantalla.value);
    }catch{
        pantalla.value = 'Error';
    }
}

// creo la funcion para limpiar la pantalla
function borrar(){
    pantalla.value = '';
}
  

// Agregar el el teclado
document.addEventListener('keydown', function(event) {
    const tecla = event.key;

    // Verifica si la tecla es un numero o un operador
    if(/[\d+\-*/.]/.test(tecla)){
        agregar(tecla);
    }

    // Verifica si la tecla es Enter o = para calcular
    if(tecla === 'Enter' || tecla === '='){
        calcular();
    }

    // El backspace elimina uno por uno el numero
    if(tecla === 'Backspace'){
        pantalla.value = pantalla.value.slice(0, -1);
        event.preventDefault(); // Evita que borre el foco
    }

    // Y verifica si la tecla es Escape para limpiar
    if(tecla === 'Escape'){
        borrar();
    }

} )