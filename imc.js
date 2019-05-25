
function  calculo () {
    var peso =  documento . getElementById ( " peso " ). valor ;
    var altura =  documento . getElementById ( " altura " ). valor ;
    var imc = peso / (altura * altura);
    var pesoideal =  24.9 * (altura * altura);
}

    if (imc >= 16  && imc <= 16.9 ) {alerta ( " Seu IMC E: " + imc + " \ n Você está em Muito Abaixo do Peso. \ n Seu peso E ideal: " + pesoideal);
    }
    if (imc > 16.9  && imc <= 18.4 ) {alert ( " Seu imc é: " + imc + " . \ n Você está abaixo do peso. \ n Seu peso ideal é: " + pesoideal);
    }
    if (imc > 18.4  && imc <= 24.9 ) { alert ( " Seu imc é: " + imc + " . \ n Você está com o peso normal. " );
    }
    if (imc > 24.9  && imc <= 29.9 ) {alerta ( " Seu IMC E: " + imc + " \ n Você está em Acima do peso. \ n Seu peso E ideal: " + pesoideal);
    }
    if (imc > 29.9  && imc <= 34.9 ) {alerta ( " Seu imc é: " + imc + " . \ n Você está em obesidade Grau I. \ n Seu peso ideal é: " + pesoideal);
    }
    if (imc > 34.9  && imc <= 40.9 ) {alerta ( " Seu imc é: " + imc + " . \ n Você está em obesidade Grau II. \ n Seu peso ideal é: " + pesoideal);
    }
    if (imc > 40 ) {alerta ( " Seu imc é: " + imc + " . \ n Você está em obesidade Grau III. \ n Seu peso ideal é: " + pesoideal);
}

   
   
