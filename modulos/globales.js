let i = 0;
let intervalo = setInterval(function () {
    console.log("Sandri por que me ignoras tantoooo?");
    if (i === 3) {
        clearInterval(intervalo);
    }
    i++
}, 1000);
