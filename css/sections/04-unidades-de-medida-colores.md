# Unidades de medida y colores

## Temario
Unidades de medida relativa
Unidades de medida absoluta
Herencia
Colores hexadecimales 
Colores RGB 


## Unidades de medida absoluta


Las unidades de medida absoluta en CSS son utilizadas para especificar tamaños y distancias de manera precisa y constante, independientemente del contexto. Estas unidades se basan en valores absolutos y no varían en función de factores como el tamaño de la pantalla o la fuente utilizada. A continuación, se explican algunas de las unidades de medida absoluta más comunes en CSS, junto con ejemplos de uso:

* **px (píxel):** El píxel es la unidad de medida más básica y representa un punto en la pantalla. Es una unidad absoluta porque tiene un tamaño constante y no se ve afectada por el tamaño de la pantalla. Por ejemplo:

~~~css
h1 {
    font-size: 24px;
  width: 300px;
  height: 200px;
}
in (pulgada): La pulgada es una unidad de medida utilizada comúnmente en impresión. En CSS, una pulgada equivale a 96 píxeles. Por ejemplo:

css
Copy code
img {
    width: 2in;
  height: 1.5in;
}
~~~

* **cm (centímetro):** El centímetro es una unidad de medida utilizada en el sistema métrico. En CSS, un centímetro equivale a aproximadamente 37.8 píxeles. Por ejemplo:

~~~css
div {
    width: 10cm;
  margin-top: 2cm;
}
~~~

* **mm (milímetro):** El milímetro es una unidad de medida más pequeña que el centímetro. En CSS, un milímetro equivale a aproximadamente 3.78 píxeles. Por ejemplo:

~~~css
p {
    font-size: 5mm;
  margin-bottom: 2mm;
}
~~~

Estas unidades de medida absoluta proporcionan precisión en el diseño y son especialmente útiles cuando se requiere un control exacto sobre el tamaño y la posición de los elementos. Sin embargo, es importante tener en cuenta que el uso exclusivo de unidades absolutas puede dificultar la adaptabilidad y la respuesta a diferentes tamaños de pantalla. Por lo tanto, es recomendable combinarlas con unidades relativas para lograr diseños más flexibles y responsivos.

## Herencia

En CSS, algunas propiedades se heredan automáticamente si no se especifica un valor para ellas. En este módulo, exploraremos cómo funciona la herencia y cómo podemos aprovecharla en beneficio de nuestro diseño.

### El Podcast de CSS - 005: Herencia

Imaginemos que hemos escrito algo de CSS para hacer que ciertos elementos se vean como botones.

~~~css
<a href="http://example.com" class="my-button">I am a button link</a>
css
Copy code
.my-button {
  display: inline-block;
  padding: 1rem 2rem;
  text-decoration: none;
  background: pink;
  font: inherit;
  text-align: center;
}
~~~

Luego, agregamos un enlace a un artículo de contenido con la clase my-button. Sin embargo, notamos un problema: el texto no tiene el color que esperábamos. ¿Cómo ocurrió esto?

Algunas propiedades CSS se heredan automáticamente si no se les asigna un valor específico. En este caso, el color se heredó de la siguiente regla CSS:

~~~css
article a {
  color: maroon;
}
~~~

En esta lección, aprenderemos por qué ocurre esto y cómo podemos utilizar la herencia de manera efectiva para reducir la cantidad de CSS que debemos escribir.

### Flujo de la herencia

Veamos cómo funciona la herencia utilizando el siguiente fragmento de HTML:

~~~html
<html>
  <body>
    <article>
      <p>Lorem ipsum dolor sit amet.</p>
    </article>
  </body>
</html>
~~~

El elemento raíz `<html>` no heredará ninguna propiedad porque es el primer elemento del documento. Sin embargo, al agregar CSS al elemento `<html>`, se heredará en cascada por todo el documento.

~~~css
html {
  color: lightslategray;
}
~~~

