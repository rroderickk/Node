*Bienvenido al la prueba de Node.js del curso de Platzi*. interés en aprender tecnologias ha alcanzado su punto máximo este año: __el número de búsquedas de la palabra aumentó más de diez veces entre 2020 y 2021, según Google Analytics__.   Los medios de comunicación, incluidos el New York Times, Washington Post y The Guardian, han publicado artículos extensos que investigan sus implicaciones. Empresas como Epic Games, Microsoft, Facebook y SK Telecom han anunciado públicamente planes para contratar mas y cada vez mas ingenieros de software de todo el mundo.

en la consola:

- node conceptos\monohilo.js = mostrando outputs ocasionando errores

## ¡Introducción! branch psicologico y aprendes donde aprendes algo nuevo.

Aquí aprenderá sobre Vim y estará preparado para lo que está por venir:

> Vim es para programadores que quieren mejorar su juego. En manos de un experto, Vim tritura el texto a la velocidad del pensamiento.

## Instalación de Vim en VSCode

Si no ha instalado VSCodeVim, ahora es el momento de hacerlo.

- Abra la paleta de comandos con `CMD-SHIFT-P` en Mac` CTRL-SHIFT-P` en Windows / Linux.
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

El modo que está activo en este momento (con el cursor de forma rectangular) es ** modo normal **. En ese modo, Vim se enfoca únicamente en navegar súper rápido alrededor del código y editar, dos de las cosas más comunes que hace cuando codifica.

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

Ahora que hemos aprendido los movimientos más básicos, echemos un vistazo a cómo puede hacer que su editor se comporte como está acostumbrado a: ** Modo Insertar **. ** El modo de inserción ** es donde Vim se enfoca en insertar fragmentos de texto y código, al igual que un editor normal.

- Presione `i` para entrar en ** modo Insertar **.
- Escriba `<ESC>`, `<CTRL - [>` o `<CTRL-C>` para volver al ** Modo normal **.

Completar estas oraciones. Practica usando `i` para entrar en ** modo Insertar ** y` <ESC> `(o cualquiera de los otros) para entrar en ** modo Normal **.

''
Quiero aprender Vim porque ...
Mi comida favorita es...
Moriría por un ...
Si fuera a una isla desierta, llevaría un ...
''

¡Impresionante! ¡Gran trabajo!

> Un gran consejo para mejorar sus habilidades con el teclado y Vim es asignar su BLOQ MAYÚS a ESC y CTRL. ESC cuando se presiona solo y CTRL cuando se presiona en combinación con cualquier otra tecla. Esto es muy bueno porque la tecla de bloqueo de mayúsculas está en su fila de inicio, muy cerca de la posición de reposo natural de sus manos. En Mac, puede lograrlo usando Karabiner y hay muchos teclados mecánicos que le permiten configurarlo, así como el Ultimate Hacking Keyboard.

## Moviéndose increíblemente rápido con Vim Motion

Para hacer cosas en Vim, usa ** comandos **. Los comandos son acciones que tienen un efecto en su editor. Hay muchos comandos diferentes que hacen cosas diferentes. ** Movimientos ** son comandos que usas para moverte en ** modo Normal ** (pronto aprenderás que son capaces de mucho más).

Es hora de practicar algunos movimientos básicos para moverte increíblemente rápido por tu editor. ¡Wiho!

> Recuerde que puede navegar por este archivo usando hjkl: