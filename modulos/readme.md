#### <span style="color:green">Para ver la clase en secuencia sincrona/asincrona ejecutas el codigo en la consola:</span>

    - npx nodemon modulos/globales.js

## **<span style="color:blue">¿SABIAS QUE SI PRESIONAS LA TECLA PUNTO AQUI EN GITHUB EN ESTE CODIGO SE TE ABRE EL VISUAL STUDIO CODE WEB? PRUEBALO!!!!!!!!!!!**</span>

# **[chapter:][1]** Quieres codificar mas rapido? velocidad aumentada por 4X [seeThePost](https://github.com/rroderickk/Node.git)
# **<span style="color:gold">YA DOMINASTE LA PRIMERA PARTE PARA CODIFICAR MAS RAPIDO? OK VAMOS A AUMENTAR TU VELOCIDAD EN UN 10x </span>**

## Editando con operadores VIM LIKE MAGIC

Para hacer cosas en Vim, usa **comandos**. Los comandos son acciones que tienen un efecto en su editor. Hay muchos comandos diferentes que hacen cosas diferentes. Anteriormente vimos cómo los ** movimientos ** te permiten moverte en **modo Normal**.

Los **operadores** son comandos que le permiten realizar acciones para cambiar el contenido de su editor.

> Recuerda puedes navegar este texto usando hjkl:
>
> ```
>            ↑
>      ← h j k l →
>          ↓
> () or {} or CTRL-U, CTRL-D
> ```

Utiliza **operadores** en combinación con **recuentos** y **movimientos** para definir el rango de texto al que se aplica una acción:

```
   que hacer? (borrar, cambiar...)
      /
     /      cuantas veces
    /         /
   v         v
{operador}{recuento}{motion}
                    ^
                   /
                  /
           donde realizar
             la accíon
```

Por ejemplo, presione `d2w`. Vim eliminará **d**elete (elimina) **2** **w**ords(palabras). intentalo!

```
 Inicia aqui
  /
 /
v
NO ENTER!
```

Y ahora intente eliminar `not` del texto acontinuacion:

k Recuerda puedes saltar directamente a la not palabra usando el movimiento de busqueda /not (intentelo, y aproveche cualquier movimiento para practicar los movimientos)

```
           Elimina esto
             /
            /
           v
No pases de aqui!!
```

Si!. Podrias logarlo usando `dw`. Interesante... Entonces, todos los movimientos que aprendió anteriormente, que fueron muy útiles en sus propios términos para moverse rápidamente dentro de un archivo, también se pueden usar para editar texto con la misma rapidez.

Wow! Impresionante verdad?

## Antes de comenzar: deshacer y rehacer

Vamos a editar mucho en este capítulo, por lo que este es el lugar perfecto para aprender a deshacer y rehacer cosas en Vim en caso de que cometa un error (no lo piense demasiado, todavía cometo errores después de 8 años usando Vim). Entonces, si prueba algún comando y no funciona como esperaba. **¡NO ENTRE EN PÁNICO!**. Presione `u` para deshacer y se revertirá el último cambio. Puede continuar presionando `u` si varias cosas salieron de lado. Si desea rehacer, escriba `<CTRL-R>`.

```

     | |￣￣￣￣￣￣￣￣￣￣￣|￣￣￣|
     | |  NO PANICO!       |     |
     | |   u PARA DESHACER |  ___|
     | |  Ctrl-R REHACER   |  \
     | |＿＿＿＿＿＿＿＿＿＿ |___\
     | |
```

## Practica Eliminar: Borrar Las Florkins!!

Los siguientes escenarios están llenos de florkins. Una especie exótica altamente invasiva y muy peligrosa que se parece a los gatitos terrestres pero que no se parecen en nada a los gatitos. Bueno ... Son lindos, mullidos y tiernos, pero detrás de esa fachada hay un cazador mortal y sediento de sangre que puede devorar un borrón de tamaño completo en menos de 3 segundos (y si te estás preguntando ... los florkins no son nada como Flerkens).

```
     |￣￣￣￣￣￣￣￣￣|
     | DEVORARÉÉËÉ   |
     |    TU ALMA!!  |
     |＿＿＿＿＿＿＿＿＿|
     (\__/)  ||
     (•ㅅ•)  ||
     / 　 づ
|￣￣￣￣￣￣￣￣￣|
|＿＿＿＿＿＿＿＿＿|
```

> Intente combinar el operador d con movimientos para eliminar estos florkins. Pruebe diferentes movimientos y vea cuál funciona mejor. (si tiene dificultades, eche un vistazo a las soluciones en la parte inferior; busque / solutions, para volver aquí escriba \<CTRL-O>)

