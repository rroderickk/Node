*Bienvenido al la prueba de Node.js del curso de Platzi*. interés en aprender tecnologias ha alcanzado su punto máximo este año: __el número de búsquedas de la palabra aumentó más de diez veces entre 2020 y 2021, según Google Analytics__.   Los medios de comunicación, incluidos el New York Times, Washington Post y The Guardian, han publicado artículos extensos que investigan sus implicaciones. Empresas como Epic Games, Microsoft, Facebook y SK Telecom han anunciado públicamente planes para contratar mas y cada vez mas ingenieros de software de todo el mundo.

en la consola:

- node conceptos\monohilo.js = mostrando outputs ocasionando errores

## ¡Introducción! branch psicologico donde prendes algo nuevo.

Aquí aprenderás sobre Vim y estarás preparado para lo que está por venir:

> Vim es para programadores que quieren mejorar su juego. En manos de un experto, Vim tritura el texto a la velocidad del pensamiento.

## Instalación de Vim en VSCode

Si no ha instalado VSCodeVim, ahora es el momento de hacerlo.

- Abra la paleta de comandos con `CMD-SHIFT-P` en Mac `CTRL-SHIFT-P` en Windows / Linux.
- Escriba "Extensión"
- Seleccione `Extensiones: Instalar extensión`
- Escriba `vim`
- Instale la primera extensión que aparece (vscodevim).

Cuando haya hecho eso, vuelva a este editor. Tu cursor ya no debería ser un | sino un rectángulo.

:hushed:

Ahora vamos a dar un paseo rápido. Salte al capítulo siguiente.

## Pasitos de bebé en Vim

¿¡Oh no!? Si intentas escribir cosas con el curioso cursor en forma de rectángulo, ¿no pasa nada? ¿O suceden cosas extrañas? !!?

