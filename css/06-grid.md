# Grid

## Temario
¿Que es Grid?
Filas y columnas
Justificar y alinear el contenido
Justificar y alinear el elemento
Grid area
Justificación y alineación de sí mismo


## ¿Que es Grid?

La disposición en cuadrícula CSS ofrece un amplio conjunto de características y funcionalidades para controlar la distribución de elementos en filas y columnas. Al utilizar la cuadrícula, puedes definir una estructura bidimensional con filas y columnas y colocar elementos en ella de manera precisa o permitir que el navegador los coloque automáticamente en las celdas definidas.

Una de las ventajas de la cuadrícula CSS es su capacidad para combinar el control del tamaño extrínseco con la flexibilidad del tamaño intrínseco. Esto significa que puedes definir cómo dimensionar las bandas de filas y columnas o permitir que se ajusten automáticamente según el contenido.

Los elementos secundarios del contenedor de la cuadrícula se colocarán automáticamente en la cuadrícula, siguiendo el orden en el que aparecen en el código HTML. Sin embargo, también tienes la opción de colocar los elementos en ubicaciones precisas dentro de la cuadrícula utilizando propiedades de posicionamiento.

La cuadrícula CSS permite nombrar las líneas y áreas de la cuadrícula para facilitar la colocación y el diseño. Al asignar nombres a las líneas y áreas, puedes referirte a ellas en tu código CSS y especificar cómo deseas que los elementos se distribuyan en la cuadrícula.

Además, la cuadrícula CSS ofrece la capacidad de distribuir el espacio libre en el contenedor de la cuadrícula entre las bandas de filas y columnas. Esto te permite crear diseños responsivos que se adaptan al tamaño disponible.

Por último, los elementos de la cuadrícula se pueden alinear dentro de su área utilizando propiedades de alineación. Puedes alinear elementos vertical u horizontalmente, así como distribuir el espacio disponible dentro de cada área de la cuadrícula.

En resumen, la cuadrícula CSS proporciona un sistema completo de distribución bidimensional que te permite controlar la colocación, el tamaño y la alineación de los elementos en filas y columnas. Con todas estas características, la cuadrícula CSS se convierte en una herramienta poderosa para crear diseños flexibles y complejos en tus proyectos web.

## Cuadrícula

Cuando trabajamos con cuadrículas en CSS, es importante comprender la terminología asociada con este sistema de distribución. Aquí hay una explicación ampliada de los términos utilizados:

* **Las líneas de cuadrícula:** son esenciales para definir la estructura de una cuadrícula CSS. Veamos algunos ejemplos que ilustran su uso:

    **Ejemplo 1:**

    Supongamos que queremos crear una cuadrícula con tres filas y tres columnas. Las líneas de cuadrícula nos permitirán definir los límites de cada fila y columna. Veamos cómo se vería el código:

    ~~~css
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 100px 200px 150px;
    }
    ~~~

    En este ejemplo, hemos definido tres columnas de igual ancho utilizando la unidad fr (fracción). También hemos especificado el alto de cada fila utilizando unidades de longitud. Cada fila y columna estará delimitada por líneas de cuadrícula.

    **Ejemplo 2:**

    Imaginemos que queremos crear una cuadrícula con una columna principal en el centro y dos columnas más pequeñas a los lados. Podemos lograrlo definiendo líneas de cuadrícula adicionales. Veamos el código:

    ~~~css
    .container {
      display: grid;
      grid-template-columns: 1fr min-content 1fr;
    }
    ~~~

    En este ejemplo, hemos utilizado la palabra clave min-content para definir una columna más pequeña que se ajustará al tamaño de su contenido. Las líneas de cuadrícula adicionales nos permiten separar y posicionar las columnas en la cuadrícula.

    **Ejemplo 3:**

    Si queremos crear una cuadrícula con columnas de ancho variable, podemos utilizar una combinación de unidades de longitud y porcentajes. Veamos cómo se logra esto:

    ~~~css
    .container {
      display: grid;
      grid-template-columns: 100px 2fr 1fr;
    }
    ~~~
    En este ejemplo, hemos definido la primera columna con un ancho fijo de 100px. La segunda columna tendrá un ancho proporcional a las demás columnas en una relación de 2:1. La tercera columna tendrá un ancho proporcional de 1:1. Las líneas de cuadrícula separan y definen los límites de cada columna.

    Estos ejemplos ilustran cómo utilizar las líneas de cuadrícula para definir la estructura y el diseño de una cuadrícula CSS. Al comprender cómo se numeran y posicionan las líneas, puedes crear diseños más complejos y personalizados utilizando este poderoso sistema de distribución bidimensional.