La propiedad color se heredará por otros elementos. En este caso, el elemento `<html>` tiene el valor color: lightslategray, lo que significa que todos los elementos que pueden heredar el color tendrán ahora el color lightslategray.

~~~css
body {
  font-size: 1.2em;
}
~~~

Debido a que hemos establecido el tamaño de fuente en el elemento `<body>`, el elemento `<html>` aún tendrá el tamaño de fuente inicial establecido por el navegador, pero los elementos `<article>` y `<p>` heredarán el tamaño de fuente declarado por el elemento `<body>`. La herencia solo fluye hacia abajo, no hacia los elementos principales.

~~~css
p {
  font-style: italic;
}
~~~

Solo el elemento `<p>` tendrá texto en cursiva porque es el elemento anidado más profundo. La herencia solo fluye hacia abajo, no hacia los elementos principales.

### Propiedades heredables

No todas las propiedades CSS son heredables, pero muchas de ellas sí lo son. Aquí tienes una lista completa de las propiedades heredables:

* azimuth
* border-collapse
* border-spacing
* caption-side
* color
* cursor
* direction
* empty-cells
* font-family
* font-size
* font-style
* font-variant
* font-weight
* font
* letter-spacing
* line-height
* list-style-image
* list-style-position
* list-style-type
* list-style
* orphans
* quotes
* text-align
* text-indent
* text-transform
* visibility
* white-space
* widows
* word-spacing

### Cómo funciona la herencia

Cada elemento HTML tiene propiedades CSS predeterminadas con un valorinicial. Estas propiedades predeterminadas no se heredan y se aplican como valores por defecto si no se especifica lo contrario en la cascada de estilos.

Las propiedades que pueden heredarse se transmiten en cascada, lo que significa que los elementos secundarios heredarán un valor calculado basado en el valor de sus elementos primarios. Esto significa que si un elemento primario tiene la propiedad font-weight establecida en "bold", todos los elementos secundarios serán en negrita a menos que se especifique un valor diferente para la propiedad font-weight o exista una regla de hoja de estilos de usuario que sobrescriba ese valor.

Cómo heredar y controlar explícitamente la herencia

La herencia puede afectar a los elementos de maneras inesperadas, por lo que CSS proporciona herramientas para manejarla de manera explícita.

### Palabra clave inherit

Puedes hacer que cualquier propiedad herede el valor calculado de su elemento primario utilizando la palabra clave inherit. Esta palabra clave es útil para crear excepciones en las reglas de estilos.

~~~css
strong {
  font-weight: 900;
}
En este ejemplo, todos los elementos <strong> tendrán un font-weight de 900, en lugar del valor predeterminado "bold" (equivalente a font-weight: 700).

css
Copy code
.my-component {
  font-weight: 500;
}
~~~

En cambio, la clase .my-component establece el valor font-weight en 500. Para asegurarnos de que los elementos `<strong>` dentro de .my-component también tengan un font-weight de 500, agregamos la siguiente regla:

~~~css
.my-component strong {
  font-weight: inherit;
}
~~~

Con esto, los elementos `<strong>` dentro de .my-component heredarán el valor font-weight igual a 500. Al utilizar la palabra clave inherit, nos aseguramos de que los elementos se mantengan actualizados automáticamente si cambiamos el CSS de .my-component en el futuro.

### Palabra clave initial

La herencia puede causar problemas en ciertos elementos, y la palabra clave initial proporciona una opción potente para reiniciar una propiedad a su valor inicial predeterminado.

~~~
aside strong {
  font-weight: initial;
}
~~~

En este ejemplo, eliminamos la negrita de todos los elementos `<strong>` dentro de un elemento `<aside>` y los establecemos con el peso de fuente normal, que es el valor inicial por defecto.

### Palabra clave unset

La propiedad unset se comporta de manera diferente según si la propiedad es heredable o no. Si la propiedad es heredable, la palabra clave unset se comportará como la palabra clave inherit. Si la propiedad no es heredable, unset actuará como la palabra clave initial.

