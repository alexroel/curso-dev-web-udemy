# Posicionamiento y Flexbox

1. [Introducción]
2. [Desbordamiento]
3. [Posicionamiento]
4. [Orden de apilamiento(z-index)](#orden-de-apilamientoz-index)
5. [Flexbox]
6. [Control de espacio de los elementos](#control-de-espacio-de-los-elementos)
7. [Posicionamiento de elementos con Flexbox](#posicionamiento-de-elementos-con-flexbox)
8. [Resumen]

---
## Introducción


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
## Flexbox
Flexbox es un sistema de diseño en CSS que permite una disposición flexible y eficiente de los elementos en una página web. Flexbox es ideal para diseñar layouts unidimensionales y es ampliamente utilizado debido a su capacidad de distribuir espacio entre los elementos y alinear estos de manera predecible cuando el tamaño del contenedor es desconocido o dinámico.

**1. `display: flex`**

La propiedad `display: flex` convierte a un contenedor en un contenedor flex, lo que significa que todos sus hijos directos se convierten en elementos flexibles.

*Ejemplo*

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de display: flex</title>
    <style>
        .flex-container {
            display: flex;
            border: 1px solid black;
        }
        .flex-item {
            background-color: lightcoral;
            margin: 10px;
            padding: 20px;
            color: white;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item">Item 1</div>
        <div class="flex-item">Item 2</div>
        <div class="flex-item">Item 3</div>
    </div>
</body>
</html>
```

**2. `flex-direction`**

La propiedad `flex-direction` define la dirección en la que los elementos flexibles se colocan dentro del contenedor. Los valores posibles son `row`, `row-reverse`, `column`, y `column-reverse`.

*Ejemplo*

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de flex-direction</title>
    <style>
        .flex-container {
            display: flex;
            flex-direction: column; /* Cambia esto para ver diferentes resultados */
            border: 1px solid black;
        }
        .flex-item {
            background-color: lightcoral;
            margin: 10px;
            padding: 20px;
            color: white;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item">Item 1</div>
        <div class="flex-item">Item 2</div>
        <div class="flex-item">Item 3</div>
    </div>
</body>
</html>
```

**3. `writing-mode`**

La propiedad `writing-mode` especifica la dirección en la que se escribe el contenido, lo que afecta el layout del texto y de los bloques en la página.

*Ejemplo*

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de writing-mode</title>
    <style>
        .flex-container {
            display: flex;
            writing-mode: vertical-rl; /* Cambia esto para ver diferentes resultados */
            border: 1px solid black;
        }
        .flex-item {
            background-color: lightcoral;
            margin: 10px;
            padding: 20px;
            color: white;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item">Item 1</div>
        <div class="flex-item">Item 2</div>
        <div class="flex-item">Item 3</div>
    </div>
</body>
</html>
```

**4. `flex-wrap`**

La propiedad `flex-wrap` especifica si los elementos flexibles deben colocarse en una sola línea o si pueden dividirse en múltiples líneas. Los valores posibles son `nowrap`, `wrap`, y `wrap-reverse`.

*Ejemplo*

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de flex-wrap</title>
    <style>
        .flex-container {
            display: flex;
            flex-wrap: wrap; /* Cambia esto para ver diferentes resultados */
            border: 1px solid black;
        }
        .flex-item {
            background-color: lightcoral;
            margin: 10px;
            padding: 20px;
            color: white;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item">Item 1</div>
        <div class="flex-item">Item 2</div>
        <div class="flex-item">Item 3</div>
        <div class="flex-item">Item 4</div>
        <div class="flex-item">Item 5</div>
    </div>
</body>
</html>
```

**5. `flex-flow`**

La propiedad `flex-flow` es una forma abreviada de definir tanto `flex-direction` como `flex-wrap`.

*Ejemplo*

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de flex-flow</title>
    <style>
        .flex-container {
            display: flex;
            flex-flow: row wrap; /* Cambia esto para ver diferentes resultados */
            border: 1px solid black;
        }
        .flex-item {
            background-color: lightcoral;
            margin: 10px;
            padding: 20px;
            color: white;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item">Item 1</div>
        <div class="flex-item">Item 2</div>
        <div class="flex-item">Item 3</div>
        <div class="flex-item">Item 4</div>
        <div class="flex-item">Item 5</div>
    </div>
</body>
</html>
```

*Conclusión*

Flexbox es una herramienta poderosa y versátil para crear layouts modernos y responsivos en CSS. Con propiedades como `flex-direction`, `flex-wrap`, `flex-flow`, y `writing-mode`, puedes controlar fácilmente la disposición y el flujo de los elementos en tu página. Experimentar con estas propiedades te permitirá aprovechar todo el potencial de Flexbox en tus proyectos web.

---
## Control de espacio de los elementos
Flexbox proporciona propiedades específicas para controlar cómo los elementos flexibles crecen, se encogen y ocupan espacio dentro de un contenedor flex. Estas propiedades son `flex-grow`, `flex-shrink` y `flex-basis`. También existe una propiedad abreviada llamada `flex` que combina estas tres.

**1. `flex-grow`**

La propiedad `flex-grow` define la capacidad de un elemento flexible para crecer si hay espacio adicional disponible. Un valor mayor indica que el elemento crecerá más en comparación con otros elementos.

*Ejemplo*

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de flex-grow</title>
    <style>
        .flex-container {
            display: flex;
            border: 1px solid black;
        }
        .flex-item {
            background-color: lightcoral;
            margin: 10px;
            padding: 20px;
            color: white;
            font-size: 20px;
        }
        .flex-item1 {
            flex-grow: 1;
        }
        .flex-item2 {
            flex-grow: 2;
        }
        .flex-item3 {
            flex-grow: 3;
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item flex-item1">Item 1</div>
        <div class="flex-item flex-item2">Item 2</div>
        <div class="flex-item flex-item3">Item 3</div>
    </div>
</body>
</html>
```

En este ejemplo, el primer elemento (`flex-item1`) crecerá una vez, el segundo (`flex-item2`) crecerá dos veces y el tercero (`flex-item3`) crecerá tres veces en comparación con los otros elementos si hay espacio disponible.

**2. `flex-shrink`**

La propiedad `flex-shrink` define la capacidad de un elemento flexible para encogerse si es necesario. Un valor mayor indica que el elemento se encogerá más en comparación con otros elementos.

*Ejemplo*

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de flex-shrink</title>
    <style>
        .flex-container {
            display: flex;
            width: 300px; /* Espacio restringido */
            border: 1px solid black;
        }
        .flex-item {
            background-color: lightcoral;
            margin: 10px;
            padding: 20px;
            color: white;
            font-size: 20px;
        }
        .flex-item1 {
            flex-shrink: 1;
        }
        .flex-item2 {
            flex-shrink: 2;
        }
        .flex-item3 {
            flex-shrink: 3;
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item flex-item1">Item 1</div>
        <div class="flex-item flex-item2">Item 2</div>
        <div class="flex-item flex-item3">Item 3</div>
    </div>
</body>
</html>
```

En este ejemplo, el primer elemento (`flex-item1`) se encogerá una vez, el segundo (`flex-item2`) se encogerá dos veces y el tercero (`flex-item3`) se encogerá tres veces en comparación con los otros elementos si el espacio es restringido.

**3. `flex-basis`**

La propiedad `flex-basis` define la base del tamaño de un elemento antes de que el espacio restante se distribuya. Especifica el tamaño inicial del elemento antes de que se aplique el crecimiento o encogimiento.

*Ejemplo*

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de flex-basis</title>
    <style>
        .flex-container {
            display: flex;
            border: 1px solid black;
        }
        .flex-item {
            background-color: lightcoral;
            margin: 10px;
            padding: 20px;
            color: white;
            font-size: 20px;
        }
        .flex-item1 {
            flex-basis: 100px;
        }
        .flex-item2 {
            flex-basis: 150px;
        }
        .flex-item3 {
            flex-basis: 200px;
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item flex-item1">Item 1</div>
        <div class="flex-item flex-item2">Item 2</div>
        <div class="flex-item flex-item3">Item 3</div>
    </div>
</body>
</html>
```

En este ejemplo, el primer elemento (`flex-item1`) tendrá una base de 100px, el segundo (`flex-item2`) tendrá una base de 150px y el tercero (`flex-item3`) tendrá una base de 200px.

**4. `flex` (Abreviación)**

La propiedad `flex` es una forma abreviada de definir `flex-grow`, `flex-shrink` y `flex-basis` en una sola declaración. La sintaxis es `flex: <flex-grow> <flex-shrink> <flex-basis>;`.

*Ejemplo*

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de flex</title>
    <style>
        .flex-container {
            display: flex;
            border: 1px solid black;
        }
        .flex-item {
            background-color: lightcoral;
            margin: 10px;
            padding: 20px;
            color: white;
            font-size: 20px;
        }
        .flex-item1 {
            flex: 1 1 100px; /* grow, shrink, basis */
        }
        .flex-item2 {
            flex: 2 2 150px;
        }
        .flex-item3 {
            flex: 3 3 200px;
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item flex-item1">Item 1</div>
        <div class="flex-item flex-item2">Item 2</div>
        <div class="flex-item flex-item3">Item 3</div>
    </div>
</body>
</html>
```

En este ejemplo, el primer elemento (`flex-item1`) tiene `flex: 1 1 100px`, lo que significa que crecerá y se encogerá una vez con una base de 100px. El segundo elemento (`flex-item2`) tiene `flex: 2 2 150px`, y el tercero (`flex-item3`) tiene `flex: 3 3 200px`.

*Conclusión*

El control del espacio de los elementos en Flexbox mediante `flex-grow`, `flex-shrink`, y `flex-basis` permite una gran flexibilidad y control en el diseño de layouts. La propiedad abreviada `flex` simplifica la definición de estas propiedades, haciendo que el código sea más limpio y fácil de mantener. Experimenta con estas propiedades para optimizar y adaptar tus diseños a diferentes escenarios y requisitos.

---
## Posicionamiento de elementos con Flexbox
Flexbox es una poderosa herramienta en CSS para posicionar y distribuir elementos dentro de un contenedor. Aquí exploraremos propiedades clave como `order`, `justify-content`, `gap`, `align-content`, `align-items`, y `align-self`, que te permiten controlar la disposición de los elementos de manera precisa.

**1. `order`**

La propiedad `order` permite cambiar el orden en que los elementos flexibles aparecen dentro del contenedor flex. El valor por defecto es `0`, y los elementos se ordenan en función de este valor de menor a mayor.

*Ejemplo*

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de order</title>
    <style>
        .flex-container {
            display: flex;
            border: 1px solid black;
        }
        .flex-item {
            background-color: lightcoral;
            margin: 10px;
            padding: 20px;
            color: white;
            font-size: 20px;
        }
        .flex-item1 {
            order: 3;
        }
        .flex-item2 {
            order: 1;
        }
        .flex-item3 {
            order: 2;
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item flex-item1">Item 1</div>
        <div class="flex-item flex-item2">Item 2</div>
        <div class="flex-item flex-item3">Item 3</div>
    </div>
</body>
</html>
```

En este ejemplo, `flex-item2` aparece primero, seguido de `flex-item3`, y luego `flex-item1` debido a los valores de `order` especificados.

**2. `justify-content`**

La propiedad `justify-content` alinea los elementos flexibles a lo largo del eje principal del contenedor. Los valores comunes incluyen `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, y `space-evenly`.

*Ejemplo*

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de justify-content</title>
    <style>
        .flex-container {
            display: flex;
            justify-content: space-between; /* Cambia esto para ver diferentes resultados */
            border: 1px solid black;
        }
        .flex-item {
            background-color: lightcoral;
            margin: 10px;
            padding: 20px;
            color: white;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item">Item 1</div>
        <div class="flex-item">Item 2</div>
        <div class="flex-item">Item 3</div>
    </div>
</body>
</html>
```

En este ejemplo, los elementos están distribuidos con `space-between`, dejando un espacio igual entre cada elemento.

**3. `gap`**

La propiedad `gap` define el espacio entre los elementos flexibles dentro del contenedor.

*Ejemplo*

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de gap</title>
    <style>
        .flex-container {
            display: flex;
            gap: 20px; /* Espacio entre los elementos */
            border: 1px solid black;
        }
        .flex-item {
            background-color: lightcoral;
            padding: 20px;
            color: white;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item">Item 1</div>
        <div class="flex-item">Item 2</div>
        <div class="flex-item">Item 3</div>
    </div>
</body>
</html>
```

En este ejemplo, hay un espacio de `20px` entre cada elemento flexible.

**4. `align-content`**

La propiedad `align-content` alinea las líneas de elementos flexibles en el contenedor cuando hay espacio adicional en el eje cruzado. Los valores comunes incluyen `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, y `stretch`.

#### Ejemplo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de align-content</title>
    <style>
        .flex-container {
            display: flex;
            flex-wrap: wrap; /* Permitir que los elementos se envuelvan */
            align-content: space-between; /* Cambia esto para ver diferentes resultados */
            border: 1px solid black;
            height: 200px;
        }
        .flex-item {
            background-color: lightcoral;
            margin: 10px;
            padding: 20px;
            color: white;
            font-size: 20px;
            flex: 1 1 100px; /* Crecimiento flexible */
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item">Item 1</div>
        <div class="flex-item">Item 2</div>
        <div class="flex-item">Item 3</div>
        <div class="flex-item">Item 4</div>
        <div class="flex-item">Item 5</div>
    </div>
</body>
</html>
```

En este ejemplo, los elementos están distribuidos con `space-between` en el eje cruzado.

**5. `align-items`**

La propiedad `align-items` alinea los elementos flexibles a lo largo del eje cruzado del contenedor. Los valores comunes incluyen `flex-start`, `flex-end`, `center`, `baseline`, y `stretch`.

*Ejemplo*

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de align-items</title>
    <style>
        .flex-container {
            display: flex;
            align-items: center; /* Cambia esto para ver diferentes resultados */
            border: 1px solid black;
            height: 200px;
        }
        .flex-item {
            background-color: lightcoral;
            margin: 10px;
            padding: 20px;
            color: white;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item">Item 1</div>
        <div class="flex-item">Item 2</div>
        <div class="flex-item">Item 3</div>
    </div>
</body>
</html>
```

En este ejemplo, los elementos están alineados en el centro del eje cruzado del contenedor.

**6. `align-self`**

La propiedad `align-self` permite anular la alineación establecida por `align-items` para elementos individuales. Los valores comunes incluyen `auto`, `flex-start`, `flex-end`, `center`, `baseline`, y `stretch`.

*Ejemplo*

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de align-self</title>
    <style>
        .flex-container {
            display: flex;
            border: 1px solid black;
            height: 200px;
        }
        .flex-item {
            background-color: lightcoral;
            margin: 10px;
            padding: 20px;
            color: white;
            font-size: 20px;
        }
        .flex-item1 {
            align-self: flex-start;
        }
        .flex-item2 {
            align-self: center;
        }
        .flex-item3 {
            align-self: flex-end;
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item flex-item1">Item 1</div>
        <div class="flex-item flex-item2">Item 2</div>
        <div class="flex-item flex-item3">Item 3</div>
    </div>
</body>
</html>
```

En este ejemplo, cada elemento está alineado individualmente según el valor de `align-self`.

*Recurso Adicional: Flexbox Froggy*

Para aprender y practicar Flexbox de manera interactiva, te recomiendo usar [Flexbox Froggy](https://flexboxfroggy.com/#es). Flexbox Froggy es un juego educativo que te ayuda a entender y aplicar las propiedades de Flexbox de una manera divertida y efectiva.

*Conclusión*

Flexbox es una herramienta esencial para diseñar layouts modernos y responsivos. Propiedades como `order`, `justify-content`, `gap`, `align-content`, `align-items`, y

---
## Resumen