* **Bandas de cuadrícula**

    Asignar tamaño a las bandas de cuadrícula:
    ~~~css
    .container {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr; /* Tres columnas con tamaños proporcionales */
      grid-template-rows: 100px 200px; /* Dos filas con tamaños fijos */
    }
    ~~~

    En este ejemplo, se define una cuadrícula con tres columnas y dos filas. Las bandas de columna tienen un tamaño relativo utilizando la unidad fr, lo que significa que se distribuirán proporcionalmente en función de la fracción especificada (en este caso, 1fr y 2fr). Las bandas de fila tienen tamaños fijos de 100px y 200px respectivamente.

    Distribución automática de elementos en las bandas:
    ~~~css
    .container {
      display: grid;
      grid-template-columns: repeat(4, 1fr); /* Cuatro columnas de igual tamaño */
    }
    ~~~

    En este ejemplo, se crea una cuadrícula con cuatro columnas de igual tamaño utilizando la función repeat(). Al no especificar un tamaño para las filas, estas se ajustarán automáticamente según el contenido de los elementos colocados en ellas. Los elementos secundarios del contenedor de la cuadrícula se distribuirán automáticamente en las bandas de cuadrícula disponibles.

    Definir un tamaño específico para una banda:
    ~~~css
    .container {
      display: grid;
      grid-template-columns: 100px auto 200px; /* Tres columnas con tamaños específicos */
    }
    ~~~

    En este ejemplo, se establecen tamaños específicos para las bandas de columna. La primera banda de columna tiene un ancho fijo de 100px, la segunda banda de columna se ajustará automáticamente según el contenido y la tercera banda de columna tiene un ancho fijo de 200px.

    Utilizar fracciones y porcentajes para dimensionar las bandas:
    ~~~css
    .container {
      display: grid;
      grid-template-columns: 1fr 2fr 25%; /* Tres columnas con tamaños relativos */
    }
    ~~~

    En este ejemplo, se combinan diferentes unidades de medida para dimensionar las bandas de columna. La primera banda de columna utiliza una fracción (1fr), la segunda banda de columna utiliza una fracción doble (2fr) y la tercera banda de columna utiliza un porcentaje (25%) del ancho del contenedor.

    Al asignar tamaños a las bandas de cuadrícula, tienes flexibilidad para crear diseños personalizados y controlar la distribución del contenido en la cuadrícula. Puedes experimentar con diferentes combinaciones de tamaños y unidades de medida para lograr el diseño deseado.

**La celda de cuadrícula:**

Es fundamental para ubicar y organizar los elementos en una cuadrícula CSS. Es el espacio más pequeño en la cuadrícula y se forma en la intersección de una banda de fila y una banda de columna. Similar a una celda en una tabla o en una hoja de cálculo, la celda de cuadrícula proporciona un lugar específico para colocar contenido.

Cuando defines una cuadrícula, ya sea mediante el uso de la propiedad grid-template-columns y grid-template-rows o mediante una declaración abreviada como grid-template, se crean automáticamente celdas de cuadrícula para cada intersección de banda de fila y columna.

Por ejemplo, considera el siguiente código:

~~~css
.container {
  display: grid;
  grid-template-columns: 100px 150px;
  grid-template-rows: 50px 80px;
}
~~~

En este caso, se define una cuadrícula con dos columnas y dos filas. Esto crea cuatro celdas de cuadrícula: una en la esquina superior izquierda, otra en la esquina superior derecha, una en la esquina inferior izquierda y una en la esquina inferior derecha.

