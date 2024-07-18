# Posicionamiento de elementos

1. [Introducción](#introducción)
2. [Variables en CSS](#variables-en-css)
3. [Flotación en CSS](#flotación-en-css)
4. [Desbordamiento](#desbordamiento)
5. [Posicionamiento](#posicionamiento)
6. [Orden de apilamiento(z-index)](#orden-de-apilamientoz-index)
7. [Resumen](#resumen)

---
## Introducción

El posicionamiento de elementos en CSS es fundamental para crear diseños web efectivos y organizados. Entender cómo manipular y controlar la disposición de los elementos en una página te permitirá construir interfaces más funcionales y visualmente atractivas. Esta sección explora diversas técnicas y conceptos clave para gestionar el posicionamiento de elementos, incluyendo:

**Variables en CSS**

Las variables en CSS, también conocidas como Custom Properties, permiten almacenar valores que puedes reutilizar en todo tu código. Esto facilita la gestión de estilos, especialmente cuando se trata de modificar temas y colores de manera coherente a lo largo de una página. Las variables ayudan a mantener un código más limpio y fácil de mantener.

**Flotación en CSS**

La propiedad `float` en CSS permite que un elemento se alinee a la izquierda o derecha de su contenedor, haciendo que otros elementos fluyan alrededor de él. Aunque es una técnica clásica, sigue siendo útil para ciertos casos de diseño, como la creación de columnas o la alineación de imágenes y textos. En esta sección, veremos cómo utilizar `float` eficazmente y cómo manejar los problemas asociados con su uso.

**Desbordamiento**

El desbordamiento se refiere a cómo se maneja el contenido que excede el área de un contenedor. La propiedad `overflow` en CSS controla este comportamiento, permitiendo que el contenido adicional se oculte, se muestre con barras de desplazamiento o se ajuste de otras maneras. Entender cómo gestionar el desbordamiento es crucial para evitar problemas de diseño y mejorar la usabilidad de tu página.

**Posicionamiento**

El posicionamiento en CSS determina cómo se coloca un elemento dentro de su contenedor y en relación con otros elementos. CSS ofrece diferentes métodos de posicionamiento, como `static`, `relative`, `absolute`, `fixed` y `sticky`. Cada uno tiene su propio comportamiento y uso específico, y dominar estos métodos te permitirá tener un control preciso sobre la disposición de tus elementos.

**Orden de Apilamiento (z-index)**

El orden de apilamiento, gestionado mediante la propiedad `z-index`, define qué elementos se superponen en un diseño. Cuando los elementos se solapan, el `z-index` determina cuál elemento estará encima de otro. Esta propiedad es esencial para crear capas y organizar elementos visualmente cuando se utilizan técnicas de posicionamiento.

---
## Variables en CSS
Las variables en CSS, también conocidas como "Custom Properties", son una característica poderosa que permite almacenar valores que puedes reutilizar en varias partes de tu hoja de estilos. Esto hace que el código sea más limpio, mantenible y fácil de actualizar.

**¿Qué Son las Variables en CSS?**

Las variables en CSS permiten definir valores que se pueden utilizar en múltiples lugares de tu hoja de estilos. Son especialmente útiles para temas, colores, tamaños y cualquier valor que desees mantener consistente a lo largo de tu diseño.

**Sintaxis Básica**

Para definir una variable en CSS, utilizas la siguiente sintaxis:

```css
:root {
  --nombre-de-la-variable: valor;
}
```

Aquí, `:root` es un selector que se refiere al elemento raíz del documento, que en la mayoría de los casos es el `<html>`. Definir la variable en `:root` permite que esté disponible globalmente en todo el documento.

**Ejemplo de Definición y Uso de Variables**

```css
:root {
  --color-principal: #3498db;
  --fuente-principal: 'Arial', sans-serif;
  --espaciado: 16px;
}

body {
  font-family: var(--fuente-principal);
  color: var(--color-principal);
  margin: var(--espaciado);
}

h1 {
  color: var(--color-principal);
}
```

En el ejemplo anterior:

- `--color-principal`, `--fuente-principal`, y `--espaciado` son variables definidas.
- Se utilizan en las reglas CSS con la función `var()`.

**Ámbito y Herencia**

Las variables en CSS tienen un ámbito específico:

- **Global**: Si defines una variable en el selector `:root`, está disponible en todo el documento.
- **Local**: Si defines una variable dentro de un selector específico, como un elemento o una clase, la variable solo está disponible dentro de ese ámbito.

**Ejemplo de Ámbito Local**

```css
:root {
  --color-global: #2ecc71;
}

.container {
  --color-local: #e74c3c;
}

body {
  color: var(--color-global);
}

.container {
  color: var(--color-local); /* Solo afecta a elementos dentro de .container */
}
```

**Actualización de Variables**

Una de las grandes ventajas de las variables es la facilidad para actualizar valores globalmente. Solo necesitas cambiar el valor de la variable en un lugar, y el cambio se reflejará en todas las partes del CSS donde se utiliza esa variable.

**Ejemplo de Actualización de Variables**

```css
:root {
  --color-primario: #3498db;
}

/* Cambiar el color primario */
:root {
  --color-primario: #e74c3c;
}
```

Las variables en CSS proporcionan una manera eficiente y flexible de manejar estilos en tus hojas de estilo. Su capacidad para almacenar y reutilizar valores hace que tu código sea más limpio y fácil de mantener. Aprovecha esta característica para mejorar la consistencia y la escalabilidad de tus proyectos de diseño web.

---
## Flotación en CSS
La propiedad `float` en CSS es una técnica clásica para controlar el flujo de elementos en una página web, permitiendo que otros elementos fluyan alrededor de un elemento flotante. A pesar de que Flexbox y CSS Grid han tomado protagonismo en el diseño moderno, `float` sigue siendo útil en ciertos casos. En esta guía, exploraremos cómo utilizar `float` con un ejemplo práctico.

**¿Qué es la Propiedad `float`?**

La propiedad `float` permite que un elemento se desplace hacia la izquierda o la derecha dentro de su contenedor, haciendo que el texto y otros elementos fluyan alrededor de él. Es ampliamente utilizada para crear diseños de múltiples columnas, alinear imágenes y posicionar elementos en un contenedor.

*Sintaxis Básica*

```css
elemento {
  float: left; /* O 'right' */
}
```

*Ejemplo Práctico: Crear un Header con Elementos Flotantes*

Vamos a ver un ejemplo de cómo usar `float` para diseñar un `header` que tenga un título alineado a la izquierda y un menú de navegación alineado a la derecha.

**Código CSS**

```css
/* Estilo del header */
header {
    background-color: var(--color-secundario); /* Color de fondo del header */
    color: var(--color-fondo); /* Color del texto en el header */
    padding: 10px; /* Espaciado interno del header */
    height: 60px; /* Altura del header */
    width: 900px; /* Ancho del header */
    overflow: hidden; /* Para contener los elementos flotantes */
}

/* Estilo del título dentro del header */
header h1 {
    float: left; /* Flota el título a la izquierda */
    line-height: 40px; /* Ajusta la altura de línea para centrar verticalmente */
}

/* Estilo del menú de navegación dentro del header */
header nav {
    float: right; /* Flota el menú de navegación a la derecha */
    line-height: 40px; /* Ajusta la altura de línea para centrar verticalmente */
}
```

**Código HTML**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de Header</title>
    <style>
        :root {
            --color-secundario: #3498db; /* Color de fondo del header */
            --color-fondo: #fff; /* Color del texto en el header */
        }

        header {
            background-color: var(--color-secundario);
            color: var(--color-fondo);
            padding: 10px;
            height: 60px;
            width: 900px;
            overflow: hidden;
            position: fixed;
            z-index: 100;
        }

        header h1 {
            float: left;
            line-height: 40px;
        }

        header nav {
            float: right;
            line-height: 40px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Mi Sitio Web</h1>
        <nav>
            <a href="#">Inicio</a>
            <a href="#">Servicios</a>
            <a href="#">Contacto</a>
        </nav>
    </header>
    <main>
        <p>Contenido de la página...</p>
    </main>
</body>
</html>
```

**Elementos Flotantes**

- **`header h1`**: 
  - **`float: left`**: Hace que el título se alinee a la izquierda dentro del `header`. El `h1` se posicionará en la esquina izquierda, y el contenido que sigue (el menú de navegación) se alineará a la derecha.
  - **`line-height`**: Ajusta la altura de línea del título para centrarlo verticalmente dentro del `header`.

- **`header nav`**:
  - **`float: right`**: Hace que el menú de navegación se alinee a la derecha dentro del `header`. El menú se posicionará en la esquina derecha, mientras que el `h1` se mantiene a la izquierda.
  - **`line-height`**: Similar al título, ajusta la altura de línea del menú de navegación para centrarlo verticalmente.


La propiedad `float` sigue siendo una herramienta útil en CSS para alinear elementos y crear diseños básicos. Sin embargo, para layouts más complejos, considera usar Flexbox o CSS Grid. Entender cómo funciona `float` y cómo manejar problemas comunes te ayudará a crear diseños efectivos y mantener un código CSS limpio.


---
## Desbordamiento
El manejo del desbordamiento en CSS es crucial para el diseño y la usabilidad de un sitio web. En esta guía, cubriremos los conceptos de `overflow` y `text-overflow`, dos propiedades de CSS que controlan cómo se comporta el contenido cuando se sale del área asignada.

**1. Propiedad `overflow`**

La propiedad `overflow` de CSS se utiliza para controlar lo que sucede cuando el contenido de un elemento es demasiado grande para caber en el área asignada.

*Sintaxis*

```css
element {
  overflow: visible | hidden | scroll | auto;
}
```

**Valores**

- **visible**: El contenido desbordado es visible fuera del elemento. Este es el valor por defecto.
- **hidden**: El contenido desbordado es cortado, y no se muestra.
- **scroll**: Se añaden barras de desplazamiento (scrollbars) al elemento, permitiendo al usuario desplazarse para ver el contenido desbordado.
- **auto**: Se añaden barras de desplazamiento solo si el contenido está desbordado.

*Ejemplo*

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de overflow</title>
    <style>
        .overflow-visible {
            width: 200px;
            height: 100px;
            border: 1px solid black;
            overflow: visible;
        }
        .overflow-hidden {
            width: 200px;
            height: 100px;
            border: 1px solid black;
            overflow: hidden;
        }
        .overflow-scroll {
            width: 200px;
            height: 100px;
            border: 1px solid black;
            overflow: scroll;
        }
        .overflow-auto {
            width: 200px;
            height: 100px;
            border: 1px solid black;
            overflow: auto;
        }
    </style>
</head>
<body>
    <div class="overflow-visible">Este es un texto muy largo que no cabe en la caja definida y se muestra fuera de los límites.</div>
    <div class="overflow-hidden">Este es un texto muy largo que no cabe en la caja definida y se muestra fuera de los límites.</div>
    <div class="overflow-scroll">Este es un texto muy largo que no cabe en la caja definida y se muestra fuera de los límites.</div>
    <div class="overflow-auto">Este es un texto muy largo que no cabe en la caja definida y se muestra fuera de los límites.</div>
</body>
</html>
```

**2. Propiedad `text-overflow`**

La propiedad `text-overflow` de CSS se utiliza para especificar cómo debe mostrarse el contenido de texto que se desborda en un contenedor.

**Sintaxis**

```css
element {
  text-overflow: clip | ellipsis | string;
}
```

**Valores**

- **clip**: El contenido de texto desbordado es recortado.
- **ellipsis**: El contenido de texto desbordado se muestra con puntos suspensivos (`...`).
- **string**: Permite definir una cadena personalizada que se mostrará cuando el texto se desborde.

**Uso Común**

Para que `text-overflow` funcione, el contenedor debe tener:

- `white-space: nowrap;`
- `overflow: hidden;`
- `display: block` o `display: inline-block`

*Ejemplo*

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de text-overflow</title>
    <style>
        .text-clip {
            width: 200px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: clip;
            border: 1px solid black;
        }
        .text-ellipsis {
            width: 200px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <div class="text-clip">Este es un texto muy largo que no cabe en la caja definida.</div>
    <div class="text-ellipsis">Este es un texto muy largo que no cabe en la caja definida.</div>
</body>
</html>
```

**3. Combinación de `overflow` y `text-overflow`**

En muchos casos, es necesario combinar ambas propiedades para lograr un control completo sobre el contenido desbordado. Aquí hay un ejemplo de cómo hacerlo:

*Ejemplo*

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Combinación de overflow y text-overflow</title>
    <style>
        .overflow-combined {
            width: 200px;
            height: 50px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <div class="overflow-combined">Este es un texto muy largo que no cabe en la caja definida y se muestra con puntos suspensivos.</div>
</body>
</html>
```

**4. Casos Prácticos y Buenas Prácticas**

- **Listas de Productos**: Usar `overflow: hidden` y `text-overflow: ellipsis` en las descripciones de productos para mantener un diseño limpio y profesional.
- **Menús de Navegación**: Utilizar `overflow: auto` para permitir que los usuarios puedan desplazarse por menús que pueden contener muchos elementos.
- **Tarjetas de Información**: Emplear `text-overflow: ellipsis` en títulos y descripciones para evitar que textos largos distorsionen el diseño de la tarjeta.

**Conclusión**

El manejo adecuado del desbordamiento es esencial para asegurar que los diseños web sean tanto funcionales como estéticamente agradables. Las propiedades `overflow` y `text-overflow` de CSS ofrecen herramientas potentes para controlar cómo se presenta el contenido desbordado, permitiendo a los desarrolladores crear interfaces de usuario más limpias y fáciles de usar.

---
## Posicionamiento
El posicionamiento en CSS es fundamental para el diseño de layouts complejos y responsivos. Aquí exploraremos las diferentes propiedades de posición en CSS, con ejemplos prácticos para entender cómo funcionan.

**1. Posición por Defecto (Estática)**

Por defecto, todos los elementos en CSS tienen una posición `static`. Esto significa que se posicionan de acuerdo con el flujo normal del documento.

```html
<section>
  <div class="container">
    caja1
  </div>
</section>
```

```css
section{
  border: 3px solid;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
}

.container{
  background: aqua;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  position: static; /* Valor por defecto */
}
```

**2. Posición Absoluta y Relativa**

La posición `absolute` permite colocar un elemento en una posición específica dentro de su contenedor más cercano con posición relativa (`relative`), absoluta (`absolute`), o fija (`fixed`).

*Ejemplo: Posición Absoluta*

```css
section{
  border: 3px solid;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
}

.container{
  background: aqua;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
}
```

*Ejemplo: Posición Relativa y Absoluta*

```css
section{
  border: 3px solid;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  position: relative;
}

.container{
  background: aqua;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
```

**3. Uso de `inset`**

La propiedad `inset` es una forma abreviada de definir `top`, `right`, `bottom` y `left` simultáneamente.

*Ejemplo*

```css
section{
  border: 3px solid;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  position: relative;
}

.container{
  background: aqua;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  position: absolute;
  inset: 0;
  margin: auto;
}
```

**4. Posición Fija**

La posición `fixed` permite que un elemento se fije en la ventana gráfica (viewport) y permanezca en la misma posición incluso cuando se desplaza la página.

*Ejemplo*

```css
section{
  border: 3px solid;
  width: 200px;
  height: 700px;
  box-sizing: border-box;
}

.container{
  background: aqua;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  position: fixed;
  top: 10px;
  left: 10px;
}
```

**5. Posición Sticky**

La posición `sticky` permite que un elemento se comporte como `relative` hasta que su contenedor padre cruce un umbral específico, momento en el cual se comporta como `fixed`.

*Ejemplo*

```css
section{
  border: 3px solid;
  width: 200px;
  height: 700px;
  box-sizing: border-box;
}

.container{
  background: aqua;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  position: sticky;
  top: 10px;
}
```

**Conclusión**

Comprender y utilizar las diferentes propiedades de posicionamiento en CSS es esencial para crear diseños de página web que sean tanto visualmente atractivos como funcionales. Ya sea que necesites que un elemento se mueva con la página, permanezca fijo en la ventana gráfica, o se comporte de manera diferente en relación con su contenedor, CSS ofrece las herramientas necesarias para manejar todas estas situaciones.

---
## Orden de apilamiento(z-index)
La propiedad `z-index` en CSS controla el orden de apilamiento de elementos en la página web, es decir, qué elementos se sitúan delante o detrás de otros. Esta propiedad es especialmente útil cuando trabajas con elementos superpuestos y necesitas controlar su visibilidad relativa.

**1. Conceptos Básicos de `z-index`**

El `z-index` solo funciona en elementos posicionados (`position: relative`, `position: absolute`, `position: fixed`, `position: sticky`). Los elementos con `position: static` (por defecto) no se ven afectados por `z-index`.

*Sintaxis*

```css
element {
  z-index: valor;
}
```

*Valores*

- **Auto**: El elemento toma el valor de `z-index` de su contenedor apilado padre.
- **Número positivo o negativo**: Determina el orden de apilamiento relativo de los elementos. Un valor mayor significa que el elemento se apila delante de los elementos con valores menores.

**2. Ejemplo Práctico**

Supongamos que tenemos tres cajas que queremos superponer en un orden específico:

*HTML*

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de z-index</title>
    <style>
        .box {
            width: 100px;
            height: 100px;
            position: absolute;
            color: white;
            font-size: 20px;
        }
        .box1 {
            background-color: red;
            top: 20px;
            left: 20px;
            z-index: 1;
        }
        .box2 {
            background-color: green;
            top: 40px;
            left: 40px;
            z-index: 2;
        }
        .box3 {
            background-color: blue;
            top: 60px;
            left: 60px;
            z-index: 3;
        }
    </style>
</head>
<body>
    <div class="box box1">1</div>
    <div class="box box2">2</div>
    <div class="box box3">3</div>
</body>
</html>
```

En este ejemplo, la caja roja (`box1`) tiene un `z-index` de 1, la caja verde (`box2`) tiene un `z-index` de 2, y la caja azul (`box3`) tiene un `z-index` de 3. Como resultado, la caja azul se apila encima de las otras dos, seguida por la verde y luego la roja.

**3. Contextos de Apilamiento**

Un nuevo contexto de apilamiento se crea en los siguientes casos:

- Un elemento con una posición distinta de `static` y con un `z-index` distinto de `auto`.
- Un elemento con `opacity` menor a 1.
- Un elemento con transformaciones aplicadas (`transform`).
- Elementos con ciertas propiedades CSS como `filter`, `flex`, `grid`, `clip-path`, etc.

*Ejemplo de Contexto de Apilamiento*

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de Contexto de Apilamiento</title>
    <style>
        .parent {
            position: relative;
            z-index: 10;
            width: 200px;
            height: 200px;
            background-color: lightgray;
        }
        .child1 {
            position: absolute;
            z-index: 1;
            width: 100px;
            height: 100px;
            background-color: red;
            top: 20px;
            left: 20px;
        }
        .child2 {
            position: absolute;
            z-index: 2;
            width: 100px;
            height: 100px;
            background-color: green;
            top: 40px;
            left: 40px;
        }
    </style>
</head>
<body>
    <div class="parent">
        <div class="child1"></div>
        <div class="child2"></div>
    </div>
</body>
</html>
```

En este ejemplo, el `div` con la clase `parent` tiene un `z-index` de 10, creando un nuevo contexto de apilamiento. Dentro de este contexto, `child2` (verde) se apilará por encima de `child1` (rojo) debido a sus `z-index` respectivos.

**4. Buenas Prácticas**

- **Evitar el uso excesivo de `z-index`**: Utilizar `z-index` solo cuando sea necesario para evitar complicaciones en la gestión del orden de apilamiento.
- **Comprender los contextos de apilamiento**: Familiarizarse con cómo se crean y gestionan los contextos de apilamiento para evitar comportamientos inesperados.
- **Documentar los valores de `z-index`**: Mantener un registro claro de los valores de `z-index` utilizados en el proyecto para facilitar el mantenimiento y la depuración.

*Conclusión*

La propiedad `z-index` es una herramienta poderosa en CSS para controlar el orden de apilamiento de los elementos. Entender su funcionamiento y los contextos de apilamiento es crucial para diseñar interfaces limpias y funcionales. Con la práctica y la aplicación cuidadosa, `z-index` puede mejorar significativamente la presentación y la interacción del usuario en una página web.


---
## Resumen
En la sección sobre **Posicionamiento de Elementos en CSS**, se abordaron varios conceptos clave:

1. **Variables en CSS**: Se aprendió a utilizar variables para almacenar y reutilizar valores de estilo, facilitando la gestión de temas y colores en el diseño.

2. **Flotación en CSS**: Se exploró cómo la propiedad `float` permitía alinear elementos a la izquierda o derecha, permitiendo que otros elementos fluyeran a su alrededor, y se manejaron los problemas asociados.

3. **Desbordamiento**: Se entendió cómo controlar el contenido que excedía el área de un contenedor mediante la propiedad `overflow`, para evitar problemas de diseño.

4. **Posicionamiento**: Se estudiaron los diferentes métodos de posicionamiento (`static`, `relative`, `absolute`, `fixed`, `sticky`) para colocar elementos dentro de su contenedor y en relación con otros elementos.

5. **Orden de Apilamiento (z-index)**: Se gestionó el orden en el que los elementos se superponían utilizando la propiedad `z-index`, creando capas visuales efectivas en el diseño.


