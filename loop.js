//Ciclos Loop FOR (inicio, condicao, modificador)

for(let i=0; i<=4; i++) {
    console.log(i)
};

for (let volta =1; volta <=5; volta++) {
    console.log('Volta numero: ' + volta);
};

for (let OlaMundo =1; OlaMundo <=5; OlaMundo++){
    console.log('Ola Mundo: ' + OlaMundo);
};

// Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. 
//Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.

for(let numeros = 0 ; numeros < 10; numeros++) {

};

//Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).

for(let i = 0; i < 11; i++){
    console.log("3 x " + i + " = " + 3*i);
};

//OBS: Vale ressaltar que o while é mais indicado para situações onde não temos conhecimento do número de iterações do laço, 
//já o for é mais adequado para situações que o número de iterações está definido previamente.

//CICLOS WHILE / DOWHILE (tabuada do 5)

let i = 0;
while(i < 11){
    console.log('5 x ' + i + ' = ' + 5*i);
    i++;
};

//O do-while tem o mesmo conceito que o while com uma única diferença, 
//a condição é verificada após os comandos do bloco serem executados, ou seja, mesmo que a condição seja falsa, é garantia que o bloco será executado ao menos uma vez.

//Podemos testar da seguinte forma:

let contador = 0;

do{
	console.log("O contador vale: " + contador);
	contador++;
}while(contador == 1)



//Escreva um aplicativo em Javascript que mostre todos os números ímpares de 1 até 100

let cont =1 ;
    while (cont<=100) {
        let resto = cont%2;
        if (resto ==0){
            retorna("Par " + cont);
        }
        cont = cont + 1;
    }
retorna("FIM");

for (numeroInteiro = 1; numero <= 100; numero++) {
    if (numero % 2 != 0) {
        imprime(numero);
    }
};

// Escreva um aplicativo em Javascript que mostre todos os números pares de 1 até 100.

for (numeroInteiro = 1; numero <= 100; numero++) {
    if (numero % 2 === 0) {
        imprime(numero);
    }
};











