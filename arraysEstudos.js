let dados = [3,5,6,8,11,12,16];

for (let i = 0; i < dados.length; i++) { //for recebe 3 parametros
    console.log(dados[i]);
  }

dados.forEach((item, index) => { // outro metodo Array - forEach
    console.log(item);
    console.log(index);
    });

//O valor item se refere ao conteudo do array e o valor index é a posição atual que está sendo lida.//

//O método find() permite localizar a primeira ocorrência de uma determinada condição. 
//No exemplo a seguir vamos iterar o array para localizar números onde o resto da divisão por zero seja igual a 0.

let dados2 = [3,5,6,8,11,3,12,16];
let novo_array = dados2.find((n)=>n%2 ===0);
console.log(novo_array);

//Metodo AT() Retornar uma determinada posição do array.

let resultado = dados2.at(2);
console.log(resultado); 

//Metodo FILTER() 
let novo_array2 = dados2.filter((n)=>n%2 ===0);
console.log(novo_array);

//Se você quiser manipular cada elemento do array pode utilizar o método map(). 
//No exemplo a seguir, vamos somar 1 a cada elemento do nosso array

var dados3 = [3,5,6,8,11,12,16];
var novo_array3 = dados3.map((n)=>n+1);
console.log(novo_array3);

//SOMANDO O CONTEUDO DO ARRAY.Para somar todo o conteúdo de nosso array podemos utilizar o método reduce(). 
//Reduce recebe dois parâmetros, o primeiro é o valor anterior e o segundo é o valor atual

var resultado2 = dados3.reduce((anterior, atual)=>anterior+atual);
console.log(resultado2);

//O método every() verifica se todos os elementos do array atendem a uma determinada condição. 
//Em caso positivo ela retorna true, caso contrário false

let resultado3 = dados.every((n)=>n%2);
console.log(resultado3);

//Também é possível verificar se dentro de nosso array existe um determinado número. 
//Para isso utilizar o método includes().
//Se o valor informado existir no array ele retorna true, caso contrário false.

let dados4 = [3,5,6,8,11,12,16];
let resultado4 = dados4.includes(11);

// METODO SPLICE()
//Para remover algum elemento a partir de uma determinada posição você pode utilizar o método splice. 
//São necessários dois parâmetros, o primeiro é a posição e o segundo é a quantidade de elementos a serem removidos a partir da posição informada

let numeros = [3,5,6,8,11,3, 12,16];
numeros.splice(3,1);
console.log(numeros); 

//Se você deseja cortar o array a partir de uma certa posição pode utilizar o método slice. 
//Ele vai criar um novo array com os elementos a partir da posição informada

let numbers = [3,5,6,8,11,12,16];
let result = numbers.slice(4);
console.log(result);
console.log(numbers);

//Uma forma simples de converter nosso array numa string é utilizar o método toString()

let num = [3,5,6,8,11,12,16];
let res = num.toString();
console.log(res);

//Outra forma de converter o nosso array numa string é utilizar o método join().

//Caso você queira ordenar o array de forma decrescente pode fazer um pequeno ajuste na função enviada como parâmetro para o método sort()

let ordenar = [3,5,6,8,11,3,12,16];
ordenar.sort(function(a, b) {
  return  b - a;
});
console.log(ordenar);

//Para inverter o array podemos usar o método reverse()

ordenar.reverse();
console.log(ordenar);

//Para juntar dois arrays podemos usar o método concat()

let juntar = [3,5,6,8,11,3, 12,16];
let juntar2 = [20,21,22,23];
resultado = juntar.concat(juntar2);
console.log(resultado);



