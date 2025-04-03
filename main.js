// Declaração de variaveis 
let nome ="matheus H.";// Variavel que pode mudar 
const idade = 16; // variavel constante 
var cidade ="Rio Branco do Sul"; // Método antigo de declarar variaveis

// Operadores matematicios
let a =10;
let b = 5;

let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let resto = a % b;
let potencia = a ** b;
let incremento = ++a;
let decremento = --b;

//Operadores de Comṕaração
let igual = (a == b);
let diferente = (a != b);
let maior = (a > b);
let menor = (a < b);
let maiorouigual = (a >= b);
let menorouigual = (a <= b);

//Operadores logicos 
 let eLogico = (a >5 && b <10);
 let ouLogico = (a >5 || b >10);
 let naoLogico = !(a > 5);

 // Operadores de atribuição
 let c = 10;
 c += 5; // c =c + 5
 c-= 3; // c=c - 3
 c*= 2; //c=c * 2
 c /= 4; //c =c ? 4
 c %= 3; // c = c % 3
 c **= 2; // c = c ** 2

 //Operadores de concatenação (união de textos)
 let mensagem = "Olá, meu nome é" + nome +", tenho " + idade + " anos e moro em " + cidade + ".";

 // Exibir resultados no console 
 console.log ("soma:" + soma);
 console.log("subtracao: " + subtracao);
 console.log("multiplicacao: " + multiplicacao);
 console.log("divisao: " + divisao);
 console.log("Resto da divisao: " + resto);
 console.log("potencia: " + potencia);
 console.log("incremento de a: " + incremento);
 console.log("decremento de b: " + decremento);
 console.log("igualdade: " + igual);
 console.log("diferenca: " + diferente);
 console.log("maior que: " + maior);
 console.log("menor que: " + menor);
 console.log("maior ou igual: " + maiorouigual);
 console.log("menor ou igual: " + menorouigual);
 console.log("E logico: " + eLogico);
 console.log("Ou logico: "+ ouLogico);
 console.log("navegacao logica: " + naoLogico);
 console.log("Valor de c apos atribuicoes: " + c);
 console.log(mensagem);