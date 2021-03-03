// app.js
var messaggio = "TypeScript!";
var x = 10;
var y = 25;
x = 15;
var nome = 'Giovanni';
var eta = 20;
var presenza = true;
console.log(messaggio);
messaggio = eta.toString();
console.log(messaggio);
//let n: null = null;
//let u: undefined = undefined;
var lista = [1, 2, 3, 4];
var lista2 = [1, 2, 3, 4]; //ALTRA SINTASSI
var articoliStructure = ['Pallone', 5];
//enum
var Colori;
(function (Colori) {
    Colori[Colori["Rosso"] = 0] = "Rosso";
    Colori[Colori["Verde"] = 1] = "Verde";
    Colori[Colori["Blu"] = 2] = "Blu";
})(Colori || (Colori = {}));
;
var r = Colori.Blu;
console.log(r);
var Colori2;
(function (Colori2) {
    Colori2[Colori2["Rosso"] = 10] = "Rosso";
    Colori2[Colori2["Verde"] = 11] = "Verde";
    Colori2[Colori2["Blu"] = 12] = "Blu";
})(Colori2 || (Colori2 = {}));
;
var r2 = Colori2.Blu;
console.log(r2);
var qualsiasi = true; //tipo qualsiasi
qualsiasi = 45;
console.log(qualsiasi);
// union type
var multitipo;
multitipo = 30;
multitipo = 'prova';
//function
function add(num1, num2) {
    return num1 + num2;
}
var ritorno = add(8, 9);
console.log('la somma è: ' + ritorno);
function nomeCompleto(persona) {
    // console.log('lui si chiama ' + persona.nome + ' ' + persona.cognome)
    //  console.log('lui si chiama ${persona.nome} ${persona.cognome}')
    console.log("lui si chiama " + persona.nome + " " + persona.cognome);
}
var per = { nome: 'Giovanni', cognome: 'Aloisio' };
nomeCompleto(per);
var sum = function (x, y) {
    return x + y;
};
sum(10, 20); //returns 30
console.log(sum(10, 20));
//export{}   //A ME NON FUNZIONA!!!!!
