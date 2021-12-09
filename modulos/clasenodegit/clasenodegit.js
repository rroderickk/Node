async function main() {
    const fs = require("fs");
    let C = "Cortana"
    const R = "Rodri"
    const b = ';\n\t\44\44\54\44\44\;######;\t\44\44\54\44\44\;'
    const b_ = ';\t\t\44\44\54\44\44\;\4\4\4\4;\t\44\44\54\44\44\;'

    async function leer(ruta, cb, intl) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                fs.readFile(ruta, (err, data) => {
                    console.log("\n");
                    console.log(data.toString());
                    resolve(data.toString());
                });
            }, intl);
        });
    }
    p = __dirname + "/gitr.txt";
    await leer(p, "", 1);

    async function banner(mostrarBanner,mostrarBanner2, intb) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log(mostrarBanner);
                resolve(mostrarBanner);
                console.log(mostrarBanner2);
                resolve(mostrarBanner2);
            }, intb);
        });
    }

    async function codigo(mostrarCodigo,mostrarCodigo2,intc) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log(mostrarCodigo);
                resolve(mostrarCodigo);
                console.log(mostrarCodigo2);
                resolve(mostrarCodigo2);
            }, intc);
        });
    }

    function function1() {
        console.group("grupoInicial");
        console.log("[+] "+C+": Hola vamos a recordar los comandos de git:");
                        D="\44\44"
                        console.log("[+] "+D+1+": configuraciones iniciales \1");
                        console.log("[+] "+D+2+": Inicianlizando repositorios \1");
                        console.log("[+] "+D+3+": Agregando archivos a Stagging \2");
                        console.log("[+] "+D+4+": Subiendo archivos a gihub \3");
                        console.log("[+] "+D+5+": Subiendo archivos a gihub \4");
                        console.count("[\44] conteo veces [\44]");
                        console.log(b+b_+b_+b*b+b_+b_+b*b+b+b+b*b+b_+b_+b*b+b_+b_+b+"\n"*b+b_+b_+b+"\n")
                        function2();
                        console.groupEnd("grupoInicial");
                    
                };
                function function2 () {
                    console.group("grupoExtra");
                    console.log("[-] Ahora debugueando la f2 \2");
                    console.log("[-] I deb f2 \2");
                    console.count("[\44] conteo veces \44");
                    console.groupEnd("grupoExtra");
                    console.log("[+] Volvemos a la function1 :D \1");
                    console.log(b+b_+b_+b*b+b_+b_+b*b+b+b+b*b+b_+b_+b*b+b_+b_+b+"\n"*b+b_+b_+b)
            };
            function1();
    
    //await codigo("\t\t\t\t\20 [ \2 ] [ \3 ] [ \44 ] [ \44\44 ] \44","\t\t\t\t\44 [ \44\44 ] [ \1 ] [ \2 ] [ \3 ] \44", 0);
    await banner("\t\t\t\t\20 [ \2 ] [ \3 ] [ \44 ] [ \44\44 ] \44","\t\t\t\t\44 [ \44\44 ] [ \1 ] [ \2 ] [ \3 ] \44", 0);
}
main();
