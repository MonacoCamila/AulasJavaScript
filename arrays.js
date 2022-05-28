//ARRAYS
//acessar elementos especificos do ARRAY 

let filmesFavoritos = ['StarWars', 'ET', 'Alien']
filmesFavoritos[2]; // posicao dentro do array // todo array comeca com a posicao 0. // Alien posicao 2. 

filmesFavoritos.length; // retorna o tamanho do array.

//METODOS DE ARRAYS////

let cores = ['azul', 'amarelo', 'vermelho']
cores.push ('rosa'); // add item na ultima posicao do array. 
console.log (cores);

let ultimaCor = cores.pop() // elimina ultimo item do array.
console.log(cores);

let primeiraCor = cores.shift() // elimina o primeiro elemento do array. 
console.log(cores);

cores.unshift('cinza') // add elemento no inicio do Array
console.log(cores);

let separadoVirgula = cores.join() // junta os elementos do array
console.log(separadoVirgula);

let lista = ['carne', 'pao', 'tomate', 'queijo']

lista.push('leite');
console.log(lista);

let ultimoItem = lista.pop();
console.log(ultimoItem);

////MESA DE TRABALHO/////

let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length]) //retorna undefined

let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0]) // retorna SpiderMan ( array 1 posicao 0)

let str = 'uma string qualquer'
let grupoDeAmigos2 = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos2[2][grupoDeAmigos2[2].length - 1]); // retorna uma string qualquer. 

/*Neste exercício, você terá que criar uma função que retorne um array com seus elementos invertidos, sem modificá-lo. 
Então, você deve fazer uma função que o modifique e inverta a ordem de seus elementos.
Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).
Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.*/  

let imprimirInverso = [1,2,3,4,5,6]
imprimirInverso.reverse();

console.log(imprimirInverso);

//Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.

const array = [1,2,4,7]
let sum = 0

for(let i=0; i<array.length; i++){
    sum += array[i];
};

console.log(sum);

//Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().
//Importante: Não poderá utilizar o método Array.join() original.

let ola = ['o', 'l', 'a']

function join(arr, separator){
    let result = '';
    for(let i=0; i<arr.length; i++){
        if (result){
            result += separator;
        }
        result += arr[i];
    }
    result.toString();
};

console.log(join(ola,'')); //retornou undefined. (corrigir)

///////MESA DE TRABALHO COLECAO DE FILMES//////

let colecao = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]
let filme1 = 'star wars'
let filme2 = colecao [1]

let string1 = filme1.toUpperCase();
console.log(string1);

let string2 = filme2.toUpperCase();
console.log(string2);

let colecao2 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"]
let soma = 0;

//Em seguida, crie uma função que receba dois arrays como parâmetros, para poder adicionar os elementos contidos no 
//segundo array, dentro do primeiro, a fim de retornar um único array com todos os filmes como seus elementos.

let lastItem = colecao2.pop();
console.log(colecao2);

let game = Fortinite; 

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
//Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.






