Si no colocas explícitamente elementos en la cuadrícula, cada celda de cuadrícula estará ocupada automáticamente por un elemento. Esto se debe a que las celdas de cuadrícula actúan como contenedores para los elementos. Por lo tanto, incluso si no hay contenido visible en una celda de cuadrícula, se crea una celda vacía.

Por ejemplo, considera el siguiente código HTML:

~~~html
<div class="container">
  <div class="item">Elemento 1</div>
  <div class="item">Elemento 2</div>
  <div class="item">Elemento 3</div>
  <div class="item">Elemento 4</div>
</div>
~~~
En este caso, si la clase .container se aplica a una cuadrícula CSS como se mostró anteriormente, cada elemento con la clase .item se ubicará automáticamente en una celda de cuadrícula. Si no se especifica ninguna ubicación adicional, los elementos se colocarán secuencialmente en cada celda de cuadrícula en orden de aparición en el código HTML.

Las celdas de cuadrícula proporcionan un sistema estructurado para organizar los elementos en una cuadrícula bidimensional. Al comprender cómo se forman las celdas de cuadrícula y cómo se les asignan elementos, puedes crear diseños complejos y flexibles utilizando la cuadrícula CSS.

**Áreas de cuadrícula:**

**Ejemplo 1:**
En este ejemplo, creamos una cuadrícula con 3 filas y 3 columnas. Luego, hacemos que un elemento se extienda por varias celdas para formar un área de cuadrícula.

~~~css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
}

.item {
  grid-column: 2 / 4; /* El elemento ocupa desde la segunda columna hasta la cuarta columna */
  grid-row: 1 / 3; /* El elemento ocupa desde la primera fila hasta la tercera fila */
}
~~~

En este caso, el elemento con la clase "item" abarcará desde la segunda columna hasta la cuarta columna de la cuadrícula y desde la primera fila hasta la tercera fila. Esto crea un área de cuadrícula rectangular que contiene el elemento.

**Ejemplo 2:**
En este ejemplo, creamos una cuadrícula con 4 filas y 2 columnas. Luego, hacemos que dos elementos se extiendan por varias celdas para formar áreas de cuadrícula separadas.

~~~css
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 100px);
  gap: 10px;
}

.item-1 {
  grid-column: 1 / 2; /* El elemento ocupa desde la primera columna hasta la segunda columna */
  grid-row: 1 / 3; /* El elemento ocupa desde la primera fila hasta la tercera fila */
}

.item-2 {
  grid-column: 2 / 3; /* El elemento ocupa desde la segunda columna hasta la tercera columna */
  grid-row: 3 / 5; /* El elemento ocupa desde la tercera fila hasta la quinta fila */
}
~~~

En este caso, el elemento con la clase "item-1" forma un área de cuadrícula que abarca desde la primera columna hasta la segunda columna y desde la primera fila hasta la tercera fila. El elemento con la clase "item-2" forma un área de cuadrícula que abarca desde la segunda columna hasta la tercera columna y desde la tercera fila hasta la quinta fila. Estas áreas de cuadrícula separadas permiten agrupar elementos y aplicar estilos o propiedades específicas a cada área.

Recuerda que puedes ajustar los valores de las propiedades "grid-column" y "grid-row" según la disposición deseada de las áreas de cuadrícula. Con estas configuraciones, puedes crear áreas de cuadrícula personalizadas y controlar la distribución de elementos en tu diseño de manera precisa y flexible.

### Brechas (Gaps)

Al trabajar con cuadrículas en CSS, las brechas desempeñan un papel importante al permitir establecer espacios vacíos entre las celdas de la cuadrícula. A continuación, se presentan algunos ejemplos de cómo se pueden utilizar las brechas en una cuadrícula:

Ejemplo de brechas en una cuadrícula:
~~~css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
~~~

