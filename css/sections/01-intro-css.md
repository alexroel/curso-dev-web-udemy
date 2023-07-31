# Introducción a CSS

1. [Introducción](#introducción)
2. [¿Qué es CSS?](#¿qué-es-css)
3. [Mis primeros estilos](#mis-primeros-estilos)
4. [Selectores básico](#selectores-básico)
5. [Selectores combinados](#selectores-combinados)
6. [Pseudoclases y Pseudoelementos](#pseudoclases-y-pseudoelementos)
7. [Cascada y especificidad](#cascada-y-especificidad)
8. [Resumen](#resumen)  

---
## Introducción 
¡Bienvenidos a la sección de introducción a CSS de nuestro curso de diseño web! En este emocionante viaje, exploraremos las bases fundamentales de CSS (Cascading Style Sheets), el lenguaje que da vida y estilo a nuestras páginas web.

¿Qué es CSS?

CSS, o Hojas de Estilo en Cascada, es un lenguaje de estilo utilizado para controlar el aspecto y la presentación de nuestras páginas web. Con CSS, podemos alterar colores, fuentes, márgenes y muchos otros aspectos visuales, permitiendo una separación clara entre el contenido y el diseño.

Mis primeros estilos:

En esta primera etapa, nos sumergiremos en los conceptos básicos de CSS. Aprenderemos cómo aplicar estilos directamente a elementos HTML, convirtiendo páginas ordinarias en obras de arte digital. Veremos cómo definir propiedades como el color del texto, el tamaño de la fuente y los márgenes, para crear un diseño atractivo y agradable a la vista.

Selectores básicos:

Un aspecto esencial de CSS es la capacidad de apuntar y seleccionar elementos específicos en nuestro HTML. Aquí descubriremos los "selectores básicos", que nos permiten dirigirnos a elementos por su tipo, clase o ID. Aprenderemos cómo afectar distintos elementos y cómo aprovechar al máximo los selectores.

Selectores combinados:

Damos un paso más allá en la personalización de nuestros estilos con los "selectores combinados". Estos nos permiten seleccionar elementos específicos que cumplen con varias condiciones simultáneamente. Esta poderosa habilidad nos da mayor flexibilidad para crear diseños sofisticados y elegantes.

Pseudoclases y Pseudoelementos:

Las pseudoclases y pseudoelementos añaden una dimensión interactiva y dinámica a nuestros estilos. Con ellas, podemos aplicar estilos a elementos en función de su estado o posición en la página. Exploraremos cómo crear estilos para enlaces visitados, elementos en estado de foco y mucho más.

Cascada y especificidad:

Uno de los conceptos más importantes de CSS es la cascada y la especificidad. Entender cómo funcionan estas reglas nos ayudará a manejar la prioridad de los estilos y resolver conflictos cuando múltiples reglas se aplican a un mismo elemento. Es el corazón del diseño eficiente y organizado.

¡Prepárate para sumergirte en el mundo de la presentación web con CSS! Nuestro objetivo es que al final de este curso, te sientas cómodo y seguro al dar vida a tus creaciones digitales con estilos personalizados y una presentación impecable. ¡Comencemos!

---
## ¿Qué es CSS?
CSS, que significa "Cascading Style Sheets" (Hojas de Estilo en Cascada), es un lenguaje de estilo utilizado para definir la presentación y el diseño de documentos HTML y XHTML. En otras palabras, CSS es una tecnología que se utiliza para controlar la apariencia visual de un sitio web o una página web.

Cuando se crea una página web, generalmente se divide en dos partes: el contenido, que se define utilizando HTML, y el estilo, que se define utilizando CSS. HTML se encarga de la estructura y el contenido del sitio web, mientras que CSS se encarga de la forma en que se presenta ese contenido, como colores, fuentes, márgenes, tamaños de texto, alineación, fondos y otros aspectos visuales.

Las hojas de estilo en cascada funcionan mediante la definición de reglas que se aplican a elementos HTML específicos. Por ejemplo, puedes crear una regla que indique que todos los títulos (etiquetas `<h1>`, `<h2>`, etc.) en una página deben tener un color de fuente específico y un tamaño determinado. Luego, esas reglas se aplican automáticamente a todos los títulos en la página.

CSS ofrece una gran flexibilidad y control sobre el diseño de un sitio web, permitiendo que los diseñadores y desarrolladores creen diseños atractivos y coherentes en todas las páginas del sitio. Además, al separar el contenido y el estilo, CSS hace que sea más fácil realizar cambios en la apariencia de un sitio web sin tener que modificar el contenido subyacente, lo que facilita el mantenimiento y la escalabilidad del sitio.

### Sintaxis de CSS
La sintaxis de CSS se compone de las siguientes partes:

- **Selector**: identifica los elementos HTML a los que se aplicarán los estilos. Puede ser un nombre de etiqueta HTML, una clase, un ID, un selector de atributos o un selector de pseudo-clases.

- **Declaración**: se compone de una propiedad y un valor. La propiedad es el estilo que se desea aplicar, como el color de fondo o el tamaño de la fuente, y el valor es el valor específico que se desea aplicar para esa propiedad.

- **Bloque de declaración**: contiene una o más declaraciones, y se encierra entre llaves { }.

La sintaxis completa de una regla CSS se ve así:

~~~css
selector {
  propiedad: valor;
  propiedad: valor;
  propiedad: valor;
}
~~~

Por ejemplo, para aplicar un color de fondo rojo a todos los encabezados de nivel 1 en una página HTML, se usaría la siguiente regla CSS:

~~~css
h1 {
  color: red;
}
~~~

Esta regla selecciona todos los elementos `h1` en la página y aplica un color rojo a ellos mediante la propiedad `color`.

---
## Mis primeros estilos
Hay tres formas principales de agregar estilos a un elemento HTML utilizando CSS:

- **Estilos en línea**: se agregan directamente al elemento HTML utilizando el atributo style. Por ejemplo:
~~~css
<h1 style="color: blue;">Alex Roel</h1>
~~~

- **Estilos internos**: se agregan en la sección `<head>` del documento HTML utilizando la etiqueta `<style>`. Por ejemplo:
~~~html
<!DOCTYPE html>
<html>
<head>
    <title>Mi sitio web</title>
    <style>
    h1 {
        color: blue;
    }
    </style>
</head>
<body>
    <h1>Alex Roel</h1>
</body>
</html>
~~~

- **Estilos externos**: se agregan en un archivo CSS separado que se vincula al documento HTML utilizando la etiqueta `<link>`. Por ejemplo:
En el archivo HTML:

~~~html
<!DOCTYPE html>
<html>
<head>
    <title>Mi sitio web</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <h1>Alex Roel</h1>
</body>
</html>
~~~

En el archivo CSS estilos.css:

~~~css
h1 {
    color: blue;
}
~~~

En general, se recomienda utilizar la tercera opción (estilos externos) ya que permite mantener una separación adecuada entre la estructura del documento HTML y su presentación visual, lo que facilita el mantenimiento y la modificación de estilos en el futuro.

---
## Selectores básico
Los selectores básicos de CSS te permiten apuntar a elementos específicos en una página web para aplicarles estilos. Aquí hay una descripción de los selectores más comunes:

### Selector de elementos:
Este selector apunta a todos los elementos que coinciden con el nombre del elemento HTML. Por ejemplo:

~~~css
p {
  color: blue;
}
~~~

Esto seleccionará todos los párrafos (`<p>`) en el documento y les aplicará el color azul.

### Selector de clase:
Este selector apunta a elementos que tienen un atributo de clase específico. Se denota utilizando un punto (.) seguido del nombre de la clase. Por ejemplo:

~~~css
.mi-clase {
  color: blue;
}
~~~

Esto seleccionará todos los elementos que tienen la clase "mi-clase" y les aplicará un tamaño de fuente de 16px.

### Selector de ID:
Este selector apunta a un elemento específico que tiene un atributo "id" único. Se denota utilizando un signo de almohadilla (#) seguido del nombre del ID. Por ejemplo:

~~~css
#mi-id {
  color: blue;
}
~~~

Esto seleccionará el elemento con el ID "mi-id" y le aplicará un fondo amarillo.

### Selector por atributo:
Este selector permite apuntar a elementos que tienen un atributo específico o un valor específico para ese atributo. Por ejemplo:

~~~css
input[type="text"] {
  border: 1px solid gray;
}
~~~

Esto seleccionará todos los elementos `<input>` que tengan un atributo "type" con el valor "text" y les aplicará un borde gris de 1px.

### Agrupar selectores
Puedes agrupar selectores separándolos por comas. Esto permite aplicar los mismos estilos a varios selectores en una sola declaración.

~~~css
h2, h3, h4 {
    color: green;
}
~~~
En este ejemplo, los elementos `<h2>`, `<h3>` y `<h4>` tendrán texto en color verde.


### Selector universal:
El selector universal (*) apunta a todos los elementos de la página. Por ejemplo:

~~~css
* {
    margin: 0;
    padding: 0;
}
~~~

Esto seleccionará todos los elementos de la página y establecerá los márgenes y rellenos en cero, lo que proporciona un reinicio de estilos básico.

Estos son solo algunos ejemplos de los selectores básicos de CSS. Hay muchos otros selectores y combinaciones que permiten una gran flexibilidad al aplicar estilos a diferentes elementos de una página web.

---
## Selectores combinados
Los selectores combinados en CSS te permiten apuntar a elementos que cumplen con varias condiciones o jerarquías específicas. Combinan dos o más selectores para refinar la selección de elementos. Hay diferentes tipos de selectores combinados que puedes utilizar:

### Selector de descendiente:
El selector de descendiente selecciona un elemento que es descendiente directo de otro elemento específico. Se denota colocando un espacio entre los selectores. Por ejemplo:

~~~css
div p {
  color: blue;
}
~~~

Esto seleccionará todos los elementos `<p>` que son descendientes directos de un elemento `<div>` y les aplicará el color azul.

### Selector de hijo:
El selector de hijo selecciona un elemento que es hijo directo de otro elemento específico. Se denota utilizando el símbolo ">", sin espacios, entre los selectores. Por ejemplo:

~~~css
ul > li {
  list-style: square;
}
~~~

Esto seleccionará todos los elementos `<li>` que son hijos directos de un elemento `<ul>` y les aplicará el estilo de viñeta cuadrada.

### Selector de hermano adyacente:
El selector de hermano adyacente selecciona un elemento que es el siguiente hermano inmediato de otro elemento específico. Se denota utilizando el símbolo "+" entre los selectores. Por ejemplo:

~~~css
h2 + p {
  margin-top: 20px;
}
~~~

Esto seleccionará el elemento `<p>` que es el siguiente hermano adyacente después de un elemento `<h2>` y le aplicará un margen superior de 20px.

### Selector de hermano general:
El selector de hermano general selecciona elementos que son hermanos de otro elemento específico. Se denota utilizando el símbolo "~" entre los selectores. Por ejemplo:

~~~css
h3 ~ p {
  font-style: italic;
}
~~~

Esto seleccionará todos los elementos `<p>` que son hermanos (que siguen) de un elemento `<h3>` y les aplicará un estilo de fuente cursiva.

Estos son solo algunos ejemplos de los selectores combinados en CSS. Puedes utilizar combinaciones más complejas para apuntar a elementos específicos dentro de la estructura del documento HTML y aplicarles estilos según tus necesidades de diseño.

---
## Pseudoclases y Pseudoelementos
Las pseudoclases y los pseudoelementos son parte de CSS que permiten seleccionar y estilizar elementos específicos en función de su estado o posición en el documento HTML.

### Pseudoclases:
Las pseudoclases se utilizan para seleccionar elementos en función de su estado o interacción con el usuario. Algunos ejemplos comunes de pseudoclases son:

- **:hover:** Selecciona un elemento cuando el cursor está sobre él.

~~~css
a:hover {
    color: red;
}
~~~

En este ejemplo, cuando el cursor se encuentra sobre un enlace (`<a>`), el color del texto se cambiará a rojo.

- **:active:** Selecciona un elemento cuando está siendo activado (por ejemplo, al hacer clic).
- **:focus:** Selecciona un elemento cuando está siendo enfocado (por ejemplo, al hacer clic en un campo de entrada).


### Pseudoelementos:
Los pseudoelementos permiten agregar contenido o estilizar partes específicas de un elemento. Algunos ejemplos comunes de pseudoelementos son:

- ::before: Agrega contenido antes del contenido del elemento seleccionado.
- ::after: Agrega contenido después del contenido del elemento seleccionado.
- ::first-letter: Selecciona la primera letra dentro de un elemento.
- ::first-line: Selecciona la primera línea de texto dentro de un elemento.
Ejemplo:

~~~css
p::first-letter {
    font-size: 24px;
    font-weight: bold;
}
~~~
En este ejemplo, la primera letra de cada párrafo (`<p>`) tendrá un tamaño de fuente de 24 píxeles y estará en negrita.

### Combinación de pseudoclases y pseudoelementos:
También es posible combinar pseudoclases y pseudoelementos para seleccionar elementos de manera más específica. Por ejemplo:

~~~css
li:nth-child(even)::before {
    content: "-";
     margin-right: 5px;
}
~~~
En este caso, se agrega un guion antes de cada elemento de lista (`<li>`) que sea hijo par (even) de su padre, utilizando el pseudoelemento ::before.

Es importante destacar que algunos navegadores pueden requerir el uso de un solo dos puntos (:) en lugar de dos (::) para los pseudoelementos, según la versión de CSS. Es recomendable consultar la documentación y compatibilidad de los navegadores para asegurarse del uso correcto de los pseudoelementos.

---
## Cascada y especificidad
La cascada y la especificidad son dos conceptos fundamentales en CSS que determinan cómo se aplican los estilos a los elementos en una página web cuando existen reglas de estilo conflictivas.

### Cascada en CSS:
La cascada se refiere al proceso mediante el cual las reglas de estilo se aplican a los elementos en función de su origen y posición en la hoja de estilos. Cuando varias reglas afectan al mismo elemento y propiedad, la cascada establece un orden de prioridad para determinar cuál regla se aplicará.

~~~css
h1{
    color: red;
}

h1{
    color: blue;
}
~~~

El orden de la cascada es el siguiente:

- Estilos en línea: Los estilos definidos directamente en el atributo "style" del elemento HTML tienen la mayor prioridad y sobrescribirán cualquier otro estilo para ese elemento.

- Reglas internas y reglas de usuario: Los estilos definidos en una hoja de estilos interna `(<style>...</style>)` o en una hoja de estilos proporcionada por el usuario (como una hoja de estilos del usuario) tienen prioridad sobre los estilos externos.
- Reglas externas: Los estilos definidos en una hoja de estilos externa (archivo .css) tienen la menor prioridad y pueden ser sobrescritos por las reglas internas o en línea.

La cascada garantiza que los estilos se apliquen en el orden correcto y permite que los desarrolladores controlen cómo se combinan y sobrescriben los estilos.

### Especificidad en CSS:
La especificidad es un concepto que determina qué regla de estilo tiene prioridad cuando hay conflictos entre las reglas que se aplican a un mismo elemento. Se basa en el tipo de selectores utilizados para definir las reglas de estilo.

Cada tipo de selector tiene un valor de especificidad, y cuanto más específico sea el selector, mayor será su valor de especificidad. Cuando dos o más reglas compiten por aplicarse a un mismo elemento, la regla con la mayor especificidad prevalecerá.

El valor de especificidad se calcula con una puntuación específica para cada tipo de selector. Aquí hay una idea general de cómo se calcula la especificidad:

- Selectores de ID: 100 puntos
- Selectores de clase, atributo o pseudoclase: 10 puntos
- Selectores de tipo (elemento) o pseudoelemento: 1 punto
- Selector universal: 0 puntos
- Combinadores (espacios, >, +, ~) no afectan a la especificidad

Por ejemplo, una regla con un selector de ID y un selector de clase tendría una especificidad de 110 puntos, lo que superaría una regla con solo un selector de clase y ninguna especificidad.

Si dos reglas tienen la misma especificidad, se aplicará la regla que aparece más tarde en la hoja de estilos.

### Regla !important
En CSS, la declaración !important es una directiva que se puede aplicar a una regla de estilo para darle la máxima prioridad o importancia. Cuando una propiedad tiene !important, prevalecerá sobre cualquier otra regla de estilo, independientemente de su especificidad.

Es importante comprender que el uso de !important debe realizarse con precaución, ya que puede hacer que el mantenimiento del código sea más difícil y puede causar problemas de anulación de estilos en el futuro. Por esta razón, se recomienda utilizarlo con moderación y solo cuando sea absolutamente necesario.

~~~css
h1 {
  color: red !important; /* 10,000 points */
}
~~~

La comprensión de la cascada y la especificidad en CSS es esencial para crear estilos coherentes y para solucionar posibles conflictos de estilos en tus hojas de estilo. Es importante tener en cuenta estos conceptos al desarrollar sitios web para lograr resultados precisos y consistentes. Para calcular la especificidad https://specificity.keegan.st/ 

---
## Resumen 
En la sección de introducción a CSS de nuestro curso de diseño web, exploramos las bases fundamentales de CSS, un lenguaje de estilo utilizado para controlar el aspecto y la presentación de páginas web. Aprendimos a aplicar estilos directamente a elementos HTML, definiendo propiedades como el color del texto, tamaño de la fuente y márgenes.

En un primer momento, nos sumergimos en los conceptos básicos de CSS, convirtiendo páginas ordinarias en obras de arte digital. Descubrimos los "selectores básicos" que nos permiten apuntar y seleccionar elementos específicos en nuestro HTML.

Posteriormente, dimos un paso más allá con los "selectores combinados", lo que nos brindó mayor flexibilidad para crear diseños sofisticados. También exploramos las pseudoclases y pseudoelementos, agregando una dimensión interactiva y dinámica a nuestros estilos.

Finalmente, profundizamos en el concepto de cascada y especificidad, comprendiendo cómo funcionan estas reglas y cómo resolver conflictos cuando múltiples reglas se aplican a un mismo elemento.

En resumen, este curso nos permitió adquirir las habilidades necesarias para dar vida a nuestras creaciones digitales con estilos personalizados y una presentación impecable mediante el uso de CSS.