Puede ser difícil recordar qué propiedades CSS son heredables, pero la palabra clave unset puede ser útil en ese contexto. Por ejemplo, color es heredable pero margin no lo es. Podemos utilizar unset de la siguiente manera:

~~~css
/* Estilos de color globales para párrafos */
p {
  margin-top: 2em;
  color: goldenrod;
}

/* Restablecer los estilos en los párrafos dentro de los elementos <aside> */
aside p {
  margin: unset;
  color: unset;
}
~~~

Ahora, todos los elementos `<p>` dentro de `<aside>` tendrán el margen restablecido y el color volverá al valor calculado heredado.

También puedes usar la palabra clave `unset` con la propiedad `all`. Volviendo al ejemplo anterior, ¿qué sucede si los estilos globales de los elementos `<p>` agregan algunas propiedades adicionales? Solo se aplicará la regla establecida para las propiedades `margin` y `color`.

~~~css
/* Estilos de color globales para párrafos */
p {
  margin-top: 2em;
  color: goldenrod;
  padding: 2em;
  border: 1px solid;
}

/* No todas las propiedades se tienen en cuenta */
aside p {
  margin: unset;
  color: unset;
}
~~~

En cambio, si cambiamos la regla para aside p a all: unset, no importará qué estilos globales se apliquen a los elementos `<p>` en el futuro, ya que se restablecerán todas las propiedades.

~~~css
aside p {
  margin: unset;
  color: unset;
  all: unset;
}
~~~

Con estas herramientas, puedes controlar de manera efectiva la herencia y asegurarte de que los elementos hereden solo las propiedades que deseas, al tiempo que mantienes un control explícito sobre cómo se aplican las reglas de estilo.

## Colores hexadecimales 
En el mundo del diseño web, el color juega un papel esencial a la hora de crear interfaces visualmente atractivas. En CSS, existen diversas formas de especificar colores para aplicarlos a elementos HTML. En este curso, vamos a explorar los diferentes tipos de valores de color que se utilizan comúnmente.

Una de las formas más comunes de trabajar con colores en CSS son los colores numéricos. Estos colores se definen mediante valores numéricos que representan las diferentes componentes del color, como el rojo, el verde y el azul. En CSS, existen varias notaciones que se emplean para expresar los colores numéricos:


En CSS, otra forma popular de especificar colores es a través de la notación hexadecimal. Esta sintaxis abreviada de RGB asigna un valor numérico a las componentes de color rojo, verde y azul, que son los tres colores primarios. Aquí tienes un ejemplo de código CSS que utiliza colores hexadecimales:

~~~css
h1 {
    color: #b71540;
}
~~~

En este ejemplo, el color del elemento h1 se define utilizando el código hexadecimal #b71540, que representa una tonalidad específica de rojo.

La notación hexadecimal utiliza dígitos que van desde 0 hasta 9 y letras de la A a la F. Cuando se utilizan en una secuencia de seis dígitos, estos valores se traducen a los rangos numéricos RGB que van de 0 a 255, correspondiendo a los canales de color rojo, verde y azul respectivamente.

También es posible definir un valor alfa para el color utilizando cualquier notación numérica. El valor alfa representa el nivel de transparencia y se expresa como un porcentaje. En la notación hexadecimal, se agregan dos dígitos adicionales a la secuencia de seis dígitos, formando una secuencia de ocho dígitos. Por ejemplo, para establecer el color negro con un nivel de transparencia del 50%, se utilizaría el código #00000080.

Es importante tener en cuenta que debido a que la escala hexadecimal abarca de 0 a 9 y de A a F, los valores de transparencia no se corresponden directamente con los porcentajes esperados. A continuación, se presentan algunos valores clave comunes agregados al código hexadecimal para el color negro #000000:

* Un alfa del 0%, que indica total transparencia, se representa como #00000000.
* Un alfa del 50% se representa como #00000080.
* Un alfa del 75% se representa como #000000BF.

