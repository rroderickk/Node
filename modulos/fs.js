const fs = require("fs");

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        console.log(data.toString());
    });
}
p = __dirname + "/artAscii/money.txt";
l = __dirname + "/artAscii/troll.txt";
a = __dirname + "/artAscii/mm.txt";
t = __dirname + "/artAscii/shh.txt";
z = __dirname + "/artAscii/forzen.txt";
i = __dirname + "/artAscii/cat.txt";
r = leer(__dirname + "/artAscii/glases.txt");
leer(p, leer(l), leer(a), leer(t), leer(z), leer(i), (r));

// function escribir(ruta, contenido, cb) {
//     fs.writeFile(ruta, contenido, function (err) {
//         if (err) {
//             console.error("No he podido escribir", err);
//         } else {
//             console.log("Se ha escrito correctamente");
//         }
//     });
// }

//escribir(__dirname + "/moneyMMMM.txt",p,console.log());

function borrar(ruta, cb) {
    fs.unlink(ruta, function (err) {
        if (err) {
            console.error("No he podido borrar", err);
        } else {
            console.log("Se ha borrado correctamente");
        }
    });
}
//borrar(__dirname + "/moneyMMMM.txt", console.log());

/* async function leer(l) {
    try {
        const data = await fs.readFile(l);
        return data.toString();
    } catch (error) {
        console.error(error);
    }
} */

/* 
function borrar(ruta) {
    try {
        fs.unlink(ruta);
    } catch (error) {
        console.error(error);
    }
} */
//exports.leer = leer;
//exports.borrar = borrar;
