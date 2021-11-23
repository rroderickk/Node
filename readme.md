*Bienvenido al la prueba de Node.js del curso de Platzi*. interés en aprender tecnologias ha alcanzado su punto máximo este año: __el número de búsquedas de la palabra aumentó más de diez veces entre 2020 y 2021, según Google Analytics__.   Los medios de comunicación, incluidos el New York Times, Washington Post y The Guardian, han publicado artículos extensos que investigan sus implicaciones. Empresas como Epic Games, Microsoft, Facebook y SK Telecom han anunciado públicamente planes para contratar mas y cada vez mas ingenieros de software de todo el mundo.

en la consola:

- node conceptos\monohilo.js = mostrando outputs ocasionando errores

# ¡Introducción!

Aquí aprenderá sobre Vim y estará preparado para lo que está por venir:

> Vim es para programadores que quieren mejorar su juego. En manos de un experto, Vim tritura el texto a la velocidad del pensamiento.

# Instalación de Vim en VSCode

Si no ha instalado VSCodeVim, ahora es el momento de hacerlo.

- Abra la paleta de comandos con `CMD-SHIFT-P` en Mac` CTRL-SHIFT-P` en Windows / Linux.
- Escriba "Extensión"
- Seleccione `Extensiones: Instalar extensión`
- Escriba `vim`
- Instale la primera extensión que aparece (vscodevim).

Cuando haya hecho eso, vuelva a este editor. Tu cursor ya no debería ser un | sino un rectángulo.

: O

Ahora vamos a dar un paseo rápido. Salte al capítulo siguiente.

# Pasos de bebé en Vim

¿¡Oh no!? Si intentas escribir cosas con el curioso cursor en forma de rectángulo, ¿no pasa nada? ¿O suceden cosas extrañas? !!?

щ(ﾟДﾟщ）:cry: :wtf?:

Está bien. Toma un trago de tu cerveza. No he roto tu editor. AUN!.

Vim es un editor bastante exquisito. Tiene modos. Un modo para navegar / editar, un modo para insertar texto, un modo para seleccionar texto. Esto es lo MEJORRR. Le da a Vim la capacidad de aprovechar realmente ese teclado al maximo porque puede realmete conectarse con el.

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

Yeah! Congrats! You're now rich and can settle in a beautiful ascii palace!

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

Now that we've learned the most basic of movements let's take a look at how you can make your editor behave like you are used to: **Insert mode**. **Insert mode** is where Vim focuses in inserting bits of text and code, just like a normal editor.

- Type `i` to get into **Insert mode**.
- Type `<ESC>`, `<CTRL-[>` or `<CTRL-C>` to get back to **Normal mode**.

Complete these sentences. Practice using `i` to get into **Insert mode** and `<ESC>` (or any of the others) to get into **Normal mode**.

```
I want to learn Vim because...
My favorite food is...
I'd die for a...
If I went to a desserted island I'd bring a...
```

Awesome! Great job!

> A great tip to improve your keyboard and Vim skills is to map your CAPSLOCK to both ESC and CTRL. ESC when pressed on its own, and CTRL when pressed in combination with any other key. This is super nice because the caps lock key is in your home row, very near the natural resting position of your hands. In Mac you can achieve that using Karabiner and there's many mechanicals keyboard that let you configure it as well like the Ultimate Hacking Keyboard.
