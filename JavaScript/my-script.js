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

// Aggiungo tutti gli eventi al click del bottone
triggerBtn.addEventListener('click', function() {
    const passenger = document.getElementById('passenger').value;
    const myDistance = document.getElementById('km').value;
    if (isNaN(myDistance)) {
        alert(`Attenzione! Inserire un numero corretto. La pagina verra riavviata!`);
        window.location.reload();
    }
    const age = document.getElementById('age').value;
    let trainPrice = myDistance * 0.21;
    const youngCard = 'Biglietto Young';
    const seniorCard = 'Biglietto Senior';
    // Mostro il Container dell'output
    show.classList.add("block");
    // Imposto le condizioni di sconto
    if (age === 'Minorenne') {
        document.querySelector('#total-price').innerHTML = `${trainPrice.toFixed(2)}€`;
        trainPrice -= trainPrice * 0.2;
        document.querySelector('#card-type').innerHTML = youngCard;
        document.querySelector('#price').innerHTML = `${trainPrice.toFixed(2)}€`;
    } else if (age === 'Senior') {
        document.querySelector('#total-price').innerHTML = `${trainPrice.toFixed(2)}€`;
        trainPrice -= trainPrice * 0.4;
        document.querySelector('#card-type').innerHTML = seniorCard;
        document.querySelector('#price').innerHTML = `${trainPrice.toFixed(2)}€`;
    } else {
        document.querySelector('#total-price').innerHTML = ``;
        document.querySelector('#card-type').innerHTML = `Biglietto Standard`;
        document.querySelector('#price').innerHTML = `${trainPrice.toFixed(2)}€`;
    }
    console.log(`Nome e Cognome passeggero: ${passenger}
    Prezzo del biglietto: ${trainPrice.toFixed(2)}€
    Fascia d'età passeggero: ${age}`);
    // Inserisco i dettagli nelle giuste posizioni:
    document.querySelector('#passenger-name').innerHTML = passenger;
    document.querySelector('#cabin').innerHTML = Math.floor(Math.random() * 10 + 1);
    document.querySelector('#code').innerHTML = Math.floor(Math.random() * 10000 + 90000);
})

// Aggiunge evento di reset al click del bottone Annulla
hide.addEventListener('click', function() {
    // Nascondiamo il biglietto al click
    show.classList.remove("block");
});