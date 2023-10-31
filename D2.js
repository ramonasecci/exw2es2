/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const num1 = parseInt(prompt("Inserisci il primo numero"))
const num2 = parseInt(prompt("Inserisci il secondo numero"))

let numMax

if(num1 >= num2){
  numMax= num1
}
else{
  numMax=num2
}

alert(`Il numero più grande è ${numMax}`)



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let num = parseInt(prompt("Inserisci un numero"))
const verifica = 5

if(num != verifica){
  console.log("not equal")
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let num = parseInt(prompt("Inserisci un numero"))

let risultato = num % 5

if(risultato === 0){
  console.log("divisibile per 5")
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, 
  il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const num1 = parseInt(prompt("Inserisci il primo numero"))
const num2 = parseInt(prompt("Inserisci il secondo numero"))

let somma = num1 + num2
let differenza = num1 - num2

if(num1===8 || num2===8 || somma===8 || differenza===8){
  alert("Hai inserito i numeri correti")
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



let art1 = prom


let totalShoppingCart = parseFloat(prompt("Inserisci il saldo totale"))
const  spedGratis = 10
let totaleCarrello

if(totalShoppingCart > 50){
  alert(`Hai diritto alla spedizione gratuita, il saldo ammonta a ${totalShoppingCart}`)
}
else{
  totaleCarrello = totalShoppingCart + spedGratis
  alert(`Il totale del tuo ordine è inferiore a 50€, non hai diritto alla spedizione gratuita, il saldo ammonta a ${totaleCarrello}`)
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let art1 = parseFloat(prompt("Inserisci il costo dell'articolo")) 
let artPar1 = art1 - (art1*20/100)

let art2 = parseFloat(prompt("Inserisci il costo dell'articolo")) 
let artPar2 = art2 - (art2*20/100)

const  spedGratis = 10
let totaleCarrello

let totalShoppingCart = artPar1 + artPar2

if(totalShoppingCart > 50){
  alert(`Hai diritto alla spedizione gratuita, il saldo ammonta a ${totalShoppingCart}`)
}
else{
  totaleCarrello = totalShoppingCart + spedGratis
  alert(`Il totale del tuo ordine è inferiore a 50€, non hai diritto alla spedizione gratuita, il saldo ammonta a ${totaleCarrello}`)
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 20
let numm2 = 30
let num3= 6

if(num1<num2){
  if(num1<num3){
    if(num2<num3){
      alert(num3,num2,num1)
    }

  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = prompt("Inserisci un valore")
let tipo = typeof val
if(tipo == "number"){
  alert("Hai inserito un dato di tipo numerico")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num = parseInt(prompt("Inserisci il numero"))

if (num % 2 === 0){
    console.log("Il numero è pari")
}
else {
    console.log("Il numero è dispari")
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else if (val >= 10){
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

et val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else if (val >= 10){
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"

/* SCRIVI QUI LA TUA RISPOSTA */

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.skills['javascript']

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let lista = []

lista = ['1','2','3','4','5','6','7','8','9','10']

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


