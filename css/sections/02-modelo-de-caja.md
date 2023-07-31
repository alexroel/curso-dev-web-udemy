# Modelo de caja

## Temário
¿Qué es el modelo de caja?
Ancho y altura
Margen y relleno
Tipos de elementos
Bordes y sombras
Posicionamiento 

## ¿Qué es el modelo de caja?

En CSS, el "modelo de caja" se refiere a la representación conceptual de cómo se estructura y se visualiza un elemento HTML en una página web. Cada elemento HTML se considera una caja rectangular con propiedades que determinan su tamaño, posición, bordes, relleno y margen.

El modelo de caja consta de cuatro componentes principales:

* Contenido (Content): Es el área donde se muestra el contenido real del elemento, como el texto, las imágenes o los elementos anidados.

* Relleno (Padding): Es el espacio entre el contenido y el borde. El relleno proporciona un espacio adicional dentro de la caja, y puede tener un color de fondo distinto al del contenido.

* Borde (Border): Es la línea que rodea el contenido y el relleno. Define el límite visual del elemento y puede tener un grosor, estilo y color específicos.

* Margen (Margin): Es el espacio que rodea la caja y separa el elemento de otros elementos cercanos. El margen proporciona un espacio en blanco fuera de la caja.

Estos componentes se combinan para formar la apariencia visual completa de un elemento en la página web. El tamaño total de la caja se calcula sumando el contenido, el relleno, el borde y el margen.

El modelo de caja se puede controlar y modificar utilizando propiedades CSS como width (ancho), height (altura), padding (relleno), border (borde) y margin (margen). Estas propiedades permiten ajustar el tamaño, el espaciado y los estilos visuales de los elementos en la página web, lo que brinda flexibilidad y control sobre la apariencia de los elementos.

## Ancho y altura

Las propiedades CSS `height` y `width` se utilizan para establecer la altura y el ancho de un elemento. Por otro lado, la propiedad CSS max-width se utiliza para establecer el ancho máximo de un elemento.

**Configuración de Altura y Ancho en CSS**

Las propiedades height y width se utilizan para establecer la altura y el ancho de un elemento en CSS. Es importante tener en cuenta que estas propiedades no incluyen el relleno, los bordes ni los márgenes del elemento. En cambio, se aplican únicamente al área interna del elemento, dentro del relleno, el borde y el margen.

**Valores de Altura y Ancho en CSS**

Las propiedades height y width pueden tomar diferentes valores:

* **auto:** Este es el valor predeterminado. El navegador calcula la altura y el ancho automáticamente según el contenido del elemento.
* **length**: Define la altura y el ancho utilizando unidades de medida como píxeles (px), centímetros (cm), etc.
* %: **Define** la altura y el ancho como un porcentaje del bloque contenedor.
* **initial:** Establece la altura y el ancho en sus valores iniciales predeterminados.
* **inherit:** La altura y el ancho se heredan del valor principal del elemento contenedor.

**Ejemplos de Altura y Ancho en CSS**


Establecer la altura en 200 píxeles y el ancho en 50%:

~~~css
div {
  height: 200px;
  width: 50%;
  background-color: powderblue;
}
~~~

Establecer la altura en 100 píxeles y el ancho en 500 píxeles:

~~~css
div {
  height: 100px;
  width: 500px;
  background-color: powderblue;
}
~~~

Es importante recordar que las propiedades height y width no incluyen el relleno, los bordes ni los márgenes. Solo determinan el tamaño del área interna del elemento.

**Configuración del Ancho Máximo**

La propiedad CSS `max-width` se utiliza para establecer el ancho máximo permitido para un elemento, evitando que se expanda más allá de ese límite. Puede especificarse en valores de longitud, como píxeles (px), centímetros (cm), porcentaje (%), etc. Si el contenido del elemento supera el ancho máximo establecido, se aplicará un comportamiento de ajuste automático para adaptarse al espacio disponible.

Por otro lado, la propiedad CSS `min-width` se utiliza para establecer el ancho mínimo requerido para un elemento. Si el contenido del elemento es menor que el ancho mínimo especificado, el elemento se expandirá automáticamente para ajustarse al ancho mínimo.

Ambas propiedades (`max-width y min-width`) son útiles para crear diseños responsivos y controlar la forma en que los elementos se adaptan a diferentes tamaños de pantalla o dispositivos.