En este ejemplo, se crea un contenedor de cuadrícula con tres columnas de tamaño flexible (1fr). La propiedad gap se establece en 20px, lo que crea una brecha de 20 píxeles entre las celdas de la cuadrícula. Esto resulta en un diseño más espaciado y ordenado, ya que hay un espacio uniforme entre las celdas.

Ejemplo de brechas diferentes en filas y columnas:
~~~css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  column-gap: 20px;
  row-gap: 10px;
}
~~~
En este ejemplo, se define un contenedor de cuadrícula con tres columnas de tamaño flexible (1fr) y dos filas de altura fija (100px). La propiedad column-gap se establece en 20px, creando una brecha de 20 píxeles entre las columnas de la cuadrícula. Por otro lado, la propiedad row-gap se establece en 10px, generando una brecha de 10 píxeles entre las filas de la cuadrícula. Esto permite tener brechas diferentes en filas y columnas, lo que puede resultar útil en ciertos diseños.

Ejemplo de elementos distribuidos en las brechas:
~~~css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.item {
  grid-column: span 2;
}
~~~

En este ejemplo, se crea un contenedor de cuadrícula con tres columnas de tamaño flexible (1fr) y una brecha de 20 píxeles entre las celdas. El elemento con la clase .item se configura para ocupar dos columnas utilizando la propiedad grid-column: span 2. Esto permite que el elemento se distribuya a través de la brecha entre las columnas, ocupando el espacio disponible de manera más amplia.

Estos ejemplos ilustran cómo las brechas en una cuadrícula pueden mejorar la estructura y la apariencia de un diseño. Puedes ajustar el tamaño de las brechas según tus necesidades y preferencias para lograr el efecto deseado en tus diseños de cuadrícula.

En resumen, la terminología de cuadrícula en CSS nos proporciona los conceptos y las palabras clave necesarias para comprender y manipular las estructuras de cuadrícula. Las líneas de cuadrícula dividen la cuadrícula en filas y columnas, mientras que las bandas de cuadrícula y las celdas de cuadrícula determinan el espacio y la ubicación de los elementos. Las áreas de cuadrícula se crean mediante la expansión de elementos a través de múltiples celdas, y las brechas permiten establecer espacios entre las celdas. El contenedor de cuadrícula crea un contexto de formato de cuadrícula, y los elementos de cuadrícula son los hijos directos de este contenedor. Al comprender esta terminología, podrás utilizar la cuadrícula CSS de manera más efectiva y crear diseños flexibles y precisos.

### Contenedor de cuadrícula


El contenedor de cuadrícula es el punto de partida para utilizar la cuadrícula CSS. Al aplicar la propiedad display: grid a un elemento HTML, se convierte en un contenedor de cuadrícula y establece un nuevo contexto de formato de cuadrícula para sus hijos directos. Esto significa que los hijos directos del contenedor de cuadrícula se colocarán y se distribuirán según las reglas definidas por la cuadrícula.

Aquí tienes un ejemplo de cómo se utiliza el contenedor de cuadrícula:

~~~css
<div class="container">
  <div class="item">Elemento 1</div>
  <div class="item">Elemento 2</div>
  <div class="item">Elemento 3</div>
</div>
~~~

En este caso, el contenedor de cuadrícula es el elemento `<div>` con la clase "container". Los elementos `<div>` con la clase "item" son los hijos directos del contenedor de cuadrícula.

Para convertir el contenedor en una cuadrícula, simplemente añadimos la propiedad display: grid en su estilo:

~~~css
.container {
  display: grid;
}
~~~

Una vez que hemos definido el contenedor de cuadrícula, podemos aplicar reglas de diseño y distribución a sus elementos hijos utilizando las propiedades de cuadrícula correspondientes, como grid-template-columns y grid-template-rows. Estas propiedades nos permiten definir las filas y columnas de la cuadrícula y especificar cómo se deben dimensionar.

Aquí tienes un ejemplo de cómo definir una cuadrícula de 3 columnas y 2 filas en el contenedor:

~~~css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 200px;
}
~~~

