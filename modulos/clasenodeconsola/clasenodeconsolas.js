async function main() {
    J = "Jarvis: ";
    let tabla = [
        {
            a1: "valor1",
            b2: "valor2",
        },
        {
            c1: "valorc",
            d2: "valord",
        },
        {
            r1: "valorr",
            r2: "valorr2",
        },
        {
            c1: "valorr",
            a1: "valorr2",
        },
    ];

    async function banner(nombre, Jarvis, Wellcome, intb) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                let Platzi = " Rodri";
                //console.log(`${Jarvis} ${nombre}`);
                //resolve();
                console.log("###########======########======##########");
                resolve(console.log(Wellcome + Platzi + Jarvis + nombre));
            }, intb);
        });
    }

    async function codigo(mostrar, intc) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log(mostrar);
                resolve();
            }, intc);
        });
    }
    //=============================================================tipo console log
    await banner(
        "\t\t\t\t\t\t\1 +[]+[]+ [ + ] Esto es un banner [ + ] +[]++[]+ ",
        "\n Estos son los console.log que existen: ",
        J
    );
    console.log("console.log() printType:LOG el print de toda la vida");
    console.info("console.info() printType:INFO: Para rastrear el codigo");
    console.error("console.error() printType:ERROR: renderiza distinto");
    console.warn("console.warn() printType:WARN: renderiza distinto");

    await codigo("\n" + J + "console.table(tabla) renderiza una tabla: \n");
    await codigo(
        'se declara la (tabla) \n\t let tabla = { \n\t a1: "valor1",\n\t b2: "valor2",\n\t b3: "valor3",\n\t}; \n'
    );
    await codigo(J + "y asi renderiza la tabla: \n");
    console.table(tabla);

    //=============================================================agrupando console log
    await banner(
        "\t\t\t\t\t\t\t\t\t\t\2 +[]+[]+ [ + ] Esto es un banner [ + ] +[]++[]+ ",
        " De esta forma se pueden agrupar los console.logs: \n",
        J
    );
    //=============================================================para debbuggear console log
    await codigo(
        `console.group(\'Conversacion\'); \n\b console.log(\'Hola\') \n\b console.log(\'Como\') \n\b console.log(\'Estas?\')\n\bconsole.groupEnd(\'Conversacion\') \t\n\n${J}renderiza así: \n`
    );
    console.group("Conversacion");
    console.log("Hola");
    console.log("Como");
    console.log("EstaS?");
    console.groupEnd("Conversacion");
    //=============================================================deb console log
    await banner(
        "\t\t\t\t\t\t\t\t\t\3 +[]+[]+ [ + ] Esto es un banner [ + ] +[]++[]+ ",
        " Asi se usa para debbuggear en las funciones: \n",
        J
    );

    function funcion1() {
        const func1 = {
            f: 'function funcion1( ) { \n',
            u: 'console.group("grupoFunction1"); \n',
            n: 'console.log("Hola estoy debugueando la f1"); \n',
            c: 'console.log("Yo tambien debuggueo la f1"); \n',
            i: 'console.log("Me too debf1"); \n',
            o: 'console.groupEnd("grupoFunction1"); \n',
            n_: 'funcion2( );\n',
            uno: '} \n',
            f_: 'function funcion2 ( ) { \n',
            u_: 'console.group("grupoFunction2"); \n',
            n2: 'console.log("Ahora debugueando la f2"); \n',
            uno_: 'console.log("Volvemos a la 1 :D \3"); \n',
            fin: '} \n',
            fin_: 'function1( ) \n'
        };
        console.log(
            func1.f +
                func1.u +
                func1.n +
                func1.c +
                func1.i +
                func1.n_ +
                func1.o +
                func1.uno +
                func1.f_ +
                func1.u_ +
                func1.n2 +
                func1.uno_ +
                func1.fin +
                func1.fin_+
                `\t\t\t\t`+ "\1" +`${J} Que renderiza asi: \n`
        );
        function function1() {
                console.group("grupoFunction1");
                    console.log("[+] Hola estoy debugueando la f1 \1");
                    console.log("[+] Yo tambien debuggueo la f1 \1");
                    console.log("[+] Me too debf1 \1");
                    console.count("[\44] conteo veces \44");
                function2();
                console.groupEnd("grupoFunction1");
                
            };
            function function2 () {
                console.group("grupoFunction2");
                console.log("[-] Ahora debugueando la f2 \2");
                console.log("[-] I deb f2 \2");
                console.count("[\44] conteo veces \44");
                console.groupEnd("grupoFunction2");
                console.log("[+] Volvemos a la function1 :D \1");
        };
        function1();
    };
    funcion1();
}
main();
