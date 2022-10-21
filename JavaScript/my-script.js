"use strict";
//RICHIESTE
/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Attenzione se utilizzate il tag form, i button all'interno devono avere il type="button"
*/

// 1. Imposto variabile che fa scegliere il numero di chilometri all'utente
let myDistance = Number(prompt(`Scegli il numero di chilometri da percorrere:`));
console.log(`I chilometri percorsi sono: ${myDistance}`);
if (isNaN(myDistance)) {
    alert('Inserisci un numero corretto. La pagina verrà riavviata!')
    window.location.reload();
}
document.querySelector('#your-distance').innerHTML = `${myDistance}km`;

// 2. Imposto variabile che fa scegliere l'età
const age = Number(prompt(`Imposta la tua età:`));
console.log(`La tua età è di: ${age} anni`);
if (isNaN(age)) {
    alert('Inserisci un numero corretto. La pagina verrà riavviata!')
    window.location.reload();
}
document.querySelector('#your-age').innerHTML = `${age} anni`;

// 3. Imposto il prezzo del biglietto
let trainPrice = myDistance * 0.21
console.log(`Il prezzo totale del biglietto è di: ${trainPrice.toFixed(2)}€`);
document.querySelector('#total-price').innerHTML = `${trainPrice.toFixed(2)}€`;

// 4. Imposto le variabili di sconto
const youngCardPrice = trainPrice * 0.2;
const seniorCardPrice = trainPrice * 0.4;

// 5. Imposto le condizioni per attuare lo sconto
if (age < 18) {
    trainPrice = trainPrice - youngCardPrice;
    console.log(`Ha diritto ad uno sconto del 20% come possessore della Carta Young: Prezzo = ${trainPrice.toFixed(2)}€`)
    document.querySelector('#discount-price').innerHTML = `<span style="color: green;">Scontato: ${trainPrice.toFixed(2)}€</span>`;
    document.querySelector('#total-price').style.textDecoration = "line-through";
    document.querySelector('#card-type').innerHTML = `<span style="color: red;">Come possessore della Carta Young ha diritto ad uno sconto del 20% sul totale</span>`;
} else if (age >= 65){
    trainPrice = trainPrice - seniorCardPrice;
    console.log(`Ha diritto ad uno sconto del 20% come possessore della Carta Senior: Prezzo = ${trainPrice.toFixed(2)}€`)
    document.querySelector('#discount-price').innerHTML = `<span style="color: green;">Scontato: ${trainPrice.toFixed(2)}€</span>`;
    document.querySelector('#total-price').style.textDecoration = "line-through";
    document.querySelector('#card-type').innerHTML = `<span style="color: red;">Come possessore della Carta Senior ha diritto ad uno sconto del 40% sul totale</span>`;
} else {
    console.log(`Non abbiamo piani di sconto per la sua fascia di età: Prezzo = ${trainPrice.toFixed(2)}€`)
    document.querySelector('#card-type').innerHTML = `<span style="color: red;">Il nostro piano tariffario non prevede sconti per la sua fascia d'età</span>`;
}