Aquí tienes ejemplos de uso de max-width y min-width:

~~~css
/* Establecer un ancho máximo de 500px para un elemento */
div {
  max-width: 500px;
}

/* Establecer un ancho mínimo de 300px para un elemento */
div {
  min-width: 300px;
}
~~~

En el primer ejemplo, el elemento no podrá expandirse más allá de 500 píxeles de ancho, incluso si el contenido es más amplio. En el segundo ejemplo, el elemento se expandirá automáticamente si el contenido es mayor a 300 píxeles de ancho, asegurando que tenga al menos ese ancho mínimo.

## Margen y relleno

### Margen 

Los márgenes en CSS se utilizan para crear espacio alrededor de los elementos, es decir, establecen la distancia entre el borde del elemento y los elementos adyacentes. Los márgenes se definen fuera de los bordes del elemento y se pueden configurar de manera individual para cada lado (superior, derecho, inferior e izquierdo) o de forma abreviada utilizando una única propiedad.

En CSS, se pueden especificar los márgenes de cada lado utilizando las siguientes propiedades:

* margin-top: establece el margen en la parte superior del elemento.
* margin-right: establece el margen en el lado derecho del elemento.
* margin-bottom: establece el margen en la parte inferior del elemento.
* margin-left: establece el margen en el lado izquierdo del elemento.

**Cada una de estas propiedades de margen puede tomar diferentes valores:**

* auto: el navegador calcula automáticamente el margen.

    ~~~css
    div {
      margin: auto;
    }
    ~~~

    En este caso, el navegador calculará automáticamente el margen del elemento y lo distribuirá de manera equitativa entre los lados izquierdo y derecho. Esto puede resultar útil para centrar horizontalmente un elemento dentro de su contenedor.

* length: se especifica un valor numérico para el margen, como píxeles (px), puntos (pt), centímetros (cm), etc.

    ~~~css
    p {
        margin: 20px;
    }
    ~~~
    En este ejemplo, se establece un margen de 20 píxeles para todos los lados del elemento p. El margen será igual en todos los lados.

* %: se especifica un valor porcentual en relación con el ancho del elemento contenedor.

    ~~~css
    div {
        margin: 10% 20%;
    }
    ~~~

    Aquí, se establece un margen del 10% en la parte superior e inferior y un margen del 20% en los lados derecho e izquierdo del elemento div. El tamaño del margen se basará en el ancho del elemento contenedor.

* inherit: indica que el margen debe heredar el valor del elemento principal.

    ~~~css
    div {
        margin-left: 30px;
    }

    p {
        margin-left: inherit;
    }
    ~~~
    En este caso, el margen izquierdo del elemento p se hereda del valor establecido para el margen izquierdo en el elemento div. Esto significa que ambos elementos tendrán el mismo margen izquierdo de 30 píxeles.

Es posible establecer diferentes márgenes para cada lado de un elemento utilizando las propiedades individuales de margen. Por ejemplo:

~~~css
p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
}
~~~ 

* Sin embargo, también existe una forma abreviada de especificar los márgenes utilizando la propiedad margin, que combina los cuatro lados en una sola declaración. Los valores se proporcionan en el siguiente orden: margen superior, margen derecho, margen inferior y margen izquierdo. Por ejemplo:

    ~~~css
    div {
      margin: 10px 20px 30px 40px;
    }
    ~~~

    En este caso, se establece un margen de 10 píxeles en la parte superior, 20 píxeles en el lado derecho, 30 píxeles en la parte inferior y 40 píxeles en el lado izquierdo del elemento div, de manera similar al ejemplo anterior.

* **Margen abreviado con tres valores:**
    Si se proporcionan tres valores, se aplican al margen superior, derecho e inferior en ese orden, y el margen izquierdo es igual al margen derecho:
    ~~~css
    div {
      margin: 10px 20px 30px;
    }
    ~~~

    En este caso, se establece un margen de 10 píxeles en la parte superior, 20 píxeles en el lado derecho e izquierdo, y 30 píxeles en la parte inferior del elemento div.

* **Margen abreviado con dos valores:**

    Cuando se proporcionan dos valores, se aplican al margen superior e inferior en ese orden, y el margen derecho e izquierdo son iguales:
    ~~~css
    div {
      margin: 10px 20px;
    }
    ~~~
    Aquí, se establece un margen de 10 píxeles en la parte superior e inferior, y 20 píxeles en el lado derecho e izquierdo del elemento div.

