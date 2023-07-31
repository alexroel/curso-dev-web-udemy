# Estilos de textos 

## Temario
Propiedades de fuentes
Espaciado y alineación de texto
Decoración de texto
Transformación de texto
Animación de texto



## Propiedades de fuentes

Las propiedades de fuentes en CSS te permiten personalizar y controlar la apariencia del texto en tu sitio web. A continuación, exploraremos las propiedades más comunes utilizadas para trabajar con fuentes en CSS.

* **font-family:** La propiedad font-family se utiliza para especificar la fuente o las fuentes que se utilizarán para mostrar el texto. Puedes proporcionar una lista de nombres de fuentes separados por comas, y el navegador utilizará la primera fuente disponible en la lista. Por ejemplo:

    ~~~css
    body {
      font-family: Arial, sans-serif;
    }
    ~~~

    En este caso, si Arial no está disponible en el sistema del usuario, se utilizará una fuente sans-serif genérica como respaldo.

* **font-size:** La propiedad font-size se utiliza para establecer el tamaño de la fuente. Puedes especificar el tamaño en píxeles, puntos, porcentajes o usando unidades relativas como em o rem. Por ejemplo:

    ~~~css
    h1 {
      font-size: 24px;
    }
    ~~~

* **font-weight:** La propiedad font-weight se utiliza para establecer el grosor o peso de la fuente. Puedes utilizar valores numéricos como 400 para normal y 700 para bold, o palabras clave como normal y bold. Por ejemplo:

    ~~~css
    p {
      font-weight: bold;
    }
    ~~~

* **font-style:** La propiedad font-style se utiliza para establecer el estilo de la fuente, como normal para texto normal o italic para texto en cursiva. Por ejemplo:

    ~~~css
    em {
      font-style: italic;
    }
    ~~~

* **font-variant:** La propiedad font-variant se utiliza para controlar las variantes tipográficas de la fuente, como small-caps para mostrar las letras en versalitas. Por ejemplo:

    ~~~css
    h2 {
      font-variant: small-caps;
    }
    ~~~

* **font-stretch:** La propiedad font-stretch se utiliza para controlar la expansión o compresión de la fuente. Puedes utilizar valores como condensed o expanded para ajustar la anchura de la fuente. Por ejemplo:

~~~css
blockquote {
  font-stretch: condensed;
}
~~~

Estas son solo algunas de las propiedades de fuentes más utilizadas en CSS. Hay muchas más opciones disponibles, como el espaciado entre letras (letter-spacing), el espaciado entre líneas (line-height) y la alineación vertical del texto (vertical-align). Experimenta con estas propiedades para crear una apariencia tipográfica personalizada y coherente en tu sitio web.

Recuerda que al especificar fuentes personalizadas, es importante considerar la accesibilidad y la compatibilidad con diferentes sistemas y navegadores. Siempre proporciona fuentes alternativas y elige fuentes que sean legibles y adecuadas para tu contenido.

## Espaciado y alineación de texto

En CSS, el espaciado de texto es una parte importante del diseño y la legibilidad del contenido en un sitio web. Hay varias propiedades que te permiten controlar el espaciado entre letras, palabras y líneas, así como el manejo del espacio en blanco dentro de un elemento. A continuación, explicaremos cada una de estas propiedades y proporcionaremos ejemplos para ilustrar su uso.

* **text-indent:** La propiedad text-indent se utiliza para especificar la sangría del primer renglón de un bloque de texto. Puedes utilizar valores absolutos o relativos para establecer la cantidad de sangría. Por ejemplo:
    ~~~css
    p {
      text-indent: 20px;
    }
    ~~~

* **letter-spacing:** La propiedad letter-spacing se utiliza para especificar el espacio entre los caracteres de un texto. Puedes utilizar valores positivos para aumentar el espacio o valores negativos para reducirlo. Por ejemplo:

    ~~~css
    h1 {
      letter-spacing: 5px;
    }

    h2 {
      letter-spacing: -2px;
    }
    ~~~

* **line-height:** La propiedad line-height se utiliza para especificar el espacio vertical entre las líneas de texto. Puedes utilizar valores numéricos o unidades como em o rem. Por ejemplo:

    ~~~css
    p.small {
      line-height: 0.8;
    }

    p.big {
      line-height: 1.8;
    }
    ~~~
* **word-spacing:** La propiedad word-spacing se utiliza para especificar el espacio entre las palabras en un texto. Puedes utilizar valores positivos para aumentar el espacio o valores negativos para reducirlo. Por ejemplo:

    ~~~css
    p.one {
      word-spacing: 10px;
    }

    p.two {
      word-spacing: -2px;
    }
    ~~~

