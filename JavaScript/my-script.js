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

// Imposto le variabili indipendenti dall'evento del click
const triggerBtn = document.querySelector('#btn-trigger');
const show = document.querySelector('.ticket');
const hide = document.querySelector('#hide');
const warning = document.querySelector('.warning-name');
const warningKm = document.querySelector('.warning-km');

// Aggiungo tutti gli eventi al click del bottone
triggerBtn.addEventListener('click', function() {
    // Effetto sonoro alla comparsa dell'output
    let whoosh = new Audio('../audio/Whoosh.mp3');
    whoosh.volume = 0.3;
    // Script relativo al nome passeggero
    const passenger = document.getElementById('passenger').value;
    const passengerName = document.getElementById('input-name');
    // Imposto le condizioni di input
    if (!(isNaN(passenger)) || (passenger === "")) {
        passengerName.classList.add("shake");
        setTimeout(function() {
            // Rimuovo la classe dopo 400 millisecondi
            passengerName.classList.remove("shake");
        }, 400);
        warning.classList.add("warning-name-show");
        return triggerBtn;
    } else {
        warning.classList.remove("warning-name-show");
    };
    // Script relativo ai Km passeggero
    const myDistance = Number(document.getElementById('km').value);
    const passengerKm = document.getElementById('input-km');
    // Imposto le condizioni di input
    if ((isNaN(myDistance)) || (myDistance <= 0 || myDistance > 10000)) {
        passengerKm.classList.add("shake");
        setTimeout(function() {
            // Rimuovo la classe dopo 400 millisecondi
            passengerKm.classList.remove("shake");
          }, 400);
        warningKm.classList.add("warning-km-show");
        return triggerBtn;
    } else {
        warningKm.classList.remove("warning-km-show");
    };
    // Mostro il Container dell'output
    show.classList.add("block");
    // Imposto le condizioni di sconto
    whoosh.play();
    // Script relativo alle variabili età, prezzo, offerta, cabina e cp code
    const age = document.getElementById('age').value;
    let trainPrice = myDistance * 0.21;
    const youngCard = 'Biglietto Young';
    const seniorCard = 'Biglietto Senior';
    const normalCard = `Biglietto Standard`;
    let cabin = Math.floor(Math.random() * 10 + 1);
    let cpCode = Math.floor(Math.random() * 10000 + 90000);
    if (age === 'Minorenne') {
        document.querySelector('#total-price').innerHTML = `${trainPrice.toFixed(2)}€`;
        trainPrice -= trainPrice * 0.2;
        document.querySelector('#card-type').innerHTML = youngCard;
        document.querySelector('#price').innerHTML = `${trainPrice.toFixed(2)}€`;
        console.log(`Tipo di offerta: ${youngCard} 20% di sconto`)
    } else if (age === 'Over 65') {
        document.querySelector('#total-price').innerHTML = `${trainPrice.toFixed(2)}€`;
        trainPrice -= trainPrice * 0.4;
        document.querySelector('#card-type').innerHTML = seniorCard;
        document.querySelector('#price').innerHTML = `${trainPrice.toFixed(2)}€`;
        console.log(`Tipo di offerta: ${seniorCard} 40% di sconto`)

    } else {
        document.querySelector('#total-price').innerHTML = ``;
        document.querySelector('#card-type').innerHTML = `${normalCard}`;
        document.querySelector('#price').innerHTML = `${trainPrice.toFixed(2)}€`;
        console.log(`Tipo di offerta: ${normalCard}`)

    }
    console.log(`Nome e Cognome passeggero: ${passenger}
    Prezzo del biglietto: ${trainPrice.toFixed(2)}€
    Fascia d'età passeggero: ${age}
    Numero Carrozza: ${cabin}
    Codice CP: ${cpCode}`);
    // Inserisco i dettagli nelle giuste posizioni:
    document.querySelector('#passenger-name').innerHTML = passenger;
    document.querySelector('#cabin').innerHTML = cabin;
    document.querySelector('#code').innerHTML = cpCode;
})

// Aggiungo evento di reset al click sul bottone Annulla
hide.addEventListener('click', function() {
    let whoosh2 = new Audio('../audio/Whoosh-2.mp3');
    whoosh2.volume = 0.3;
    // Nascondo il biglietto al click
    show.classList.remove("block");
    whoosh2.play();
    // Rimuovo eventuali warning
    warning.classList.remove("warning-name-show");
    warningKm.classList.remove("warning-km-show");
});