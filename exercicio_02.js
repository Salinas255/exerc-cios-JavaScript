/*
    2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre
    a condição de peso de uma pessoa adulta.

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condiç~çao de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 26 e 30 Acima do peso;
    - Entre 31 e 40 Obeso;
    - Acima de 40 Obesidade Grave;
*/

const peso = 96;
const altura = 1.90;

const IMC = peso / Math.pow(altura, 2);

if(IMC < 18.5) {
    console.log('Você está abaixo do peso')
} else if(IMC >= 18.5 && IMC <= 25) {
    console.log('Você está com o peso normal')
} else if(IMC >= 26 && IMC <= 30) {
    console.log('Você está acima do peso')
} else if(IMC >= 31 && IMC <= 40) {
    console.log('Você está obeso')
} else {
    console.log('Você está com obesidade grave')
}