// app.js
let argomenti;

function somma(addendo1 = 0, addendo2 = 0) {
  return addendo1 + addendo2;
}

if (process.argv.length > 2) {
  argomenti = process.argv.slice(2);
  // il risultato non è quello atteso
  console.log('Il risultato della somma è: ' + somma(...argomenti));
}