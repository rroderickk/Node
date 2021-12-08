# CLASE CONSOLA NPX NODEMON CLASENODECONSOLA.JS

## Para recordar un codigo visto de algun tema sin salir de la consola, solo debes tener un archivo como CLASENODECONSOLA.JS sumado al comando Alias en la consola lo guardas de esta forma:

```
alias clasenodeconsola=npx nodemon [ruta del archivo \CLASENODECONSOLA.JS]

```

### Ahi tienes una forma de recordar tus tutoriales o textos o instrucciones rapidamente sin salir de la consola a buscar dentro de inmensidad de archivos....

### La salida del codigo es tal que Así:
```
###########======########======##########
Jarvis:  Rodri
Estos son los console.log que existen:                                                 ☺ +[]+[]+ [ + ] Esto es un banner [ + ] +[]++[]+
console.log() printType:LOG el print de toda la vida
console.info() printType:INFO: Para rastrear el codigo
console.error() printType:ERROR: renderiza distinto
console.warn() printType:WARN: renderiza distinto

Jarvis: console.table(tabla) renderiza una tabla:

se declara la (tabla)
         let tabla = {
         a1: "valor1",
         b2: "valor2",
         b3: "valor3",
        };

Jarvis: y asi renderiza la tabla:

┌─────────┬───────────┬──────────┬──────────┬──────────┬──────────┬───────────┐
│ (index) │    a1     │    b2    │    c1    │    d2    │    r1    │    r2     │
├─────────┼───────────┼──────────┼──────────┼──────────┼──────────┼───────────┤
│    0    │ 'valor1'  │ 'valor2' │          │          │          │           │
│    1    │           │          │ 'valorc' │ 'valord' │          │           │
│    2    │           │          │          │          │ 'valorr' │ 'valorr2' │
│    3    │ 'valorr2' │          │ 'valorr' │          │          │           │
└─────────┴───────────┴──────────┴──────────┴──────────┴──────────┴───────────┘
###########======########======##########
Jarvis:  Rodri De esta forma se pueden agrupar los console.logs:
                                                                                ☻ +[]+[]+ [ + ] Esto es un banner [ + ] +[]++[]+
console.group('Conversacion');
 console.log('Hola')
 console.log('Como')
 console.log('Estas?')
console.groupEnd('Conversacion')

Jarvis: renderiza así:

Conversacion
  Hola
  Como
  EstaS?
###########======########======##########
Jarvis:  Rodri Asi se usa para debbuggear en las funciones:
                                                                        ♥ +[]+[]+ [ + ] Esto es un banner [ + ] +[]++[]+
function funcion1( ) {
console.group("grupoFunction1");
console.log("Hola estoy debugueando la f1");
console.log("Yo tambien debuggueo la f1");
console.log("Me too debf1");
funcion2( );
console.groupEnd("grupoFunction1");
}
function funcion2 ( ) {
console.group("grupoFunction2");
console.log("Ahora debugueando la f2");
console.log("Volvemos a la 1 :D ♥");
}
function1( )
                                ☺Jarvis:  Que renderiza asi:

grupoFunction1
  [+] Hola estoy debugueando la f1 ☺
  [+] Yo tambien debuggueo la f1 ☺
  [+] Me too debf1 ☺
  [$] conteo de veces $: 1
  grupoFunction2
    [-] Ahora debugueando la f2 ☻
    [-] I deb f2 ☻
    [$] conteo de veces $: 2
  [+] Volvemos a la function1 :D ☺
[nodemon] clean exit - waiting for changes before restart
```
#### Si te gusta el codigo puedes checkearlo en el archivo clasenodeconsolas.js