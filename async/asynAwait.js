/* 

function fizzBuzzJS

in python is equal to :

console output:

*/

async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Hola, " + nombre);
            resolve(nombre);
        }, 30);
    });
}

async function main() {
    var nombre = await hola("Rodri");
    await hablar();
    await hablar();
    await adios(nombre);
}
main();

async function hablar(nombre) {
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
            //var nombre = nombre 
            console.log(
                " Esa cantidad es mi velocidad\n y poder de procesamiento " +nombre
            );
            resolve();
        }, 90);
    });
}

function andrea(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(
                "Alcanza a imprimir igual ");
            reject('Hay un error');
        }, 90);
    });
}

const cortana = " la iA! ";
let eter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let transformer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let a = eter[2];
let b = transformer[2];
let c = a * b;
let d = 1 * (c / a);

function si(a, b) {
    setTimeout(function () {
        if ((a, b)) {
            result = true;
            console.log(result);
            console.log(c);
            console.log("=========== = ",a);
        }
    }, 1);
}
si(a, b);

console.log("[ + ] Iniciando el proceso");
hola("Platzi")
    .then(hablar)
    .then(adios)
    .then(andrea)
    .then((nombre) => {
        console.log("[ - ] Terminado el proceso");
    })
    .catch(error => {
        console.log(error)
    })

