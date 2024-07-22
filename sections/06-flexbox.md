# CSS Flexbox 

1. [Introducción]
2. [Introducción de flexbox](#introducción-de-flexbox)
3. [Dirección de los elementos flexibles](#dirección-de-los-elementos-flexibles)
4. [Envolvimiento de los Elementos Flexibles](#envolvimiento-de-los-elementos-flexibles)
5. [Flujo Combinado](#flujo-combinado)
6. [Alineamientos en el contenedor](#alineamientos-en-el-contenedor)
7. [Alineamientos en los elementos](#alineamientos-en-los-elementos)
8. [Control de Espacio de los Elementos](#control-de-espacio-de-los-elementos)
9. [Resumen](#resumen)

---
## Introducción
## Introducción de flexbox

**Definición y Propósito**

**Flexbox** (o **Flexible Box Layout**) es un modelo de diseño de CSS que permite la creación de layouts más eficientes y flexibles. Su principal objetivo es distribuir espacio a lo largo de un contenedor y alinear los elementos dentro de este de una manera que responda a los diferentes tamaños de pantalla y dispositivos.

**Propósito:**
- **Disposición adaptable:** Flexbox facilita la creación de layouts que se adapten a diferentes tamaños de pantalla sin necesidad de utilizar floats o posiciones absolutas.
- **Alineación y distribución:** Proporciona herramientas para alinear y distribuir el espacio entre los elementos de un contenedor de manera uniforme.
- **Orden y direccionalidad:** Permite cambiar el orden visual de los elementos y la dirección en la que se distribuyen, ya sea horizontal o verticalmente.

**Ventajas del uso de Flexbox**

1. **Simplicidad en la alineación:** Flexbox ofrece una manera fácil de alinear elementos horizontal y verticalmente, eliminando la necesidad de hackeos complejos con margenes y posiciones.
2. **Espacio adaptable:** Los elementos pueden crecer y encogerse para llenar el espacio disponible en el contenedor, mejorando la capacidad de respuesta.
3. **Cambio de orden:** Flexbox permite cambiar el orden de los elementos dentro del contenedor sin modificar el HTML.
4. **Diseños complejos simplificados:** Facilita la creación de layouts complejos como centrar elementos en ambas direcciones o distribuir espacio de manera equitativa entre elementos.
5. **Menos dependencia de floats:** Evita problemas comunes con los floats y el clearfix, reduciendo la complejidad del CSS.

**Propiedades Básicas de Flexbox**

**display: flex**

La propiedad `display: flex` se utiliza para convertir un elemento contenedor en un contenedor flexible. Esto significa que los elementos hijos de este contenedor se comportarán de acuerdo a las reglas de Flexbox.

```css
.contenedor {
  display: flex;
}
```

**Convertir un contenedor en flex**

Para convertir un contenedor en un contenedor flex, simplemente aplicamos la propiedad `display: flex` al contenedor. Una vez hecho esto, todos los elementos hijos dentro del contenedor se convierten en elementos flexibles que pueden ser manipulados utilizando las propiedades de Flexbox.

**Ejemplo práctico:**

Supongamos que tenemos el siguiente HTML:

```html
<div class="contenedor">
  <div class="elemento">Item 1</div>
  <div class="elemento">Item 2</div>
  <div class="elemento">Item 3</div>
</div>
```

Para convertir este contenedor en un contenedor flex y alinear los elementos hijos, aplicamos el CSS siguiente:

```css
.contenedor {
  display: flex;
}

.elemento {
  background-color: lightblue;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
}
```

En este ejemplo:

- El contenedor `.contenedor` se ha convertido en un contenedor flex.
- Los elementos `.elemento` se distribuyen dentro del contenedor y ocupan el espacio disponible de manera flexible.
- La propiedad `flex: 1` hace que cada elemento crezca y ocupe el mismo espacio disponible.

Este es un ejemplo básico de cómo se puede utilizar Flexbox para crear un diseño flexible y adaptable. Hay muchas más propiedades y técnicas disponibles en Flexbox para controlar la alineación, el orden, el tamaño y la dirección de los elementos, lo que hace que sea una herramienta muy poderosa para el diseño web.

---
## Dirección de los elementos flexibles

La propiedad `flex-direction` define la dirección en la que los elementos hijos de un contenedor flexible (`contenedor`) se organizan. Dependiendo del valor que se le asigne, los elementos se pueden disponer en una fila o columna, y esa disposición puede ser directa o inversa.

**Valores de `flex-direction`**

1. **`row`**: Los elementos flexibles se disponen en una fila, de izquierda a derecha (en un documento con escritura de izquierda a derecha).

2. **`row-reverse`**: Los elementos flexibles se disponen en una fila, pero en orden inverso, de derecha a izquierda (en un documento con escritura de izquierda a derecha).

3. **`column`**: Los elementos flexibles se disponen en una columna, de arriba hacia abajo.

4. **`column-reverse`**: Los elementos flexibles se disponen en una columna, pero en orden inverso, de abajo hacia arriba.

Ejemplos

Supongamos que tenemos el siguiente HTML:

```html
<div class="contenedor">
  <div class="elemento">1</div>
  <div class="elemento">2</div>
  <div class="elemento">3</div>
</div>
```

**1. `flex-direction: row`**

```css
.contenedor {
  display: flex;
  flex-direction: row;
}
```

**Resultado**: Los elementos se organizan en una fila, de izquierda a derecha.
```
1 2 3
```

**2. `flex-direction: row-reverse`**

```css
.contenedor {
  display: flex;
  flex-direction: row-reverse;
}
```

**Resultado**: Los elementos se organizan en una fila, pero en orden inverso, de derecha a izquierda.
```
3 2 1
```

**3. `flex-direction: column`**

```css
.contenedor {
  display: flex;
  flex-direction: column;
}
```

**Resultado**: Los elementos se organizan en una columna, de arriba hacia abajo.
```
1
2
3
```

**4. `flex-direction: column-reverse`**

```css
.contenedor {
  display: flex;
  flex-direction: column-reverse;
}
```

**Resultado**: Los elementos se organizan en una columna, pero en orden inverso, de abajo hacia arriba.
```
3
2
1
```

**Ejemplo Completo**

Aquí tienes un ejemplo completo con un poco de estilo adicional para ver mejor los cambios:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .contenedor {
      display: flex;
      flex-direction: row;
      width: 200px;
      height: 200px;
      border: 1px solid black;
      margin-bottom: 20px;
    }
    .elemento {
      background-color: lightblue;
      padding: 10px;
      border: 1px solid navy;
    }
  </style>
  <title>Flex Direction</title>
</head>
<body>
  <div class="contenedor">
    <div class="elemento">1</div>
    <div class="elemento">2</div>
    <div class="elemento">3</div>
  </div>
  </div>
</body>
</html>
```

Este código HTML y CSS demostrará los diferentes efectos de la propiedad `flex-direction` sobre los elementos flexibles. Puedes copiar y pegar este código en un archivo HTML y abrirlo en tu navegador para ver los resultados.

Espero que esta explicación te haya sido útil. Si tienes más preguntas o necesitas más detalles, no dudes en preguntar.

---
## Envolvimiento de los Elementos Flexibles

Cuando trabajamos con flexbox, podemos controlar cómo se comportan los elementos flexibles cuando el contenedor no tiene suficiente espacio para acomodarlos en una sola línea. Esta propiedad es gestionada por la propiedad `flex-wrap`.

**Propiedad `flex-wrap`**

La propiedad `flex-wrap` define si los elementos flexibles deben mantenerse en una sola línea o pueden romperse en varias líneas. Esto es particularmente útil para layouts responsivos y adaptativos.

**Valores:**

1. **nowrap**: Los elementos flexibles se mantendrán en una sola línea. Si no hay suficiente espacio, los elementos se encogerán para ajustarse al contenedor.
2. **wrap**: Los elementos flexibles se dividirán en varias líneas si es necesario. Los elementos adicionales se envolverán a la siguiente línea.
3. **wrap-reverse**: Similar a `wrap`, pero los elementos adicionales se envolverán en la dirección opuesta (de abajo hacia arriba en lugar de de arriba hacia abajo).

Ejemplo:

Vamos a ver un ejemplo práctico donde aplicamos `flex-wrap` en un contenedor con varios elementos.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flex Wrap Example</title>
    <style>
        .contenedor {
            display: flex;
            flex-wrap: wrap; /* Cambia a nowrap o wrap-reverse para ver la diferencia */
            background-color: lightgrey;
            padding: 10px;
        }

        .elemento {
            background-color: cornflowerblue;
            color: white;
            width: 150px;
            margin: 10px;
            text-align: center;
            line-height: 75px;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="contenedor">
        <div class="elemento">1</div>
        <div class="elemento">2</div>
        <div class="elemento">3</div>
        <div class="elemento">4</div>
        <div class="elemento">5</div>
        <div class="elemento">6</div>
    </div>
</body>
</html>
```

- **`.contenedor`**: Este es el contenedor flexible al que aplicamos `display: flex` y `flex-wrap: wrap`.
  - `display: flex`: Hace que los elementos hijos se comporten como elementos flexibles.
  - `flex-wrap: wrap`: Permite que los elementos se envuelvan a la siguiente línea si no hay suficiente espacio en la línea actual.

- **`.elemento`**: Estos son los elementos flexibles dentro del contenedor. Cada uno tiene un ancho fijo (`width: 150px`) y un margen (`margin: 10px`), lo que puede hacer que no quepan todos en una sola línea dependiendo del ancho del contenedor.

En este ejemplo, si el contenedor tiene suficiente ancho, todos los elementos se mantendrán en una sola línea. Si el ancho del contenedor es menor y no puede acomodar todos los elementos en una sola línea, los elementos se envolverán a la siguiente línea debido a la propiedad `flex-wrap: wrap`.

Puedes cambiar `flex-wrap: wrap` por `flex-wrap: nowrap` o `flex-wrap: wrap-reverse` para ver cómo cambia el comportamiento:

- **`flex-wrap: nowrap`**: Todos los elementos se mantendrán en una sola línea, y se reducirán en tamaño si es necesario para caber.
- **`flex-wrap: wrap-reverse`**: Los elementos se envolverán a la siguiente línea, pero comenzarán desde abajo en lugar de desde arriba.

---
## Flujo Combinado

El flujo combinado en CSS Flexbox se refiere a la combinación de las propiedades `flex-direction` y `flex-wrap` mediante la propiedad abreviada `flex-flow`. Estas propiedades controlan la dirección y el comportamiento de los elementos flexibles (flex items) dentro de un contenedor flexible (flex container).

**`flex-flow`**

La propiedad `flex-flow` es una propiedad abreviada que permite establecer simultáneamente `flex-direction` y `flex-wrap`. Esto hace que sea más sencillo y compacto definir ambos aspectos del comportamiento del contenedor flexible en una sola línea.

**Sintaxis:**
```css
flex-flow: <flex-direction> <flex-wrap>;
```

**Valores de `flex-direction`:**

- `row`: Los elementos se colocan en una fila horizontal de izquierda a derecha.
- `row-reverse`: Los elementos se colocan en una fila horizontal de derecha a izquierda.
- `column`: Los elementos se colocan en una columna vertical de arriba hacia abajo.
- `column-reverse`: Los elementos se colocan en una columna vertical de abajo hacia arriba.

**Valores de `flex-wrap`:**

- `nowrap`: Los elementos se colocan en una sola línea, sin permitir que se envuelvan (comportamiento por defecto).
- `wrap`: Los elementos se envuelven en múltiples líneas si es necesario.
- `wrap-reverse`: Los elementos se envuelven en múltiples líneas, pero en orden inverso.

**Ejemplo**

Vamos a ver un ejemplo práctico que ilustra cómo usar la propiedad `flex-flow` para combinar `flex-direction` y `flex-wrap`.

**HTML:**
```html
<div class="contenedor">
  <div class="elemento">1</div>
  <div class="elemento">2</div>
  <div class="elemento">3</div>
  <div class="elemento">4</div>
  <div class="elemento">5</div>
  <div class="elemento">6</div>
</div>
```

**CSS:**
```css
.contenedor {
  display: flex;
  flex-flow: row wrap; /* Los elementos se colocarán en una fila y se envolverán en múltiples líneas si es necesario */
  gap: 10px; /* Espacio entre los elementos */
}

.elemento {
  background-color: lightblue;
  padding: 20px;
  border: 1px solid #ccc;
  flex: 1 1 100px; /* Los elementos serán flexibles y se ajustarán al espacio disponible */
}
```

En este ejemplo, la clase `contenedor` se define como un contenedor flexible con `display: flex`. Luego, se usa `flex-flow: row wrap` para especificar que los elementos hijos (`elemento`) deben colocarse en una fila y, si es necesario, se envolverán en múltiples líneas.

**Resultado:**

- Si el ancho del contenedor es suficientemente amplio, todos los elementos se colocarán en una sola fila.
- Si el contenedor no es lo suficientemente ancho, los elementos se envolverán en la siguiente línea, ajustándose al espacio disponible.

Este es un ejemplo básico, pero `flex-flow` se puede utilizar en combinación con otras propiedades de Flexbox como `justify-content`, `align-items`, y `align-content` para crear diseños más complejos y adaptables.

---
## Alineamientos en el contenedor

**1. `justify-content`**

La propiedad `justify-content` en Flexbox controla la alineación de los elementos flexibles a lo largo del eje principal del contenedor. Esta propiedad no afecta a los elementos en una sola línea, pero sí controla cómo se distribuyen los elementos a lo largo del eje principal si hay espacio adicional o si los elementos son más pequeños que el contenedor.

**Valores de `justify-content`:**
- `flex-start`: Los elementos se alinean al principio del contenedor.
- `flex-end`: Los elementos se alinean al final del contenedor.
- `center`: Los elementos se alinean en el centro del contenedor.
- `space-between`: Los elementos se distribuyen de manera uniforme en el contenedor; el primer elemento está al principio y el último al final.
- `space-around`: Los elementos se distribuyen de manera uniforme con espacio adicional alrededor de cada elemento.
- `space-evenly`: Los elementos se distribuyen de manera uniforme con espacio adicional antes del primer elemento y después del último elemento.

**Ejemplo**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de justify-content</title>
    <style>
        .contenedor {
            display: flex;
            justify-content: space-between; /* Cambia esto para ver diferentes resultados */
            height: 200px;
            background-color: #f0f0f0;
        }
        .elemento {
            width: 100px;
            height: 100px;
            background-color: lightcoral;
            margin: 10px;
            line-height: 100px;
            text-align: center;
            color: white;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="contenedor">
        <div class="elemento">1</div>
        <div class="elemento">2</div>
        <div class="elemento">3</div>
    </div>
</body>
</html>
```

En este ejemplo, `justify-content: space-between;` distribuye los elementos `elemento` de manera uniforme en el contenedor `contenedor`, con espacio entre cada elemento y alineando el primero al principio y el último al final del contenedor.

**2. `align-content`**

La propiedad `align-content` controla la alineación de las líneas de elementos flexibles dentro del contenedor cuando hay espacio adicional en el eje cruzado (cuando los elementos se distribuyen en varias líneas).

**Valores de `align-content`:**
- `flex-start`: Las líneas de elementos se alinean al inicio del contenedor.
- `flex-end`: Las líneas de elementos se alinean al final del contenedor.
- `center`: Las líneas de elementos se alinean en el centro del contenedor.
- `space-between`: Las líneas de elementos se distribuyen de manera uniforme en el contenedor; la primera línea está al inicio y la última al final.
- `space-around`: Las líneas de elementos se distribuyen de manera uniforme con espacio adicional alrededor de cada línea.
- `stretch`: Las líneas de elementos se estiran para llenar el contenedor.

**Ejemplo:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de align-content</title>
    <style>
        .contenedor {
            display: flex;
            flex-wrap: wrap; /* Permitir que los elementos se envuelvan */
            align-content: space-between; /* Cambia esto para ver diferentes resultados */
            height: 300px;
            background-color: #f0f0f0;
        }
        .elemento {
            width: 100px;
            height: 100px;
            background-color: lightcoral;
            margin: 10px;
            line-height: 100px;
            text-align: center;
            color: white;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="contenedor">
        <div class="elemento">1</div>
        <div class="elemento">2</div>
        <div class="elemento">3</div>
        <div class="elemento">4</div>
        <div class="elemento">5</div>
        <div class="elemento">6</div>
    </div>
</body>
</html>
```

En este ejemplo, `align-content: space-between;` distribuye las líneas de elementos de manera uniforme en el contenedor `contenedor`, con espacio entre cada línea y alineando la primera línea al inicio y la última al final del contenedor.

**3. `align-items`**

La propiedad `align-items` controla la alineación de los elementos flexibles a lo largo del eje cruzado del contenedor.

**Valores de `align-items`:**
- `flex-start`: Los elementos se alinean al inicio del contenedor a lo largo del eje cruzado.
- `flex-end`: Los elementos se alinean al final del contenedor a lo largo del eje cruzado.
- `center`: Los elementos se alinean en el centro del contenedor a lo largo del eje cruzado.
- `baseline`: Los elementos se alinean según la línea base (línea de texto) del primer elemento.
- `stretch`: Los elementos se estiran para llenar el contenedor a lo largo del eje cruzado.

**Ejemplo:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de align-items</title>
    <style>
        .contenedor {
            display: flex;
            align-items: center; /* Cambia esto para ver diferentes resultados */
            height: 300px;
            background-color: #f0f0f0;
        }
        .elemento {
            width: 100px;
            height: 100px;
            background-color: lightcoral;
            margin: 10px;
            line-height: 100px;
            text-align: center;
            color: white;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="contenedor">
        <div class="elemento">1</div>
        <div class="elemento">2</div>
        <div class="elemento">3</div>
    </div>
</body>
</html>
```

En este ejemplo, `align-items: center;` alinea los elementos `elemento` en el centro del contenedor `contenedor` a lo largo del eje cruzado.

**Uso de `gap` en Flexbox**

"gap" en Flexbox se refiere al espacio entre los elementos hijos dentro de un contenedor flexible. Este espacio se puede gestionar utilizando la propiedad `gap` o sus equivalentes más antiguos (`gap`, `row-gap`, y `column-gap`) en el contexto de Flexbox y CSS Grid, proporcionando un método consistente para crear márgenes entre elementos en un diseño flexible.

La propiedad `gap` se introdujo como parte de CSS Grid y, posteriormente, se extendió para su uso en Flexbox para gestionar el espacio entre elementos. Es una abreviatura conveniente que combina `row-gap` y `column-gap` en un solo valor.

**Sintaxis:**

```css
.container {
    display: flex;
    gap: <row-gap> <column-gap>;
}
```

- `<row-gap>`: Especifica el espacio entre filas de elementos.
- `<column-gap>`: Especifica el espacio entre columnas de elementos.

Ejemplo:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de gap en Flexbox</title>
    <style>
        .contenedor {
            display: flex;
            column-gap: 20px; /* Espacio entre elementos */
        }
        .elemento {
            width: 100px;
            height: 100px;
            background-color: lightcoral;
            margin: 10px;
            line-height: 100px;
            text-align: center;
            color: white;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="contenedor">
        <div class="elemento">1</div>
        <div class="elemento">2</div>
        <div class="elemento">3</div>
    </div>
</body>
</html>
```

En este ejemplo:
- `gap: 20px;` establece un espacio de 20 píxeles entre cada elemento en el contenedor `contenedor`.
- `justify-content: space-between;` distribuye el espacio sobrante entre los elementos, lo que se combina con `gap` para crear un diseño equilibrado con espacios uniformes entre los elementos.

**Compatibilidad y Consideraciones**

- **Compatibilidad:** La propiedad `gap` en Flexbox tiene un buen soporte en navegadores modernos. Para navegadores más antiguos, es recomendable usar las propiedades separadas `row-gap` y `column-gap` como alternativa.
  
- **Especificidad:** `gap` en Flexbox es más simple y compacto que el manejo de márgenes o padding para lograr el mismo efecto, reduciendo la complejidad del código CSS y mejorando la legibilidad.
## Alineamientos en los elementos

**`align-self`**

La propiedad `align-self` en Flexbox permite alinear individualmente cada elemento flexible dentro del contenedor flex a lo largo del eje cruzado, anulando la alineación establecida por `align-items` en el contenedor.

**Valores de `align-self`:**
- `auto`: El elemento usa la alineación definida por `align-items` en el contenedor.
- `flex-start`: Alinea el elemento al principio del eje cruzado.
- `flex-end`: Alinea el elemento al final del eje cruzado.
- `center`: Alinea el elemento en el centro del eje cruzado.
- `baseline`: Alinea el elemento en la línea base del texto.
- `stretch`: Estira el elemento para llenar el contenedor en el eje cruzado.

**Ejemplo de `align-self`:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de align-self</title>
    <style>
        .contenedor {
            display: flex;
            height: 300px;
            align-items: flex-start; /* Alineación por defecto */
        }
        .elemento {
            width: 100px;
            padding: 20px;
            margin: 10px;
            background-color: lightcoral;
            color: white;
            font-size: 18px;
        }
        .elemento1 {
            align-self: start; /* Alinea este elemento al inicio */
        }
        .elemento2 {
            align-self: center; /* Alinea este elemento al centro */
        }
        .elemento3 {
            align-self: end; /* Alinea este elemento al final */
        }
    </style>
</head>
<body>
    <div class="contenedor">
        <div class="elemento elemento1">Item 1</div>
        <div class="elemento elemento2">Item 2</div>
        <div class="elemento elemento3">Item 3</div>
    </div>
</body>
</html>
```

En este ejemplo:
- `align-items: flex-start;` alinea todos los elementos al principio del eje cruzado por defecto.
- `.elemento1`, `.elemento2`, y `.elemento3` tienen diferentes valores de `align-self`, lo que les permite alinearse individualmente según su valor especificado (`flex-start`, `center`, `flex-end`).

**2. `order`**

La propiedad `order` en Flexbox define el orden en que los elementos flexibles aparecen dentro del contenedor, modificando el orden visual sin cambiar el orden del código HTML.

**Valores de `order`:**
- Un número entero que especifica el orden relativo del elemento. El valor predeterminado es `0`.
- Los elementos se ordenan de menor a mayor valor de `order`. Los elementos con un valor menor de `order` aparecen antes en el orden visual.

**Ejemplo:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de order</title>
    <style>
        .contenedor {
            display: flex;
        }
        .elemento {
            width: 100px;
            padding: 20px;
            margin: 10px;
            background-color: lightcoral;
            color: white;
            font-size: 18px;
        }
        .elemento1 {
            order: 2; /* Aparece tercero */
        }
        .elemento2 {
            order: 1; /* Aparece primero */
        }
        .elemento3 {
            order: 3; /* Aparece segundo */
        }
    </style>
</head>
<body>
    <div class="contenedor">
        <div class="elemento elemento1">Item 1</div>
        <div class="elemento elemento2">Item 2</div>
        <div class="elemento elemento3">Item 3</div>
    </div>
</body>
</html>
```

En este ejemplo:
- Los elementos `.elemento2` tienen `order: 1`, `.elemento3` tiene `order: 3`, y `.elemento1` tiene `order: 2`. Esto hace que los elementos se muestren en el orden: `elemento2`, `elemento3`, `elemento1`.

---
## Control de Espacio de los Elementos

**`flex-grow`**

**Definición:** La propiedad `flex-grow` define la capacidad de un elemento flex para crecer en relación a los otros elementos flex en el mismo contenedor. Si hay espacio extra disponible en el contenedor flex, los elementos con un valor de `flex-grow` mayor ocuparán más de ese espacio adicional.

**Sintaxis:**
```css
.elemento {
  flex-grow: 1; /* El valor puede ser cualquier número no negativo */
}
```

**Ejemplo Práctico:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo de flex-grow</title>
  <style>
    .contenedor {
      display: flex;
      width: 100%;
      height: 100px;
      background-color: lightgray;
    }
    .elemento {
      background-color: cornflowerblue;
      color: white;
      padding: 10px;
      text-align: center;
    }
    .grow1 {
      flex-grow: 1;
    }
    .grow2 {
      flex-grow: 2;
    }
  </style>
</head>
<body>
  <div class="contenedor">
    <div class="elemento grow1">Grow 1</div>
    <div class="elemento grow2">Grow 2</div>
  </div>
</body>
</html>
```

En este ejemplo, el segundo elemento (`grow2`) crecerá el doble del espacio disponible en comparación con el primer elemento (`grow1`).

**`flex-shrink`**

**Definición:** La propiedad `flex-shrink` define la capacidad de un elemento flex para encogerse si es necesario para evitar que el contenedor flex desborde. Si el tamaño total de los elementos flex es mayor que el tamaño del contenedor, los elementos con un valor de `flex-shrink` mayor se encogerán más.

**Sintaxis:**
```css
.elemento {
  flex-shrink: 1; /* El valor puede ser cualquier número no negativo */
}
```

**Ejemplo Práctico:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo de flex-shrink</title>
  <style>
    .contenedor {
      display: flex;
      width: 300px;
      height: 100px;
      background-color: lightgray;
    }
    .elemento {
      background-color: cornflowerblue;
      color: white;
      padding: 10px;
      width: 200px;
      text-align: center;
    }
    .shrink1 {
      flex-shrink: 1;
    }
    .shrink2 {
      flex-shrink: 2;
    }
  </style>
</head>
<body>
  <div class="contenedor">
    <div class="elemento shrink1">Shrink 1</div>
    <div class="elemento shrink2">Shrink 2</div>
  </div>
</body>
</html>
```

En este ejemplo, cuando el contenedor no tiene suficiente espacio para ambos elementos, el segundo elemento (`shrink2`) se encogerá el doble del primer elemento (`shrink1`).

**`flex-basis`**

**Definición:** La propiedad `flex-basis` define la base del tamaño de un elemento flex antes de que se aplique el espacio disponible según `flex-grow` y `flex-shrink`. Es similar a `width` pero en el contexto de Flexbox.

**Sintaxis:**
```css
.elemento {
  flex-basis: 200px; /* El valor puede ser cualquier longitud, porcentaje, o auto */
}
```

**Ejemplo Práctico:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo de flex-basis</title>
  <style>
    .contenedor {
      display: flex;
      width: 600px;
      height: 100px;
      background-color: lightgray;
    }
    .elemento {
      background-color: cornflowerblue;
      color: white;
      padding: 10px;
      text-align: center;
    }
    .basis100 {
      flex-basis: 100px;
    }
    .basis200 {
      flex-basis: 200px;
    }
  </style>
</head>
<body>
  <div class="contenedor">
    <div class="elemento basis100">Basis 100px</div>
    <div class="elemento basis200">Basis 200px</div>
  </div>
</body>
</html>
```

En este ejemplo, el primer elemento (`basis100`) tendrá una base de 100 píxeles, y el segundo (`basis200`) tendrá una base de 200 píxeles antes de aplicar `flex-grow` o `flex-shrink`.

**`flex`**

**Definición:** La propiedad `flex` es una abreviación para `flex-grow`, `flex-shrink` y `flex-basis`. Permite configurar los tres valores en una sola línea.

**Sintaxis:**
```css
.elemento {
  flex: 1 1 200px; /* flex-grow flex-shrink flex-basis */
}
```

**Ejemplo Práctico:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo de flex</title>
  <style>
    .contenedor {
      display: flex;
      width: 600px;
      height: 100px;
      background-color: lightgray;
    }
    .elemento {
      background-color: cornflowerblue;
      color: white;
      padding: 10px;
      text-align: center;
    }
    .flex1 {
      flex: 1 1 100px; /* flex-grow: 1, flex-shrink: 1, flex-basis: 100px */
    }
    .flex2 {
      flex: 2 1 200px; /* flex-grow: 2, flex-shrink: 1, flex-basis: 200px */
    }
  </style>
</head>
<body>
  <div class="contenedor">
    <div class="elemento flex1">Flex 1 1 100px</div>
    <div class="elemento flex2">Flex 2 1 200px</div>
  </div>
</body>
</html>
```

En este ejemplo, el primer elemento (`flex1`) tendrá un `flex-grow` de 1, `flex-shrink` de 1, y `flex-basis` de 100 píxeles. El segundo (`flex2`) tendrá un `flex-grow` de 2, `flex-shrink` de 1, y `flex-basis` de 200 píxeles. El segundo elemento crecerá dos veces más rápido que el primero si hay espacio adicional disponible.



Aquí tienes una explicación detallada sobre `justify-content`, `align-content` y `align-items` en Flexbox, junto con ejemplos prácticos:


---
## Resumen