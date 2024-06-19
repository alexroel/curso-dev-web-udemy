# Introducción a Grid

1. [Introducción](#introducción)
2. [¿Qué es Grid en CSS?](#qué-es-grid-en-css)
3. [Crear filas y columnas](#crear-filas-y-columnas)
4. [CSS Grid: Unidades de Medida](#css-grid-unidades-de-medida)
5. [Más sobre filas](#más-sobre-filas)
6. [Filas Automáticas](#filas-automáticas)
7. [repeat()](#repeat)
8. [Grid gap](#grid-gap)
9. [grid-column-start/end](#grid-column-startend)
10. [grid-row-start/end](#grid-row-startend)
11. [span row/column](#span-rowcolumn)
12. [autoflow](#autoflow)
13. [span row/column](#span-rowcolumn)
14. [grid-area y grid-template](#grid-area-y-grid-template)
15. [Alinear elementos de la cuadrícula](#alinear-elementos-de-la-cuadrícula)
16. [Uso de minmax()](#uso-de-minmax)
17. [Autofill y autofit](#autofill-y-autofit)
18. [Resumen](#resumen)


## Introducción

¡Bienvenidos a la sección de Introducción a CSS Grid de nuestro curso de desarrollo web! En esta sección, aprenderás a utilizar CSS Grid para crear diseños web avanzados y flexibles. Exploraremos los siguientes temas clave:

**¿Qué es Grid en CSS?**: Descubrirás el concepto de CSS Grid y sus ventajas para crear layouts complejos y responsivos.

**Crear filas y columnas**: Aprenderás a definir filas y columnas para organizar tu contenido de manera estructurada.

**CSS Grid: Unidades de Medida**: Conocerás las diversas unidades de medida que puedes utilizar en CSS Grid, como píxeles, porcentajes y fracciones (fr).

**Más sobre filas**: Exploraremos en detalle cómo manipular filas en tu grid.

**Filas Automáticas**: Aprenderás a crear filas automáticas que se ajusten al contenido.

**repeat()**: Utilizarás la función `repeat()` para simplificar la creación de filas y columnas repetitivas.

**Grid gap**: Descubrirás cómo añadir espacios entre las filas y columnas usando `grid-gap`, `row-gap` y `column-gap`.

**grid-column-start/end**: Aprenderás a posicionar elementos usando las propiedades `grid-column-start` y `grid-column-end`.

**grid-row-start/end**: Similarmente, usarás `grid-row-start` y `grid-row-end` para controlar la posición vertical de los elementos.

**span row/column**: Verás cómo hacer que un elemento abarque múltiples filas o columnas utilizando `span`.

**autoflow**: Conocerás el concepto de `grid-auto-flow` y cómo afecta la colocación de los elementos en el grid.

**grid-area y grid-template**: Aprenderás a nombrar y colocar áreas en tu grid usando `grid-area` y a definir plantillas de grid con `grid-template-areas`.

**Alinear elementos de la cuadrícula**: Descubrirás cómo alinear elementos dentro de sus celdas utilizando propiedades como `align-items`, `justify-items`, `align-self` y `justify-self`.

**Uso de minmax()**: Utilizarás la función `minmax()` para crear columnas y filas que respondan dinámicamente al tamaño del contenedor.

**Autofill y autofit**: Aprenderás a usar `autofill` y `autofit` para crear layouts flexibles que se adapten automáticamente al tamaño del viewport.

Al finalizar esta sección, tendrás las habilidades necesarias para crear y manipular layouts complejos y responsivos utilizando CSS Grid. ¡Prepárate para llevar tus diseños web al siguiente nivel con CSS Grid!

### ¿Qué es Grid en CSS?

CSS Grid Layout, comúnmente conocido como Grid, es un sistema de diseño bidimensional que te permite crear layouts complejos de una manera sencilla y eficiente. A diferencia de Flexbox, que es un sistema unidimensional, Grid permite el control tanto de filas como de columnas, facilitando la organización de los elementos en un formato de cuadrícula.

**Ventajas de usar Grid**

1. **Diseño Bidimensional:** Grid facilita el diseño y control de layouts tanto en filas como en columnas, permitiendo una mayor flexibilidad y complejidad en los diseños.
   
2. **Alineación Precisa:** Grid ofrece una variedad de propiedades para alinear los elementos dentro de las celdas de la cuadrícula, incluyendo alineación vertical y horizontal.

3. **Áreas de Cuadrícula:** Puedes definir áreas específicas de la cuadrícula y asignar elementos a estas áreas, simplificando la organización del contenido.

4. **Soporte de Espaciado:** Grid permite un control preciso sobre el espaciado entre las celdas, filas y columnas.

5. **Diseño Adaptable:** Es fácil crear diseños responsivos con Grid, ajustando el tamaño y la disposición de los elementos según el tamaño de la pantalla.

**Los elementos pueden tener tamaños fijos y flexibles**

Con Grid, los elementos dentro de la cuadrícula pueden tener tamaños fijos (por ejemplo, 100px) o flexibles (usando unidades como fracciones, porcentajes, o valores auto). Esto permite diseñar layouts que se adapten dinámicamente al espacio disponible.

**Habilidad Grid**

Para habilitar Grid en un contenedor y definir una cuadrícula básica, puedes usar las siguientes propiedades CSS:

```css
.container {
  display: grid;
}
```

## Crear filas y columnas

**Definir filas y columnas**

Para empezar, debes definir un contenedor con `display: grid`. Luego, puedes usar `grid-template-columns` y `grid-template-rows` para definir las filas y columnas.

**Ejemplo**

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* 3 columnas: 1 fracción, 2 fracciones, 1 fracción */
  grid-template-rows: 100px 200px;   /* 2 filas: 100px y 200px */
}
```

**Propiedad abreviada `grid`**

La propiedad abreviada `grid` permite definir tanto las filas como las columnas en una sola declaración. La sintaxis general es:

```css
.container {
  display: grid;
  grid: <grid-template-rows> / <grid-template-columns>;
}
```

**Ejemplo**

```css
.container {
  display: grid;
  grid: 100px 200px / 1fr 2fr 1fr; /* Define filas y columnas en una sola línea */
}
```

## CSS Grid: Unidades de Medida

CSS Grid es una herramienta poderosa para crear layouts en dos dimensiones. Permite definir tanto filas como columnas con varias unidades de medida, incluyendo `px`, `rem`, `auto`, y `fr`.

**Unidades Comunes**

- **`px` (píxeles):** Define un tamaño fijo en píxeles.
- **`rem` (root em):** Define un tamaño relativo a la raíz del documento (`<html>`).
- **`auto`:** El tamaño es determinado automáticamente por el contenido y otros factores.

**Ejemplo:**

```css
.container {
  display: grid;
  grid-template-columns: 200px 3rem auto;
  grid-template-rows: 100px 50px auto;
}
```

- Columnas:*
  - La primera columna tiene un ancho fijo de 200px.
  - La segunda columna tiene un ancho relativo de 3rem.
  - La tercera columna se ajusta automáticamente al contenido.
- Filas:
  - La primera fila tiene una altura fija de 100px.
  - La segunda fila tiene una altura fija de 50px.
  - La tercera fila se ajusta automáticamente al contenido.

**Unidad `fr`**

La unidad `fr` (fracción) es específica de CSS Grid y representa una fracción del espacio disponible en el contenedor de la cuadrícula. Es muy útil para distribuir el espacio de manera proporcional.

Ejemplo:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 100px 200px;
}
```

- Aquí, el espacio disponible se divide en 4 fracciones (1fr + 2fr + 1fr = 4fr).
- La primera y la tercera columnas ocupan 1 fracción del espacio cada una.
- La segunda columna ocupa 2 fracciones del espacio.

**Cálculo de `fr`**

Ejemplo 1:

- Total de fracciones: 1fr + 2fr + 1fr = 4fr.
- El contenedor se divide en 4 partes iguales.
- `1fr` equivale a `100% / 4`.

Ejemplo 2:

- Primero, resta el tamaño fijo de la columna en píxeles del 100% del contenedor.
- Supongamos que el ancho del contenedor es `1000px`.
- `1000px - 100px = 900px` (espacio disponible para las fracciones).
- Total de fracciones: 1fr + 2fr = 3fr.
- Cada `fr` equivale a `900px / 3 = 300px`.
- Entonces, `1fr = 300px` y `2fr = 600px`.


## Más sobre filas

**Filas y Cuadrículas Vacías**

En CSS Grid, las filas son una de las dos dimensiones principales, junto con las columnas, que forman la estructura de la cuadrícula. Las filas pueden ser explícitamente definidas en el contenedor o generadas automáticamente en función del contenido y el uso de `grid-auto-rows` y `grid-row-auto`.

**Filas Explícitas**

```css
.container {
  display: grid;
  grid-template-rows: 100px 200px; /* Define dos filas explícitas */
}
```

**Cuadrículas Vacías**

Una cuadrícula vacía se refiere a una situación en la que una o más celdas de la cuadrícula no contienen ningún elemento hijo. Esto puede suceder si no todos los espacios definidos en la cuadrícula son ocupados por elementos o si se utilizan propiedades como `grid-column` y `grid-row` para posicionar elementos fuera del flujo estándar.

**Ejemplo:**

```css
.container {
  display: grid;
  grid-template-rows: 100px 200px;
  grid-template-columns: 1fr 1fr;
}
.item1 {
  grid-column: 2; /* Coloca este elemento en la segunda columna */
}
```

```html
<div class="container">
  <div class="item1">1</div>
</div>
```

En este caso, la primera columna de cada fila estará vacía porque el único elemento está posicionado en la segunda columna.

**Filas Automáticas**

`grid-auto-rows` es útil cuando tienes elementos que pueden generar nuevas filas más allá de las filas explícitamente definidas. Esta propiedad asegura que las filas creadas automáticamente tengan un tamaño específico.

**Ejemplo:**

```css
.container {
  display: grid;
  grid-template-rows: 100px; /* Define solo una fila explícita */
  grid-auto-rows: 50px;      /* Define el tamaño de las filas automáticas */
}
```

```html
<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
</div>
```

En este ejemplo, la primera fila tendrá una altura de 100px (definida explícitamente) y cualquier fila adicional creada automáticamente tendrá una altura de 50px.


## repeat()

1. **Legibilidad del Código:** `repeat()` hace que la definición de cuadrícula sea más concisa y fácil de entender, especialmente cuando se repiten valores similares en filas o columnas.

2. **Flexibilidad:** Permite definir rápidamente un patrón repetitivo sin tener que repetir manualmente los valores, lo que facilita los cambios futuros en la estructura de la cuadrícula.

**Formas de Usar `repeat()`**

Ejemplo 1

```css
grid-template-columns: 25px repeat(3, 1fr) 20px;
```

- En este ejemplo, la cuadrícula tiene 5 columnas en total.
- La primera columna tiene un ancho de 25px.
- Las siguientes 3 columnas se repiten y cada una ocupa una fracción igual del espacio restante (`1fr`).
- La última columna tiene un ancho de 20px.

Ejemplo 2

```css
grid-template-rows: repeat(2, 25px 50px);
```

- En este ejemplo, la cuadrícula tiene 4 filas en total (2 repeticiones).
- Cada repetición consiste en una fila de 25px seguida de una fila de 50px.

## Grid `gap`

En CSS Grid, `column-gap`, `row-gap` y `gap` son propiedades que se utilizan para establecer espacios entre las columnas, filas o ambas dentro de una cuadrícula. Estas propiedades son especialmente útiles para crear diseños más legibles y visualmente atractivos.

**`column-gap` y `row-gap`**

- `column-gap`: Establece el espacio entre las columnas de la cuadrícula.
- `row-gap`: Establece el espacio entre las filas de la cuadrícula.

Ejemplo:

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 100px;
  column-gap: 20px; /* Espacio entre columnas */
  row-gap: 10px; /* Espacio entre filas */
}
```

**`gap`**

- `gap`: Es una propiedad abreviada que establece tanto el espacio entre las columnas como el espacio entre las filas en una sola declaración.
- Se puede utilizar para establecer el mismo espacio horizontal y verticalmente, o se pueden proporcionar dos valores separados por un espacio para establecer el espacio horizontal y vertical de forma independiente.

**Ejemplo:**

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 100px;
  gap: 20px; /* Espacio horizontal y vertical */
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 100px;
  gap: 20px 10px; /* Espacio horizontal y vertical diferentes */
}
```

**Uso de `gap` con Fracciones y Píxeles**

- Cuando se usa `gap` con fracciones (`fr`), el espacio se distribuye proporcionalmente entre las columnas y filas, manteniendo la relación definida en la cuadrícula.
- Si se usa `gap` con píxeles (`px`) u otras unidades fijas, el espacio se aplica de manera absoluta, lo que puede afectar la estructura y el diseño de la cuadrícula.

**Ejemplo:**

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 100px 200px;
  gap: 20px; /* Distribuye 20px entre columnas y filas */
}

.grid-container {
  display: grid;
  grid-template-columns: 100px 200px;
  grid-template-rows: 1fr 2fr;
  gap: 20px; /* Distribuye 20px absolutos entre columnas y filas */
}
```


## `grid-column-start/end

**`grid-column-start`**

- `grid-column-start` especifica en qué línea de la cuadrícula debe comenzar una columna.
- Puede tomar valores numéricos para indicar la línea de inicio, o nombres de líneas definidos en la cuadrícula.

Ejemplo:

```css
.item {
  grid-column-start: 2; /* La columna comienza en la segunda línea de la cuadrícula */
}
```

**`grid-column-end`**

- `grid-column-end` especifica en qué línea de la cuadrícula debe terminar una columna.
- Al igual que `grid-column-start`, puede tomar valores numéricos o nombres de líneas.

**Ejemplo:**

```css
.item {
  grid-column-end: 4; /* La columna termina en la cuarta línea de la cuadrícula */
}
```

**Abreviatura**

- Para simplificar la escritura de las propiedades `grid-column-start` y `grid-column-end`, se puede utilizar la propiedad abreviada `grid-column`.
- La abreviatura toma dos valores: el primero especifica el inicio y el segundo especifica el final de la columna o fila.

Ejemplo:

```css
.item {
  grid-column: 2 / 4; /* La columna comienza en la línea 2 y termina en la línea 4 */
}
```

## `grid-row-start/end`

**`grid-row-start`**

- La propiedad `grid-row-start` define en qué línea de la cuadrícula comienza una fila.
- Puede tomar valores numéricos para indicar la línea de inicio, o nombres de líneas definidos en la cuadrícula.

Ejemplo:

```css
.item {
  grid-row-start: 2; /* La fila comienza en la segunda línea de la cuadrícula */
}
```

**`grid-row-end`**

- La propiedad `grid-row-end` define en qué línea de la cuadrícula termina una fila.
- Al igual que `grid-row-start`, puede tomar valores numéricos o nombres de líneas.

Ejemplo:

```css
.item {
  grid-row-end: 4; /* La fila termina en la cuarta línea de la cuadrícula */
}
```

**Abreviatura**

- La propiedad abreviada `grid-row` se utiliza para definir tanto el inicio como el final de una fila en una sola declaración.
- Se especifica primero la línea de inicio y luego la línea de fin, separadas por una barra oblicua (`/`).

Ejemplo:

```css
.item {
  grid-row: 2 / 4; /* La fila comienza en la línea 2 y termina en la línea 4 */
}
```

## span row/column

En CSS Grid, la palabra clave `span` se utiliza junto con las propiedades `grid-row` y `grid-column` para indicar que un elemento debe ocupar múltiples filas o columnas en la cuadrícula. Esto proporciona una forma conveniente de definir la extensión de un elemento en la cuadrícula sin tener que especificar manualmente las líneas de inicio y fin.

**sin `span`**

Cuando se utilizan `grid-row` y `grid-column` sin `span`, se deben especificar explícitamente las líneas de inicio y fin en la cuadrícula para el elemento. Por ejemplo:

```css
.item {
  grid-row: 2 / 4; /* El elemento ocupa de la fila 2 a la fila 4 */
  grid-column: 1 / 3; /* El elemento ocupa de la columna 1 a la columna 3 */
}
```

En este caso, el elemento se extenderá desde la fila 2 hasta la fila 4 y desde la columna 1 hasta la columna 3 en la cuadrícula.

**con `span`**

Al utilizar `span` con `grid-row` y `grid-column`, se puede indicar de manera más concisa cuántas filas o columnas debe ocupar el elemento, sin necesidad de especificar las líneas de inicio y fin. Por ejemplo:

```css
.item {
  grid-row: span 2; /* El elemento ocupa 2 filas */
  grid-column: span 3; /* El elemento ocupa 3 columnas */
}
```

En este caso, el elemento se extenderá automáticamente por 2 filas y 3 columnas en la cuadrícula, a partir de su posición actual.

**Diferencia entre usar `span` y no usarlo**

La principal diferencia entre usar `span` y no usarlo es la conveniencia y la legibilidad del código. Al utilizar `span`, se puede definir la extensión del elemento de manera más concisa y comprensible, especialmente cuando se trata de ocupar múltiples filas o columnas. Además, `span` hace que el código sea más adaptable a cambios en la estructura de la cuadrícula, ya que no se necesita ajustar manualmente las líneas de inicio y fin.

## `autoflow`

La propiedad `grid-auto-flow` en CSS Grid se utiliza para controlar cómo se colocan los elementos en la cuadrícula cuando no hay suficientes columnas o filas explícitamente definidas para acomodar todos los elementos. Esta propiedad tiene varios valores que determinan la dirección en la que los elementos se colocan, así como cómo se comportan al hacerlo. Aquí tienes una explicación detallada de cada valor y un ejemplo de su uso:

**Valores de `grid-auto-flow`**

1. **`row`**: Los elementos se colocan en nuevas filas, comenzando desde la izquierda y avanzando hacia la derecha. Si una fila no puede contener más elementos, la siguiente fila se crea debajo de la actual.

2. **`column`**: Los elementos se colocan en nuevas columnas, comenzando desde arriba y avanzando hacia abajo. Si una columna no puede contener más elementos, se crea una nueva columna a la derecha de la actual.

3. **`row dense`**: Similar a `row`, pero los elementos se ajustan a los huecos de la cuadrícula, lo que puede provocar que se salten a una fila anterior si hay un hueco disponible.

4. **`column dense`**: Similar a `column`, pero los elementos se ajustan a los huecos de la cuadrícula, lo que puede provocar que se salten a una columna anterior si hay un hueco disponible.

Ejemplo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CSS Grid Example with grid-auto-flow</title>
<style>
  .grid-container {
    display: grid;
    grid-template-columns: 100px 100px;
    grid-template-rows: 100px 100px;
    grid-auto-flow: column; /* Colocar elementos en nuevas columnas */
    gap: 10px;
    border: 1px solid #333;
    padding: 10px;
  }
  .item {
    background-color: #ccc;
    border: 1px solid #999;
    padding: 20px;
    text-align: center;
  }
  .item2 {
    grid-row: 1 span; /* Ocupar una fila completa */
    grid-column: 2 span; /* Ocupar dos columnas completas */
  }
</style>
</head>
<body>
  <div class="grid-container">
    <div class="item item1">1</div>
    <div class="item item2">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
</body>
</html>
```

En este ejemplo, al cambiar `grid-auto-flow` a `column`, los elementos restantes (`item3`, `item4`, `item5`, `item6`) se colocarán en nuevas columnas en lugar de en nuevas filas, evitando así espacios vacíos en la cuadrícula. Esto asegura que la cuadrícula esté completamente llena, ya que los elementos se colocan en columnas adicionales si no hay suficientes elementos para llenar todas las filas de la cuadrícula.

## `grid-area` y `grid-template` 

La propiedad `grid-template-areas` se utiliza para definir áreas nombradas en una cuadrícula CSS Grid. Cada área se representa con un nombre único y se delimita por comillas. Por ejemplo:

```css
.grid-container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}
```

En este ejemplo, se definen tres áreas: "header", "sidebar", "content" y "footer".

La propiedad `grid-area` se utiliza para asignar un elemento a un área nombrada en la cuadrícula. Puede especificar el nombre del área directamente o usar la sintaxis `row-start / column-start / row-end / column-end` para especificar las líneas de la cuadrícula donde comienza y termina el elemento. Por ejemplo:

```css
.item {
  grid-area: header; /* El elemento se coloca en el área "header" */
}
```

**Uso del Punto (`.`)**

En `grid-template-areas`, el punto (`.`) se utiliza para indicar un espacio vacío en la cuadrícula. Esto significa que no hay ningún elemento asignado a esa área. Por ejemplo:

```css
.grid-container {
  grid-template-areas:
    "header header header"
    "sidebar . content"
    "footer footer footer";
}
```

En este ejemplo, el área en la fila 2 y columna 2 está vacía, lo que significa que el elemento en esa área se extenderá sobre esa área vacía.

**Abreviatura de `grid-template`**

La propiedad `grid-template` se puede utilizar como una abreviatura conveniente para definir simultáneamente las plantillas de filas, columnas y áreas de la cuadrícula. Además de las áreas, puedes definir las filas y columnas en una sola declaración. Por ejemplo:

```css
.grid-container {
  display: grid;
  grid-template:
    "header header header" 50px
    "sidebar content content" 300px
    "footer footer footer" 50px
    / 1fr 2fr 1fr; /* Plantilla de columnas */
}
```

En este ejemplo, se definen las áreas y la plantilla de columnas en una sola declaración, lo que simplifica la estructura del código y facilita la comprensión de la disposición de la cuadrícula. Las filas también se definen con una altura de 20px cada una.

Ejemplo
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CSS Grid Example with grid-template</title>
<style>
  .grid-container {
    height: 500px;
    display: grid;
    grid-template:
      "header header header" 15fr
      "sidebar content content" 80fr
      "footer footer footer" 10fr
      / 1fr 2fr 1fr; /* Plantilla de columnas */
    grid-gap: 10px;
    border: 1px solid #333;
    padding: 10px;
  }
  .header {
    grid-area: header;
    background-color: lightblue;
    text-align: center;
  }
  .sidebar {
    grid-area: sidebar;
    background-color: lightgreen;
    text-align: center;
  }
  .content {
    grid-area: content;
    background-color: lightcoral;
    text-align: center;
  }
  .footer {
    grid-area: footer;
    background-color: lightgoldenrodyellow;
    text-align: center;
  }
</style>
</head>
<body>
  <div class="grid-container">
    <div class="header">Header</div>
    <div class="sidebar">Sidebar</div>
    <div class="content">Content</div>
    <div class="footer">Footer</div>
  </div>
</body>
</html>
```

## Alinear elementos de la cuadrícula

**`justify-items`**

La propiedad `justify-items` se utiliza para alinear los elementos de la cuadrícula en el eje horizontal (en línea). Puedes alinear los elementos hacia la izquierda (`start`), hacia la derecha (`end`), centrados (`center`), o distribuidos uniformemente a lo largo del contenedor (`stretch`). Por ejemplo:

```css
.grid-container {
  display: grid;
  justify-items: center; /* Alinea los elementos en el centro horizontalmente */
}
```

**`align-items`**

La propiedad `align-items` se utiliza para alinear los elementos de la cuadrícula en el eje vertical (en bloque). Puedes alinear los elementos hacia arriba (`start`), hacia abajo (`end`), centrados (`center`), o distribuidos uniformemente a lo largo del contenedor (`stretch`). Por ejemplo:

```css
.grid-container {
  display: grid;
  align-items: center; /* Alinea los elementos en el centro verticalmente */
}
```

**Alinear toda la cuadrícula**

**`justify-content`**

La propiedad `justify-content` se utiliza para alinear la cuadrícula a lo largo del eje horizontal (en línea). Puedes alinear la cuadrícula hacia la izquierda (`start`), hacia la derecha (`end`), centrada (`center`), distribuida uniformemente a lo largo del contenedor (`space-between`), o distribuida uniformemente con un espacio alrededor de los elementos (`space-around`). Por ejemplo:

```css
.grid-container {
  display: grid;
  justify-content: center; /* Alinea la cuadrícula en el centro horizontalmente */
}
```

**`align-content`**
La propiedad `align-content` se utiliza para alinear la cuadrícula a lo largo del eje vertical (en bloque). Puedes alinear la cuadrícula hacia arriba (`start`), hacia abajo (`end`), centrada (`center`), distribuida uniformemente a lo largo del contenedor (`space-between`), o distribuida uniformemente con un espacio alrededor de los elementos (`space-around`). Por ejemplo:

```css
.grid-container {
  display: grid;
  align-content: center; /* Alinea la cuadrícula en el centro verticalmente */
}
```

**`place-content`**

La propiedad `place-content` es una propiedad abreviada que se utiliza para centrar los elementos tanto horizontalmente como verticalmente dentro de la cuadrícula. Puedes especificar tanto la alineación horizontal como la vertical en una sola declaración. Por ejemplo:

```css
.grid-container {
  display: grid;
  place-content: center; /* Centra los elementos tanto horizontal como verticalmente */
}
```

**`justify-self`**

La propiedad `justify-self` se utiliza para alinear un elemento específico dentro de la cuadrícula en el eje horizontal (en línea). Puedes alinear el elemento hacia la izquierda (`start`), hacia la derecha (`end`), centrado (`center`), o estirado para ocupar todo el espacio disponible (`stretch`). Por ejemplo:

```css
.item {
  justify-self: center; /* Alinea este elemento en el centro horizontalmente */
}
```

Estas propiedades te permiten controlar la alineación de los elementos dentro de una cuadrícula CSS Grid, ya sea individualmente o en conjunto para toda la cuadrícula.

Ejemplo

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CSS Grid Alignment Example</title>
<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 100px;
    grid-gap: 10px;
    justify-items: center;
    align-items: center;
    justify-content: center;
    align-content: center;
    height: 300px; /* Altura para fines de visualización */
    border: 1px solid #333;
    padding: 10px;
  }
  .item {
    background-color: lightblue;
    border: 1px solid #999;
    padding: 20px;
    text-align: center;
    justify-self: center;
  }
</style>
</head>
<body>
  <div class="grid-container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
</body>
</html>
```

## Uso de `minmax()`

La función `minmax()` en CSS Grid se utiliza para especificar un rango permitido de tamaños para una pista de la cuadrícula. Esto es útil cuando se desea que una pista de la cuadrícula tenga un tamaño mínimo y máximo, lo que permite que la cuadrícula se ajuste de forma más dinámica al contenido.

La sintaxis de `minmax()` es la siguiente: `minmax(min, max)`, donde `min` es el tamaño mínimo de la pista y `max` es el tamaño máximo. Por ejemplo, `minmax(100px, 1fr)` especifica que la pista debe tener un tamaño mínimo de 100px y un tamaño máximo de 1fr.

Cuando se utiliza `minmax()` en una cuadrícula CSS Grid responsiva para dispositivos móviles, es común utilizarlo en combinación con otras propiedades de diseño responsivo, como `auto-fill` y `auto-fit`, para que las columnas se ajusten automáticamente al tamaño de la pantalla del dispositivo.

Aquí tienes un ejemplo de cómo utilizar `minmax()` en una cuadrícula CSS Grid responsiva para celulares:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Responsive CSS Grid Example with minmax()</title>
<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 10px;
    padding: 10px;
  }
  .item {
    background-color: lightblue;
    border: 1px solid #333;
    padding: 20px;
    text-align: center;
  }
</style>
</head>
<body>
  <div class="grid-container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
    <div class="item">8</div>
    <div class="item">9</div>
    <div class="item">10</div>
    <div class="item">11</div>
    <div class="item">12</div>
  </div>
</body>
</html>

```

En este ejemplo, la cuadrícula se configura para tener columnas de un tamaño mínimo de 100px y un tamaño máximo de 1fr. Las columnas se ajustarán automáticamente para llenar el espacio disponible en la pantalla, lo que las hace responsivas para dispositivos móviles.

## `Autofill` y `autofit`

**¿Qué es `autofill`?**

- `autofill` es una palabra clave en CSS Grid que se utiliza junto con la función `repeat()` para generar automáticamente tantas columnas o filas como sea posible en función del tamaño del contenedor y del tamaño especificado para cada pista.

**¿Qué es `autofit`?**

- `autofit` es otra palabra clave en CSS Grid que también se utiliza con la función `repeat()`. Similar a `autofill`, `autofit` genera automáticamente tantas columnas o filas como sea posible, pero a diferencia de `autofill`, si el contenido no es suficiente para llenar todas las pistas generadas, las pistas adicionales se reducirán a su tamaño mínimo.

**Diferencias de `autofill` y `autofit`**

- La principal diferencia entre `autofill` y `autofit` radica en cómo manejan el espacio disponible cuando hay más pistas generadas de las que se necesitan para colocar el contenido. `autofill` mantiene todas las pistas generadas incluso si no se llenan completamente, mientras que `autofit` reduce las pistas adicionales a su tamaño mínimo si no se necesita más espacio.

Ejemplo

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Autofill y Autofit en CSS Grid</title>
<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 10px;
    padding: 10px;
    border: 1px solid #333;
  }
  .item {
    background-color: lightblue;
    border: 1px solid #999;
    padding: 20px;
    text-align: center;
  }
</style>
</head>
<body>
  <div class="grid-container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
    <div class="item">8</div>
    <div class="item">9</div>
    <div class="item">10</div>
    <div class="item">11</div>
    <div class="item">12</div>
  </div>
</body>
</html>

```

En este ejemplo, la cuadrícula se configura para tener columnas que tienen un tamaño mínimo de 100px y un tamaño máximo de 1fr. Utilizando repeat(auto-fill, ...), la cuadrícula generará automáticamente tantas columnas como quepan en el contenedor, llenando el espacio disponible. Si el contenedor es lo suficientemente ancho, se generarán múltiples columnas de 100px, pero si el contenedor es estrecho, las columnas se expandirán para llenar el espacio disponible. La propiedad grid-gap se utiliza para agregar espacio entre las celdas de la cuadrícula.

## Resumen

En la sección de Estructura de una Página de nuestro curso de desarrollo web, los estudiantes han aprendido los siguientes temas:

**¿Qué es Grid en CSS?**: Entendieron el concepto de CSS Grid y sus ventajas para crear diseños web avanzados y flexibles.

**Crear filas y columnas**: Aprendieron a definir filas y columnas utilizando propiedades como `grid-template-rows` y `grid-template-columns` para organizar el contenido de manera estructurada.

**CSS Grid: Unidades de Medida**: Conocieron las diversas unidades de medida que se pueden usar en CSS Grid, como píxeles, porcentajes y fracciones (`fr`).

**Más sobre filas**: Exploraron en detalle cómo manipular filas, ajustando su tamaño y comportamiento.

**Filas Automáticas**: Aprendieron a crear filas automáticas que se ajustan al contenido utilizando `grid-auto-rows`.

**repeat()**: Utilizaron la función `repeat()` para simplificar la creación de filas y columnas repetitivas.

**Grid gap**: Descubrieron cómo añadir espacios entre las filas y columnas usando las propiedades `grid-gap`, `row-gap` y `column-gap`.

**grid-column-start/end**: Aprendieron a posicionar elementos en el grid utilizando `grid-column-start` y `grid-column-end`.

**grid-row-start/end**: Similarmente, usaron `grid-row-start` y `grid-row-end` para controlar la posición vertical de los elementos.

**span row/column**: Vieron cómo hacer que un elemento abarque múltiples filas o columnas utilizando `span`.

**autoflow**: Conocieron el concepto de `grid-auto-flow` y cómo afecta la colocación automática de los elementos en el grid.

**grid-area y grid-template**: Aprendieron a nombrar y colocar áreas en el grid usando `grid-area` y a definir plantillas de grid con `grid-template-areas`.

**Alinear elementos de la cuadrícula**: Descubrieron cómo alinear elementos dentro de sus celdas utilizando propiedades como `align-items`, `justify-items`, `align-self` y `justify-self`.

**Uso de minmax()**: Utilizaron la función `minmax()` para crear columnas y filas que responden dinámicamente al tamaño del contenedor.

**Autofill y autofit**: Aprendieron a usar `autofill` y `autofit` para crear layouts flexibles que se adapten automáticamente al tamaño del viewport.

**Con estos conocimientos, los estudiantes son capaces de:**

- Utilizar CSS Grid para crear layouts complejos y responsivos.
- Definir y manipular filas y columnas en un grid.
- Aplicar diferentes unidades de medida y entender su impacto en el diseño.
- Crear filas automáticas que se ajustan al contenido.
- Utilizar `repeat()` para simplificar la repetición de filas y columnas.
- Añadir espacios entre filas y columnas utilizando `grid-gap`.
- Posicionar elementos en el grid con precisión usando `grid-column-start/end` y `grid-row-start/end`.
- Hacer que elementos abarquen múltiples filas o columnas con `span`.
- Controlar el flujo automático de los elementos en el grid con `grid-auto-flow`.
- Nombrar y organizar áreas en el grid utilizando `grid-area` y `grid-template-areas`.
- Alinear elementos dentro de sus celdas usando propiedades de alineación.
- Utilizar `minmax()` para crear elementos que respondan dinámicamente al tamaño del contenedor.
- Implementar `autofill` y `autofit` para crear layouts adaptativos y flexibles.

**Recursos Externos para Seguir Aprendiendo**:

- [Mozilla Developer Network (MDN) - CSS Grid Layout](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout)
- [CSS-Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [W3Schools - CSS Grid](https://www.w3schools.com/css/css_grid.asp)
- [Grid](https://web.dev/learn/css/grid?hl=es-419)