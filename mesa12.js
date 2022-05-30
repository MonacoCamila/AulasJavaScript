//MESA12//

//A tarefa é enfrentar esses votos comparando a[0] com b[0], a[1] com b[1] e a[2] com b[2].

/*
Se a[i] > b[i], então Alice recebe 1 ponto.
Se a[i] < b[i], então Bob recebe 1 ponto.
Se a[i] = b[i], nenhuma pessoa recebe um ponto.
Os pontos de comparação são os pontos totais que uma pessoa ganhou. Não os votos, mas os pontos ganhos em cada etapa.

exemplo:
const alicia = [23, 67, 32];
const bob = [12, 67, 43];
pontosAlicia = 1
pontosBob = 1

Para os itens do índice 0, Alice recebe um ponto porque a[0] > b[0].
Para a próxima fase, a[1] e B[1] são iguais, não são obtidos pontos.
Finalmente, para elementos do índice 2 (terceira etapa), a[2] < b[2] para que Bob receba um ponto.
*/



const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanhador(a, b) {
    let pontosPrimeiroParticipante = 0;
    let pontosSegundoParticipante = 0;

for (let a = 0; a < alicia.length; a++) {
console.log(a);

} for(let b = 0; b < bob.length; b++) {
console.log(b);

}

};



console.log('O ganhador é: ' + encontrarGanhador (a, b)); 

////////////////////////////////////////////////////////////////////////////////////////////////

//DIGITALHOUSE()

function digitalHouse(a,b){

    let number = 0;
}

//imprimir na tela os números de 1 a 100, mas levando em conta os seguintes critérios:

//Se o número a ser impresso for um múltiplo do primeiro parâmetro inserido,você deve exibir a string 'Digital'em vez do número.

if (number == a%2) {
    console.log('Digital')
} if (number == b%2) {
    console.log('House')
} if (number == a%2 && b%2){
    console.log('Digital House')
};

//Se o número a ser impresso for um múltiplo do segundo parâmetro inserido,você deve exibir a string'House';

//Se o número a ser imprimir for um múltiplo de ambos os parâmetros, você deve exibir a string 'Digital House'.  



