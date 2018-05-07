
var array = [];
var visor = document.getElementById ('visor');
var resultado = document.getElementById ('resultado');
visor.focus();

function calcLimparC() {
    visor.value = "";
    resultado.value = "";
}

function calcLimparCE() {
    resultado.value = "";
}

function maisMenos (){
        visor.value=visor.value*(-1);
}

function calcNum(valor) {		
    var n = visor.value;
    visor.value = n + valor;
    visor.focus();
}

function calcOper() {
    var num = 0;
    num = visor.value;
    resultado.value = eval(num); 
}


