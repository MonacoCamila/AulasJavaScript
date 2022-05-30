//MESA 11//
//Um cliente nos pede para fazer um aplicativo que possa determinar os vencedores de
//um concurso que foi realizado no fim de semana.//

let ParticipanteA = [5, 8, 4, 9, 5];
let ParticipanteB = [8, 7, 8, 6, 8];
let ParticipanteC = [7, 5, 10, 8, 3];

//Melhor média (a maior pontuação média entre os concorrentes);
//Maior e-tip(a maior pontuação entre as 5 notas de cada participante).

//1. Determine qual seria a maneira ideal de representar cada participante com suas pontuações.

let somaA = ParticipanteA.reduce((antes, depois)=> antes+depois);
console.log(somaA);

let mediaA = somaA/5;
console.log(mediaA);

//2. Crie uma função pontuacaoMedia à qual receba um participante por parâmetro e deve calcular e devolver a pontuação média dele.

//3. Crie uma função pontuacaoMaior que receba um participante por parâmetro e deve calcular e devolver a pontuação mais alta que o participante tem.







