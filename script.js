const numbersSelected = document.querySelector(".numeros");

var ballSelected00 = document.createElement('button', 'bolacriada');
var ballSelected01 = document.createElement('button', 'bolacriada');
var ballSelected02 = document.createElement('button', 'bolacriada');

/*numbersSelected.appendChild(ballSelected00);
numbersSelected.appendChild(ballSelected01);
numbersSelected.appendChild(ballSelected02);*/

$('button').click(function () {
    var valor = $(this).val();

    $(".numeros").append($("<button class='bola'>" + valor + "</button>").fadeIn(3000));


    console.log(valor);

});

/*function cliked00() {
    const ball00 = document.querySelector("#ball00");
    ballSelected00.innerHTML = ball00.value;
}

function cliked01() {
    const ball01 = document.querySelector("#ball2");
    ballSelected01.innerHTML = ball01.value;
}

function cliked3() {
    const ball3 = document.querySelector("#ball3");
    ballSelected3.innerHTML = ball02.value;
}*/

/*function addBola() {
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");

}*/