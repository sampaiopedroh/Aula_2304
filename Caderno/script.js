//Random, Rounded e RoundedUp
/*let randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);

let rondedNumber = Math.random(3.7);
console.log(rondedNumber);

let roundedUpNumber = Math.ceil(4.2);
console.log(roundedUpNumber);*/

// Jogo de Dados
/*function rollDice(){
    return Math.floor(Math.random() * 6 + 1);
}

function playDiceGame(){
    let dice1 = rollDice();
    let dice2 = rollDice();

    let total = dice1 + dice2;

    console.log("Você lançou os dados...");
    console.log("Dado 1:", dice1);
    console.log("Dado 2:", dice2);
    console.log("Total:", total);
}

playDiceGame();*/

// Date
/*let data =  new Date();

let data2 = new Date();
let ano = data2.getFullYear();
let mes = data2.getMonth();
let dia = data2.getDate();
let diaDaSemana = data2.getDay();
let hora = data2.getTime();
let minuto = data2.getMinutes();
let segundo = data2.getSeconds();
let miliSegundo = data2.getMilliseconds();

let data3 = new Date();
data3.setFullYear(2022);
data3.setMonth(11);
data3.setDate(31);
data3.setHours(23);
data3.setMinutes(59);
data3.setSeconds(59);
data3.setMilliseconds(999);

let data4 = new Date();
let dia2 = data4.getDate();
let mes2 = data4.getMonth() + 1;
let ano2 = data4.getFullYear();
let dataFormatada = `${dia}/${mes}/${ano}`;
console.log(dataFormatada);

const data5 = new Date('2024-04-23');
data5.setDate(data5.getDate() + 7);
console.log(data5);*/

// Exemplo de Date
/*let dataAtual = new Date();

let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth();
let dia = dataAtual.getDate();
let hora = dataAtual.getHours();
let minuto = dataAtual.getMinutes();
let segundo = dataAtual.getSeconds();
let diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
let diaDaSemana = diasDaSemana[dataAtual.getDay()];

console.log("Data de agora:");
console.log("- Ano:", ano);
console.log("- Mês:", mes);
console.log(`- Dia: ${dia} (${diaDaSemana})`);
console.log("- Hora:", hora);
console.log("- Minuto:", minuto);
console.log("- Segundos:", segundo);*/

function datas(){
    let dataCP02 = new Date();
    let diaCP02 = dataCP02.getDate() + 7;
    let mesCP02 = dataCP02.getMonth() + 1;
    let ano = dataCP02.getFullYear();
    let notaCP02 = Math.floor(Math.random() * 10 + 1);
    let dataCP2 = `O proximo CP é: ${diaCP02}/${mesCP02}/${ano}\nSua possível nota é: ${notaCP02}.`
    console.log(dataCP2);
    console.log("");
    
    let dataCP03 = new Date();
    let diaCP03 = dataCP03.getDate() - 9;
    let mesCP03 = dataCP03.getMonth() + 2;
    let notaCP03 = Math.floor(Math.random() * 10 + 1);
    let dataCP3 = `O último CP é: ${diaCP03}/${mesCP03}/${ano}\nSua possível nota é: ${notaCP03}.`
    console.log(dataCP3);
    console.log("");

    let dataSprint = new Date();
    let diaSprint = dataSprint.getDate() - 6;
    let mesSprint = dataSprint.getMonth() + 3;
    let notaSprint = Math.floor(Math.random() * 10 + 1);
    let dataS = `A primeira Sprint é: ${diaSprint}/${mesSprint}/${ano}\nSua posível nota é: ${notaSprint}`
    console.log(dataS);
    console.log("");

    let dataGS = new Date();
    let diaGS = dataGS.getDate() + 4;
    let mesGS = dataGS.getMonth() + 2;
    let notaGS = Math.floor(Math.random() * 10 + 1);
    let dataGlobal = `A primeira Global Solution é: ${diaGS}/${mesGS}/${ano}\nSua posível nota é: ${notaGS}`
    console.log(dataGlobal);
}

datas();
