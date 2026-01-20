addEventListener("DOMContentLoaded", (event) => {
    const NUMERO_TOTALE = 90;
    let indiceEstratto = 0;
    const bottoneEstrai = document.getElementById("extractor");
    const grigliaTombola = document.getElementById("tombola");
    const ultimoEstrattoDOM = document.getElementById("ultimoEstrattoDOM");
    let grigliaNumeri = [];
    let i = 0;
    let spacer = 0;
    let numeriIniziali = [];
    let numeroDaEliminare;

    function randomExtraction(numeri) {
        return Math.floor(Math.random() * numeri);
    }
    function selectNumber(indiceEstratto) {
        let elementoSelezionato = document.getElementById("numero" + indiceEstratto);
    }

    for (i; i < NUMERO_TOTALE; i++) {
        spacer = i + 1;
        numeriIniziali.push(spacer);
        grigliaNumeri[i] = '<div class="col-1 m-1 align-items-center"><p class="mx-auto single-number not-selected rounded-circle border text-center" id="numero' + i + '">' + spacer + '</p></div>';
        grigliaTombola.innerHTML += grigliaNumeri[i];
    }
    let numeriDisponibili = [...numeriIniziali]; //Qui setto i numeri da estrarre

    bottoneEstrai.addEventListener("click", function () {
        console.log("Numeri da estrarre inizio " + numeriDisponibili);
        if (numeriDisponibili.length != 0) {
            indiceEstratto = Math.floor(Math.random() * numeriDisponibili.length);
            numeroEstratto = numeriDisponibili[indiceEstratto];
            ultimoEstrattoDOM.innerHTML = "<p class='numero-estratto'>" + numeroEstratto + "</p>";
            console.log("Posizione Numero Estratto: " + indiceEstratto);
            numeroDaEliminare = numeriDisponibili[indiceEstratto];
            console.log("Numero da eliminare: " + numeroDaEliminare);
            numeriDisponibili.splice(indiceEstratto, 1);
            console.log("Numeri da estrarre fine " + numeriDisponibili);
        } else {
            console.log("Numeri Finiti")
        }
    })

})