* **Margen abreviado con un valor:**
    Si se proporciona un solo valor, se aplica al margen en los cuatro lados del elemento:
    ~~~css
    div {
      margin: 10px;
    }
    ~~~
En este ejemplo, se establece un margen de 10 píxeles en los cuatro lados del elemento div.

Es importante tener en cuenta que los márgenes también pueden tener valores negativos si se desea superponer elementos o ajustar la disposición. Sin embargo, es recomendable utilizarlos con cuidado para evitar comportamientos no deseados.

Ten en cuenta que, al igual que con el relleno, el margen también puede afectar el ancho total de un elemento. Para mantener un ancho específico sin que el margen lo altere, se puede utilizar la propiedad `box-sizing` con el valor `border-box`, como se mencionó anteriormente en el caso del relleno.

Por último, mencionar que el valor inherit se utiliza para heredar el margen de su elemento principal, lo que permite establecer un margen específico para un elemento y heredarlo en otros elementos secundarios.

~~~css
div {
  border: 1px solid red;
  margin-left: 100px;
}

p.ex1 {
  margin-left: inherit;
}
~~~ 

En el ejemplo anterior, el margen izquierdo del elemento p con la clase ex1 hereda el valor del margen izquierdo establecido en el elemento div.

En resumen, los márgenes en CSS permiten crear espacio alrededor de los elementos, estableciendo la separación entre el borde de un elemento y los elementos adyacentes. Se pueden configurar de forma individual para cada lado o utilizando una propiedad abreviada. Los márgenes son útiles para lograr un espaciado adecuado entre los elementos y para crear diseños visualmente atractivos.

### Relleno

El relleno en CSS se utiliza para crear espacio alrededor del contenido de un elemento, dentro de los bordes definidos.

El relleno es el espacio vacío entre el contenido de un elemento y sus bordes. Es útil para agregar espacio y separación visual entre el contenido y los bordes de un elemento. Puedes controlar el relleno de forma precisa utilizando las propiedades de relleno en CSS.

Propiedades de relleno para lados individuales
En CSS, puedes establecer el relleno para cada lado de un elemento de forma independiente. Las propiedades de relleno para lados individuales son:

* padding-top: establece el relleno en la parte superior del elemento.
* padding-right: establece el relleno en el lado derecho del elemento.
* padding-bottom: establece el relleno en la parte inferior del elemento.
* padding-left: establece el relleno en el lado izquierdo del elemento.

Estas propiedades de relleno pueden tener los siguientes valores:

* longitud: se especifica un valor numérico para el relleno, como píxeles (px), puntos (pt), centímetros (cm), etc.
* %: se especifica un valor porcentual en relación con el ancho del elemento contenedor.
* inherit: indica que el relleno debe heredar el valor del elemento principal.

Ejemplo de especificación de relleno para los cuatro lados:

~~~css
div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}
~~~

En este ejemplo, se establece un relleno diferente para cada lado del elemento div. El relleno superior es de 50 píxeles, el relleno derecho es de 30 píxeles, el relleno inferior es de 50 píxeles y el relleno izquierdo es de 80 píxeles.

Propiedad abreviada de relleno
Para simplificar el código, CSS proporciona una propiedad abreviada para establecer todas las propiedades de relleno juntas. La propiedad abreviada es padding y se utiliza de la siguiente manera:

* Si la propiedad padding tiene cuatro valores, se aplican al relleno superior, derecho, inferior e izquierdo en ese orden:

    ~~~css
    div {
      padding: 10px 20px 30px 40px;
    }
    ~~~
    En este ejemplo, se establece un relleno de 10 píxeles en la parte superior, 20 píxeles en el lado derecho, 30 píxeles en la parte inferior y 40 píxeles en el lado izquierdo del elemento div.

* Si la propiedad padding tiene tres valores, se aplican al relleno superior, derecho e inferior en ese orden, y el relleno izquierdo es igual al relleno derecho:

    ~~~css
    div {
      padding: 10px 20px 30px;
    }
    ~~~

    En este caso, se establece un relleno de 10 píxeles en la parte superior, 20 píxeles en el lado derecho e izquierdo, y 30 píxeles en la parte inferior del elemento div.

