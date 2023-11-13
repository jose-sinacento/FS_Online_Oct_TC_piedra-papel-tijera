// // 1. En el archivo JavaScript, agrega eventos de clic que permitan al usuario elegir su jugada y comparen el resultado.

// let arrayJuego = ['piedra', 'papel', 'tijera'];





// const jugadorUno = document.getElementsByClassName('boton-jugada');

// const resultados = document.getElementById('resultados');

// const contadorUsuario = document.getElementById('contador-usuario');

// const contadorOrdenador = document.getElementById('contador-ordenador');


// const ganador = (userChoice, computerChoice) => {
//     if (userChoice = computerChoice) {
//         return contadorUsuario ++ && contadorOrdenador ++
//     }
// }

// console.log(ganador);

// jugadorUno.addEventListener('click', function() {
//     randomNumber = Math.floor(Math.random()*3);

//         if randomNumber === 0 && jugadorUno === 'papel';
        
//         return puntosUsuario.in

//         } )


// EJERCICIO EDU 

let botones = document.querySelectorAll (".boton-jugada");

botones.forEach(boton => {
    boton.addEventListener ('click', function (){
        let eleccionjugador = this.getAttribute("data-jugada");
        resultadojugador = (eleccionjugador);
        contador ()
    });
});


let contadorordenador= 0;
let contadorjugador = 0;

function contador () {
    if (comparacion () == "empate") {
        document.getElementById("contador-ordenador").innerHTML = `Puntos de la máquina: ${contadorordenador += 1}`;
        document.getElementById("contador-usuario").innerHTML = `Tus puntos: ${contadorjugador += 1}`;
    }
    if (comparacion () == "pierdes") {
    document.getElementById("contador-ordenador").innerHTML = `Puntos de la máquina: ${contadorordenador += 1}`;
    }

    if (comparacion ( )== "ganas") {
    document.getElementById("contador-usuario").innerHTML = `Tus puntos: ${contadorjugador += 1}`;
    }
}



function comparacion() {
    if (resultadomaquina () == resultadojugador) {
    return "empate";
    } else if (resultadomaquina () == "piedra" && resultadojugador == "tijera" || resultadomaquina () == "papel" && resultadojugador == "piedra" || resultadomaquina () == "tijera" && resultadojugador == "papel") {
        return"pierdes";
    } else {
        return "ganas";
    }
}


function resultadomaquina() {
    let eleccionmaquina = Math.floor(Math.random()*3);
    if (eleccionmaquina  == 0) {
        return "piedra";
    } if (eleccionmaquina == 1) {
        return "papel";
    } if (eleccionmaquina == 2) {
         return "tijera";
    }
}