En este caso, hemos creado una cuadrícula con tres columnas, cada una con una fracción igual de espacio disponible, y dos filas con alturas fijas de 100 píxeles y 200 píxeles respectivamente.

Una vez que hemos definido la estructura de la cuadrícula, los elementos hijos se colocarán automáticamente en la cuadrícula según el orden en el que aparecen en el código HTML. Si deseamos un mayor control sobre la ubicación de los elementos, podemos utilizar propiedades como grid-row y grid-column para especificar la posición de cada elemento dentro de la cuadrícula.

~~~
.item {
  grid-row: 1;
  grid-column: 2 / span 2;
}
~~~

En este ejemplo, el elemento con la clase "item" se colocará en la primera fila y se extenderá desde la segunda columna hasta el final de la cuadrícula.

En resumen, al utilizar el contenedor de cuadrícula con la propiedad display: grid, creamos un nuevo contexto de formato de cuadrícula para los elementos hijos. Esto nos permite controlar la distribución y el diseño de los elementos en una cuadrícula bidimensional. Al definir las filas y columnas de la cuadrícula, así como las propiedades de posición de los elementos hijos, podemos crear diseños flexibles y precisos.

### Elemento de cuadrícula

Cuando trabajamos con el elemento de cuadrícula en CSS, estamos creando los bloques de contenido que se colocarán dentro de las celdas de la cuadrícula. Estos elementos hijos directos del contenedor de la cuadrícula se adaptarán y se distribuirán automáticamente según las reglas y dimensiones definidas para la cuadrícula.

A continuación, se muestra un ejemplo sencillo que ilustra el uso del elemento de cuadrícula:

~~~html
<div class="container">
  <div class="item">Elemento 1</div>
  <div class="item">Elemento 2</div>
  <div class="item">Elemento 3</div>
</div>
~~~
En este caso, hemos creado un contenedor de cuadrícula con la clase "container". Dentro de este contenedor, hemos agregado tres elementos de cuadrícula con la clase "item". Estos elementos se convertirán automáticamente en celdas de la cuadrícula y se distribuirán según las reglas establecidas para la cuadrícula.

Para aplicar la cuadrícula CSS a este ejemplo, podemos usar el siguiente código:

~~~html
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}

.item {
  background-color: #eaeaea;
  padding: 10px;
}
~~~

En este caso, hemos definido que el contenedor de cuadrícula tiene tres columnas de igual tamaño usando la propiedad grid-template-columns con el valor 1fr 1fr 1fr. Además, hemos agregado un espacio de separación de 10 píxeles entre las celdas de la cuadrícula mediante la propiedad grid-gap. Para los elementos de cuadrícula, hemos aplicado un fondo de color gris claro y un relleno interno de 10 píxeles.

Como resultado, los elementos de cuadrícula se colocarán automáticamente en celdas dentro del contenedor de cuadrícula, siguiendo las reglas de distribución establecidas. En este ejemplo, los tres elementos se distribuirán en tres columnas de igual tamaño, separados por un espacio de 10 píxeles.

El elemento de cuadrícula nos permite crear diseños flexibles y personalizados, donde podemos controlar la posición y el tamaño de los elementos según nuestras necesidades. Podemos agregar más elementos de cuadrícula al contenedor y aplicar diferentes estilos y propiedades a cada uno de ellos para lograr diseños más complejos.

## Filas y columnas

Filas y columnas en una cuadrícula son elementos clave para definir su estructura y diseño. Podemos especificar la cantidad y el tamaño de las filas y columnas en una cuadrícula utilizando propiedades como grid-template-columns y grid-template-rows.

Veamos un ejemplo que ilustra la creación de una cuadrícula básica con tres bandas de columna y dos bandas de fila, con una brecha de 10 píxeles entre ellas:

css
Copy code
.container {
  display: grid;
  grid-template-columns: 5em 100px 30%;
  grid-template-rows: 200px auto;
  gap: 10px;
}
En este caso, hemos definido el contenedor de la cuadrícula con la clase "container". Mediante la propiedad grid-template-columns, hemos establecido tres bandas de columna con diferentes tamaños: una de 5em, otra de 100px y la tercera con un ancho del 30% del contenedor. Luego, con la propiedad grid-template-rows, hemos definido dos bandas de fila: una de 200px y otra con tamaño automático (auto).