* **white-space:** La propiedad white-space se utiliza para controlar cómo se maneja el espacio en blanco dentro de un elemento. Puedes utilizar diferentes valores para especificar si se respetan los saltos de línea y los espacios en blanco adicionales. Por ejemplo:

    ~~~css
    p {
      white-space: nowrap;
    }
    ~~~

Estas propiedades te permiten ajustar el espaciado de texto de manera precisa y controlada en tus diseños web. Experimenta con diferentes valores para lograr el aspecto deseado y mejorar la legibilidad de tu contenido.

### Alineación de Texto en CSS

La alineación de texto es una parte fundamental del diseño web y CSS ofrece varias propiedades para controlar la forma en que el texto se alinea horizontal y verticalmente dentro de su contenedor. A continuación, se explicarán estas propiedades junto con ejemplos de código para cada una de ellas.

* **text-align:** La propiedad text-align se utiliza para establecer la alineación horizontal del texto dentro de un elemento. Puedes utilizar valores como left, right, center o justify. Aquí tienes un ejemplo:

    ~~~css
    h1 {
      text-align: center;
    }

    p {
      text-align: justify;
    }

    ~~~~

* **text-align-last:** La propiedad text-align-last se utiliza para establecer la alineación de la última línea de un texto dentro de un elemento. Puedes utilizar valores como left, right, center o justify. Aquí tienes un ejemplo:

    ~~~css
    p {
      text-align-last: right;
    }
    ~~~

* **direction:** La propiedad direction se utiliza para establecer la dirección del texto dentro de un elemento. Puedes utilizar valores como ltr (izquierda a derecha) o rtl (derecha a izquierda). Aquí tienes un ejemplo:
~~~css
body {
  direction: rtl;
}
~~~

* **unicode-bidi:** La propiedad unicode-bidi se utiliza en combinación con la propiedad direction para controlar la forma en que se muestra el texto bidireccional. Puedes utilizar valores como normal, embed o bidi-override. Aquí tienes un ejemplo:
~~~css
p {
  unicode-bidi: bidi-override;
}
~~~

* **vertical-align:** La propiedad vertical-align se utiliza para alinear verticalmente elementos en línea o imágenes dentro de su contenedor. Puedes utilizar valores como baseline, text-top, text-bottom, sub o super. Aquí tienes un ejemplo:

~~~css
img {
  vertical-align: middle;
}
~~~

Recuerda que estas propiedades pueden aplicarse a diferentes elementos HTML, como encabezados (h1, h2, h3), párrafos (p), contenedores (div), imágenes (img), entre otros. Experimenta con estas propiedades y sus valores para lograr la alineación de texto deseada en tu sitio web.

## Decoración de texto

### Decoración de texto en CSS

La decoración de texto en CSS permite agregar líneas, colores, estilos y grosor a los elementos de texto. Estas propiedades te permiten resaltar y personalizar el aspecto visual del texto en tu sitio web. A continuación, se describen las propiedades de decoración de texto y se presentan ejemplos de cómo utilizarlas en CSS.

* **text-decoration-line:** La propiedad text-decoration-line se utiliza para agregar una línea de decoración al texto. Puedes utilizar valores como underline (subrayado), overline (sobrerayado) o line-through (tachado). También puedes combinar varios valores para mostrar múltiples líneas de decoración. Aquí tienes un ejemplo:

    ~~~css
    h1 {
      text-decoration-line: underline;
    }

    p {
      text-decoration-line: underline line-through;
    }
    ~~~

* **text-decoration-color:** La propiedad text-decoration-color se utiliza para establecer el color de la línea de decoración del texto. Puedes especificar cualquier valor de color válido, como nombres de color o códigos hexadecimales. Aquí tienes un ejemplo:

~~~css
h1 {
  text-decoration-line: underline;
  text-decoration-color: red;
}

p {
  text-decoration-line: underline line-through;
  text-decoration-color: blue;
}
~~~

