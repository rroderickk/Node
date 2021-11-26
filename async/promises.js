function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Hola, " + nombre);
            resolve(nombre);
        }, 30);
    });
}

function hablar(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Como estas? sabias que un gugol es 10 elevado a 100?");
            resolve();
        }, 60);
    });
}

function adios(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(
                " Esa cantidad es mi velocidad\n y poder de procesamiento"
            );
            resolve();
        }, 90);
    });
}

const cortana = " la iA! ";
let eter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let transformer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let a = eter[9];
let b = transformer[9];
let c = a * b;
let d = 1 * (c / a);

function si(a, b) {
    setTimeout(function () {
        if ((a, b)) {
            result = true;
            console.log(result);
            console.log(c);
            console.log("Si sumo los digitos anteriores = " + d);
        }
    }, 1);
}
si(a, b);

console.log("[ + ] Iniciando el proceso");
hola("Platzi")
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log("[ - ] Terminado el proceso");
    });
