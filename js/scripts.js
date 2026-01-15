addEventListener("DOMContentLoaded", (event) => {
    const numeri = 90;
    let numeroEstratto = 0;
    const extractorButton = document.getElementById("extractor");
    const tombolaZone = document.getElementById("tombola");
    let numeroCreato = [];
    let i = 0;
    let spacer = 0;


    for (i; i < numeri; i++) {
        spacer = i + 1;
        numeroCreato.push(spacer);
        numeroCreato[i] = '<div class="col-1 m-1 align-items-center"><p class="mx-auto single-number not-selected rounded-circle border text-center">' + spacer + '</p></div>';
        tombolaZone.innerHTML += numeroCreato[i];
        console.log(numeroCreato[i]);
    }
    extractorButton.addEventListener("click", function () {

    })

})