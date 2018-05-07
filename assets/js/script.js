// var array = [{}
// ];

<<<<<<< HEAD
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
    var teste = visor.value.search("-");
    if (teste == -1){
        visor.value=visor.value+"-";
    }
    else{
        visor.value=visor.value+"";   
    }
    //alert ('teste');
}
function calcNum(valor) {		
=======
// function addData(){
//     var valor1 = document.getElementsByClassName("valor1").value;
//     var valor2 = document.getElementsByClassName("valor2").value;
//     var oper = document.getElementsByClassName("oper").value;
//     array.unshift({"valor1":valor1 , "valor2":valor2 ,"oper":oper });
// }

var visor = document.getElementById('visor');
visor.focus();

function calcNum(valor) {
		
>>>>>>> d3304d63f4bb3e08f119eca304062825e9515e84
    var n = visor.value;
    visor.value = n + valor;
    visor.focus();
}

<<<<<<< HEAD
function calcOper() {
    var num = 0;
    num = visor.value;
    resultado.value = eval(num); 
}


=======
function sinal(oper) {
    var si = visor.value;
    visor.value = si + " " + oper + " ";
}
 
//  Função que executa as operações básicas da calculadora
function calcOper() {
    vet = visor.value;
    vet2 = vet.split(' ');
    switch(vet2[1]) {
        case '*':
            resultado = vet2[0] * vet2[2];
            break;
        case '/':
            resultado = vet2[0] / vet2[2];
            break;
        case '+':
            resultado = parseFloat(vet2[0]) + parseFloat(vet2[2]);
            break;
        case '-':
            resultado = vet2[0] - vet2[2];
            break;

    }
    visor.value = resultado;
    return true;
}
//  function calcOper(oper, valor1, valor2) {
//     if (oper == "somar") {
//        var valor = parseFloat(valor1) + parseFloat(valor2);
//     } else {
//        if (oper == "subtrair") {
//           var valor = valor1 - valor2;
//        } else {
//           if (oper == "multiplicar") {
//              var valor = valor1 * valor2;
//           } else {
//              var valor = valor1 / valor2;
//           }
//        }
//     }
 
//     return(valor);
//  }
 
 function calcLimpar() {
    document.getElementById('visor').value = "";
}
>>>>>>> d3304d63f4bb3e08f119eca304062825e9515e84
