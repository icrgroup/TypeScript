// app.js
let messaggio = "TypeScript!";

let x = 10;
const y = 25;
x = 15;

let nome: string = 'Giovanni';
let eta: number = 20;
let presenza: boolean = true;

console.log(messaggio);

messaggio = eta.toString();
console.log(messaggio);

//let n: null = null;
//let u: undefined = undefined;

let lista: number[] = [1,2,3,4];
let lista2: Array<number> = [1,2,3,4];  //ALTRA SINTASSI

let articoliStructure: [string, number] = ['Pallone', 5];

//enum
enum Colori {Rosso, Verde, Blu};
let r: Colori = Colori.Blu;
console.log(r);

enum Colori2 {Rosso = 10, Verde, Blu};
let r2: Colori2 = Colori2.Blu;
console.log(r2);

let qualsiasi: any = true;  //tipo qualsiasi
qualsiasi = 45;
console.log(qualsiasi);

// union type
let multitipo: number | string;
multitipo = 30;
multitipo = 'prova';

//function
function add(num1: number, num2: number): number
{
    return num1 + num2
}

let ritorno: number = add(8, 9);
console.log('la somma è: ' + ritorno);


// interface
//QUESTA SOTTO NON FUNZIONA...
//function nomeCompleto(persona: {nome: string, cognome: string})
//{
//    console.log('lui si chiama ${persona.nome} ${persona.cognome}')
//}

//let per = {nome: 'Giovanni', cognome: 'Aloisio'}
//nomeCompleto(per)

interface Persona {nome: string, cognome: string}

function nomeCompleto(persona: Persona) {
    // console.log('lui si chiama ' + persona.nome + ' ' + persona.cognome)
    //  console.log('lui si chiama ${persona.nome} ${persona.cognome}')
    console.log(`lui si chiama ${persona.nome} ${persona.cognome}`)
}

let per = {nome: 'Giovanni', cognome: 'Aloisio'}
nomeCompleto(per)

let sum = (x: number, y: number): number => {
    return x + y;
}

sum(10, 20); //returns 30
console.log(sum(10, 20));

//export{}   //A ME NON FUNZIONA!!!!!




