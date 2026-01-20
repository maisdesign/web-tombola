addEventListener("DOMContentLoaded", (event) => {
    const NUMERO_TOTALE = 90;
    const bottoneEstrai = document.getElementById("extractor");
    const bottoneReset = document.getElementById("terminator");
    const grigliaTombola = document.getElementById("tombola");
    const ultimoEstrattoDOM = document.getElementById("ultimoEstrattoDOM");
    let numeriIniziali = [];

    for (let i = 0; i < NUMERO_TOTALE; i++) {
        let spacer = i + 1;
        numeriIniziali.push(spacer);
        grigliaTombola.innerHTML += '<div class="col-1 m-1 align-items-center"><p class="mx-auto single-number not-selected rounded-circle border text-center" id="numero' + i + '">' + spacer + '</p></div>';
    }
    let numeriDisponibili = [...numeriIniziali]; //Qui setto i numeri da estrarre

    bottoneEstrai.addEventListener("click", function () {

        if (numeriDisponibili.length != 0) {
            let indiceEstratto = Math.floor(Math.random() * numeriDisponibili.length);
            let numeroEstratto = numeriDisponibili[indiceEstratto];
            ultimoEstrattoDOM.innerHTML = "<p class='numero-estratto'>" + numeroEstratto + "</p>";



            numeriDisponibili.splice(indiceEstratto, 1);

            let numeroSelezionato = document.getElementById("numero" + (numeroEstratto - 1));
            numeroSelezionato.classList.add("selected");
        } else {

            bottoneEstrai.innerHTML = "Numeri finiti, resetta e riparti";
            bottoneEstrai.classList.add("disabled");
            bottoneEstrai.disabled = true;
        }
    })
    bottoneReset.addEventListener("click", function () {

        numeriDisponibili = numeriDisponibili = [...numeriIniziali];
        for (let i = 0; i < NUMERO_TOTALE; i++) {
            numeroSelezionato = document.getElementById("numero" + i);
            numeroSelezionato.classList.remove("selected");
        }
        bottoneEstrai.classList.remove("disabled");
        bottoneEstrai.disabled = false;
        bottoneEstrai.innerHTML = "Estrai";
    })

})