Si deseas convertir un valor hexadecimal de dos dígitos a decimal, toma el primer dígito y multiplícalo por 16 (debido a que el sistema hexadecimal es de base 16), luego suma el segundo dígito. Por ejemplo, para el valor hexadecimal BF correspondiente a un alfa del 75%:

* B es igual a 11, y cuando se multiplica por 16 se obtiene 176.

* F es igual a 15.
176 + 15 = 191.

* Por lo tanto, el valor alfa es 191, lo que representa el 75% de la opacidad en una escala de 0 a 255.

También es posible utilizar una notación hexadecimal abreviada de tres dígitos. Esta notación es un atajo para una secuencia de seis dígitos equivalente. Por ejemplo, #a4e es idéntico a #aa44ee. Si deseas agregar un valor alfa, se expandiría a una secuencia de ocho dígitos, por ejemplo, #a4e8 se expandiría a #aa44ee88.

## Unidades de medida relativa


Las unidades de medida relativas en CSS son utilizadas para especificar tamaños y distancias de manera proporcional al contexto en el que se encuentran. A diferencia de las unidades absolutas, las unidades relativas se ajustan automáticamente en función de factores como el tamaño de la pantalla, el tamaño de la fuente base o el contenedor padre. A continuación, se explican algunas de las unidades de medida relativas más comunes en CSS, junto con ejemplos de uso:

* **em:** La unidad em se basa en el tamaño de la fuente del elemento padre. Un valor de 1em es igual al tamaño de la fuente del elemento actual, mientras que 2em sería el doble del tamaño de la fuente del elemento padre. Por ejemplo:

~~~css
p {
  font-size: 16px;
}

span {
  font-size: 1.2em; /* El tamaño de fuente será 19.2px (16px * 1.2) */
}
~~~

* **rem:** La unidad rem es similar a em, pero se basa en el tamaño de la fuente del elemento raíz (<html>). Esto hace que rem sea más predecible y fácil de usar en comparación con em. Por ejemplo:

~~~css
html {
  font-size: 16px;
}

p {
  font-size: 1.5rem; /* El tamaño de fuente será 24px (16px * 1.5) */
}
~~~

* **% (porcentaje):** El porcentaje se utiliza para especificar un valor relativo al tamaño del contenedor padre. Por ejemplo, un ancho del 50% en un elemento se refiere a la mitad del ancho de su contenedor padre. Por ejemplo:

~~~css
div {
  width: 50%; /* El ancho será la mitad del contenedor padre */
}
~~~

* **vw (viewport width):** La unidad vw representa un porcentaje del ancho de la ventana gráfica (viewport) del dispositivo. Por ejemplo, 10vw sería el 10% del ancho de la ventana gráfica. Por ejemplo:

~~~css
section {
  width: 50vw; /* El ancho será el 50% del ancho de la ventana gráfica */
}
~~~

* **vh (viewport height):** La unidad vh representa un porcentaje de la altura de la ventana gráfica (viewport) del dispositivo. Por ejemplo, 30vh sería el 30% de la altura de la ventana gráfica. Por ejemplo:

~~~css
header {
  height: 40vh; /* La altura será el 40% de la altura de la ventana gráfica */
}
~~~

Estas unidades de medida relativas son especialmente útiles para crear diseños responsivos y adaptables a diferentes tamaños de pantalla. Al utilizar unidades relativas, los elementos se ajustarán automáticamente según el contexto, lo que facilita la creación de diseños flexibles y proporcionales.

## Colores RGB 

En CSS, los colores RGB (Rojo, Verde, Azul) se definen utilizando la función de color rgb(), donde se especifican los valores numéricos o porcentajes para las componentes roja, verde y azul. Aquí tienes un ejemplo de código CSS que utiliza colores RGB:

~~~css
h1 {
  color: rgb(183, 21, 64);
}
~~~

En este ejemplo, el color del elemento h1 se define utilizando la función rgb() con los valores (183, 21, 64), que representan una combinación específica de rojo, verde y azul.