* Si la propiedad padding tiene dos valores, se aplican al relleno superior e inferior en ese orden, y el relleno derecho e izquierdo son iguales:

    ~~~css
    div {
      padding: 10px 20px;
    }
    ~~~

    Aquí, se establece un relleno de 10 píxeles en la parte superior e inferior, y 20 píxeles en el lado derecho e izquierdo del elemento div.

* Si la propiedad padding tiene un valor, se aplica al relleno en los cuatro lados del elemento:

    ~~~css
    div {
      padding: 10px;
    }
    ~~~
    En este ejemplo, se establece un relleno de 10 píxeles en los cuatro lados del elemento div.

~~~css
div {
  padding: 25px 50px 75px 100px;
}
~~~

En este caso, se establece un relleno de 25 píxeles en la parte superior, 50 píxeles en el lado derecho, 75 píxeles en la parte inferior y 100 píxeles en el lado izquierdo del elemento div.

**Relleno y ancho del elemento**

Es importante tener en cuenta que el relleno afecta al ancho total de un elemento. Si un elemento tiene un ancho específico y se le agrega relleno, el ancho total del elemento se verá afectado.

Para evitar este comportamiento no deseado, puedes utilizar la propiedad box-sizing. Al establecer `box-sizing: border-box`, el ancho especificado para el elemento incluirá el relleno y el borde, y el espacio de contenido disponible se ajustará automáticamente.

Ejemplo de uso de box-sizing para mantener el ancho en 300 píxeles sin importar la cantidad de relleno:

~~~CSS
div {
  width: 300px;
  padding: 25px;
  box-sizing: border-box;
}
~~~

En este ejemplo, el elemento div tendrá un ancho real de 300 píxeles, incluyendo el relleno de 25 píxeles en cada lado. El contenido del elemento se ajustará automáticamente para adaptarse al espacio disponible.

## Tipos de elementos

En CSS, los elementos HTML se pueden clasificar en diferentes tipos según su comportamiento y cómo se muestran en la página. A continuación se describen algunos de los tipos de elementos más comunes:

La propiedad display es una de las propiedades CSS más importantes para controlar el diseño de los elementos en una página web. Esta propiedad permite especificar cómo se muestra un elemento y afecta el comportamiento y la apariencia de los elementos HTML.

En CSS, hay diferentes valores para la propiedad display que determinan cómo se visualiza un elemento. A continuación, se explican los principales valores:

* **block:** Los elementos a nivel de bloque siempre comienzan en una nueva línea y ocupan todo el ancho disponible. Algunos ejemplos de elementos a nivel de bloque son `<div>`, `<h1>` - `<h6>`, `<p>`, `<form>`, `<header>`, `<footer>`, `<section>`, entre otros.

    Ejemplo de código CSS para establecer un elemento como bloque:

    ~~~css
    div {
      display: block;
    }
    ~~~

* **inline:** Los elementos en línea no comienzan en una nueva línea y ocupan solo el ancho necesario para mostrar su contenido. Algunos ejemplos de elementos en línea son `<span>`, `<a>`, `<img>`, `<button>`, `<strong>`, entre otros.

    Ejemplo de código CSS para establecer un elemento como en línea:

    ~~~css
    span {
      display: inline;
    }
    ~~~

**Elementos de bloque:**

* Los elementos de bloque ocupan todo el ancho disponible de su contenedor.
* Comienzan en una nueva línea y se apilan verticalmente uno debajo del otro.
* Pueden tener un ancho y altura específicos establecidos.
* Pueden tener márgenes, rellenos y bordes aplicados en todas las direcciones.
* Aceptan propiedades de dimensiones como width y height.

**Elementos en línea:**

* Los elementos en línea ocupan solo el espacio necesario para mostrar su contenido.
* No inician en una nueva línea y se muestran uno al lado del otro en la misma línea horizontal.
* No aceptan propiedades de dimensiones como width y height de forma predeterminada.
* No tienen márgenes superiores ni inferiores, solo márgenes laterales.
* No pueden tener un relleno superior o inferior, solo relleno horizontal.

Es importante tener en cuenta que algunos elementos pueden cambiar su tipo de visualización predeterminado utilizando CSS mediante la propiedad display. Por ejemplo, es posible convertir un elemento en línea en un elemento de bloque y viceversa, lo que brinda mayor flexibilidad en el diseño y el control visual de los elementos.

