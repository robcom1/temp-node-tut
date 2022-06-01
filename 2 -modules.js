// Moduli - Encapsulated Code
// Common JS, every file is module

// i moduli li ho messi in 3 e 4 e varainti in 5 e 6(variabili e funzioni)

const names = require("./3-names");
const sayHi = require("./4-utils");
//metodo alternativo
const data = require("./5-alternative-export")
console.log(data)
// attenzione all'uso così:
require("./6-mind-granade")
// anche se non abbiamo fatto export ecc mi da il risultato dell'esecuzione del codice
// se la funzione è eseguita la esegue

sayHi("susan")
sayHi(names.john)
sayHi(names.peter)
