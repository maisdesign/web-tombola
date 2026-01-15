addEventListener("DOMContentLoaded", (event) => {
    const numeri = 90;
    let numeroEstratto = 0;
    const extractorButton = document.getElementById("extractor");
    const tombolaZone = document.getElementById("tombola");
    let numerocreato;

    for (i = 1; i <= numeri; i++) {
        let numeroCreato = tombolaZone.innerHTML('<p class="single-number not-selected rounded-circle border text-center align-middle">' + i + '</p>');
    }
    extractorButton.addEventListener("click", function () {

    })

})