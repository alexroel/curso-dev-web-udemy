# Introducción a CSS 

1.  [Introducción](#introducción)
2.  [Primeros estilos](#primeros-estilos)
3.  [Selectores de elementos](#selectores-de-elementos)
4.  [Estilos de texto](#estilos-de-texto)
5.  [Herencia en CSS](#herencia-en-css)
6.  [Colores](#colores)
7.  [Pseudoclase y Pseudoelemte](#pseudoclase-y-pseudoelemte)
8.  [Selectores combinados](#selectores-combinados)
9.  [Cascada y especificidad](#cascada-y-especificidad)
10. [Unidadesd de medida](#unidadesd-de-medida)
11. [Modelo de caja](#modelo-de-caja)
12. [Tipos de elementos](#tipos-de-elementos)
13. [Resumen](#resumen)

---
## Introducción 
¡Bienvenidos a la sección de Introducción a CSS de nuestro curso de desarrollo web! En esta sección, aprenderás a estilizar tus páginas web utilizando CSS. Exploraremos los siguientes temas fundamentales:

**Primeros estilos**: Comenzaremos aplicando estilos básicos para cambiar la apariencia de tus elementos HTML.

**Selectores de elementos**: Aprenderás a seleccionar y apuntar a elementos específicos para aplicarles estilos.

**Estilos de texto**: Descubrirás cómo personalizar el texto, incluyendo cambios en fuentes, tamaños y colores.

**Herencia en CSS**: Entenderás cómo los estilos se heredan de un elemento a sus descendientes.

**Colores**: Aprenderás a aplicar colores usando diferentes métodos, como nombres de colores, códigos hexadecimales, RGB y HSL.

**Pseudoclases y pseudoelementos**: Utilizarás pseudoclases y pseudoelementos para aplicar estilos a estados específicos de los elementos y partes de los mismos.

**Selectores combinados**: Explorarás cómo combinar selectores para apuntar a elementos de manera más precisa.

**Cascada y especificidad**: Comprenderás cómo CSS decide qué estilos aplicar cuando hay conflictos entre reglas.

**Unidades de medida**: Conocerás las diferentes unidades de medida en CSS, como píxeles, porcentajes, em y rem.

**Modelo de caja**: Descubrirás el concepto del modelo de caja y cómo afecta el diseño y el espaciado de los elementos.

**Tipos de elementos**: Aprenderás las diferencias entre elementos en bloque e inline y cómo afectan el diseño de la página.

Al finalizar esta sección, tendrás las habilidades necesarias para estilizar y personalizar tus páginas web de manera efectiva, mejorando tanto su apariencia como su funcionalidad. ¡Prepárate para transformar tu HTML con el poder del CSS!

---
## Primeros estilos

**Estilos en línea:**
   - Se aplican directamente en la etiqueta HTML utilizando el atributo `style`.
   - Ejemplo:
     ```html
     <p style="color: blue; font-size: 16px;">Texto con estilos en línea</p>
     ```

**Estilos Internos:**
   - Se definen dentro de la etiqueta `<style>` en el encabezado del documento HTML.
   - Ejemplo:
     ```html
     <head>
       <style>
         p {
           color: green;
           font-size: 18px;
         }
       </style>
     </head>
     <body>
       <p>Texto con estilos internos</p>
     </body>
     ```

**Estilos Externos:**
   - Se almacenan en archivos CSS independientes y se vinculan al documento HTML.
   - Ejemplo:
     **Archivo HTML:**
     ```html
     <head>
       <link rel="stylesheet" type="text/css" href="styles/style.css">
     </head>
     <body>
       <p>Texto con estilos externos</p>
     </body>
     ```
     **Archivo CSS (`style.css`):**
     ```css
     p {
       color: red;
       font-size: 20px;
     }
     ```

Anatomía de CSS:

CSS se compone de reglas que definen cómo se deben presentar los elementos HTML. La anatomía básica de una regla CSS es la siguiente:

```css
selector {
  propiedad: valor;
  /* Puede haber más propiedades y valores aquí */
}
```

- **Selector:** Indica a qué elementos se aplicarán los estilos. Puede ser el nombre de una etiqueta HTML, una clase, un ID, etc.
- **Propiedad:** Atributo específico que se va a estilizar (por ejemplo, `color`, `font-size`, `margin`, etc.).
- **Valor:** Valor asignado a la propiedad (por ejemplo, `red`, `16px`, `10px auto`, etc.).
- **Declaración:** Una línea completa de código que incluye el selector, la propiedad y el valor.

Este es un concepto fundamental en CSS y se repite para cada estilo que desees aplicar a tu página web. Entender la anatomía de una regla CSS es esencial para construir estilos efectivos y bien estructurados.

---
## Selectores de elementos

En CSS, los selectores de elementos son patrones que se utilizan para seleccionar y aplicar estilos a elementos específicos en una página web. Aquí hay algunos tipos de selectores de elementos comunes:

**Selector Universal (`*`):**
   - Selecciona todos los elementos en la página.
   ```css
   * {
     margin: 0;
     padding: 0;
   }
   ```

**Selector de Tipo:**
   - Selecciona todos los elementos de un tipo específico.
   ```css
   p {
     font-family: 'Arial', sans-serif;
   }
   ```

**Selector de Clase (`.`):**
   - Selecciona todos los elementos que tienen una clase específica.
   ```css
   .destacado {
     color: #ff0000;
   }
   ```

**Selector de ID (`#`):**
   - Selecciona un elemento específico por su ID único.
   ```css
   #encabezado {
     font-size: 24px;
   }
   ```

---
## Estilos de texto
Los estilos de texto desempeñan un papel crucial en el diseño web, influyendo en la legibilidad y la estética de una página. En este artículo, analizaremos algunos ejemplos de estilos de texto utilizando CSS para mejorar la presentación y la experiencia del usuario.

**Estilos Globales del Cuerpo (`body`):**

Dentro de la regla para el cuerpo de la página (`body`), hemos definido algunos estilos globales para todo el texto en la página. 

```css
body {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
}
```

Estos estilos establecen el tamaño de fuente predeterminado y la familia de fuentes para todo el contenido en la página. En este caso, se utiliza la fuente Arial como principal, seguida por Helvetica y fuentes sans-serif como alternativas.

**Estilos para Encabezados (`h1`):**

La regla para los encabezados (`h1`) presenta estilos más específicos para resaltar títulos importantes.

```css
h1 {
    font-size: 60px;
    text-align: center;
    text-shadow: 3px 3px 1px #566573;
    color: #1C2833;
}
```

En este ejemplo, hemos aumentado significativamente el tamaño de la fuente para el encabezado principal, centrado el texto, aplicado un sutil sombreado (`text-shadow`), y elegido un color específico (`#1C2833`) para mejorar la visibilidad y el atractivo visual.

**Estilos para Párrafos y Listas (`p`, `li`):**

La siguiente regla aborda tanto párrafos (`p`) como elementos de lista (`li`), definiendo estilos comunes.

```css
p, li {
    font-size: 16px;
    line-height: 2;
    letter-spacing: 1px;
}
```

Aquí, hemos establecido el tamaño de fuente, la altura de línea (`line-height`) para mejorar la legibilidad y el espaciado entre letras (`letter-spacing`) para un toque adicional de estilo.

En resumen, estos ejemplos ilustran cómo los estilos de texto en CSS pueden ser poderosos para personalizar la apariencia de una página web. Al experimentar con estos principios, los diseñadores pueden lograr un equilibrio entre estética y funcionalidad, mejorando así la experiencia del usuario.

---
## Herencia en CSS

La herencia en CSS permite que las propiedades de estilo de un elemento padre sean transmitidas automáticamente a sus elementos hijos. No todas las propiedades CSS se heredan, pero muchas de las que afectan la apariencia del texto, como `color`, `font-family`, y `line-height`, sí lo hacen. Aquí tienes un ejemplo básico para ilustrar cómo funciona la herencia en CSS:


```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de Herencia en CSS</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="parent">
        <h1>Encabezado 1</h1>
        <p>Este es un párrafo dentro de un div.</p>
        <div class="child">
            <p>Este es un párrafo dentro de un div hijo.</p>
        </div>
    </div>
</body>
</html>
```


```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    color: #333;
}

.parent {
    color: blue;
    font-size: 16px;
    line-height: 1.5;
}

.child {
    font-size: 14px;
}
```

*Explicación*

1. **Body**: Se establece la fuente y el color predeterminado para todo el documento.
   ```css
   body {
       font-family: Arial, sans-serif;
       color: #333;
   }
   ```
2. **Parent**: El `div` con la clase `parent` tiene un color de texto azul, un tamaño de fuente de 16px y una altura de línea de 1.5. Estos estilos se heredarán por defecto por los elementos hijos, salvo que sean sobreescritos.
   ```css
   .parent {
       color: blue;
       font-size: 16px;
       line-height: 1.5;
   }
   ```
3. **Child**: El `div` con la clase `child` tiene un tamaño de fuente de 14px, pero heredará el color del texto azul y la altura de línea de 1.5 del elemento padre.
   ```css
   .child {
       font-size: 14px;
   }
   ```


**Ejemplo final**
```css
html{
    background-color: #068FD3;
}

body{
    /* Estilos de texto */
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    /* Estilos de modelo de caja */
}

/* Selector de pseudoclase */
a:hover{
    color: #068FD3;
}

h1{
    /* Estilos de texto */
    font-size: 60px;
    text-align:  center;
    text-shadow: 3px 3px 1px #566573;
    color: #1C2833;
}

li {
    /* Estilos de texto */
    font-size: 16px;
    line-height: 2;
    letter-spacing: 1px;
}
```
**Aplicar herencia**
Para aplicar la herencia en propiedades que normalmente no se heredan, puedes utilizar la propiedad `inherit` en CSS. La propiedad `inherit` toma el valor del elemento padre para una propiedad específica. Aquí tienes un ejemplo práctico para ver cómo se puede hacer esto:


```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de Herencia Forzada en CSS</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="parent">
        <h1>Encabezado 1</h1>
        <p>Este es un párrafo dentro de un div.</p>
        <div class="child">
            <p>Este es un párrafo dentro de un div hijo.</p>
        </div>
    </div>
</body>
</html>
```


```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    color: #333;
}

.parent {
    border: 5px solid red;
    padding: 20px;
}

.child {
    border: inherit;
    padding: inherit;
}
```

**Explicación**

1. **Body**: Se establece la fuente y el color predeterminado para todo el documento.
   ```css
   body {
       font-family: Arial, sans-serif;
       color: #333;
   }
   ```
2. **Parent**: El `div` con la clase `parent` tiene un borde rojo de 5px y un padding de 20px.
   ```css
   .parent {
       border: 5px solid red;
       padding: 20px;
   }
   ```
3. **Child**: El `div` con la clase `child` hereda el borde y el padding del `div` con la clase `parent` utilizando la propiedad `inherit`.
   ```css
   .child {
       border: inherit;
       padding: inherit;
   }
   ```

- El `div` con la clase `parent` tendrá un borde rojo de 5px y un padding de 20px.
- El `div` con la clase `child` hereda estos estilos, por lo que también tendrá un borde rojo de 5px y un padding de 20px, gracias al uso de la propiedad `inherit`.

En este ejemplo, la propiedad `inherit` se utiliza para forzar la herencia de propiedades que no se heredan automáticamente, como `border` y `padding`. De esta manera, los elementos hijos pueden adoptar los estilos de sus elementos padres sin necesidad de repetir los valores de las propiedades.

---
## Colores
El color es un aspecto fundamental del diseño web. CSS (Cascading Style Sheets) ofrece diversas maneras de definir y manipular colores, permitiendo a los desarrolladores crear interfaces atractivas y accesibles. Esta guía te llevará a través de los diferentes métodos para definir colores en CSS y cómo utilizarlos de manera efectiva en tus proyectos.


**1. Nombres de Colores**

CSS reconoce 147 nombres de colores predefinidos. Aquí algunos ejemplos:

```css
.color-red {
    color: red;
}

.background-blue {
    background-color: blue;
}
```

**Ejemplos de nombres de colores:**
- `red`
- `blue`
- `green`
- `yellow`
- `black`
- `white`

**2. Colores Hexadecimales**

Los colores hexadecimales utilizan un código de seis dígitos precedido por el símbolo `#`. Este formato incluye valores para rojo, verde y azul (RGB).

```css
.color-hex {
    color: #ff5733;
}

.background-hex {
    background-color: #333399;
}
```

**3. Colores RGB**

El formato RGB especifica colores utilizando valores de rojo, verde y azul. Se puede ajustar la transparencia utilizando RGBA.

```css
.color-rgb {
    color: rgb(255, 87, 51);
}

.background-rgb {
    background-color: rgb(51, 51, 153);
}

.color-rgba {
    color: rgba(255, 87, 51, 0.8);
}
```

**4. Colores HSL**

HSL representa colores utilizando los valores de matiz (hue), saturación y luminosidad. Similar a RGBA, HSLA añade un canal alfa para la transparencia.

```css
.color-hsl {
    color: hsl(14, 100%, 60%);
}

.background-hsl {
    background-color: hsl(240, 50%, 30%);
}

.color-hsla {
    color: hsla(14, 100%, 60%, 0.8);
}
```
**Uso de Variables en CSS**
En CSS, las variables, también conocidas como variables personalizadas o custom properties, te permiten definir valores que se pueden reutilizar en diferentes partes de tu hoja de estilo. Esto facilita la gestión y la actualización de estilos coherentes en todo tu sitio web. Aquí te muestro cómo puedes definir y utilizar variables en CSS, utilizando colores como ejemplo:

*Definición de Variables en CSS*

Para definir una variable en CSS, utilizas la sintaxis `--nombre-variable: valor;`. Aquí hay un ejemplo donde definimos variables para algunos colores comunes:

```css
:root {
  --color-primario: #3498db;
  --color-secundario: #2ecc71;
  --color-texto: #333;
}
```

- `:root` es un seudoelemento que representa el elemento raíz del documento, que es el `<html>`. Definir variables dentro de `:root` asegura que estén disponibles globalmente en todo tu documento CSS.

- `--color-primario`, `--color-secundario` y `--color-texto` son nombres arbitrarios que hemos elegido para nuestras variables. Puedes nombrar tus variables según la convención que prefieras, siempre que comiencen con `--`.

- `#3498db`, `#2ecc71` y `#333` son valores hexadecimales que representan colores específicos.

*Uso de Variables en CSS*

Una vez que has definido tus variables, puedes utilizarlas en cualquier parte de tu hoja de estilo. Aquí tienes un ejemplo de cómo podrías aplicar estos colores a diferentes partes de tu diseño:

```css
body {
  font-family: Arial, sans-serif;
  color: var(--color-texto);
  background-color: var(--color-primario);
}

.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: var(--color-secundario);
  color: #fff;
  border: none;
  cursor: pointer;
}

.header {
  background-color: var(--color-primario);
  color: #fff;
  padding: 10px;
}

.footer {
  background-color: var(--color-secundario);
  color: #fff;
  padding: 10px;
}
```

**Ventajas de Utilizar Variables en CSS**

- **Mantenimiento sencillo**: Cambiar un color (o cualquier otro valor) en una variable se reflejará automáticamente en todos los lugares donde se usa esa variable.

- **Consistencia**: Asegura que los colores utilizados en diferentes partes de tu sitio web sean coherentes y fáciles de actualizar globalmente.

- **Claridad y legibilidad**: Mejora la claridad del código CSS al asignar nombres significativos a las variables, facilitando la comprensión y el mantenimiento del código.

- Las variables CSS son compatibles con la mayoría de los navegadores modernos, pero es posible que requieras un procesador de CSS (como Sass o PostCSS) para utilizar variables en navegadores más antiguos o para compilar tu código CSS.

- Puedes utilizar variables para más que solo colores; son útiles para dimensiones, márgenes, tamaños de fuente y otros valores repetitivos en tu diseño.

Utilizar variables en CSS te proporciona una manera poderosa y eficiente de gestionar y personalizar estilos en tu proyecto web, mejorando la consistencia y la mantenibilidad de tu código CSS.


---
## Pseudoclase y Pseudoelemte
En CSS, las pseudoclases y los pseudoelementos son herramientas poderosas que permiten seleccionar y estilizar partes específicas de un documento HTML. Estos conceptos son fundamentales para crear estilos más dinámicos y precisos. En este artículo, exploraremos qué son las pseudoclases y los pseudoelementos, cómo se utilizan y algunos ejemplos prácticos para entender su aplicación.

**¿Qué son las Pseudoclases?**

Las pseudoclases son selectores que se aplican a elementos HTML en ciertos estados o condiciones especiales. Estos estados pueden ser interacciones del usuario, como el estado de enlace (`:hover`), la selección (`:focus`), o incluso estados dinámicos como los primeros hijos (`:first-child`) o los elementos impares (`:nth-child(odd)`).

*Ejemplos de Pseudoclases:*

- `:hover`: Aplica estilos cuando el cursor está sobre el elemento.
- `:focus`: Aplica estilos cuando el elemento tiene el foco de entrada.
- `:first-child`: Aplica estilos al primer hijo de un elemento.
- `:nth-child(odd)`: Aplica estilos a los hijos impares de un elemento, etc.

Estas pseudoclases permiten diseñar interfaces web más interactivas y responsivas al comportamiento del usuario.

**¿Qué son los Pseudoelementos?**

Los pseudoelementos son similares a las pseudoclases en términos de sintaxis, pero se utilizan para añadir contenido decorativo o estilizado a partes específicas de un elemento. Se representan con dos puntos (`::`) en lugar de uno solo (`:`), para distinguirlos de las pseudoclases.

*Ejemplos de Pseudoelementos:*

- `::before`: Inserta contenido antes del contenido de un elemento.
- `::after`: Inserta contenido después del contenido de un elemento.
- `::first-line`: Aplica estilos solo a la primera línea de texto dentro de un elemento.
- `::selection`: Aplica estilos al texto seleccionado por el usuario, etc.

Los pseudoelementos son útiles para añadir efectos visuales o modificar la estructura de un documento sin alterar directamente el HTML.


**Estilo de Enlace al Pasear el Ratón**

```css
a:hover {
  color: red;
  text-decoration: underline;
}
```

Este ejemplo cambia el color del texto a rojo y subraya un enlace cuando el usuario pasa el ratón sobre él.

**Insertar Contenido con Pseudoelemento**

```css
p::before {
  content: ">> ";
  color: blue;
}
```

Aquí, se inserta contenido antes del texto de cada párrafo (`p`), mostrando un indicador azul antes de cada párrafo.

---
## Selectores combinados
Los selectores combinados en CSS son una forma poderosa de aplicar estilos a elementos específicos basados en su relación con otros elementos dentro de la misma estructura HTML. Estos selectores permiten seleccionar elementos de manera más precisa y sofisticada que usando selectores simples. Aquí te explico algunos de los selectores combinados más comunes:

1. **Selector descendiente (` `)**

El selector descendiente selecciona todos los elementos que son descendientes de un elemento específico.

```css
/* Todos los elementos <p> que son descendientes de <div> */
div p {
  color: blue;
}
```

2. **Selector hijo directo (`>`)**

El selector hijo directo selecciona elementos que son hijos directos de un elemento específico, excluyendo los nietos y otros descendientes.

```css
/* Todos los elementos <li> que son hijos directos de <ul> */
ul > li {
  list-style-type: square;
}
```

3. **Selector adyacente (`+`)**

El selector adyacente selecciona un elemento que es inmediatamente posterior a otro elemento especificado, y ambos deben compartir el mismo padre.

```css
/* El elemento <p> que sigue inmediatamente a <h2> */
h2 + p {
  font-weight: bold;
}
```

4. **Selector general de hermanos (`~`)**

El selector general de hermanos selecciona todos los elementos que son hermanos de un elemento especificado, es decir, que comparten el mismo padre y que aparecen después en el documento.

```css
/* Todos los elementos <p> que son hermanos de <h2> */
h2 ~ p {
  margin-top: 0;
}
```

*Ejemplo 1: Selector descendiente*

```html
<div>
  <p>Este párrafo será azul.</p>
  <div>
    <p>Este párrafo también será azul.</p>
  </div>
</div>
```

```css
div p {
  color: blue;
}
```

En este caso, ambos párrafos dentro del elemento `<div>` principal serán azules debido al selector descendiente `div p`.

*Ejemplo 2: Selector hijo directo*

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <div>
    <li>Item 3</li>
  </div>
</ul>
```

```css
ul > li {
  list-style-type: square;
}
```

En este ejemplo, solo los elementos `<li>` que son hijos directos de `<ul>` tendrán viñetas cuadradas (`list-style-type: square;`). El tercer `<li>` dentro del `<div>` no será afectado.

---
## Cascada y especificidad
La cascada y la especificidad son dos conceptos fundamentales en CSS que determinan cómo se aplican y priorizan los estilos cuando se enfrentan reglas conflictivas. Aquí te explico cada uno de estos conceptos en detalle:

**Cascada en CSS**

La cascada en CSS se refiere al proceso mediante el cual se determina qué estilos se aplican a cada elemento en función de diferentes fuentes y reglas. Esta cascada sigue un orden de prioridad definido, que permite resolver conflictos cuando múltiples reglas se aplican al mismo elemento.

**Orden de Prioridad:**

1. **Origen del Estilo (Source Order)**: Las reglas que aparecen más tarde en la hoja de estilos sobrescriben a las que aparecen antes, si ambas tienen la misma especificidad y el mismo peso.

2. **Especificidad**: Determina qué conjunto de reglas es más específico y, por lo tanto, tiene mayor prioridad.

3. **Peso del Valor (Value Importance)**: Algunas declaraciones de CSS pueden ser marcadas como importantes (`!important`), lo que les otorga la máxima prioridad, incluso sobre reglas con mayor especificidad.

4. **Reglas de Usuario (User Rules)**: Los estilos definidos por el usuario tienen prioridad sobre las reglas del autor de la página.

5. **Reglas de Agente de Usuario (User Agent Rules)**: Los estilos predeterminados aplicados por el navegador (como los estilos de los elementos HTML) tienen la menor prioridad.

**Especificidad en CSS**

La especificidad en CSS determina qué regla se aplica a un elemento cuando varias reglas coinciden para el mismo elemento. La especificidad se calcula asignando valores numéricos a diferentes partes de un selector CSS.

**Cómo se Calcula la Especificidad:**

- **Especificidad se calcula basada en cuatro componentes**:
  - Número de ID selectors (`#example`) en el selector.
  - Número de class selectors, attribute selectors y pseudo-classes (`.example`, `[type="text"]`, `:hover`) en el selector.
  - Número de type selectors y pseudo-elements (`div`, `::before`) en el selector.
  - Si se usa `!important`, agrega 1 al total.

- **Comparación de Especificidad**:
  - Se compara el número de cada componente en dos especificidades. El selector con el número más alto en un componente tiene una mayor especificidad.

- **Ejemplo de Especificidad**:

```css
/* Ejemplo de especificidad */
p {
  color: red; /* especificidad: 0,0,0,1 */
}

#container p {
  color: blue; /* especificidad: 0,1,0,1 */
}

div p {
  color: green; /* especificidad: 0,0,1,1 */
}

#container div p {
  color: orange; /* especificidad: 0,1,1,1 */
}
```

En este ejemplo, el color del texto de un `<p>` dentro de un `<div>` con id `container` será naranja, ya que tiene la mayor especificidad entre las reglas coincidentes.

*Importancia de Comprender la Cascada y la Especificidad*

Comprender la cascada y la especificidad en CSS es crucial para escribir estilos efectivos y predecibles. Esto te permite controlar qué estilos se aplican y cómo se resuelven los conflictos cuando hay múltiples reglas que afectan a los mismos elementos. Además, el uso adecuado de `!important` y el orden de las reglas en tu hoja de estilos pueden ayudar a evitar problemas de estilo no deseados y hacer tu código más mantenible y fácil de entender.

---
## Unidadesd de medida
Las unidades de medida en CSS son fundamentales para definir dimensiones, posiciones y otros valores numéricos dentro de un diseño web. A continuación, te explicaré las unidades de medida más comunes en CSS y cómo se utilizan:

**Unidades de Medida Absolutas**

1. **px (píxeles)**:
   - **Definición**: Unidad de medida absoluta que representa un solo píxel en la pantalla del dispositivo.
   - **Uso**: Es muy común para definir tamaños exactos y posicionamiento de elementos. Por ejemplo:
     ```css
     div {
       width: 200px;
       height: 100px;
       margin: 10px;
       padding: 5px;
     }
     ```

2. **pt (puntos)**:
   - **Definición**: Equivale a 1/72 de una pulgada. Se utiliza principalmente en impresión y presentaciones donde la precisión de la medida es crucial.
   - **Uso**: Menos común en diseño web, pero útil cuando se especifican estilos que se exportarán a formatos impresos.

3. **in (pulgadas)**:
   - **Definición**: Equivale a una pulgada física. Se usa principalmente en impresión o en aplicaciones donde se necesita especificar dimensiones físicas.
   - **Uso**: Adecuado para definir tamaños de impresión en CSS o para especificar dimensiones de elementos en dispositivos con alta densidad de píxeles.

4. **cm (centímetros)**:
   - **Definición**: Equivale a una centésima parte de un metro. Es útil cuando se necesitan dimensiones precisas en unidades métricas.
   - **Uso**: Puede ser útil para diseños que necesiten adaptarse a sistemas de medida métricos.

5. **mm (milímetros)**:
   - **Definición**: Equivale a una milésima parte de un metro. Es más pequeña que la unidad de medida `cm`.
   - **Uso**: Similar a `cm`, pero para casos donde se necesitan medidas aún más precisas.

**Unidades de Medida Relativas**

1. **% (porcentaje)**:
   - **Definición**: Se refiere al porcentaje del valor del elemento padre. Por ejemplo, un `width: 50%` en un `<div>` hará que el ancho sea la mitad del ancho de su contenedor padre.
   - **Uso**: Muy flexible y útil para diseños responsivos y fluidos.

2. **em**:
   - **Definición**: Equivale al tamaño de la fuente actual del elemento. Por ejemplo, si el tamaño de la fuente de un elemento es `16px`, `1em` será igual a `16px`.
   - **Uso**: Útil para establecer tamaños de texto y dimensiones relacionadas con el texto, ya que escala con el tamaño de la fuente.

3. **rem**:
   - **Definición**: Similar a `em`, pero se refiere al tamaño de la fuente del elemento raíz (`<html>`). Es útil para establecer dimensiones que no se escalen con respecto al tamaño de la fuente del elemento actual.
   - **Uso**: Recomendado para establecer tamaños de contenedores y dimensiones de diseño general que no dependan del tamaño de fuente local.

4. **vw, vh, vmin, vmax**:
   - **Definición**: Estas unidades se refieren a porcentajes del tamaño de la ventana del navegador (`viewport`). `vw` se refiere al ancho de la ventana, `vh` a la altura, `vmin` al mínimo de ambos y `vmax` al máximo.
   - **Uso**: Muy útiles para diseños responsivos que deben ajustarse dinámicamente al tamaño de la ventana del navegador.

---
## Modelo de caja
El modelo de caja en CSS es esencial para entender cómo se estructuran y presentan los elementos en una página web. A través de propiedades como ancho, margen, relleno y borde, los diseñadores pueden controlar la apariencia y disposición de los elementos. En este artículo, analizaremos un ejemplo específico para ilustrar cómo funciona el modelo de caja.

1. **Estilos Globales del Cuerpo (`body`):**

Dentro de la regla para el cuerpo de la página (`body`), hemos definido estilos relacionados con el modelo de caja que afectan a todo el contenido.

```css
body {
    width: 600px;
    background-color: #EBF5FB;
    margin: 0 auto;
    padding: 20px;
    border: 5px solid #273746;
}
```

- **`width`:** Establece el ancho del área de contenido a 600 píxeles.
- **`background-color`:** Define el color de fondo como #EBF5FB.
- **`margin`:** Configura un margen automático a izquierda y derecha, centrando el contenido horizontalmente.
- **`padding`:** Agrega un relleno interno de 20 píxeles alrededor del contenido.
- **`border`:** Aplica un borde sólido de 5 píxeles con color #273746 alrededor del área de contenido.

**Estilos para Encabezados (`h1`):**

La regla para los encabezados (`h1`) presenta estilos específicos del modelo de caja.

```css
h1 {
    margin: 0;
}
```

- **`margin`:** Elimina el margen predeterminado del encabezado, asegurando que no haya espacio adicional alrededor.

En resumen, este ejemplo ilustra cómo el modelo de caja en CSS permite controlar el tamaño, el margen, el relleno y el borde de los elementos. Al entender y aplicar estas propiedades, los diseñadores pueden crear diseños más precisos y estéticos. Experimenta con estos conceptos para mejorar tu comprensión del modelo de caja y perfeccionar el diseño de tus páginas web.

---
## Tipos de elementos

En el mundo del diseño web, comprender cómo los diferentes elementos se presentan en una página es esencial. En este artículo, nos sumergiremos en el ejemplo de la etiqueta `<img>` y exploraremos cómo el valor predeterminado de `display` y el uso de márgenes pueden afectar la presentación de una imagen.

**1. Valor Predeterminado de `display` para `<img>`: `inline`**

Cuando hablamos de la etiqueta `<img>`, su valor predeterminado para la propiedad `display` es `inline`. Esto significa que la imagen se presenta en línea con el contenido circundante, sin iniciar una nueva línea. 

```css
/* Estilos predeterminados para <img> */
img {
    /* display: inline; (valor predeterminado) */
    margin-top: 10px;
    margin-bottom: 10px;
}
```

En este contexto, hemos intentado aplicar márgenes superior e inferior (`margin-top` y `margin-bottom`) a la imagen. Sin embargo, debido al valor predeterminado `display: inline;`, estos márgenes pueden tener un impacto limitado en la disposición vertical de la imagen.

**2. Cambiando a `display: block;` para Mejorar la Presentación:**

Para tener un mayor control sobre la presentación y aprovechar mejor los márgenes, podemos cambiar el valor de `display` a `block`. 

```css
/* Centrando imagen */
img {
    display: block;
    margin: 0 auto;
}
```

- **`display: block;`:** Este cambio convierte la imagen en un elemento de bloque, permitiendo el uso más efectivo de márgenes tanto en la parte superior como en la inferior.

- **`margin: 0 auto;`:** Aplicar un margen automático a izquierda y derecha ayuda a centrar la imagen horizontalmente dentro de su contenedor.

**Conclusión:**

La elección del valor de `display` tiene un impacto directo en la presentación de los elementos, y este cambio es particularmente útil para las imágenes. Cambiar de `inline` a `block` puede facilitar la alineación y el centrado, mejorando la estética y la disposición visual en la página web.

En resumen, comprender y aprovechar las propiedades de presentación en CSS, como `display` y márgenes, proporciona a los diseñadores las herramientas necesarias para personalizar y optimizar la apariencia de los elementos en una página web. ¡Experimenta con estos conceptos para perfeccionar tus habilidades de diseño web!

**Box Sizing**
En CSS, la propiedad `box-sizing` se utiliza para alterar el modelo de caja utilizado para calcular los anchos y alturas de los elementos. Hay tres valores principales para `box-sizing`: `content-box`, `border-box` y `inherit`. Aquí te dejo un ejemplo para ilustrar cómo funciona cada uno:

1. **content-box**: Este es el valor predeterminado. El ancho y el alto se aplican solo al contenido del elemento. El padding y el borde se añaden fuera de las dimensiones especificadas.
2. **border-box**: El ancho y el alto incluyen el contenido, el padding y el borde. Esto hace que el tamaño total del elemento sea el que especificas, sin añadir nada más.
3. **inherit**: Este valor toma la propiedad `box-sizing` de su elemento padre.

A continuación, se muestra un ejemplo de HTML y CSS para ilustrar el uso de `box-sizing`.

*HTML*

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Box Sizing Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="content-box">
        Content Box
    </div>
    <div class="border-box">
        Border Box
    </div>
</body>
</html>
```

*CSS (styles.css)*

```css
body {
    font-family: Arial, sans-serif;
}

div {
    margin: 20px;
    padding: 20px;
    border: 5px solid #333;
    width: 200px;
    color: white;
    text-align: center;
}

.content-box {
    box-sizing: content-box;
    background-color: blue;
}

.border-box {
    box-sizing: border-box;
    background-color: green;
}
```

**Explicación**

1. **content-box**:
    - El div con la clase `content-box` tiene un ancho de 200px.
    - Esto significa que el ancho del contenido es de 200px, pero cuando se añade el padding de 20px y el borde de 5px a cada lado, el tamaño total del elemento será 250px de ancho (200 + 20*2 + 5*2).

2. **border-box**:
    - El div con la clase `border-box` también tiene un ancho de 200px.
    - Sin embargo, en este caso, el tamaño total del elemento será de 200px, porque el padding y el borde se incluyen dentro de esos 200px. Por lo tanto, el contenido real será más pequeño para acomodar el padding y el borde.

Al abrir el archivo HTML en un navegador, verás dos cajas con diferentes comportamientos de tamaño, lo que te permitirá visualizar claramente cómo afecta `box-sizing` al cálculo de dimensiones de un elemento.

Este ejemplo ayuda a entender cómo `box-sizing` puede afectar el diseño de tus elementos en CSS y cómo puedes usarlo para lograr diseños más consistentes y fáciles de gestionar.


---
## Resumen

En la sección de Introducción a CSS de nuestro curso de desarrollo web, los estudiantes han aprendido los siguientes temas:

1. **Primeros estilos**: Aprendieron a aplicar estilos básicos a sus elementos HTML utilizando CSS, como cambiar colores y fuentes.

2. **Selectores de elementos**: Descubrieron cómo utilizar selectores para apuntar y aplicar estilos a elementos específicos en una página web.

3. **Estilos de texto**: Aprendieron a personalizar el texto, incluyendo cambios en fuentes, tamaños, colores y otros aspectos tipográficos.

4. **Herencia en CSS**: Comprendieron cómo los estilos se heredan de un elemento a sus descendientes y cómo esto afecta el diseño de una página.

5. **Colores**: Exploraron diversas formas de aplicar colores, utilizando nombres de colores, códigos hexadecimales, RGB y HSL.

6. **Pseudoclases y pseudoelementos**: Aprendieron a usar pseudoclases para aplicar estilos a estados específicos de los elementos y pseudoelementos para estilizar partes específicas de un elemento.

7. **Selectores combinados**: Descubrieron cómo usar combinaciones de selectores para apuntar a elementos específicos de manera más eficiente.

8. **Cascada y especificidad**: Comprendieron cómo CSS decide qué estilos aplicar cuando hay conflictos entre reglas y cómo funciona la especificidad.

9. **Unidades de medida**: Aprendieron sobre las diferentes unidades de medida en CSS, como píxeles, porcentajes, em y rem, y cuándo usarlas.

10. **Modelo de caja**: Comprendieron el concepto del modelo de caja y cómo afecta el diseño y el espaciado de los elementos.

11. **Tipos de elementos**: Aprendieron las diferencias entre elementos en bloque e inline y cómo afectan el diseño de la página.

Con estos conocimientos, los estudiantes son capaces de:

- Aplicar estilos básicos a sus páginas web.
- Utilizar selectores para apuntar a elementos específicos.
- Personalizar el texto en sus páginas web.
- Comprender y aplicar la herencia de estilos en CSS.
- Aplicar colores de diversas formas.
- Utilizar pseudoclases y pseudoelementos para estilizar estados específicos y partes de elementos.
- Usar combinaciones de selectores de manera eficiente.
- Resolver conflictos de estilo usando la cascada y especificidad.
- Utilizar diferentes unidades de medida adecuadamente.
- Implementar y modificar el modelo de caja en sus diseños.
- Diferenciar y aplicar correctamente estilos a elementos en bloque e inline.

**Recursos Externos para Seguir Aprendiendo**:

- [Mozilla Developer Network (MDN) - CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [W3Schools - CSS Tutorial](https://www.w3schools.com/css/)
- [CSS-Tricks](https://css-tricks.com/)
- [Aprender CSS](https://web.dev/learn/css?hl=es-419)