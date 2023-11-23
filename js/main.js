// MILESTONE 2
// Al click dell’utente sulle frecce (sia Prev che Next),
// il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.


// prendere tutti gli elementi sotto la classe item e salvarli in una variabile
const item = document.getElementsByClassName("item");
console.log(item[0]);
// variabile con valore iniziale 0
let activeItems = 0;
// creazione variabile per referenza
const next = document.getElementById("next");
const prev = document.getElementById("prev");


next.addEventListener("click",

    function(){
        // controllare se ci sono altre immagini da mostrare
        if (activeItems < item.length -1)
        // rimuovere la classe attivo dalla foto attuale
        item[activeItems].classList.remove("active");
        // aumenta l'index di 1
        activeItems++;
        // aggiungere la classe active alla foto successiva 
        item[activeItems].classList.add("active");
    }   
)


prev.addEventListener("click",

    function(){
        // controllare se ci sono altre immagini precedenti da mostrare
        if (activeItems > 0){
        // rimuovere la classe attivo dalla foto attuale
        item[activeItems].classList.remove("active");
        // diminuisci l'index di 1
        activeItems--;
        // aggiungere la classe active alla foto precedente 
        item[activeItems].classList.add("active");
        }
    }
)