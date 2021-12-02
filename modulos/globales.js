async function main() {
async function nombreP(P) {
return new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("###########======########======##########");
        resolve(P);
    }, 30);
});
}

async function banner(nombre,Jarvis) {
return new Promise(function (resolve, reject) {
    setTimeout(function () {
        let Wellcome = "Wellcome Sir,"
        let Platzi = "Platzi"
        console.log(`${Jarvis} ${nombre}`);
        console.log("###########======########======##########");
        resolve(nombre);
    }, 30);
});
}

async function codigo(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(nombre);
            resolve();
        }, 60);
    });
}

async function rodri(nombreRodri,pregunta) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            nombreRodri = "Rodri:"
            console.log(`${nombreRodri} ${pregunta}`);
            resolve();
        }, 60);
    });
}

async function ejemplo1(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
        let i = 0;
        let intervalo = setInterval(function () {
            console.log("hola mundoooooo");
            i++
            if (i === 3) {
                clearInterval(intervalo);
            }
        }, 1000); 
        console.log(nombre);
                    resolve();
                }, 1000);
            });
}

let nombre = await banner("Rodri","Jarvis: Wellcome Sir");
let nombre2 = await nombreP("Platzi");
await banner("Platzi","Jarvis: Wellcome Sir");
await banner("Esto es un codigo que puedes usar ","Jarvis: ");
await codigo("ESTO ES UN PEDAZO DE CODIGO:\n let i = 0;  \n let intervalo = setinterval(function () {\n\t console.log(hola mundoooooo);\n\t i++ if (i === 3) {\n\t clearinterval(intervalo);\n\t }\n }, 100); ");
await rodri("R","y para que sirve tal cosAAAA? ")
await ejemplo1("Jarvis: Imprimira esta secuencia y cortara al imprimirlo i veces checkea: ");


// console.log(`Terminando proceso ${nombre}, ${nombre2}`)

}
main();


/* let i = 0;
let intervalo = setinterval(function () {
    console.log("hola mundoooooo");
    i++
    if (i === 3) {
        clearinterval(intervalo);
    }
}, 100);

let intervalo1= setInterval(function () {
    console.log("Modulos");
    if (i === 3) {
        clearInterval(intervalo1);
    }
    i++
}, 100);
 */

/* console.log("###########======##########"); */