Al utilizar las unidades de medida y porcentajes, podemos adaptar el tamaño de las bandas de la cuadrícula según nuestras necesidades. Además, hemos agregado una brecha de 10 píxeles entre las filas y columnas utilizando la propiedad gap.

Es importante destacar que en este ejemplo, si el contenedor de la cuadrícula tiene elementos hijos, estos se colocarán automáticamente en las celdas de la cuadrícula definidas. Esto significa que los elementos se ajustarán a las filas y columnas especificadas, aprovechando el espacio disponible.

Podemos visualizar y experimentar con estas filas y columnas utilizando las herramientas de desarrollo de Chrome Grid. Al inspeccionar el elemento con la clase "container" y resaltarlo en el DOM, podemos seleccionar la opción "Mostrar números de línea" en la pestaña de Diseño para ver los números de línea en la cuadrícula. Esto nos permite comprender mejor la estructura y el posicionamiento de las bandas de la cuadrícula.

Además de las dimensiones de longitud y porcentaje, también podemos utilizar palabras clave intrínsecas para definir el tamaño de las bandas de la cuadrícula. Por ejemplo, la palabra clave min-content hará que una banda tenga el tamaño más pequeño posible sin que su contenido se desborde. Por otro lado, la palabra clave max-content hará que una banda sea lo suficientemente ancha para mostrar todo el contenido sin interrupciones.

La función fit-content() actúa de manera similar a max-content, pero permite establecer un tamaño máximo específico. Por ejemplo, fit-content(10em) creará una banda que tiene un tamaño menor a 10em si el tamaño máximo de contenido es inferior a esa medida, pero nunca será mayor a 10em.

La unidad fr es otra opción de tamaño en la cuadrícula que distribuye el espacio disponible de manera flexible. Por ejemplo, si queremos tener tres columnas que ocupen el mismo espacio disponible, podemos utilizar grid-template-columns: 1fr 1fr 1fr.

Además, podemos utilizar la función minmax() para establecer un tamaño mínimo y máximo para una banda. Esto es útil para asegurar que una banda ocupe una parte igual del espacio disponible en el contenedor de la cuadrícula. Por ejemplo, en lugar de 1fr, podemos utilizar minmax(auto, 1fr) para que la banda se ajuste al tamaño mínimo del contenido y comparta el espacio restante de manera proporcional.

Para simplificar la especificación de múltiples columnas o filas con un patrón repetitivo, podemos utilizar la función repeat(). Por ejemplo, si queremos crear una cuadrícula con 12 columnas iguales, podemos escribirlo de la siguiente manera:

css
Copy code
.container {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}
Esto nos permite establecer una serie repetida de columnas con minmax(0, 1fr), lo que significa que cada columna ocupará al menos el tamaño mínimo necesario y compartirá el espacio disponible de manera proporcional.

Para crear una cuadrícula que se ajuste dinámicamente al tamaño del contenedor y genere automáticamente las bandas necesarias, podemos utilizar las palabras clave auto-fill o auto-fit. Por ejemplo:

css
Copy code
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
En este caso, la cuadrícula creará tantas columnas como quepan en el contenedor con un tamaño mínimo de 200px y un máximo de 1fr. Esto nos permite lograr un diseño de cuadrícula sensible y flexible sin necesidad de consultas de medios adicionales.

En resumen, las filas y columnas son elementos fundamentales en la creación de una cuadrícula en CSS. Podemos definir su cantidad, tamaño y comportamiento utilizando propiedades como grid-template-columns y grid-template-rows. Además, podemos utilizar palabras clave intrínsecas, la unidad fr, la función minmax() y la función repeat() para personalizar y ajustar la distribución de las bandas en la cuadrícula.

## Justificar y alinear el elemento
## Grid area
## Justificación y alineación de sí mismo