En CSS, **inline-block** es un valor de la propiedad display que combina características de los elementos en línea y los elementos de bloque.

* **Cuando un elemento tiene display:** inline-block, se comporta como un elemento en línea en el sentido de que no inicia una nueva línea y solo ocupa el espacio necesario dentro del flujo de texto. Sin embargo, a diferencia de los elementos en línea tradicionales, un elemento con inline-block también puede tener un ancho y alto definidos, así como márgenes, rellenos y bordes. Esto lo convierte en una opción útil para crear diseños más complejos y flexibles.

Aquí hay algunas características clave y ejemplos de uso de inline-block:

* **Espacio en línea:** Los elementos con inline-block respetan el espacio en línea y se alinean horizontalmente uno al lado del otro. Puedes usar varios elementos inline-block para construir menús horizontales, galerías de imágenes o mostrar varios elementos en una misma línea.

* **Ancho y alto definidos:** A diferencia de los elementos en línea tradicionales, los elementos inline-block pueden tener un ancho y alto definidos. Esto permite controlar el tamaño de los elementos y crear diseños más precisos.

* **Márgenes, rellenos y bordes:** Los elementos inline-block pueden tener márgenes, rellenos y bordes aplicados, lo que permite espaciar y decorar los elementos según sea necesario.

A continuación se muestra un ejemplo de cómo se puede utilizar `inline-block`:

~~~css
.container {
  width: 500px;
}

.box {
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
}
~~~

~~~html
<div class="container">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
~~~

En este ejemplo, hemos creado un contenedor con ancho de 500 píxeles y tres elementos box dentro de él. Los elementos box tienen display: inline-block, lo que les permite colocarse uno al lado del otro. Además, se les ha asignado un ancho y alto de 100 píxeles, márgenes de 10 píxeles, un color de fondo y un borde.

Es importante tener en cuenta que cuando se utiliza inline-block, pueden surgir espacios en blanco adicionales entre los elementos debido a cómo se maneja el espacio en HTML. Una forma de solucionar esto es ajustar el HTML para que los elementos estén uno junto al otro sin espacios adicionales, o utilizar técnicas como comentarios HTML o establecer un tamaño de fuente de 0 en el contenedor.

En resumen, inline-block es una herramienta poderosa para crear diseños flexibles y controlados en CSS. Permite combinar la fluidez de los elementos en línea con las propiedades de tamaño y espacio de los elementos de bloque, brindando más opciones de diseño y facilitando la creación de diseños responsivos y estructuras más complejas.

También es posible ocultar elementos utilizando la propiedad display:

* **`display: none;`** oculta completamente el elemento y no ocupará espacio en el diseño de la página.
* **`visibility: hidden;`** oculta el elemento pero aún ocupará el mismo espacio que antes, es decir, afectará el diseño.

Ejemplo de código CSS para ocultar un elemento utilizando display: none;:

~~~css
h1.hidden {
  display: none;
}
~~~

Ejemplo de código CSS para ocultar un elemento utilizando visibility: hidden;:

~~~css
h1.hidden {
  visibility: hidden;
}
~~~

Es importante tener en cuenta que, al modificar la propiedad display, se cambia la forma en que se muestra un elemento, pero no se cambia su tipo de elemento. Por lo tanto, un elemento en línea con display: block; no puede contener otros elementos de bloque dentro de él.

La elección del valor correcto para la propiedad display es fundamental para lograr el diseño deseado y asegurarse de que los elementos se muestren correctamente en la página web.

## Bordes y sombras

### Bordes

Los bordes en CSS son una forma de agregar estilos visuales a los contornos de los elementos HTML. Puedes especificar diferentes propiedades para controlar el grosor, el estilo y el color del borde. Los bordes son una herramienta poderosa para mejorar el aspecto de tus diseños y resaltar elementos específicos.

Existen varias propiedades CSS relacionadas con los bordes, que te permiten personalizar su apariencia:

* **border-width:** La propiedad CSS border-width se utiliza para controlar el grosor de los bordes de un elemento. Puedes especificar el grosor del borde utilizando unidades de medida como píxeles (px), porcentajes (%) o em (em), o puedes utilizar palabras clave predefinidas para definir grosores estándar.

    Aquí tienes algunos ejemplos para ilustrar el uso de border-width:

    * Establecer un grosor de borde de 2 píxeles:
        ~~~css
        .my-element {
          border-width: 2px;
        }
        ~~~

    * Utilizar palabras clave para establecer grosores predefinidos:
        ~~~css
        .my-element {
          border-width: thin; /* Grosor delgado */
        }

        .my-other-element {
          border-width: medium; /* Grosor medio */
        }

        .my-another-element {
          border-width: thick; /* Grosor grueso */
        }
        ~~~

    * Especificar diferentes grosores para cada lado del borde:
        ~~~css
        .my-element {
          border-width: 1px 2px 3px 4px; /* Arriba, derecha, abajo, izquierda */
        }
        ~~~

    En este ejemplo, el grosor del borde es de 1 píxel en la parte superior, 2 píxeles en el lado derecho, 3 píxeles en la parte inferior y 4 píxeles en el lado izquierdo.

    * Utilizar porcentajes para establecer el grosor del borde en relación con el tamaño del elemento:
        ~~~css
        .my-element {
          border-width: 10%; /* 10% del tamaño del elemento */
        }
        ~~~

    En este caso, el grosor del borde será el 10% del tamaño del elemento al que se aplica.

Recuerda que la propiedad border-width solo establece el grosor del borde, pero no afecta el estilo o el color. Para especificar el estilo del borde, puedes utilizar la propiedad border-style, y para definir el color del borde, puedes utilizar la propiedad border-color.

* **border-style:** Esta propiedad define el estilo del borde. Algunos valores comunes son:

* solid: Un borde sólido.
* dashed: Un borde con líneas discontinuas.
* dotted: Un borde con puntos.
* double: Un borde doble.
* groove: Un borde en relieve.
* ridge: Un borde en relieve inverso.
* none: Sin borde.
* hidden: Borde oculto (similar a none, pero puede afectar al diseño).
* border-color: Esta propiedad establece el color del borde. Puedes utilizar nombres de colores, códigos hexadecimales o funciones rgba() para definir el color del borde.

Para aplicar estilos a todos los lados del borde, puedes utilizar la propiedad border y combinar las propiedades anteriores en una sola declaración:

~~~css
.my-element {
  border: 2px solid red;
}
~~~

En este ejemplo, se establece un borde con un grosor de 2 píxeles, un estilo sólido y un color rojo.

* También es posible personalizar los bordes por cada lado de un elemento. Puedes utilizar las propiedades border-top, border-bottom, border-left y border-right para controlar los estilos de cada lado individualmente. Por ejemplo:

    ~~~css
    .my-element {
      border-top: 1px dashed blue;
      border-bottom: 2px solid green;
      border-left: 3px dotted yellow;
      border-right: 4px double orange;
    }
    ~~~

En este caso, se establecen bordes diferentes para cada lado del elemento.

* Además de estas propiedades básicas, también puedes utilizar border-radius para crear bordes redondeados. Esta propiedad permite definir el radio de las esquinas del elemento, creando bordes suaves y estilizados. Por ejemplo:

    ~~~css
    .my-element {
      border: 2px solid red;
      border-radius: 10px;
    }
    ~~~

En este ejemplo, se aplica un borde sólido rojo con un grosor de 2 píxeles y esquinas redondeadas con un radio de 10 píxeles.

Es importante destacar que los bordes no están limitados a elementos rectangulares. Puedes aplicar bordes a elementos de cualquier forma, incluyendo círculos, triángulos o cualquier otra forma geométrica, utilizando combinaciones de propiedades y técnicas avanzadas de CSS.

Los bordes en CSS te brindan un control preciso sobre la apariencia de los elementos HTML. Puedes combinar diferentes propiedades y valores para lograr efectos visuales interesantes y personalizados en tus diseños web.

### Sombras

Existen varias formas de agregar sombras a texto y elementos en CSS. En este módulo, aprenderás cómo utilizar cada opción y para qué tareas están diseñadas.

**Box-shadow:**

La propiedad box-shadow se utiliza para agregar sombras al contorno de un elemento HTML. Funciona tanto en elementos de bloque como en elementos en línea.
Ejemplo de uso:

~~~css
.my-element {
  box-shadow: 5px 5px 20px 5px #000;
}
~~~