* **text-decoration-style:** La propiedad text-decoration-style se utiliza para establecer el estilo de la línea de decoración del texto. Puedes utilizar valores como solid (línea sólida), double (línea doble), dotted (línea de puntos), dashed (línea discontinua) o wavy (línea ondulada). Aquí tienes un ejemplo:
~~~css
h1 {
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

p {
  text-decoration-line: underline line-through;
  text-decoration-style: double;
}
~~~

* **text-decoration-thickness:** La propiedad text-decoration-thickness se utiliza para establecer el grosor de la línea de decoración del texto. Puedes utilizar valores como auto (grosor automático), valores en píxeles (px) o porcentajes (%). Aquí tienes un ejemplo:
    ~~~css
    h1 {
      text-decoration-line: underline;
      text-decoration-thickness: 2px;
    }

    p {
      text-decoration-line: underline line-through;
      text-decoration-thickness: 50%;
    }
    ~~~

* **Propiedad abreviada text-decoration:** La propiedad text-decoration es una forma abreviada de especificar todas las propiedades de decoración de texto en una sola declaración. Puedes combinar text-decoration-line, text-decoration-color, text-decoration-style y text-decoration-thickness en una sola línea. Aquí tienes un ejemplo:

~~~css
h1 {
  text-decoration: underline;
}

p {
  text-decoration: underline blue double;
}
~~~
Recuerda que estas propiedades se pueden aplicar a diferentes elementos HTML, como encabezados (h1, h2, h3), párrafos (p), enlaces (a), entre otros. Experimenta con estas propiedades y sus valores para agregar efectos visuales atractivos y personalizados a tus textos.

### Sombra de texto en CSS

La propiedad text-shadow en CSS nos permite agregar sombras al texto y crear efectos visuales interesantes. Con text-shadow, podemos controlar la posición, el color y el desenfoque de la sombra.

Para usar text-shadow, especificamos los siguientes valores:

* Desplazamiento horizontal: especifica cuántos píxeles hacia la derecha o hacia la izquierda queremos que se desplace la sombra.
* Desplazamiento vertical: especifica cuántos píxeles hacia arriba o hacia abajo queremos que se desplace la sombra.
* Desenfoque: opcionalmente, podemos agregar un valor de desenfoque para hacer que la sombra sea más suave.
* Color: especifica el color de la sombra.
A continuación, se presentan algunos ejemplos de cómo usar text-shadow para crear diferentes efectos de sombra de texto:

* **Ejemplo 1: Sombra de texto básica**

~~~css
h1 {
  text-shadow: 2px 2px;
}
~~~

Este ejemplo agrega una sombra desplazada en 2 píxeles hacia la derecha y 2 píxeles hacia abajo.

* **Ejemplo 2: Sombra de texto con color**

~~~css
h1 {
  text-shadow: 2px 2px red;
}
~~~

Aquí, agregamos una sombra con el mismo desplazamiento pero en color rojo.

* **Ejemplo 3: Sombra de texto con desenfoque**

~~~css
h1 {
  text-shadow: 2px 2px 5px red;
}
~~~

En este caso, además de la sombra desplazada y el color rojo, añadimos un desenfoque de 5 píxeles para suavizar la sombra.

Estos ejemplos son solo el comienzo. Con text-shadow, se pueden crear efectos más complejos y personalizados. Aquí hay algunos ejemplos adicionales:

* **Ejemplo 4: Texto con sombra blanca sobre fondo oscuro**

~~~css
h1 {
  color: white;
  text-shadow: 1px 1px 2px black;
}
~~~

En este caso, usamos un color de texto blanco y una sombra negra para resaltar el texto sobre un fondo oscuro.

* **Ejemplo 5: Texto con efecto de neón**

~~~css
h1 {
  text-shadow: 0 0 3px #ff0000;
}
~~~

Aquí, creamos un efecto de neón rojo agregando una sombra roja con un desenfoque ligero.

* **Ejemplo 6: Texto con múltiples sombras**

~~~css
h1 {
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
}
~~~

En este ejemplo, combinamos tres sombras diferentes: una sombra negra desplazada ligeramente, una sombra azul más distante y una sombra darkblue más cercana para crear un efecto tridimensional.

Estos son solo ejemplos para mostrar el potencial de la propiedad text-shadow. Puedes experimentar con diferentes valores y combinaciones para crear tus propios efectos de sombra de texto únicos y creativos.

## Transformación de texto

La propiedad transform en CSS permite aplicar transformaciones a elementos HTML, como rotación, escala, traslación y sesgado. Con transform, podemos modificar la apariencia y posición de los elementos de forma dinámica y visualmente atractiva.

Las transformaciones se aplican utilizando funciones específicas que indican el tipo de transformación a realizar. A continuación, se presentan algunos ejemplos de transformaciones comunes y cómo se pueden utilizar:

* **Rotación:** La función rotate() permite rotar un elemento en grados. Un valor positivo rota en sentido de las agujas del reloj, mientras que un valor negativo rota en sentido contrario a las agujas del reloj.
Ejemplo:

~~~css
.rotate {
  transform: rotate(45deg);
}
~~~
Este ejemplo rota el elemento con la clase "rotate" 45 grados en sentido de las agujas del reloj.

* **Escala:** La función scale() permite ajustar el tamaño de un elemento en el eje x e y. Un valor de 1 mantiene el tamaño original, valores mayores a 1 aumentan el tamaño y valores menores a 1 reducen el tamaño.
Ejemplo:

~~~css
.scale {
  transform: scale(1.5);
}
~~~

En este caso, el elemento con la clase "scale" se escala a un 150% de su tamaño original.

* **Traslación:** La función translate() permite mover un elemento en el eje x e y. Se pueden utilizar valores en píxeles (px), porcentajes (%) o unidades relativas.
Ejemplo:

~~~css
.translate {
  transform: translate(50px, 20px);
}
~~~

Aquí, el elemento con la clase "translate" se mueve 50 píxeles hacia la derecha y 20 píxeles hacia abajo.

* **Sesgado:** La función skew() permite sesgar un elemento en los ejes x e y. Los valores especifican los ángulos de sesgado en grados.
Ejemplo:

~~~css
.skew {
  transform: skew(20deg, -10deg);
}
~~~

En este ejemplo, el elemento con la clase "skew" se sesga 20 grados en el eje x y -10 grados en el eje y.

Estos son solo algunos ejemplos básicos de transformaciones en CSS. La propiedad transform también permite combinar múltiples transformaciones utilizando la función matrix(), aplicar transformaciones en 3D utilizando funciones como rotateX(), rotateY() y rotateZ(), y más.

Es importante tener en cuenta que la propiedad transform afecta solo la apariencia visual del elemento y no altera el flujo normal del documento. También se puede aplicar a elementos mediante pseudoelementos y pseudoclases para agregar interactividad y efectos especiales.

¡Anímate a experimentar con las transformaciones en CSS y descubre cómo puedes crear efectos sorprendentes y dinámicos en tus sitios web!

## Animación de texto


La animación de texto en CSS permite agregar efectos dinámicos y atractivos a los elementos de texto en una página web. Con las animaciones, podemos crear transiciones suaves, efectos de desvanecimiento, movimientos y cambios de color en el texto para mejorar la experiencia del usuario. A continuación, se presenta una guía sobre cómo animar texto en CSS:

* **Propiedad @keyframes:** La propiedad @keyframes se utiliza para definir las etapas clave de una animación. Se establecen puntos clave en la animación donde se especifican los estilos que el texto debe tener en cada momento.
Ejemplo:

~~~css
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
~~~

En este ejemplo, se define una animación llamada "fade-in" que establece la propiedad de opacidad del texto en 0% al inicio de la animación (0%) y en 100% al final de la animación (100%).

* **Propiedad animation:** La propiedad animation se utiliza para aplicar una animación a un elemento de texto. Se especifica el nombre de la animación, su duración, el retraso y otras propiedades relacionadas con la animación.
Ejemplo:

~~~css
.fade-in {
  animation-name: fade-in;
  animation-duration: 2s;
  animation-delay: 1s;
}
~~~

En este caso, se aplica la animación "fade-in" al elemento con la clase "fade-in". La animación tiene una duración de 2 segundos y un retraso de 1 segundo antes de comenzar.

Propiedades de animación adicionales:

* Existen otras propiedades que se pueden utilizar para controlar el comportamiento de la animación de texto:

* animation-timing-function: Define cómo se aceleran o desaceleran los cambios de estilo a lo largo de la animación. Algunos valores comunes son "ease" (aceleración y desaceleración suave), "linear" (velocidad constante) y "ease-in-out" (aceleración al inicio y desaceleración al final).

* animation-iteration-count: Especifica cuántas veces se debe repetir la animación. Puede ser un número específico, "infinite" para repetir infinitamente o "alternate" para repetir en sentido inverso.

* animation-fill-mode: Determina los estilos aplicados antes y después de la animación. Algunos valores comunes son "forwards" (mantener el estilo final de la animación) y "backwards" (aplicar el estilo inicial de la animación antes de que comience).

* animation-play-state: Controla si la animación se reproduce o se pausa. Los valores posibles son "running" (animación en reproducción) y "paused" (animación en pausa).

* Estas propiedades se pueden combinar y ajustar según las necesidades de la animación de texto.

Recuerda que las animaciones de texto pueden ser aplicadas a diferentes propiedades CSS, como color, tamaño de fuente, posición y más. Experimenta con diferentes animaciones y propiedades para crear efectos de texto atractivos y sorprendentes en tus páginas web.