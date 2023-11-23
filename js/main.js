// MILESTONE 2
// Al click dell’utente sulle frecce (sia Prev che Next),
// il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.


const item = document.getElementsByClassName("item");
console.log(item[0]);

let activeItems = 0;

const next = document.getElementById("next");
const prev = document.getElementById("prev");

next.addEventListener("click",

    function(){

        
        if (activeItems < item.length - 1)
        item[activeItems].classList.remove("active");

        activeItems++;

        item[activeItems].classList.add("active");
    }   
)



prev.addEventListener("click",

    function(){
        if (activeItems > 0){

            item[activeItems].classList.remove("active");

            activeItems--;

            item[activeItems].classList.add("active");
        }
    }
)