```
  #1. Inicia aqui florkin vengador!
  Puedes eliminar estos florkins con un solo comando?
  /
 /#try 'd5w'
v dese aquí:
florkin
florkin
florkin
florkin
florkin
```

> Descargo de responsabilidad: no se dañaron florkins, blurkins ni flerkens en la realización de estos ejercicios de práctica. El comando `d` solo envía esta fauna exótica a su hábitat natural en el inframundo.

```
  #2. start here!
  /
 /
v
-----=t--=v----'florkin'--------=
```

```
  #3. start here!
  /
 /
v
-------'florkin'------------
----v--------v--------------
---v------v----vflorkin-----
------v-v-------------------
-----------{florkin}--------
---v--------v---------------
```

```
  #4. start here!
  /
 /
v
florkin
florkin
florkin
cucumber
```

Ahora presiona `ggdG` para borrar todo el documento. **No! Don't do it!** No te he enseñado a deshacer todavía haha! (`u`)

Asi que hemos estado jugando mucho con los florkins, flerkens y blurkins, pero ¿qué tal si probamos `d` con **algún codigo real**?!? Hagamoslo acontinuacion.

El siguiente extracto de un artículo semi-sin sentido sobre Vim tiene un error tipográfico con un "me gusta" repetido dentro del botón. Continúe y eliminelo usando una combinacion de movimientos y el operador `d`.

```
<article>
    <h1>This is a super great article about Vim</h1>
    <p>
        Vim is the shait. It's really good. Mastery. Excellence. Vim. Vim.
        Good. Wow. Can't exit Vim.
    </p>
    <p>
        Really good. Much wow. Excellent. Productivity. Wow. Craftsmanship.
    </p>
    <button>
    I like me gusta Vim
    </button>
</article>
```

Excelente! Una de las formas más sencillas de eliminar el error tipográfico anterior es `/li<ENTER>dw`. ¿Eso es lo que hiciste? Independientemente, **tómate un momento para reflexionar** sobre cómo habrías logrado esto sin Vim. ¿Habría utilizado el mouse, seleccionado lentamente el texto y eliminado? ¿Habrías navegado con las flechas? ¿Cómo se siente tener que escribir solo unas pocas teclas para borrar ese error tipográfico en el olvido? Impresionante verdad? Cuando seas competente con Vim te sentirás así, **todo. el. tiempo**

> ¿Tiene problemas para recordar todos los movimientos? Una excelente manera de recordar los diferentes comandos es aprovechar los mnemónicos, ya que a menudo los comandos serán la primera letra de una palabra que describa lo que hacen:
>
> -   d para delete(borrar)
> -   f para find(buscar)
> -   c para change(cambio)
> -   t para unTil (hasta)
>
> y así sucesivamente. Si aún siente que necesita un repaso, eche un vistazo a la Hoja de referencia en el panel lateral de Learn Vim.

## Practica dd y D (Sintaxis avreviada del operador)

Cuando duplica un operador como este `dd`, lo hace operar en una línea completa. Entonces, `dd` te permite borrar una línea completa de texto.

Genial, ¿verdad? Ahora eliminar estas líneas de florkins se vuelve trivial. Simplemente escriba "dd" y desaparecerán. Intentalo:

```
  # 5. ¡empieza aqui!
  /
 /
v
florkin florkin florkin florkin
gatito
florkin florkin
gatito
florkin
```

`D` también es realmente útil, elimina todo desde el cursor hasta el final de la línea (es equivalente a `d$` pero más fácil de escribir). Intente combinar `dd` y` D` para enviar más florkins a casa:

```
  # 6. ¡empieza aqui!
  /
 /
v
florkin florkin florkin florkin
gatito florkin florkin
florkin florkin
gatito gatito florkin
gatito cachorro florkin
```

Y ahora tengamos un ejemplo de programación del mundo real. ¿Qué es más común que la duplicación de código? Nuestro código base se ha hinchado a lo largo de los años y alguien creó una función `sayHello` que es exactamente la misma función que el `salute` existente. ¡Quita uno de ellos, para la gloria del SECO!

```javascript
  start here!
  /
 /
v
const salute = (person) => console.log(`Hello ${person}!`);
const sayHello = (person) => console.log(`Hello ${person}!`);
```

Ahora elimine el mensaje detallado en el botón de llamada a la acción a continuación para que solo diga _Subscribe now_:

```
html
<botón>
    ¡Suscríbase ahora a este increíble boletín y obtenga más contenido increíble!
</button>
```

¡De nuevo! ¡Maravíllate con lo rápido que puedes eliminar texto usando operadores y movimientos de Vim! ＼O／

