/* ==========================================================================
   CINEMATCH - JAVASCRIPT FACILE E COMPRENSIBILE (LIVELLO SCUOLA SUPERIORE)
   ========================================================================== */

// 1. ARRAY DI UTENTI SIMULATI (DATABASE IN MEMORIA)
const listaProfili = [
    {
        nome: "Elena, 26",
        citta: "Roma",
        distanza: "2.5 km",
        foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
        film: "Dune - Parte 2",
        affinita: "95%",
        generi: ["Sci-Fi", "Azione", "IMAX"]
    },
    {
        nome: "Matteo, 29",
        citta: "Roma",
        distanza: "4.0 km",
        foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
        film: "Deadpool & Wolverine",
        affinita: "88%",
        generi: ["Commedia", "Marvel", "Azione"]
    },
    {
        nome: "Sofia, 24",
        citta: "Roma",
        distanza: "1.2 km",
        foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
        film: "Civil War",
        affinita: "92%",
        generi: ["Drammatico", "Autore", "Thriller"]
    }
];

// 2. VARIABILI DI STATO (INDICI E CONTATORI)
let indiceCorrente = 0;
let totaleMatch = 0;

// 3. SELEZIONE DEGLI ELEMENTI HTML (DOM)
const fotoUtente = document.getElementById('foto-utente');
const nomeUtente = document.getElementById('nome-utente');
const cittaUtente = document.getElementById('citta-utente');
const filmPreferito = document.getElementById('film-preferito');
const percentualeAffinita = document.getElementById('percentuale-affinita');
const listaTags = document.getElementById('lista-tags');

const btnLike = document.getElementById('btn-like');
const btnDislike = document.getElementById('btn-dislike');
const contatoreMatch = document.getElementById('contatore-match');
const messaggioMatch = document.getElementById('messaggio-match');

// 4. FUNZIONE PER MOSTRARE IL PROFILO SULLO SCHERMO
function caricaProfilo() {
    // Controllo se ci troviamo nella pagina match.html
    if (!fotoUtente) return;

    // Prendiamo l'utente dall'array usando l'indice corrente
    const utente = listaProfili[indiceCorrente];

    // Aggiorniamo i valori nell'HTML
    fotoUtente.src = utente.foto;
    nomeUtente.innerText = utente.nome;
    cittaUtente.innerText = "📍 " + utente.citta + " (" + utente.distanza + ")";
    filmPreferito.innerText = utente.film;
    percentualeAffinita.innerText = utente.affinita + " Affinità";

    // Puliamo e creiamo i tag dei generi amati
    listaTags.innerHTML = "";
    for (let i = 0; i < utente.generi.length; i++) {
        const spanTag = document.createElement('span');
        spanTag.className = 'tag';
        spanTag.innerText = utente.generi[i];
        listaTags.appendChild(spanTag);
    }
}

// 5. FUNZIONE PER GESTIRE IL CLICK SUI PULSANTI
function prossimoProfilo(isLike) {
    if (isLike) {
        // Se premuto Like, incrementiamo il contatore dei Match
        totaleMatch++;
        contatoreMatch.innerText = totaleMatch;

        // Mostriamo il messaggio di notifica verde
        messaggioMatch.classList.remove('hidden');
        setTimeout(function() {
            messaggioMatch.classList.add('hidden');
        }, 2000);
    }

    // Passiamo al prossimo profilo nell'array
    indiceCorrente++;

    // Se finiscono i profili, ripartiamo dal primo (0)
    if (indiceCorrente >= listaProfili.length) {
        indiceCorrente = 0;
    }

    // Carichiamo la nuova scheda
    caricaProfilo();
}

// 6. ASSEGNAZIONE EVENTI AI PULSANTI
if (btnLike && btnDislike) {
    btnLike.addEventListener('click', function() {
        prossimoProfilo(true); // Premuto LIKE
    });

    btnDislike.addEventListener('click', function() {
        prossimoProfilo(false); // Premuto DISLIKE
    });
}

// 7. ESECUZIONE ALL'AVVIO DELLA PAGINA
caricaProfilo();