En este ejemplo, se aplica una sombra exterior al elemento con una desplazamiento horizontal de 5px, desplazamiento vertical de 5px, un radio de desenfoque de 20px y un tamaño de dispersión de 5px. El color de la sombra es negro (#000).

* También es posible crear sombras interiores utilizando la palabra clave inset antes de los demás valores.

**Text-shadow:**

La propiedad text-shadow es similar a box-shadow, pero se aplica específicamente a nodos de texto.
Ejemplo de uso:

~~~css
.my-element {
  text-shadow: 3px 3px 3px hotpink;
}
~~~

En este ejemplo, se agrega una sombra al texto con un desplazamiento horizontal de 3px, desplazamiento vertical de 3px y un radio de desenfoque de 3px. El color de la sombra es hotpink.

***Puedes agregar múltiples sombras a un elemento utilizando valores separados por comas en box-shadow y text-shadow.***

**Drop-shadow:**

Para lograr una sombra paralela que siga cualquier curva potencial de una imagen, puedes utilizar el filtro drop-shadow en CSS. Este filtro se aplica a una máscara alfa y es útil para agregar sombras a imágenes recortadas.
Ejemplo de uso:

~~~css
.my-image {
  filter: drop-shadow(0px 0px 10px rgba(0 0 0 / 30%));
}
~~~

En este ejemplo, se aplica una sombra paralela a la imagen con un desplazamiento horizontal y vertical de 0px, un radio de desenfoque de 10px y un color de sombra definido con RGBA. La opacidad de la sombra es del 30%.

Es importante destacar que drop-shadow no admite las palabras clave inset ni valores de dispersión. Sin embargo, puedes agregar múltiples sombras utilizando varias instancias del valor drop-shadow en la propiedad filter. Cada sombra utilizará la sombra anterior como punto de referencia de posicionamiento.

Estas son algunas de las opciones disponibles para agregar sombras en CSS. Puedes experimentar con los valores y combinaciones para lograr los efectos deseados en tus elementos y textos.

## Posicionamiento 

El posicionamiento en cajas en CSS se refiere a cómo se ubican y se desplazan los elementos dentro del diseño de una página. CSS proporciona varias propiedades de posicionamiento que permiten controlar la ubicación y el flujo de los elementos en relación con otros elementos y al contenedor que los contiene. A continuación, se explican algunos de los métodos de posicionamiento más comunes en CSS:

* **Posicionamiento estático (position: static):** Es el comportamiento de posicionamiento predeterminado para todos los elementos. En este modo, los elementos siguen el flujo normal del documento y no se ven afectados por las propiedades de posicionamiento.

* **Posicionamiento relativo (position: relative):** Permite ajustar la posición de un elemento con respecto a su posición original. Se pueden utilizar las propiedades top, right, bottom y left para desplazar el elemento desde su posición inicial, sin afectar la ubicación de los demás elementos.

~~~css
.my-element {
  position: relative;
  top: 10px;
  left: 20px;
}
~~~

* **Posicionamiento absoluto (position: absolute):** Permite posicionar un elemento de forma absoluta con respecto a su elemento contenedor más cercano que tenga una posición distinta a static. El elemento absoluto se coloca en función de las propiedades top, right, bottom y left, y se elimina del flujo normal del documento, lo que puede afectar la ubicación de otros elementos.
~~~css
.my-element {
  position: absolute;
  top: 50px;
  left: 100px;
}
~~~

* **Posicionamiento fijo (position: fixed):** Similar al posicionamiento absoluto, pero el elemento fijo se posiciona de manera absoluta con respecto a la ventana del navegador en lugar de su elemento contenedor. Permanece fijo incluso al desplazarse por la página.

~~~css
.my-element {
  position: fixed;
  top: 10px;
  right: 20px;
}
~~~

* **Posicionamiento pegajoso (position: sticky):** Permite que un elemento se comporte de forma relativa hasta que alcance una posición de desplazamiento específica, y luego se vuelve fijo. Es útil para crear encabezados o barras de navegación que se mantengan visibles mientras se desplaza la página.

~~~css
.my-element {
  position: sticky;
  top: 0;
}
~~~

Estas son solo algunas de las propiedades de posicionamiento en CSS. El posicionamiento en cajas se vuelve más poderoso y complejo cuando se combina con otras propiedades, como display, float y z-index, lo que permite crear diseños flexibles y adaptativos. Es importante comprender cómo funciona cada método de posicionamiento y experimentar con ellos para lograr los efectos de diseño deseados.