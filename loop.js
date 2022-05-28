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

const tabuada = (...args)=>{
    console.log(`Argumentos que foram passados: ${args}`)  
    for (let valor of args) {
        console.log(`${valor} * 2 = ${valor*2} `)
    } 
}
tabuada(1,2,3,4,5)

///////////////////////////////////////////////////////////

//CICLOS WHILE / DOWHILE 

let volta = 1
while (volta <= 5); {
    console.log('Volta numero' + volta);
    volta++
};

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










