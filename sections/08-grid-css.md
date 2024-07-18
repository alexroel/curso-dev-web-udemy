# Introducción a Grid

1. [Introducción](#introducción)
2. [¿Qué es Grid en CSS?](#qué-es-grid-en-css)
3. [Crear filas y columnas](#crear-filas-y-columnas)
4. [Combinar columnas y filas](#combinar-columnas-y-filas)
5. [Flujo automático](#flujo-automático)
6. [Area de cuadricula](#area-de-cuadricula)
7. [Alinear elementos de la cuadrícula](#alinear-elementos-de-la-cuadrícula)
8. [Uso de minmax()](#uso-de-minmax)
9. [Resumen](#resumen)

---
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

---
## ¿Qué es Grid en CSS?

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
.contenedor{
    display: grid;
}
```

---
## Crear filas y columnas

**Definir filas y columnas**

Para comenzar, debes definir un contenedor con `display: grid`. Luego, puedes usar `grid-template-columns` y `grid-template-rows` para definir las filas y columnas.

**Ejemplo**

```css
.contenedor-grid {
  display: grid;
  grid-template-columns: 300px 300px 300px 200px; /* 3 columnas: 1 fracción, 2 fracciones, 1 fracción */
  grid-template-rows: 100px 200px; /* 2 filas: 100px y 200px */
}
```

**Propiedad abreviada `grid`**

La propiedad abreviada `grid` permite definir tanto las filas como las columnas en una sola declaración. La sintaxis general es:

```css
.contenedor-grid {
  display: grid;
  grid-template: <grid-template-rows> / <grid-template-columns>;
}
```

**Ejemplo**

```css
.contenedor-grid {
  display: grid;
  grid-template: 100px 200px / 1fr 2fr 1fr; /* Define filas y columnas en una sola línea */
}
```

**CSS Grid: Unidades de Medida**

CSS Grid es una herramienta poderosa para crear layouts en dos dimensiones. Permite definir tanto filas como columnas con varias unidades de medida, incluyendo `px`, `rem`, `auto`, y `fr`.

**Unidades Comunes**

- **`px` (píxeles):** Define un tamaño fijo en píxeles.
- **`rem` (root em):** Define un tamaño relativo a la raíz del documento (`<html>`).
- **`auto`:** El tamaño es determinado automáticamente por el contenido y otros factores.

**Ejemplo:**

```css
.contenedor-grid {
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
.contenedor-grid {
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

**Más sobre filas**

**Filas y Cuadrículas Vacías**

En CSS Grid, las filas son una de las dos dimensiones principales, junto con las columnas, que forman la estructura de la cuadrícula. Las filas pueden ser explícitamente definidas en el contenedor o generadas automáticamente en función del contenido y el uso de `grid-auto-rows` y `grid-row-auto`.

**Filas Explícitas**

```css
.contenedor-grid {
  display: grid;
  grid-template-rows: 100px 200px; /* Define dos filas explícitas */
}
```

**Cuadrículas Vacías**

Una cuadrícula vacía se refiere a una situación en la que una o más celdas de la cuadrícula no contienen ningún elemento hijo. Esto puede suceder si no todos los espacios definidos en la cuadrícula son ocupados por elementos o si se utilizan propiedades como `grid-column` y `grid-row` para posicionar elementos fuera del flujo estándar.

**Ejemplo:**

```css
.contenedor {
  display: grid;
  grid-template-rows: 100px 200px;
  grid-template-columns: 1fr 1fr;
}
.item1 {
  grid-column: 2; /* Coloca este elemento en la segunda columna */
}
```

```html
<div class="contenedor">
  <div class="item1">1</div>
</div>
```

En este caso, la primera columna de cada fila estará vacía porque el único elemento está posicionado en la segunda columna.

**Filas y Columnas Automáticas**

`grid-auto-rows` y `grid-auto-columns` son útiles cuando tienes elementos que pueden generar nuevas filas o columnas más allá de las filas y columnas explícitamente definidas. Estas propiedades aseguran que las filas y columnas creadas automáticamente tengan un tamaño específico.

**Ejemplo: Filas Automáticas**

```css
.contenedor {
  display: grid;
  grid-template-rows: 100px; /* Define solo una fila explícita */
  grid-auto-rows: 50px;      /* Define el tamaño de las filas automáticas */
}
```

```html
<div class="contenedor">
  <div class="item1">1</div>
  <div class="item2">2</div>
</div>
```

En este ejemplo, la primera fila tendrá una altura de 100px (definida explícitamente) y cualquier fila adicional creada automáticamente tendrá una altura de 50px.

**Ejemplo: Columnas Automáticas**

```css
.contenedor {
  display: grid;
  grid-template-columns: 200px; /* Define solo una columna explícita */
  grid-auto-columns: 100px;     /* Define el tamaño de las columnas automáticas */
}
```

```html
<div class="contenedor">
  <div class="item1">1</div>
  <div class="item2">2</div>
</div>
```

En este ejemplo, la primera columna tendrá un ancho de 200px (definida explícitamente) y cualquier columna adicional creada automáticamente tendrá un ancho de 100px.

**repeat()**

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

**Grid `gap`**

En CSS Grid, `column-gap`, `row-gap` y `gap` son propiedades que se utilizan para establecer espacios entre las columnas, filas o ambas dentro de una cuadrícula. Estas propiedades son especialmente útiles para crear diseños más legibles y visualmente atractivos.

**`column-gap` y `row-gap`**

- `column-gap`: Establece el espacio entre las columnas de la cuadrícula.
- `row-gap`:

 Establece el espacio entre las filas de la cuadrícula.

Ejemplo:

```css
.contenedor-grid {
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
.contenedor-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 100px;
  gap: 20px; /* Espacio horizontal y vertical */
}

.contenedor-grid {
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
.contenedor-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 100px 200px;
  gap: 20px; /* Distribuye 20px entre columnas y filas */
}

.contenedor-grid {
  display: grid;
  grid-template-columns: 100px 200px;
  grid-template-rows: 1fr 2fr;
  gap: 20px; /* Distribuye 20px absolutos entre columnas y filas */
}
```

El shorthand `gap: row / column;` en CSS Grid es una forma más específica de definir el espacio entre filas y columnas en una cuadrícula. Esta sintaxis permite establecer diferentes valores para el espacio entre filas y columnas en una sola declaración.

Veamos cómo funciona:

- **`gap: row / column;`**:
  - `row`: Especifica el espacio entre las filas de la cuadrícula.
  - `column`: Especifica el espacio entre las columnas de la cuadrícula.

Por ejemplo:

```css
.contenedor-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Define 3 columnas de tamaño igual */
  gap: 20px 10px; /* Establece 20px de espacio entre filas y 10px de espacio entre columnas */
}
```

En este caso, `gap: 20px 10px;` significa que hay 20 píxeles de espacio entre las filas y 10 píxeles de espacio entre las columnas de la cuadrícula definida por `grid-template-columns`. Esta sintaxis proporciona más control sobre los espacios verticales y horizontales en la cuadrícula de CSS Grid.

----
## Combinar columnas y filas

**`grid-column-start`**

- `grid-column-start` especifica en qué línea de la cuadrícula debe comenzar una columna.
- Puede tomar valores numéricos para indicar la línea de inicio, o nombres de líneas definidos en la cuadrícula.

**Ejemplo:**

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

**Ejemplo:**

```css
.item {
  grid-column: 2 / 4; /* La columna comienza en la línea 2 y termina en la línea 4 */
}
```

**`grid-row-start/end`**

**`grid-row-start`**

- La propiedad `grid-row-start` define en qué línea de la cuadrícula comienza una fila.
- Puede tomar valores numéricos para indicar la línea de inicio, o nombres de líneas definidos en la cuadrícula.

**Ejemplo:**

```css
.item {
  grid-row-start: 2; /* La fila comienza en la segunda línea de la cuadrícula */
}
```

**`grid-row-end`**

- La propiedad `grid-row-end` define en qué línea de la cuadrícula termina una fila.
- Al igual que `grid-row-start`, puede tomar valores numéricos o nombres de líneas.

**Ejemplo:**

```css
.item {
  grid-row-end: 4; /* La fila termina en la cuarta línea de la cuadrícula */
}
```

**Abreviatura**

- La propiedad abreviada `grid-row` se utiliza para definir tanto el inicio como el final de una fila en una sola declaración.
- Se especifica primero la línea de inicio y luego la línea de fin, separadas por una barra oblicua (`/`).

**Ejemplo:**

```css
.item {
  grid-row: 2 / 4; /* La fila comienza en la línea 2 y termina en la línea 4 */
}
```

**`span row/column`**

En CSS Grid, la palabra clave `span` se utiliza junto con las propiedades `grid-row` y `grid-column` para indicar que un elemento debe ocupar múltiples filas o columnas en la cuadrícula. Esto proporciona una forma conveniente de definir la extensión de un elemento en la cuadrícula sin tener que especificar manualmente las líneas de inicio y fin.

**Sin `span`**

Cuando se utilizan `grid-row` y `grid-column` sin `span`, se deben especificar explícitamente las líneas de inicio y fin en la cuadrícula para el elemento. Por ejemplo:

```css
.item {
  grid-row: 2 / 4; /* El elemento ocupa de la fila 2 a la fila 4 */
  grid-column: 1 / 3; /* El elemento ocupa de la columna 1 a la columna 3 */
}
```

En este caso, el elemento se extenderá desde la fila 2 hasta la fila 4 y desde la columna 1 hasta la columna 3 en la cuadrícula.

**Con `span`**

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

---
## Flujo automático

La propiedad `grid-auto-flow` en CSS Grid se utiliza para controlar cómo se colocan los elementos en la cuadrícula cuando no hay suficientes columnas o filas explícitamente definidas para acomodar todos los elementos. Esta propiedad tiene varios valores que determinan la dirección en la que los elementos se colocan, así como cómo se comportan al hacerlo. Aquí tienes una explicación detallada de cada valor y un ejemplo de su uso:

**Valores de `grid-auto-flow`**

1. **`row`**: Los elementos se colocan en nuevas filas, comenzando desde la izquierda y avanzando hacia la derecha. Si una fila no puede contener más elementos, la siguiente fila se crea debajo de la actual.

2. **`column`**: Los elementos se colocan en nuevas columnas, comenzando desde arriba y avanzando hacia abajo. Si una columna no puede contener más elementos, se crea una nueva columna a la derecha de la actual.

3. **`row dense`**: Similar a `row`, pero los elementos se ajustan a los huecos de la cuadrícula, lo que puede provocar que se salten a una fila anterior si hay un hueco disponible.

4. **`column dense`**: Similar a `column`, pero los elementos se ajustan a los huecos de la cuadrícula, lo que puede provocar que se salten a una columna anterior si hay un hueco disponible.

**Ejemplo:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ejemplo de CSS Grid con grid-auto-flow</title>
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

---
## Area de cuadricula 

1. **`grid-template-áreas:;`**
   - **Explicación:** Esta línea de código define un área de cuadrícula en CSS Grid. No se proporciona ningún valor para `grid-template-áreas`, lo que significa que no se definen áreas específicas para la cuadrícula en este momento.
   
   **Ejemplo:**
   ```css
   .grid-container {
     display: grid;
     grid-template-areas: none;
   }
   ```

   El término "none" en el contexto de `grid-template-areas: none;` se refiere a la falta de definición de áreas específicas para la cuadrícula en CSS Grid. Cuando se establece `grid-template-areas` como `none`, significa que no se están asignando nombres a áreas de la cuadrícula mediante esta propiedad en particular. Esto puede deberse a que no se requiere un diseño basado en áreas específicas o porque se está utilizando otro método para definir la estructura de la cuadrícula, como `grid-template-rows` y `grid-template-columns`.

2. **Uso de punto (`.`)**
   - **Explicación:** En CSS Grid, el punto (`.`) se utiliza dentro de la propiedad `grid-template-areas` para indicar un espacio vacío en la cuadrícula. Esto significa que no hay ningún elemento asignado a esa área específica.
   
   **Ejemplo:**
   ```css
   .grid-container {
     display: grid;
     grid-template-areas:
       "cabecera cabecera cabecera"
       "barra-lateral . contenido"
       "pie pie pie";
   }
   ```

3. **`grid-area: nav;`**
   - **Explicación:** Esta línea asigna el nombre `nav` a un área de la cuadrícula utilizando la propiedad `grid-area`. Esto permite colocar elementos dentro de esta área específica utilizando su nombre en la definición de la cuadrícula (`grid-template-areas`).
   
   **Ejemplo:**
   ```css
   .nav {
     grid-area: nav;
   }
   ```

4. **`grid-area: 1 / 1 / 4 / 5;`**
   - **Explicación:** Utiliza `grid-area` para especificar las líneas de inicio y fin tanto para filas como para columnas de un elemento en la cuadrícula.
     - Comienza en la fila 1 y columna 1.
     - Termina en la fila 4 y columna 5.
   
   **Ejemplo:**
   ```css
   .item {
     grid-area: 1 / 1 / 4 / 5;
   }
   ```

5. **`grid-template:
      "cabecera cabecera cabecera"
      "barra-lateral contenido contenido"
      "pie pie pie"
      / 1fr 2fr 1fr; /* Plantilla de columnas */`**
   - **Explicación:** Define la plantilla de la cuadrícula con áreas y columnas específicas.
     - Define tres filas con nombres de áreas (cabecera, barra-lateral, contenido, pie).
     - Distribuye las columnas con tamaños flexibles (`1fr`, `2fr`, `1fr`).
   
   **Ejemplo:**
   ```css
   .grid-container {
     display: grid;
     grid-template:
       "cabecera cabecera cabecera"
       "barra-lateral contenido contenido"
       "pie pie pie"
       / 1fr 2fr 1fr;
   }
   ```

6. **`grid-template:
      "cabecera cabecera cabecera" 15fr /* Tamaño de filas */
      "barra-lateral contenido contenido" 80fr /* Tamaño de filas */
      "pie pie pie" 10fr /* Tamaño de filas */
      / 1fr 2fr 1fr; /* Plantilla de columnas */`**
   - **Explicación:** Define la plantilla de la cuadrícula con tamaños explícitos para las filas y columnas.
     - Filas: `15fr`, `80fr`, `10fr` para `cabecera`, `barra-lateral`, `pie` respectivamente.
     - Columnas: `1fr`, `2fr`, `1fr`.
   
   **Ejemplo:**
   ```css
   .grid-container {
     display: grid;
     grid-template:
       "cabecera cabecera cabecera" 15fr
       "barra-lateral contenido contenido" 80fr
       "pie pie pie" 10fr
       / 1fr 2fr 1fr;
   }
   ```

**Ejemplo**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo de CSS Grid con temario detallado</title>
  <style>
    .grid-container {
      display: grid;
      grid-template:
        "cabecera cabecera cabecera" 15fr
        "barra-lateral contenido contenido" 80fr
        "pie pie pie" 10fr
        / 1fr 2fr 1fr;
      gap: 10px;
      border: 1px solid #333;
      padding: 10px;
    }
    
    .cabecera, .barra-lateral, .contenido, .pie {
      text-align: center;
      padding: 10px;
    }
    
    .cabecera {
      grid-area: cabecera;
      background-color: lightblue;
    }
    
    .barra-lateral {
      grid-area: barra-lateral;
      background-color: lightgreen;
    }
    
    .contenido {
      grid-area: contenido;
      background-color: lightcoral;
    }
    
    .pie {
      grid-area: pie;
      background-color: lightgoldenrodyellow;
    }
  </style>
</head>
<body>
  <div class="grid-container">
    <div class="cabecera">Cabecera</div>
    <div class="barra-lateral">Barra Lateral</div>
    <div class="contenido">Contenido</div>
    <div class="pie">Pie de Página</div>
  </div>
</body>
</html>
```

Este temario y ejemplo proporcionan una comprensión detallada de cómo utilizar y personalizar CSS Grid, utilizando ejemplos prácticos con nombres de clases en español para una mejor comprensión y aplicabilidad en proyectos web.

---
## Alinear elementos de la cuadrícula

**Mover todo el Grid**

**`align-content`**: 

Se utiliza para alinear la cuadrícula a lo largo del eje **vertical (en bloque)**.

**`justify-content`**:

Se utiliza para alinear la cuadrícula a lo largo del eje **horizontal (en línea)**.

Valores:
- `start`: Alinea el contenido al inicio del contenedor.
- `end`: Alinea el contenido al final del contenedor.
- `center`: Centra el contenido dentro del contenedor.
- `stretch`: Estira el contenido para llenar el contenedor.
- `space-between`: Distribuye el contenido con espacio igual entre los elementos.
- `space-around`: Distribuye el contenido con espacio igual alrededor de los elementos.
- `space-evenly`: Distribuye el contenido con espacio igual entre y alrededor de los elementos.

**`place-content`**:

Es una abreviatura que combina las propiedades `align-content` y `justify-content` en CSS Grid.

Sintaxis:
```css
place-content: <align-content> <justify-content>;
```

**Mover todos los elementos de la celda**
**`align-items`**:

Se utiliza para alinear los elementos de la cuadrícula en el eje **vertical (en bloque)**.

**`justify-items`**:

Se utiliza para alinear los elementos de la cuadrícula en el eje **horizontal (en línea)**.

Valores:
- `start`: Alinea los elementos al inicio del contenedor.
- `end`: Alinea los elementos al final del contenedor.
- `center`: Centra los elementos dentro del contenedor.
- `stretch`: Estira los elementos para llenar el contenedor.

**`place-items`**:

Es una forma abreviada de combinar las propiedades `align-items` y `justify-items` en CSS Grid.

Sintaxis:
```css
place-items: <align-items> <justify-items>;
```


**Mover un elemento en particular de la celda**

**`align-self`**:
Se utiliza para alinear un elemento específico dentro de la cuadrícula en el eje **vertical (en bloque)**.

**`justify-self`**:
Se utiliza para alinear un elemento específico dentro de la cuadrícula en el eje **horizontal (en línea)**.

Valores:
- `start`: Alinea el elemento al inicio del contenedor.
- `end`: Alinea el elemento al final del contenedor.
- `center`: Centra el elemento dentro del contenedor.
- `stretch`: Estira el elemento para llenar el contenedor.

**`place-self`**:
Es una abreviatura que combina las propiedades `align-self` y `justify-self` en CSS Grid.

Sintaxis:
```css
place-self: <align-self> <justify-self>;
```

Ejemplo:

**HTML**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo de CSS Grid</title>
  <link rel="stylesheet" href="styles.css">
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

**CSS (styles.css)**

```css
/* Estilos base */
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  gap: 10px;
  border: 2px solid #333;
  padding: 10px;
}

.item {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

/* Ejemplo: Mover todo el Grid */
.grid-container.move-all {
  align-content: center; /* Alinea verticalmente al centro */
  justify-content: space-around; /* Alinea horizontalmente con espacio alrededor */
}

/* Ejemplo: Mover todos los elementos de la celda */
.grid-container.move-items {
  align-items: center; /* Alinea verticalmente al centro */
  justify-items: start; /* Alinea horizontalmente al inicio */
}

/* Ejemplo: Mover un elemento en particular de la celda */
.item.move-specific {
  align-self: end; /* Alinea este elemento verticalmente al final */
  justify-self: center; /* Alinea este elemento horizontalmente al centro */
}
```

**Explicación y Uso**

**Mover todo el Grid**

```css
.grid-container.move-all {
  align-content: center; /* Alinea verticalmente al centro */
  justify-content: space-around; /* Alinea horizontalmente con espacio alrededor */
}
```

Este bloque de CSS aplica `align-content` y `justify-content` al contenedor `.grid-container`, centrando verticalmente el contenido y distribuyendo horizontalmente los elementos con espacio alrededor.

**Mover todos los elementos de la celda**

```css
.grid-container.move-items {
  align-items: center; /* Alinea verticalmente al centro */
  justify-items: start; /* Alinea horizontalmente al inicio */
}
```

Aquí, `align-items` y `justify-items` se aplican a todos los elementos `.item` dentro de `.grid-container`, alineando verticalmente al centro y horizontalmente al inicio de cada celda respectivamente.

**Mover un elemento en particular de la celda**

```css
.item.move-specific {
  align-self: end; /* Alinea este elemento verticalmente al final */
  justify-self: center; /* Alinea este elemento horizontalmente al centro */
}
```

En este caso, la clase `.move-specific` se aplica a un elemento específico dentro de la cuadrícula, ajustando su alineación vertical al final y horizontalmente al centro de su celda.

Estos ejemplos te permiten mostrar visualmente cómo cada propiedad afecta la disposición y alineación de elementos dentro de una cuadrícula CSS Grid, facilitando la comprensión y experimentación con estos conceptos.

---
## Uso de `minmax()`

**La función `minmax()`**

La función `minmax()` en CSS Grid se utiliza para especificar un rango permitido de tamaños para una pista de la cuadrícula. Esto es útil cuando se desea que una pista de la cuadrícula tenga un tamaño mínimo y máximo, lo que permite que la cuadrícula se ajuste de forma más dinámica al contenido.

La sintaxis de `minmax()` es la siguiente: `minmax(min, max)`, donde `min` es el tamaño mínimo de la pista y `max` es el tamaño máximo. Por ejemplo, `minmax(100px, 1fr)` especifica que la pista debe tener un tamaño mínimo de 100px y un tamaño máximo de 1fr.

Cuando se utiliza `minmax()` en una cuadrícula CSS Grid responsiva para dispositivos móviles, es común utilizarlo en combinación con otras propiedades de diseño responsivo, como `auto-fill` y `auto-fit`, para que las columnas se ajusten automáticamente al tamaño de la pantalla del dispositivo.

**Ejemplo**

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ejemplo de CSS Grid Responsivo con minmax()</title>
<style>
  .contenedor-cuadricula {
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
  <div class="contenedor-cuadricula">
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

**`min-content` y `max-content` en CSS**

En CSS, `min-content` y `max-content` son dos valores importantes que se utilizan para especificar el tamaño de un elemento basado en el contenido que contiene. Estos valores son particularmente útiles en contextos de diseño responsivo y flexible, donde deseas que los elementos se ajusten dinámicamente según su contenido.

**`min-content`**

El valor `min-content` indica que el tamaño del elemento debe ser el mínimo necesario para contener todo su contenido sin que haya desbordamiento (overflow). Es decir, el tamaño del elemento será el tamaño mínimo necesario para acomodar todo su contenido en una línea, sin forzar el contenido a desbordar o truncar.

Por ejemplo, si tienes un contenedor de texto que se ajusta según la longitud de la línea más larga de texto dentro de él, `min-content` asegura que el contenedor se ajustará exactamente a esa longitud sin agregar espacio adicional.

**`max-content`**

Por otro lado, `max-content` indica que el tamaño del elemento debe ser el máximo posible que permita mostrar todo su contenido en una sola línea, sin que haya desbordamiento. Esto significa que el elemento se expandirá tanto como sea necesario para acomodar su contenido sin desbordarlo.

Por ejemplo, si tienes un elemento que contiene una lista de ítems en una línea horizontal, `max-content` asegura que el contenedor se expandirá para mostrar todos los ítems en una sola fila, ajustándose al contenido máximo posible sin forzar un desbordamiento.

**Ejemplo**

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ejemplo de CSS Grid con min-content y max-content</title>
<style>
  .contenedor-cuadricula {
    display: grid;
    grid-template-columns: repeat(3, minmax(min-content, max-content));
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
  <div class="contenedor-cuadricula">
    <div class="item">Contenido corto</div>
    <div class="item">Este es un contenido mucho más largo que necesita más espacio</div>
    <div class="item">Contenido medio</div>
    <div class="item">Este es un contenido aún más largo que necesita incluso más espacio que el anterior</div>
    <div class="item">Texto</div>
    <div class="item">Un poco más de contenido</div>
  </div>
</body>
</html>
```

**Explicación**

En este ejemplo, estamos utilizando una cuadrícula de CSS con 3 columnas, donde cada columna se define con `minmax(min-content, max-content)`. Esto significa que cada columna tendrá un tamaño mínimo suficiente para acomodar el contenido sin desbordar (`min-content`) y un tamaño máximo que permita mostrar todo el contenido en una sola línea (`max-content`).

- **`min-content`**: El tamaño mínimo de la columna será el necesario para acomodar el contenido más pequeño posible sin desbordar.
- **`max-content`**: El tamaño máximo de la columna será el necesario para acomodar el contenido más grande posible en una sola línea sin desbordar.


En este ejemplo, `width: min-content;` o `width: max-content;` se aplicaría al contenedor `.contenedor`. Dependiendo del valor que elijas (`min-content` o `max-content`), el contenedor ajustará su ancho para adaptarse al contenido dentro de él de la manera descrita anteriormente.

**Uso en Diseño Responsivo y Flexible**

- **Responsividad:** Utilizar `min-content` y `max-content` es útil cuando deseas que los elementos se ajusten dinámicamente según el contenido, especialmente en diseños responsivos donde el tamaño de los elementos puede variar según la cantidad y el tipo de contenido que contienen.

- **Flexibilidad:** Estos valores son especialmente poderosos en combinación con CSS Grid y Flexbox, donde puedes especificar tamaños de columna o fila que se ajusten automáticamente al contenido utilizando `min-content` o `max-content`.

En resumen, `min-content` y `max-content` proporcionan un control preciso sobre cómo se debe ajustar el tamaño de un elemento según su contenido, lo que facilita la creación de diseños web flexibles y adaptables.

**`autofill` y `autofit` en CSS Grid**

**¿Qué es `autofill`?**

- `autofill` es una palabra clave en CSS Grid que se utiliza junto con la función `repeat()` para generar automáticamente tantas columnas o filas como sea posible en función del tamaño del contenedor y del tamaño especificado para cada pista.

**¿Qué es `autofit`?**

- `autofit` es otra palabra clave en CSS Grid que también se utiliza con la función `repeat()`. Similar a `autofill`, `autofit` genera automáticamente tantas columnas o filas como sea posible, pero a diferencia de `autofill`, si el contenido no es suficiente para llenar todas las pistas generadas, las pistas adicionales se reducirán a su tamaño mínimo.

**Diferencias entre `autofill` y `autofit`**

- La principal diferencia entre `autofill` y `autofit` radica en cómo manejan el espacio disponible cuando hay más pistas generadas de las que se necesitan para colocar el contenido. `autofill` mantiene todas las pistas generadas incluso si no se llenan completamente, mientras que `autofit` reduce las pistas adicionales a su tamaño mínimo si no se necesita más espacio.

**Ejemplo**

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Autofill y Autofit en CSS Grid</title>
<style>
  .contenedor-cuadricula {
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
  <div class="contenedor-cuadricula">
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

En este ejemplo, la cuadrícula se configura para tener columnas que tienen un tamaño mínimo de 100px y un tamaño máximo de 1fr. Utilizando `repeat(auto-fill, ...)`, la cuadrícula generará automáticamente tantas columnas como quepan en el contenedor, llenando el espacio disponible. Si el contenedor es lo suficientemente ancho, se generarán múltiples columnas de 100px, pero si el contenedor es estrecho, las columnas se expandirán para llenar el espacio disponible. La propiedad `grid-gap` se utiliza para agregar espacio entre las celdas de la cuadrícula.

---
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