щ(ﾟДﾟщ）:cry: :stuck_out_tongue_winking_eye:

Está bien. Toma un trago de tu cerveza. No he roto tu editor. AUN!.

Vim es un editor bastante exquisito. Tiene modos. Un modo para navegar / editar, un modo para insertar texto, un modo para seleccionar texto. Esto es lo MEJORRR. Le da a Vim la capacidad de aprovechar realmente ese teclado al maximo porque puede realmente conectarse con el.

El modo que está activo en este momento (con el cursor de forma rectangular) es **modo normal**. En ese modo, Vim se enfoca únicamente en navegar súper rápido alrededor del código y editar, dos de las cosas más comunes que hace cuando codifica.

Todos los teclados tienen dos teclas ( F, J ) que contienen extruidos dos particulas que hacen que destaquen sobre las demas....

ESO TE DA SU UBICACION ESPACIAL

Comencemos a practicar los conceptos básicos del movimiento en modo normal: `hjkl`. `hjkl` te permite mover el cursor un espacio en cada dirección.

```
           ↑
     ← h j k l →
         ↓
```
Recuerdas cuando intentaste moverte en un juego?piensa que estás en un juego. Descendiendo Las Mazmorras del Infinito en busca de tesoros ...

````
  ________________________________________
/ ¡EMPECEMOS!       \
\ recoge el tesoro  /
  ----------------------------------------
         \   ^__^
          \  (oo)   Muy facil cierto?,
             *()*   Y si lo haces sin mirar el teclado?.
            (____)```

 Inicia aqui:
  /
 /
@  Practica usando hjkl.
   Ah! No atravieses las paredes.
   ======================================|
|  |#|               |##|          |   |#|
|  |#| ------------- |##|  |-----  |     |
|  |#|      |######| |##|  |####|      |-|
|  |#------ |######| ----  |####|----- |#|
|  |######| |######|       |########## ##|
|  |------| |-----#| ----  |---------- --|
|                |#| |##|            # ##|
|##################################### ##|
|#                                       |
|---| |----------------------============|
|~~~| |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
|---| |----------------------------------|
|                                        |
|=|===/?================================ |
|                                        |
|   o   o   o  o    o     o     o  o     |
|                                        |
|-=======================--$---==========#
                        |$$$$$|
                        tesoro
````

¡Sí! ¡Felicitaciones! ¡Ahora eres rico y puedes instalarte en un hermoso palacio ascii! :LOL:

```
                                   |>>>
                                   |
                               _  _|_  _
                              |;|_|;|_|;|
                              \\.    .  /
                               \\:  .  /
                                ||:   |
                                ||:.  |
                                ||:  .|
                                ||:   |       \,/
                                ||: , |            /`\
                                ||:   |
                                ||: . |
 __                            _||_   |
    '--~~__            __ ----~    ~`---,
           ~---__ ,--~'                  ~~----_____-~'
```

Ahora que hemos aprendido los movimientos más básicos, echemos un vistazo a cómo puede hacer que su editor se comporte como está acostumbrado a: **Modo Insertar**. **El modo de inserción** es donde Vim se enfoca en insertar fragmentos de texto y código, al igual que un editor normal.

- Presione `i` para entrar en **modo Insertar**.
- Escriba `<ESC>`, `<CTRL - [>` o `<CTRL-C>` para volver al **Modo normal**.

Completar estas oraciones. Practica usando `i` para entrar en **modo Insertar ** y `<ESC>` (o cualquiera de los otros) para entrar en **modo Normal**.


```
Quiero aprender Vim porque ...   
Mi comida favorita es...    
Moriría por un ...    
Si fuera a una isla desierta, llevaría un ...   
```

¡Impresionante! ¡Gran trabajo!

> Un gran consejo para mejorar sus habilidades con el teclado y Vim es asignar su BLOQ MAYÚS a ESC y CTRL. ESC cuando se presiona solo y CTRL cuando se presiona en combinación con cualquier otra tecla. Esto es muy bueno porque la tecla de bloqueo de mayúsculas está en su fila de inicio, muy cerca de la posición de reposo natural de sus manos. En Mac, puede lograrlo usando Karabiner y hay muchos teclados mecánicos que le permiten configurarlo, así como el Ultimate Hacking Keyboard.

## Subiendo de nivel: Moviéndose increíblemente rápido con Vim Motion

> Recuerde que puede navegar por este archivo usando hjkl:

## Moverse horizontalmente palabra por palabra

Comencemos con dos grandes movimientos para movernos horizontalmente:

- `w` para mover palabra por palabra
- `b` para retroceder palabra por palabra

Usando `w` y `b`, vaya al final de la siguiente oración y viceversa.

```
 empieza aqui
  /
 /
v
Aquí llegó Conan, el cimmerio, de cabello negro, ojos hoscos, espada en mano, ladrón, reaver, asesino, con gigantescas melancolías y gigantesca alegría, para pisar los tronos enjoyados de la Tierra bajo sus sandalias.
```
Recuerdas cuando intentaste moverte en un juego?piensa que estás en un juego. Descendiendo Las Mazmorras del Infinito en busca de tesoros ...

¿Notaste algo interesante al mover palabra por palabra? ¿Qué pasó con "Conan" y "Cimmerian"? ¿Cómo trató Vim a esos molestos `,`? ¿Esperabas que `,` fuera parte de una palabra diferente? ¿No? ¿Habría disfrutado de poder saltar a lo largo de 'Cimmerian' en un solo salto?

¡Usted puede hacer eso! Vim distingue entre **palabras** y **PALABRAS**. Una **palabra** en Vim es una secuencia de letras, dígitos y números, O una secuencia de otros caracteres que no están en blanco.

Todas estas son palabras. Vea cómo se comportan `w` y` b` cuando navega por ellos:

```
estas son 4 palabras
y estos de abajo también
,,, ..... (((((,. (
```

Vim también tiene el concepto de tipos especiales de palabras (con letras, dígitos y números) que también incluyen caracteres especiales como., (, {, Etc. Se llaman **WORDs** en la jerga de Vim. `Cimmerian` y `Conan, `son dos **palabras** y solo una **PALABRA**. Y al igual que puedes mover palabra por palabra usando `w` y `b`, puedes usar la versión en mayúsculas para mover **PALABRA** por **WORD**. ¡Pruébalo!

- `W` para mover palabra por PALABRA
- `B` para retroceder PALABRA por PALABRA

```
 empieza aqui
  /
 /
v
Aquí llegó Conan, el cimmerio, de cabello negro, ojos hoscos, espada en mano ...
```

_¿Notaste la diferencia?_

Los WORD son particularmente útiles para nosotros los programadores porque el código a menudo tiene muchos de ellos:

```
esta es una PALABRA: Iam_A_WORD (WORD)
esta función llamada sum (2,3) también es una PALABRA
esta matriz [1,2,3,4,5] también es una PALABRA
```

Ahora intente combinar `wW` y `bB` en el siguiente ejemplo:

```
 mecanografiado
 empieza aqui
  /
 /
v
function helloVimWorld () {
  console.log ("Hola mundo vim");
}
// Tan original Jaime. Tu abuela estaría orgullosa.
```

**En general, los movimientos de palabras permiten cambios más precisos, mientras que los movimientos de PALABRAS permiten un movimiento más rápido**:

```
escriba wwww ==> v v v v v
              palabra. son dos palabras
              palabra. es una PALABRA
escriba WWW ==> ^ ^ ^ ^
```

Ahora intentemos algo diferente:
- `e` para saltar al final de una palabra
- `ge` para saltar hasta el final de la palabra anterior

¡Intentalo!

```
 empieza aqui
  /
 /
v
Aquí llegó Conan, el cimmerio, de cabello negro, ojos hoscos, espada en mano, ladrón, reaver, asesino, con gigantescas melancolías y gigantesca alegría, para pisar los tronos enjoyados de la Tierra bajo sus sandalias.
```
Al igual que `w` y` b`, `e` y `ge` tienen un equivalente para WORD:

- `E` es como `e` pero opera en PALABRAS
- `gE` es como `ge` pero opera en PALABRAS

```
 empieza aqui
  /
 /
v
Aquí llegó Conan, el cimmerio, de cabello negro, ojos hoscos, espada en mano ...
```

## Mover a un personaje específico

Los movimientos de los personajes le permiten moverse horizontalmente de forma rápida y con alta precisión:

- Utilice `f{carácter}` (buscar) para pasar a la siguiente aparición de un carácter en una línea.
- Utilice `F{carácter}` para encontrar la aparición anterior de un carácter

Por ejemplo, `f (` le envía a la siguiente aparición de `(`. ¡Pruébelo!

```
 mecanografiado
 empieza aqui
  /
 /
v
function helloVimWorld () {
                      |
                      v ahora intenta volver con F (
  console.log ("Hola mundo vim");
}
// Tan original Jaime. Tu abuela estaría orgullosa.
```

Salte usando `f{carácter}` y `F{carácter}` y recopile todas las letras en el circuito a continuación:

```
-----------------F-------------------
------D------------------------------
--------------------------------X----
--o ----------------------------------
------------------_------------------
---------------------------- {--------
----) --------------------------------
```

Puede ver claramente cómo `f` es más rápido y más preciso que usar movimientos de palabras al lanzar uno contra el otro en un ejemplo:

```
escriba f (==> v v
              bola de fuego constante = función (objetivo) {
escriba wwww ==> ^ ^ ^ ^ ^
```

Además de `f`, Vim también ofrece el comando `t` (hasta):

- Utilice `t{carácter}` para mover el cursor justo antes de la siguiente aparición de un carácter (piense en `t{carácter}` de mover el cursor hasta ese carácter).
- Nuevamente, puede usar `T{carácter}` para hacer lo mismo que `t{carácter}` pero al revés

Si la diferencia entre los comandos f y t aún no está del todo clara, aquí hay un ejemplo que compara ambos:

```
escriba t (==> v v
              bola de fuego constante = función (objetivo) {
escriba f (==> ^ ^
```

Intente recolectar todos los '$' en este otro circuito. ¡¡¡Seremos tan ricos !!!

```
---------------- $ f -------------------
----- d $ ------------------------------
------------------------------- $ X ----
--o $ ----------------------------------
PS
PS
PS
```

Después de usar `f {carácter}` puede escribir `;` para ir a la siguiente aparición del carácter o `,` para ir a la anterior. Puede ver los `;` y `,` como comandos para repetir la última búsqueda de caracteres.

Esto es bueno porque le evita tener que escribir la misma búsqueda una y otra vez. Inténtalo tú mismo:

```
escriba fdfdfd ==> v v v v
                dejar daño = arma.daño * d20 ();
                dejar daño = arma.daño * d20 ();
escriba fd ;; ==> v v v v
```

## Moviéndose horizontalmente de forma extrema

- `0`: se mueve al primer carácter de una línea
- `^`: se desplaza al primer carácter que no esté en blanco de una línea
- `$`: se mueve al final de una línea
- `g_`: Se mueve al carácter que no está en blanco al final de una línea

Experimente a continuación. Intente llegar a todos los extremos en el siguiente fragmento de código:

```
 mecanografiado
 empieza aqui
  /
 /
v // He agregado algunos espacios en blanco adicionales al final
function helloVimWorld () {
  console.log ("Hola mundo vim");
}
// Tan original Jaime. Tu abuela estaría orgullosa.
```

## Moviéndose verticalmente

A partir de `k` y` j`, pasamos a una forma más rápida de maniobrar verticalmente con:    

- `}` salta párrafos enteros hacia abajo    
- `{` de manera similar pero hacia arriba    
- `CTRL-D` le permite bajar media página desplazándose por la página    
- `CTRL-U` te permite subir media página también desplazándote                

Suba y baje este archivo usando `{` y `}` primero. Luego compárelo con el uso de `CTRL-D` y` CTRL-U`. Utilice el "STOP" a continuación como marcador: D.   

```
----------------------------
----------- ----------------
---------  PARE  -----------
---------- -----------------
----------------------------
             |
             |
             v continúa aquí
```

## Movimientos verticales de alta precisión con patrón de búsqueda            

Para moverse a cualquier lugar dentro de un archivo cuando tiene un objetivo en mente, la mejor opción es buscar usando:   

- `/{patrón}` para buscar hacia adelante    
- `?{patrón}` para buscar hacia atrás   

Demos una vuelta por la búsqueda. Últimamente me he dedicado a la agricultura, pero no soy muy bueno en eso. El campo de abajo tiene un montón de malas hierbas y un pepino solitario. Intente usar la búsqueda para colocar el cursor exactamente en ese pepino. (Y recuerde que para ejecutar una búsqueda debe presionar `ENTER` al final del comando)    

```
------------------------------
--- v ---------------- v -----
------------- v --- pepino ---
----- v ----------- v --------
------------------------------
```

> Para resaltar la búsqueda. Es posible que deba actualizar a la configuración de vscode vim. Abra la configuración de usuario y asegúrese de que la opción vim.hlsearch esté habilitada. Ahora, cuando busque, el texto coincidente se resaltará en el editor.    

¡Impresionante! `/pepino` te trajo exactamente donde tenías que ir. Sin embargo, no es necesario que escriba la palabra completa, encontrará que la mayoría de las veces 2 o 3 caracteres son suficientes. Prueba `/cuc`:    

```
------------------------------
--- v ---------------- v -----
------------- v --- pepino ---
----- v ----------- v --------
------------------------------

```
Mucho más rápido, ¿verdad? Si hay varias coincidencias del mismo patrón, puede saltar rápidamente entre ellas usando:    
- `n` para pasar al siguiente partido   
- `N` para ir al partido anterior   
```
Escribe `n` y saltas a la siguiente aparición de` cuc` (Vim mantiene activa tu última búsqueda)   

-----------------------------
--- v - pepino ------ v -----
----------- v --- pepino ----
----- v ----------- v -------
pepino-----------------------
```

Ahora escribe `N` para ir hacia la barra hacia la parte superior del campo, luego "n" hacia adelante hasta este brillante "pepino".    

Puede utilizar `?{Patrón}` para buscar hacia arriba. El uso de `?` Sin un patrón cambia la dirección de la búsqueda actual. Al cambiar la dirección, `n` y `N` también cambian de dirección.   

Intente escribir `?` Y presione `ENTER`. Y luego vuelve a este 'pepino' mágico.

El `{patrón}` en `/{patrón}` no tiene que ser una cadena literal. Es una expresión regular. ¡Oh, el gran poder de las expresiones regulares!   

Intente usar el siguiente comando de búsqueda para encontrar títulos de segundo nivel en este documento. Observe cómo cuando llegue al final, comenzará de nuevo en la parte superior. Revise todo el documento hasta encontrar el siguiente título.   

- Escriba `/##.*`   

## Moviéndose más rápido con recuentos   

Los recuentos son números que le permiten multiplicar el efecto de un comando:   

```
{cuenta} {comando}
```

¡Pruébelos usted mismo! Escriba "2w" para avanzar dos palabras:   
```
escriba wwww ==> v v v v v
              palabra. son dos palabras
              palabra. son dos palabras
tipo 3w2w ==> ^ ^
```
Pruebe con `5j` para saltar las líneas de archivo a continuación`:   
```
-X   
0 | <- sitio de aterrizaje   
-X   
```
Intente encontrar una matriz dentro de una matriz:    

```
tipo f [;; ==> vv v
               [[1], [1, 2], [3]]
               [[1], [1, 2], [3]]
tipo 3f [==> ^
```

Intente saltar al segundo pepino con `2/cuc`:

```
--------------------------
--- v - pepino ------ v -----
----------- v --- pepino ---
----- v ----------- v --------
pepino------------------
```

¿Guay, verdad?

Una forma más rápida de moverse hacia arriba es combinar recuentos con `j` y `k`. Puede habilitar los números de línea relativos para tener una idea de cuántas líneas necesita saltar hacia arriba o hacia abajo (puede encontrarlo en la configuración del usuario en _números de línea_).

## Moviéndose semánticamente

Además de los movimientos anteriores que realmente no tienen en cuenta el significado de su código, Vim ofrece enlaces adicionales que toman en consideración la semántica de su código:

- Use `gd` para **g** o para **d** efinición de lo que esté debajo de su cursor.
- Use `gf` para **g** o para a **f** ile en una importación.

## Y algunos movimientos centrales más ingeniosos

Estos son otros movimientos que pueden resultar útiles de vez en cuando:

- Escriba `gg` para ir al principio del archivo.
- Utilice `{line}gg` para ir a una línea específica.
- Utilice `G` para ir al final del archivo.
- Escriba `%` saltar a la coincidencia `({[]})`.   

Intente volver al principio de este archivo con `gg`, luego vuelva con `G`.

Y ahora salte entre estos dos paréntesis coincidentes hasta que quiera irse a dormir:   

```
mecanografiado
             empezar aquí f [%
                 \
                  \
                   v
const bagOfFoods = [["pepino"], ["tomate", "patata"]];
```
¡Y eso es todo! Felicítate a ti mismo. Acabas de asimilar los movimientos de Vim.

#SIGUE INDAGANDO Y APRENDERAS MAS!
# PARTE 2 EN LA CARPETA MODULOS