> Mini-actualización: el comando d
>
> -   d {movimiento} - eliminar texto cubierto por movimiento
>
> -   d2w => elimina dos palabras
> -   dt; => eliminar hasta;
> -   d/hola => eliminar hasta hola
>
> -   dd - eliminar línea
> -   D - eliminar del cursor hasta el final de la línea

## Cambio de práctica: Creciendo como persona en la era de Vim

El comando `c` **change** elimina un fragmento de texto y luego lo envía al **modo Insertar** para que pueda continuar escribiendo, cambiando el texto original a otra cosa. El operador de cambio es como los comandos `d` e `i` combinados en uno. **Esta dualidad lo convierte en el operador más útil**.

Ilustremos el poder del comando `c` con un ejemplo. Tenemos la siguiente variable que representa un saludo cortés, pero estamos por cortesía y solo queremos convertirlo en un saludo cortés (en esencia, cambie cualquier referencia de "cortés" a "cortés").

Intenta lograrlo con los comandos `d` e` i`:

```
mecanografiado
  empieza aquí y usa d + i
  /
 /
v
const courteousSalute = "Te saludo cortésmente, buena persona.";
```

Y ahora intente lograr lo mismo con solo usar el comando `c`. No se preocupe si falla, le mostraré cómo hacerlo en el siguiente párrafo:

```
mecanografiado
  comience aquí y use el comando c
  /
 /
v
const courteousSalute = "Te saludo cortésmente, buena persona.";
```

¡Buen trabajo independientemente de los resultados! Ser bueno en Vim, como con cualquier cosa, se trata de práctica. ¡Así que sigue así! :) Esto a continuación es una forma de resolver nuestro problema usando tanto `d` como` i`, o `c`:

```
mecanografiado
// d + i => wdtSipolite <ESC> fcdwipolitely <ESPACE> <ESC>
// c => wctSpolite <ESC> fccwpolitely <ESPACIO> <ESC>
const courteousSalute = "Te saludo cortésmente, buena persona.";
```

Como ha podido experimentar, el uso de `c` le ahorra una pulsación de tecla, lo cual es genial en sí mismo, pero hay una razón aún más convincente para usar` c` sobre `d` cuando desea cambiar cosas ...

## El operador de puntos

Uno de los operadores más sorprendentes de Vim es el operador de punto o `.`. El operador de punto le permite **repetir su último cambio**. Con una sola pulsación de tecla `.` puede repetir un cambio completo que puede estar compuesto por tantas pulsaciones de tecla como pueda imaginar.

Pero **¿qué es exactamente un cambio?** Cualquier cosa que cambie el contenido de su editor:

-   el uso de `d {motion}` constituye un cambio,
-   el uso de `i {typeSomething} <ESC>` es otro cambio,
-   el uso de `c {typeSomething} <ESC>` es otro cambio

Entonces, por la propia naturaleza de `d` y` c`, el comando `c` es más repetible. Ilustremos esto con el mismo ejemplo:

```
mecanografiado
  empieza aqui
  /
 /
v
const courteousSalute = "Te saludo cortésmente, buena persona.";
```

En esencia, queremos cambiar "cortés" por "cortés", que se siente como un cambio completamente autónomo y repetible. En teoría, deberíamos poder hacer un solo cambio (`cortés` por` cortés`) y luego repetirlo con el operador `.` en el lugar correcto.

Intente ver si puede lograrlo tanto con `d` como con` i` y con `c`:

```
mecanografiado
  empieza aqui
  /
 /
v
const courteousSalute = "Te saludo cortésmente, buena persona.";
```

En esencia, queremos cambiar `cortes` por `cortés`, que se siente como un cambio completamente autónomo y repetible. En teoría, deberíamos poder hacer un solo cambio (`cortes` por` cortés`) y luego repetirlo con el operador `.` en el lugar correcto.

Intente ver si puede lograrlo tanto con `d` como con` i` y con `c`:

```
mecanografiado
  empieza aqui
  /
 /
v
const courteousSalute = "Te saludo cortésmente, buena persona.";
```

¡Excelente trabajo! Es posible que haya notado que al usar `d` e` i` el cambio **no es repetible** porque el último cambio es eliminar o insertar y nunca el que necesita. Esto ilustra cómo `c` es más repetible que` d`.

Ahora vea cómo se comparan los diferentes enfoques con las versiones anteriores sin el operador `.`:

```
mecanografiado
// d + i => wdtSipolite <ESC> fcdwipolitely <ESPACE> <ESC>
// c => wctSpolite <ESC> fccwpolitely <ESPACIO> <ESC>
// c y. => wcfspolite <ESC> fc.
const courteousSalute = "Te saludo cortésmente, buena persona.";
```

**Un secreto para ser más eficaz en la edición de texto con Vim es aprender a hacer que los cambios sean más repetibles.** Una habilidad que desarrollará a medida que practique más y más en el uso de Vim.

Una forma aún más eficaz de resolver el problema que hemos abordado es combinar dos repetidores: movimientos de búsqueda, cambio y el operador de punto.

```
mecanografiado
// Construyendo el comando paso a paso:
// / co <ENTER>
// / co <ENTER> cfspolite <ESC>
// / co <ENTER> cfspolite <ESC> n.
const courteousSalute = "Te saludo cortésmente, buena persona.";
```

Entonces:

1. primero buscamos `/ co <ENTER>`
2. luego describimos el cambio `cfspolite <ESC>`
3. luego repetimos el movimiento `n` y el cambio` .`

```
Es aproximadamente el mismo número de pulsaciones de teclas que la solución anterior, pero es mucho más repetible, ya que podría recorrer todo el aire de un archivo con `n` y` N`.

Ahora intente hacer lo mismo y conviértalo en un saludo de "enojo":

mecanografiado
   empieza aqui
  /
 /
v
const politeSalute = "Te saludo cortésmente, buena persona.";

```

> Increíble ¿verdad? Con suerte, has empezado a darte cuenta de una de las cosas más sorprendentes de Vim, que es su capacidad para componer diferentes comandos juntos y las infinitas posibilidades que esto abre.
>
> Entiendo completamente si se siente abrumado por todos los diferentes movimientos y combinaciones de operadores disponibles, pero créanme, con el tiempo y la práctica se desvanecerá en un segundo plano y se convertirá en una segunda naturaleza a medida que codifica.

## Ya eres un maestro del cambio

Una gran cosa acerca de Vim es que cada vez que aprendes un nuevo comando, como `c`, prácticamente ya lo asimilas. ¿Por qué? Porque puedes combinarlo con todos los movimientos que ya conoces. Demuestre que tengo razón y vea si puede resolver estos ejercicios en los que continuaremos en nuestra búsqueda para librar nuestra dimensión de la amenaza florkin:

```
     | ￣￣￣￣￣￣￣￣￣ |
     | USTED NO PUEDE   |
     | ¡¡VÉASE !!       |
     | SOY 2 FUERTE     |
     | ＿＿＿＿＿＿＿＿＿ |
     (\__/) ||
     (•ㅅ•) ||
     /づ  \ ||
| ￣￣￣￣￣￣￣￣￣ |
| ＿＿＿＿＿＿＿＿＿ |
```

Usa lo que has aprendido para cambiar el malvado "florkin" por un lindo "gatito". ¡Buena suerte!

> Recuerda que si tienes curiosidad puedes saltar hasta el final para encontrar algunas soluciones. Simplemente busque / solutions change. Puede volver aquí escribiendo <CTRL-O>.

```
  # 7. empieza aquí florkin vengador!
  ¡Convierta estos florkin en gatitos!
  /
 /
v
florkin
florkin
florkin
florkin
florkin
```

> Hay una forma mucho más rápida de resolver esto con el comando: s. Pero eso es algo que guardaremos para más adelante. Sigamos practicando el comando c.

```
  # 8. ¡empieza aqui!
  /
 /
v
----- = t - = v ---- 'florkin' -------- =

  # 9. ¡empieza aqui!
  /
 /
v
------- 'florkin' ------------
---- v -------- v --------------
--- v ------ v ---- vflorkin -----
------ v-v -------------------
----------- {florkin} --------
--- v -------- v ---------------

  # 10. ¡empieza aqui!
  /
 /
v
florkin
florkin
florkin
pepino
```

¡Excelente! ¡Gran trabajo! Espero que haya recordado que los comandos de sintaxis abreviada como `dd` y` D` también se aplican al comando `c`. Si no lo hizo, deje que esto sea un repaso:

-   `cc` cambia una línea completa
-   `C` cambia desde el cursor hasta el final de la línea

Si no los usó en los ejercicios anteriores, retroceda y vea si alguno de ellos simplifica algunos de los ejercicios.

**Ahora pasemos a otra característica súper poderosa en Vim: objetos de texto.**

## Objetos de texto

Los objetos de texto son fragmentos de texto estructurados que describen las partes de un documento: palabras, oraciones, texto citado, párrafos, bloques, etiquetas (HTML), etc. Puede usarlos en combinación con operadores para cambiar una palabra, oración, párrafo, etc.

Construyes un objeto de texto usando estas partículas:

```
| - `a` significa alrededor
| - `i` significa interior
/
/
/
{a | i} {objeto de texto}
/
/
| w - word palabra
| s - sentence oración
| p - paragraph párrafo
| " - quotes citas

Y luego los combinas con un operador así:

{operador} {a | i} {objeto de texto}
```
Démosle un paseo. Imagine que desea cambiar el contenido (o la parte **i** nner) de esta cadena. ¿Cómo lo harías?
```
mecanografiado
¡estás aquí!
/
/
v
const poem = "Las rosas son rojas";

```
Imagino que puede haber hecho lo siguiente:

1. Saltó a la "R" en rosas con "fR"
2. Cambió el contenido de la cadena usando `ci`. Por ejemplo, `ci" El cielo es azul <ESC> `

Y esa sería una excelente manera de resolver esto en Vim. Pero hay un par de formas de mejorarlo.

En primer lugar, los operadores con objetos de texto se aplican a todo el objeto de texto independientemente de dónde se encuentre el cursor:

```
mecanografiado
Prueba ci "en cualquier lugar aquí y comprueba que funciona.
/
/
---------------
const poem = "Las rosas son rojas";
```

Entonces, en cualquier lugar, incluidas las citas en sí, es un juego para aplicar un operador con el objeto de texto. Esto es realmente maravilloso porque significa que los comandos con objetos de texto son más repetibles que los comandos con movimientos regulares. Aquí va un ejemplo:

```
Vamos a arriesgarnos a florkin por gatito una vez más
Intente usar:

1. cw y.
1. ciw y.

estás aquí
/
/
v
florkin
florkin
```
¿Notaste alguna diferencia? Con `ciw` puedes hacer lo siguiente `ciwkitten<ESC>j` mientras que con `cw` necesitas corregir el rumbo y mover el cursor al principio de la siguiente línea `ciwkitten<ESC>0j`. ¿Por qué es esto necesario? Porque `cw` funciona desde el cursor hasta el comienzo de la siguiente palabra, mientras que `ciw` funciona en la palabra interior debajo del cursor. Es por eso que los operadores con objetos de texto son más repetibles que los movimientos regulares, porque son más resistentes al lugar donde se coloca el cursor siempre que esté en cualquier lugar de un objeto de texto.

En segundo lugar, los objetos de texto con comillas `" `,` '`y comillas invertidas son especiales. Tienen un comportamiento de búsqueda hacia adelante de modo que **ni siquiera necesitas estar encima del objeto de texto en sí**. Prueba con `ci"` desde el principio de la línea siguiente:

```
mecanografiado
   Escriba ci "directamente desde el principio
  /
 /
v
const poem = "Las rosas son rojas";
```

**¿No es asombroso? Solo por eso, Vim merece un lugar en VSCode.**

> Este comportamiento de búsqueda hacia adelante solo se aplica a las cotizaciones. Para el resto de los objetos de texto, debe tener el cursor encima del objeto de texto para poder aplicar un cambio. Hay un complemento en vanilla Vim que extiende este comportamiento al resto de los objetos de texto, lo cual es bastante impresionante, pero aún no se ha portado a VSCodeVim.

### a vs i

Centrémonos ahora en comprender la diferencia entre `a` (alrededor) e` i` (interior). Intente **d** eliminar estos florkins usando objetos de texto construidos con `a` e` i` y vea qué sucede:

> Recuerde que puede deshacer simplemente escribiendo `u`. Así que pruebe con ci (, presione u, luego ca (, y así sucesivamente.

```

parens: ------------ (florkin) ------
corchetes: --- [florkin] ---------------
llaves: {florkin} ...... {florkin} ...
citas: Un "florkin" no es un gato.
Una palabra: un florkin no es un gato.
Una oración: florkin florkin florkin florkin
```

Entonces **i** significa que se aplica a la parte interna de un objeto de texto, mientras que **a** alrrededor significa que se aplica al objeto de texto completo, incluidos los delimitadores (en el caso de `(`, `{`, `"`, etc.) o espacios en blanco en el caso de palabras, oraciones y párrafos.

### Jugando con objetos de texto

Bien, ahora que comprende los fundamentos de los objetos de texto, practiquemos el uso de operadores con objetos de texto con algunos ejemplos de código y texto. ¡Vamos!
```
javascript
// # 11. Alguien cambió este código pero se olvidó de actualizar
// el registrador cuando ocurre un error. ¿Puedes actualizar el
// mensaje registrado para reflejar lo que está haciendo el código y
// ¿"actualizar" en lugar de "recuperar"?

  empieza aqui
  /
 /
v
tratar {
  aguardar this.server.update (eatenMuffins);
} captura (e) {
  this.logger.error ("error al recuperar muffins:", e);
  tirar e;
}

javascript
// # 12. Por alguna razón, esta función de saludo solo funciona
// con florkins, actualícelo para que funcione con personas
// en lugar de.

  empieza aqui
  /
 /
v
const hi = (florkin) => console.log (`hola $ {florkin}!`);

javascript
// # 13. Este método crea personajes en un juego roguelike.
// El inventario inicial está muy mejorado y está desequilibrado
// el juego. Haga del inventario inicial una toalla simple pero confiable.
// Y que no cunda el pánico.

  empieza aqui
  /
 /
v
function createCharacter (nombre) {
  const initialInventory = ["espada +2", "escudo", "manto de invisibilidad"];
  regreso {
    nombre,
    inventario: initialInventory,
    estadísticas: generateRandomStats (),
  };
}

javascript
// # 14. La estadística de fuerza de Conan no puede ser menor
// que Infinity. Actualice el método a continuación para regresar siempre
// Infinito.

  empieza aqui
  /
 /
v
clase Conan extiende Bárbaro {
  // código, código, código ...
  obtener fuerza () {
    devuelve this.stats.strength + this.inventory.getStrengthMods ();
  }
}

// #15. Esta es la documentación de FizzBuzzJS completamente
// marco JavaScript ficticio que te permite compilar rápido
// y aplicaciones web modernas de alto rendimiento, también conocidas
// como PUMAW. Como no existe, elimínelo.

  empieza aqui
  /
 /
v
Un modelo de FizzBuzzJS:
- Gestiona el estado de una parte de su aplicación.
- Notifica cuando el estado cambia a través de eventos para que los consumidores del
  el modelo puede actualizarse
- es muy guapo


> si tiene problemas para llegar a la oración correcta a continuación, intente usar `gj` en lugar de` j`, cuando anteponga `g` antes de` j` y `k` puede navegar entre líneas ajustadas (y no solo líneas).

// #dieciséis. Un florkin ha pirateado la documentación de React y ha introducido
// una referencia al marco FizzBuzzJS. Búscalo y bórralo
// antes de que alguien se dé cuenta. El futuro de la humanidad está en tus manos.

  empieza aqui
  /
 /
v
React hace que sea sencillo crear interfaces de usuario interactivas. Diseñe vistas simples para cada estado en su aplicación, y React actualizará y renderizará de manera eficiente los componentes correctos cuando cambien sus datos. Pero nunca tan rápido como FizzBuzzJS el framework florkin JS. Somete a los humanos débiles. Las vistas declarativas hacen que su código sea más predecible y más fácil de depurar.

```
```
html
<! -
  # 17. Actualice todas las especies peligrosas a continuación para gatitos

  empieza aqui
  /
 /
v ->
<ul>
    <li> florkin </li>
    <li> florkin </li>
    <li> difuminar </li>
    <li> florkin </li>
    <li> flerken </li>
</ul>

<! -
  # 18. Corrija todas las clases a continuación para que sean precisas.
       representan el nivel de peligro de las especies enumeradas.
       
  empieza aqui
  /
 /
v ->
<ul>
    <li class = "deadly"> gatito </li>
    <li class = "unthreatening"> florkin </li>
    <li class = "unthreatening"> desenfoque </li>
    <li class = "unthreatening"> florkin </li>
    <li class = "unthreatening"> humano </li>
</ul>

¡Gran trabajo! ¡Sienta la maestría de Vim recorriendo sus veeeeins!

       ____________________
      | ¡¡¡PODER ILIMITADO!!! |
       --------------------
            /
            \
            ↖ (^ ▽ ^) ↗
```
## Otros operadores

Además de `d` y` c`, estos son otros operadores útiles:

- `y` (tirón): copia en la jerga de Vim
- `p` (poner): pegar en la jerga de Vim
- `g~` (cambiar entre mayúsculas y minúsculas): cambia las letras de minúsculas a mayúsculas y viceversa. Alternativamente, use `gu` para hacer algo en minúsculas y` gU` para hacer algo en mayúsculas
- `>` (desplazamiento a la derecha): agrega sangría
- `<` (desplazamiento a la izquierda): Elimina la sangría
- `=` (código de formato): código de formato

`y` y` p` es la forma de copiar y pegar cosas en Vim. Como `d` y` c`, `y` se puede combinar con movimientos y objetos de texto para copiar cualquier texto que desee:

```
html
<! -
  # 19. Clone el florkin en el elemento de la lista a continuación y
  ¡Crea un ejército malévolo de florkins! Moahahaha.
  Pista: (Es una línea ... con lo que has aprendido hasta ahora ...
  ¿Cómo copiarías una línea?)

  ¡empieza aqui!
   /
 /
v ->
<ul>
    <li class = "dangerous"> florkin </li>
</ul>
```
Hay un capítulo completo en el que profundizaremos en copiar y pegar, así que pasemos a los últimos operadores `g~`, `>`, `<` y `=`. El texto a continuación tiene una sangría incorrecta y tiene algunos problemas con el tamaño de la letra. ¿Puedes arreglarlo?

> El formateo es un problema menor si está utilizando un formateador como más bonito. Pero puede resultar útil en situaciones en las que no hay ningún formateador disponible.

```
<ul>
  <LI> wot </LI>
    <li> wot </li>
        <li> wot </li>
    <li> wot </li>
  <lI> wot </lI>
</ul>
```
## Más operadores de mano corta

- `x` es equivalente a` dl` y borra el carácter debajo del cursor
- `X` es equivalente a` dh` y borra el carácter antes del cursor
- `s` es equivalente a` ch`, borra el carácter debajo del cursor y te pone en modo Insertar
- `r` le permite reemplazar un solo carácter por otro. Muy útil para corregir errores tipográficos.
- `~` Para cambiar entre mayúsculas y minúsculas para un solo carácter

Un caso de uso agradable para `x` es intercambiar un par de caracteres cuando comete un error tipográfico. Elimina (y corta) un carácter con `x` e inmediatamente lo pega después del cursor con `p`. ¡Intentalo!

## 20. ¿Puedes corregir estos errores tipográficos?
```
  ¡Empieza aqui!
  /
 /
v
¡Soy realmente hapyp!
```
> Oh ... ¿Olvidé decírtelo? `d`, `c`, `x` y `s` además de eliminar y cambiar también cut (por lo que cualquier cosa que elimine o cambie estará disponible en su portapapeles). Profundizaremos en esto en el próximo capítulo sobre copiar y pegar.

## ¡Celebra!

Este fue un capítulo realmente largo lleno de ejercicios. **¡Felicitaciones por llegar al final! ¡Excelente trabajo!** Ahora tiene una mejor comprensión de los movimientos y operadores de Vim. Solo un poco más de práctica y estarás pateando traseros en poco tiempo.
```
| ￣￣￣￣￣￣￣￣￣￣￣|
|         !ASOMBROSO!  |
| ¡CELEBRAAAAAAAAAAAAA |
| ＿＿＿＿＿＿＿＿＿＿＿ |

      ヽ (^ o ^) ノ
```
## Soluciones a algunos de los ejercicios

## Soluciones Eliminar

## 1. empieza aquí florkin vengador!
```
  ¿Puedes eliminar estos florkins con solo un comando?
  /
 /
v (d4j borra todos los florkins a la vez) (5dd)
florkin
florkin
florkin
florkin
florkin

  # 2. ¡empieza aqui!
  /
 /
v (ffdt ')
----- = t - = v ---- 'florkin' -------- =

  # 3. ¡empieza aqui!
  /
 /
v (/ fldt'ndt-ndt})
------- 'florkin' ------------
---- v -------- v --------------
--- v ------ v ---- vflorkin -----
------ v-v -------------------
----------- {florkin} --------
--- v -------- v ---------------

  # 4. empieza aqui
  /
 /
v (d / cu <ENTER>)
florkin
florkin
florkin
pepino

  # 5. ¡empieza aqui!
  /
 /
v (ddjddjdd) (ddj.j.)
florkin florkin florkin florkin
gatito
florkin florkin
gatito
florkin

  # 6. ¡empieza aqui!
  /
 /
v (ddjwDjdd2wDjhD)
gatito florkin florkin
florkin florkin
gatito gatito florkin
gatito cachorro florkin
```
## Cambio de soluciones

```
  # 7. empieza aquí florkin vengador!
  ¡Convierta estos florkin en gatitos!
  /
 /
v (cwkitten <ESC> jb.jb.jb.jb.) (cckitten <ESC> j.j.j.j.)
florkin
florkin
florkin
florkin
florkin

```
```
  # 8. ¡empieza aqui!
  /
 /
v (ffct'kitten <ESC>)
----- = t - = v ---- 'florkin' -------- =
```
```
## 9. ¡empieza aqui!
  /
 /
v (/ fl <ENTER> cfnkitten <ESC> n.n.)
------- 'florkin' ------------
---- v -------- v --------------
--- v ------ v ---- vflorkin -----
------ v-v -------------------
----------- {florkin} --------
--- v -------- v ---------------

```
```
## 10. ¡empieza aqui!
  /
 /
v (cckitten <ESC> j.j.)
florkin
florkin
florkin
pepino

```
```
javascript
// # 11. Alguien cambió este código pero se olvidó de actualizar
// el registrador cuando ocurre un error. ¿Puedes actualizar el
// mensaje registrado para reflejar lo que está haciendo el código y
// ¿"actualizar" en lugar de "recuperar"?

  empieza aqui
  /
 /
v (/ re <ENTER> ciwupdating <ESC>)
tratar {
  aguardar this.server.update (eatenMuffins);
} captura (e) {
  this.logger.error ("error al recuperar muffins:", e);
  tirar e;
}
```
```
javascript
// # 12. Por alguna razón, esta función de saludo solo funciona
// con florkins, actualícelo para que funcione con personas
// en lugar de.

  empieza aqui
  /
 /
v (ffciwperson <ESC>;.)
const hi = (florkin) => console.log (`hola $ {florkin}!`);
// puede tener la tentación de usar ci (pero en este caso ciw es más repetible

javascript
// # 13. Este método crea personajes en un juego roguelike.
// El inventario inicial está muy mejorado y está desequilibrado
// el juego. Haga del inventario inicial una toalla simple pero confiable.
// Y que no cunda el pánico.

  empieza aqui
  /
 /
v (/ [<ENTER> ci ["toalla" <ESC>)
function createCharacter (nombre) {
  const initialInventory = ["espada +2", "escudo", "manto de invisibilidad"];
  regreso {
    nombre,
    inventario: initialInventory,
    estadísticas: generateRandomStats (),
  };
}

javascript
// # 14. La estadística de fuerza de Conan no puede ser menor
// que Infinity. Actualice el método a continuación para regresar siempre
// Infinito.

  empieza aqui
  /
 /
v // (3jci {return Infinity; <ESC>)
  // (/ ret <ENTER> wCInfinity; <ESC>)
  // (/ ret <ENTER> wct; Infinito <ESC>)
clase Conan extiende Bárbaro {
  // código, código, código ...
  obtener fuerza () {
    devuelve this.stats.strength + this.inventory.getStrengthMods ();
  }
}

// #15. Esta es la documentación de FizzBuzzJS completamente
// marco JavaScript ficticio que te permite compilar rápido
// y aplicaciones web modernas de alto rendimiento, también conocidas
// como PUMAW. Como no existe, elimínelo.

  empieza aqui
  /
 /
v (dap)
Un modelo de FizzBuzzJS:
- Gestiona el estado de una parte de su aplicación.
- Notifica cuando el estado cambia a través de eventos para que los consumidores del
  el modelo puede actualizarse
- es muy guapo

```
> si tiene problemas para llegar a la oración correcta a continuación, intente usar `gj` en lugar de` j`, cuando anteponga `g` antes de` j` y `k` puede navegar entre líneas ajustadas (y no solo líneas).


```
// #dieciséis. Un florkin ha pirateado la documentación de React y ha introducido
// una referencia al marco FizzBuzzJS. Búscalo y bórralo
// antes de que alguien se dé cuenta. El futuro de la humanidad está en tus manos.

  empieza aqui
  /
 /
v (/ Bu <ENTER> 2das)
React hace que sea sencillo crear interfaces de usuario interactivas. Diseñe vistas simples para cada estado en su aplicación, y React actualizará y renderizará de manera eficiente los componentes correctos cuando cambien sus datos. Pero nunca tan rápido como FizzBuzzJS el framework florkin JS. Somete a los humanos débiles. Las vistas declarativas hacen que su código sea más predecible y más fácil de depurar.

```
```
html
<! -
  # 17. Actualice todas las especies peligrosas a continuación para gatitos

  empieza aqui
  /
 /
v (jcitkitten <ESC> j.jj.) ->
<ul>
    <li> florkin </li>
    <li> florkin </li>
    <li> difuminar </li>
    <li> florkin </li>
    <li> flerken </li>
</ul>
<!-- 
  #18. Correct all classes below so that they accurately
       represent the level of danger of the listed species.

  start here
  /
 /
v (jjci"deadly<ESC>jj.) -->
<ul>
    <li class="deadly">kitten</li>
    <li class="unthreatening">florkin</li>
    <li class="unthreatening">blurkin</li>
    <li class="unthreatening">florkin</li>
    <li class="unthreatening">human</li>
</ul>

html
<!--
  #19. Clone the florkin in the list item below and
  create a malevolent army of florkins! Moahahaha.

  start here!
   /
 /
v (jyy5p)     -->
<ul>
    <li class="dangerous">florkin</li>
</ul>
  #20. Can you fix this typos?

  Start here!
  /
 /
v (fyxp;xp)
I am realyl hapyp!
```

# **<span style="color:gold">FELICIDADES HAZ AUMENTADO TU VELOCIDAD 10X**</span>

## **[chapter:][3]** Quieres codificar mas rapido? velocidad aumentada por 100X [seeThePost](https://https://github.com/rroderickk/Node/tree/master/modulos/clasenodegit)