Los valores numéricos en la función rgb() deben estar en el rango de 0 a 255, mientras que los porcentajes deben estar entre 0% y 100%. La escala RGB funciona de manera que 255 equivale al 100% y 0 equivale al 0%.

Para establecer el color negro en RGB, se puede utilizar rgb(0, 0, 0), que indica cero de rojo, cero de verde y cero de azul. También se puede escribir como rgb(0%, 0%, 0%). Por otro lado, el blanco se representa con rgb(255, 255, 255) o rgb(100%, 100%, 100%), ya que tiene el valor máximo para cada componente de color.

Es posible añadir un valor alfa (transparencia) a través de la función rgb() de dos formas. Puedes agregar una barra diagonal (/) después de los valores de rojo, verde y azul, o utilizar la función rgba(). El valor alfa puede ser un porcentaje o un decimal entre 0 y 1. Por ejemplo, para establecer un color negro con un 50% de transparencia en los navegadores modernos, puedes escribir rgb(0, 0, 0, 50%) o rgb(0, 0, 0, 0.5). Para una compatibilidad más amplia, puedes utilizar la función rgba(): rgba(0, 0, 0, 50%) o rgba(0, 0, 0, 0.5).

Es importante mencionar que en la notación rgb() y hsl(), las comas han sido reemplazadas por espacios, ya que las funciones de color más nuevas, como lab() y lch(), utilizan espacios como delimitadores. Este cambio proporciona más consistencia no solo con las funciones de color más nuevas, sino con CSS en general. Sin embargo, aún es posible utilizar comas para definir los valores en rgb() y hsl() con fines de compatibilidad con versiones anteriores.

## HLS

En CSS, el modelo de color HSL (Hue, Saturation, Lightness) proporciona otra forma de especificar colores. En este modelo, el tono representa el valor en la rueda de colores, la saturación define la intensidad o vibrancia del color, y la luminosidad indica la claridad o la cantidad de luz en el color. Aquí tienes un ejemplo de código CSS que utiliza colores HSL:

~~~css
h1 {
  color: hsl(344, 79%, 40%);
}
~~~

En este ejemplo, el color del elemento h1 se define utilizando la función hsl() con los valores (344, 79%, 40%), que representan un tono específico, una saturación y una luminosidad.

El tono se mide en grados en la rueda de colores, donde 0 y 360 representan el rojo, y los valores entre ellos representan diferentes colores. Por ejemplo, un tono de 180 representa el rango azul. La saturación se define en porcentaje y determina la vibrancia del color. Una saturación del 0% resultará en un tono desaturado y en escala de grises. La luminosidad también se define en porcentaje y describe la escala de blanco a negro del color. Una luminosidad del 100% dará como resultado el color blanco.

Puedes definir el color negro en HSL utilizando hsl(0, 0%, 0%), ya que tanto la saturación como la luminosidad se establecen en 0%. También puedes utilizar hsl(0deg, 0%, 0%), donde el parámetro de tono se especifica en grados. Además, el tipo de ángulo en CSS permite utilizar unidades como grados, vueltas, radianes y gradianes.

Al igual que con los colores RGB, también puedes añadir un valor alfa (transparencia) a través de la función hsl(). Puedes agregar una barra diagonal (/) después de los parámetros de tono, saturación y luminosidad, o utilizar la función hsla(). El valor alfa puede ser un porcentaje o un decimal entre 0 y 1. Por ejemplo, para configurar un negro con un 50% de transparencia, puedes escribir hsl(0, 0%, 0%, 50%) o hsl(0, 0%, 0%, 0.5). Con la función hsla(), sería: hsla(0, 0%, 0%, 50%) o hsla(0, 0%, 0%, 0.5).

Es importante destacar que existen otros tipos de color más nuevos en CSS, como lab() y lch(), que permiten especificar una amplia gama de colores más allá de lo que es posible con RGB. Sin embargo, el uso de estos tipos de color más avanzados puede requerir un mayor nivel de soporte del navegador.