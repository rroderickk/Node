async function main() {
    console.info(
        "\1\n\2\3\4\5\n\16\17\20\21\22\23\24\25\26\27\30\n\31\32\34\35\36\37\40\41\42\43\44\45\46\47\50\51\52\53\54\55\56\57\72\73\74\75\76\77 Ignicion:"
    );

    const fs = require("fs");
    let C = "Cortana";
    let C_ = " [ + ] ";
    const Cp = " [+] ";
    const Cn = " [-] ";
    const R = "Rodri";
    const R_ = "\44\44";
    const b = ";\n\t\44\44\54\44\44;######;\t\44\44\54\44\44;";
    const b_ = ";\t\t\44\44\54\44\44;\4\4\4\4;\t\44\44\54\44\44;";

    async function leer(ruta, cb, intl) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                fs.readFile(ruta, (err, data) => {
                    console.log(data.toString() + cb);
                    resolve(data.toString() + cb);
                });
            }, intl);
        });
    }
    p = __dirname + "/gitr.txt";
    g = __dirname + "/glass.txt";
    await leer(
        p,
        "\1\n\2\3\4\5\n\16\17\20\21\22\23\24\25\26\27\30\n\31\32\34\35\36\37\40\41\42\43\44\45\46\47\50\51\52\53\54\55\56\57\72\73\74\75\76\77",
        1
    );

    async function banner(mostrarBanner, mostrarBanner2, intb) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log(mostrarBanner);
                resolve(mostrarBanner);
                console.log(mostrarBanner2);
                resolve(mostrarBanner2);
            }, intb);
        });
    }

    async function codigo(mostrarCodigo, mostrarCodigo2, intc) {
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
        console.log(Cp + C + ": Hola vamos a recordar los comandos de git:");
        D = "\44\44";
        console.log(Cp + R_ + D + 1 + ": configuraciones iniciales \1");
        console.log(Cp + D + 2 + ": Inicianlizando repositorios \1");
        console.log(Cp + D + 3 + ": Agregando archivos a Stagging \2");
        console.log(Cp + D + 4 + ": Eliminando archivos de Stagging \2");
        console.log(Cp + D + 5 + ": Subiendo archivos a gihub \3");
        console.log(Cp + D + 6 + ": Checkeando con git status \4");
        console.count(R_ + "[\44] conteo veces [\44]");
        console.log(
            b +
                b_ +
                b_ +
                b * b +
                b_ +
                b_ +
                b * b +
                b +
                b +
                b * b +
                b_ +
                b_ +
                b * b +
                b_ +
                b_ +
                b +
                "\n" * b +
                b_ +
                b_ +
                b +
                "\n"
        );
        function2();
        console.groupEnd("grupoInicial");
    }
    function function2() {
        console.group("grupoExtra");
        hola = console.log(
            Cn + C + D + "ComandosExtra" + ": Creando ramas \31"
        );
        hola;
        console.log(Cn + C + D + "CE" + ": Git log(registro) de eventos \32");
        console.log(Cn + C + D + "CE" + ": Ramas \35");
        console.log(Cn + C + D + "CE" + ": Mostrando,Cambiando ramas \36");
        console.log(Cp + C + D + "CE" + ": Fusionando ramas (merge) \37");
        console.count(R_ + " conteo veces \44");
        console.groupEnd("grupoExtra");
        console.log(R + "[+] Volvemos a la function1 :D \1");
        console.log(
            b +
                b_ +
                b_ +
                b * b +
                b_ +
                b_ +
                b * b +
                b +
                b +
                b * b +
                b_ +
                b_ +
                b * b +
                b_ +
                b_ +
                b +
                "\n" * b +
                b_ +
                b_ +
                b
        );
    }
    function1();

    //await codigo("\t\t\t\t\20 [ \2 ] [ \3 ] [ \44 ] [ \44\44 ] \44","\t\t\t\t\44 [ \44\44 ] [ \1 ] [ \2 ] [ \3 ] \44", 0);
    await banner(
        "\n\t\t\t\t\20 [ \2 ] [ \3 ] [ \44 ] [ \44\44 ] \44",
        "\t\t\t\t\44 [ \44\44 ] [ \1 ] [ \2 ] [ \3 ] \44 \n",
        0
    );
    await codigo(
        C_ +
            C +
            R_ +
            1 +
            ": Ver la configuracion de git \n git config \n" +
            C +
            ": \5 alias gcf=git config \n",
        C_ +
            C +
            R_ +
            1 +
            " Configura tu email: \n" +
            'git config --global user.email ["TuEmail"]\n'
    );
    await codigo(
        C_ + C + R_ + 1 + ": Configura Tu Nombre: ",
        'git config --global user.name ["TuNombre"]\n'
    );

    await codigo(
        C_ +
            C +
            R_ +
            2 +
            ": Inicializa git:\ngit init \n" +
            C +
            ": \5 alias gi=git init\n\n" +
            C_ +
            C +
            R_ +
            2 +
            ": Checkea el status\ngit status" +
            "\n" +
            C +
            R_ +
            2 +
            " \5 alias gs=git status\n",
        C_ +
            C +
            R_ +
            2 +
            ": Agrega un archivo al area de stagging:\ngit add [archivo.ext]\n" +
            C +
            ": \5 alias gaf=git add \441\n"
    );

    await codigo(
        Cn +
            C +
            R_ +
            2 +
            ": Eliminar archivo de stagging:\ngit rm [archivo.ext] \n" +
            C +
            ": \5 alias grem=git rm $1\n",
        C_ +
            C +
            R_ +
            2 +
            ": Agrega todos los archivos:\ngit add .\n" +
            C +
            ": \5 alias ga.=git add .\n"
    );

    await codigo(
        C_ +
            C +
            R_ +
            3 +
            ': Haz tu primer commit: \ngit commit -m "MejorMensajeDescriptivoPosible"\n' +
            C +
            " \5 alias gcm=git commit -m \441\n",
        C_ +
            C +
            R_ +
            4 +
            ' Enlazate con git: \ngit remote add origin ["linkDelRepos"]\n' +
            "\n" +
            C_ +
            C +
            R_ +
            4 +
            ": Sube los archivos a git\ngit push -u origin main\n" +
            C +
            ": Checkea con el comando gs"
    );

    await banner(
        "\n\20 [ \2 ] [ \3 ] [ \44 ] [ \44\44 ] \44" +
            "\t\t\44 [ \44\44 ] [ \1 ] [ \2 ] [ \3 ] \44",
        ""
    );
    console.log(
        b +
            b_ +
            b_ +
            b * b +
            b_ +
            b_ +
            b * b +
            b +
            b +
            b * b +
            b_ +"youCanSeeTheMagic?"+
            b_ +
            b * b +
            b_ +
            b_ +
            b +
            "\n" * b +
            b_ +
            b_ +
            b
    );
    await banner(
        "\n\20 [ \2 ] [ \3 ] [ \44 ] [ \44\44 ] \44" +
            "\t\t\44 [ \44\44 ] [ \1 ] [ \2 ] [ \3 ] \44",
        ""
    );
    await leer(g, "\n\n"+"CheatMode: "+b+b_+"alias: \n\t"+"\44\44 bash2021 CHEATSHEET:\t\tbashcs;"+"\n\t"+"\44\44 python2021 CHEATSHEET:  pycs;"+"\n\t"+"\44\44 html52021 CHEATSHEET:\t\thtml5;"+"\n\t"+"\44\44 js2019 CHEATSHEET:\t\tjscs;"+"\n\t"+"\44\44 node CHEATSHEET:\tnodecs;"+"\n\t"+"\44\44 git CHEATSHEET:\t\tgitcs"+"\n\t"+"\44\44 git2021 CHEATSHEET:\t\t\tgitcs2021"+b+b_, 1);

}
main();
