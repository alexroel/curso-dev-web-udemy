# Variables y funciones

## Temario
¿Qué es una función y una variable?
Selectores funcionales
Variables en CSS
Expresiones matemáticas
Funciones de formas



## ¿Qué es una función y una variable?

En CSS, una variable es un contenedor que almacena un valor que se puede reutilizar y actualizar fácilmente en diferentes partes de una hoja de estilo. 

### ¿Qué es una función? 
Una función es una pieza de código independiente con nombre que completa una tarea específica. Se nombra una función para que pueda llamarla dentro de su código y pueda pasar datos a la función. Esto se conoce como pasar argumentos.

Muchas funciones CSS son funciones puras , lo que significa que si les pasas los mismos argumentos, siempre te devolverán el mismo resultado, independientemente de lo que suceda en el resto de tu código. Estas funciones a menudo volverán a calcularse a medida que cambien los valores en su CSS, de manera similar a otros elementos en el lenguaje, como valores en cascada calculados como currentColor.

En CSS, solo puede usar las funciones proporcionadas, en lugar de escribir las suyas propias, pero las funciones se pueden anidar entre sí en algunos contextos, dándoles más flexibilidad. Cubriremos eso con más detalle, más adelante en este módulo.

## Selectores funcionales

Los selectores funcionales en CSS son una característica avanzada que permite agrupar varios selectores en una sola declaración. Esto se logra utilizando las funciones :is() y :not() para evaluar selectores CSS y aplicar estilos a los elementos que coincidan con esos selectores.

La función :is() permite agrupar múltiples selectores en una sola expresión, de modo que si alguno de los selectores coincide con un elemento, se aplicarán los estilos correspondientes. Por ejemplo:

~~~css
.post :is(h1, h2, h3) {
  line-height: 1.2;
}
~~~

En este caso, se seleccionan todos los elementos h1, h2 y h3 que se encuentren dentro de un elemento con la clase .post, y se les aplica un espaciado de línea de 1.2.

La función :not() se utiliza para seleccionar elementos que no coincidan con un selector específico. Por ejemplo:

~~~css
.post :not(p) {
  margin-bottom: 10px;
}
~~~

En este caso, se seleccionan todos los elementos dentro de un elemento con la clase .post que no sean elementos p, y se les aplica un margen inferior de 10px.

Estos selectores funcionales son especialmente útiles cuando se desea aplicar estilos a varios elementos de forma eficiente y concisa. Permiten simplificar el código CSS y evitar la repetición de estilos similares.

Aquí hay algunos ejemplos adicionales de selectores funcionales:

~~~css
:is(h1, h2, h3) {
  color: blue;
}

:not(p) {
  background-color: gray;
}

:is(input[type="text"], textarea) {
  border: 1px solid black;
}
~~~

En estos ejemplos, se seleccionan elementos h1, h2 y h3 para aplicarles un color azul, se seleccionan todos los elementos que no son p para aplicarles un fondo gris, y se seleccionan los elementos input de tipo "text" y textarea para aplicarles un borde negro de 1px.

Los selectores funcionales son una herramienta útil en CSS para realizar selecciones más flexibles y expresivas. Permiten combinar selectores y aplicar estilos de manera eficiente, mejorando la legibilidad y mantenibilidad del código CSS.

## Variables en CSS


Las propiedades personalizadas y la función var() son características poderosas de CSS que permiten el uso de variables para almacenar y reutilizar valores en el código CSS. Estas variables, también conocidas como custom properties, facilitan la gestión y la actualización de estilos en una hoja de estilo.

Para definir una propiedad personalizada, se utiliza el selector :root para establecer la variable y asignarle un valor. El prefijo -- indica que se trata de una propiedad personalizada. Por ejemplo:

~~~css
:root {
  --base-color: #ff00ff;
}
~~~

En este caso, se define una variable llamada --base-color y se le asigna el valor #ff00ff, que es un tono de magenta.

Luego, en cualquier parte del código CSS, se puede utilizar la función var() para hacer referencia a esa variable y utilizar su valor. Por ejemplo:

~~~css
.my-element {
  background: var(--base-color);
}
~~~

En este ejemplo, la propiedad background de la clase .my-element utilizará el valor de la variable --base-color como color de fondo.

Es importante tener en cuenta que la función var() también acepta un segundo argumento opcional, que se utilizará como valor de reserva en caso de que la variable no esté definida. Por ejemplo:

~~~css
.my-element {
  background: var(--base-color, hotpink);
}
~~~

En este caso, si la variable --base-color no está definida, se utilizará el color hotpink como valor de fondo para la clase .my-element.

Las propiedades personalizadas y la función var() ofrecen flexibilidad y modularidad al código CSS, ya que permiten definir y reutilizar valores en múltiples lugares. Esto facilita la personalización y el mantenimiento de estilos en un proyecto.

Recuerda que las propiedades personalizadas y la función var() son compatibles con la mayoría de los navegadores modernos, pero es importante verificar la compatibilidad en los navegadores objetivo de tu proyecto.

## Funciones de colores
## Expresiones matemáticas

Las funciones matemáticas en CSS son herramientas poderosas que permiten realizar cálculos y manipulaciones numéricas dentro de tus estilos. A continuación, se ampliará la explicación de las funciones y se proporcionarán ejemplos adicionales:

* **calc():** La función calc() permite realizar cálculos aritméticos con diferentes unidades y valores numéricos. Puedes usar operadores matemáticos como suma (+), resta (-), multiplicación (*) y división (/) dentro de la expresión. Ejemplo:
    ~~~css
    .my-element {
      width: calc(100% - 20px); /* El ancho se calculará como el 100% del elemento contenedor menos 20 píxeles */
      height: calc(50vh + 10em); /* La altura se calculará como el 50% de la altura de la ventana gráfica más 10 unidades de em */
    }
    ~~~

* **min():** La función min() devuelve el valor más pequeño entre dos o más argumentos. Puedes usarla para establecer un valor mínimo en función de diferentes opciones. Ejemplo:
    ~~~css
    .my-element {
      width: min(200px, 50%); /* El ancho se establecerá como el valor más pequeño entre 200 píxeles y el 50% del elemento contenedor */
      font-size: min(16px, 1.2rem, 1.5vw); /* El tamaño de fuente se establecerá como el valor más pequeño entre 16 píxeles, 1.2 rem y el 1.5% del ancho de la ventana gráfica */
    }
    ~~~

* **max():** La función max() devuelve el valor más grande entre dos o más argumentos. Puedes usarla para establecer un valor máximo en función de diferentes opciones. Ejemplo:

    ~~~css
    .my-element {
      height: max(300px, 60%); /* La altura se establecerá como el valor más grande entre 300 píxeles y el 60% del elemento contenedor */
      opacity: max(0.5, 0.8, 0.3); /* La opacidad se establecerá como el valor más grande entre 0.5, 0.8 y 0.3 */
    }
    ~~~

* **clamp():** La función clamp() permite establecer un rango de valores para una propiedad. Toma tres argumentos: el valor mínimo, el valor preferido y el valor máximo. La propiedad se establecerá con el valor preferido si está dentro del rango, de lo contrario, se utilizará el valor mínimo o máximo. Ejemplo:

    ~~~css
    .my-element {
      font-size: clamp(16px, 3vw, 24px); /* El tamaño de fuente se ajustará según el ancho de la ventana gráfica, con un tamaño mínimo de 16 píxeles y un máximo de 24 píxeles */
      padding: clamp(10px, 5%, 50px); /* El relleno se ajustará según el ancho del elemento, con un tamaño mínimo de 10 píxeles y un máximo de 50 píxeles */
    }
    ~~~

Estas funciones matemáticas te permiten crear estilos más dinámicos y adaptables, ya que puedes utilizar valores calculados en función de diferentes factores, como el tamaño de la ventana gráfica o las dimensiones de los elementos contenedores. 

Experimenta con diferentes expresiones y unidades para logLas funciones matemáticas en CSS son herramientas poderosas que permiten realizar cálculos y manipulaciones numéricas dentro de tus estilos. A continuación, se ampliará la explicación de las funciones y se proporcionarán ejemplos adicionales:

* **calc():** La función calc() permite realizar cálculos aritméticos con diferentes unidades y valores numéricos. Puedes usar operadores matemáticos como suma (+), resta (-), multiplicación (*) y división (/) dentro de la expresión. Ejemplo:

    ~~~css
    .my-element {
      width: calc(100% - 20px); /* El ancho se calculará como el 100% del elemento contenedor menos 20 píxeles */
      height: calc(50vh + 10em); /* La altura se calculará como el 50% de la altura de la ventana gráfica más 10 unidades de em */
    }
    ~~~

* **min():** La función min() devuelve el valor más pequeño entre dos o más argumentos. Puedes usarla para establecer un valor mínimo en función de diferentes opciones. Ejemplo:

    ~~~css
    .my-element {
      width: min(200px, 50%); /* El ancho se establecerá como el valor más pequeño entre 200 píxeles y el 50% del elemento contenedor */
      font-size: min(16px, 1.2rem, 1.5vw); /* El tamaño de fuente se establecerá como el valor más pequeño entre 16 píxeles, 1.2 rem y el 1.5% del ancho de la ventana gráfica */
    }
    ~~~

* **max():** La función max() devuelve el valor más grande entre dos o más argumentos. Puedes usarla para establecer un valor máximo en función de diferentes opciones. Ejemplo:

    ~~~css
    .my-element {
      height: max(300px, 60%); /* La altura se establecerá como el valor más grande entre 300 píxeles y el 60% del elemento contenedor */
      opacity: max(0.5, 0.8, 0.3); /* La opacidad se establecerá como el valor más grande entre 0.5, 0.8 y 0.3 */
    }
    ~~~

* **clamp():** La función clamp() permite establecer un rango de valores para una propiedad. Toma tres argumentos: el valor mínimo, el valor preferido y el valor máximo. La propiedad se establecerá con el valor preferido si está dentro del rango, de lo contrario, se utilizará el valor mínimo o máximo. Ejemplo:

    ~~~css
    .my-element {
      font-size: clamp(16px, 3vw, 24px); /* El tamaño de fuente se ajustará según el ancho de la ventana gráfica, con un tamaño mínimo de 16 píxeles y un máximo de 24 píxeles */
      padding: clamp(10px, 5%, 50px); /* El relleno se ajustará según el ancho del elemento, con un tamaño mínimo de 10 píxeles y un máximo de 50 píxeles */
    }
    ~~~

Estas funciones matemáticas te permiten crear estilos más dinámicos y adaptables, ya que puedes utilizar valores calculados en función de diferentes factores, como el tamaño de la ventana gráfica o las dimensiones de los elementos contenedores. 

Experimenta con diferentes expresiones y unidades para lograr diseños más flexibles y responsivos.

Aquí hay más ejemplos de uso de las funciones matemáticas en CSS:

~~~css
.my-element {
  width: calc(50% + 10px); /* El ancho se calculará como el 50% del elemento contenedor más 10 píxeles */
  margin: min(2rem, 10%); /* El margen será el valor más pequeño entre 2rem y el 10% del ancho del elemento contenedor */
  font-size: max(16px, 1.2rem, 2vw); /* El tamaño de fuente será el valor más grande entre 16 píxeles, 1.2 rem y el 2% del ancho de la ventana gráfica */
  padding: clamp(20px, 5%, 100px); /* El relleno se ajustará según el ancho del elemento, con un tamaño mínimo de 20 píxeles, un tamaño máximo de 100 píxeles y un valor preferido del 5% del ancho del elemento */
}
~~~

Recuerda que las funciones matemáticas en CSS son evaluadas por el navegador, por lo que los resultados se actualizan automáticamente cuando cambian los valores relacionados, como el tamaño de la ventana gráfica. Esto permite que tus estilos se adapten de manera dinámica a diferentes situaciones y dispositivos.

Además de las funciones calc(), min(), max() y clamp(), existen otras funciones matemáticas en CSS, como abs(), sqrt(), pow(), sin(), cos(), tan(), entre otras. Estas funciones se utilizan para realizar cálculos más complejos y se aplican principalmente en combinación con otras propiedades, como transformaciones o animaciones.

Experimenta con las funciones matemáticas en CSS y utilízalas para crear estilos más dinámicos y adaptativos. Puedes combinarlas con otras características de CSS, como los media queries, para crear diseños que se ajusten perfectamente a diferentes dispositivos y contextos.

## Funciones de formas

Las funciones de transformación en CSS te permiten realizar cambios visuales en los elementos de tu página. A continuación, se ampliará la explicación y se proporcionarán ejemplos adicionales de cada función de transformación:

* **rotate():** La función rotate() te permite rotar un elemento en el plano 2D. Puedes especificar el ángulo de rotación en grados utilizando valores positivos o negativos. Ejemplo:

    ~~~css
    .my-element {
      transform: rotate(45deg); /* Rota el elemento 45 grados en sentido horario */
    }
    ~~~

* **rotateX(), rotateY() y rotateZ():** Estas funciones te permiten rotar un elemento alrededor de un eje específico en el espacio 3D. Puedes utilizar unidades de grados, radianes o giros para definir la rotación. Ejemplo:

    ~~~css
    .my-element {
      transform: rotateX(45deg) rotateY(30deg) rotateZ(-15deg); /* Rota el elemento en los ejes X, Y y Z */
    }
    ~~~

* **rotate3d():** La función rotate3d() te permite especificar las coordenadas X, Y y Z junto con el ángulo de rotación. Esto te brinda un mayor control sobre la dirección de la rotación en el espacio 3D. Ejemplo:

~~~css
.my-element {
  transform: rotate3d(1, 1, 1, 45deg); /* Rota el elemento alrededor del eje diagonal XYZ */
}
~~~

* **scale(), scaleX() y scaleY():** Estas funciones te permiten escalar un elemento en el plano 2D. Puedes especificar un factor de escala positivo o negativo para cambiar el tamaño del elemento. Ejemplo:

    ~~~css
    .my-element {
      transform: scaleX(1.5) scaleY(0.8); /* Escala el elemento en los ejes X e Y */
    }
    ~~~
* **scale3d():** La función scale3d() te permite especificar los factores de escala para los ejes X, Y y Z en el espacio 3D. Esto te brinda un mayor control sobre la escala del elemento en todas las direcciones. Ejemplo:

    ~~~css
    .my-element {
      transform: scale3d(1.2, 0.8, 1); /* Escala el elemento en los ejes X, Y y Z */
    }
    ~~~

* **translate(), translateX() y translateY():** Estas funciones te permiten mover un elemento a lo largo del plano 2D. Puedes especificar valores de longitud o porcentaje para definir la cantidad de desplazamiento. Ejemplo:

~~~css
.my-element {
  transform: translateX(50px) translateY(-20px); /* Mueve el elemento 50 píxeles a la derecha y 20 píxeles hacia arriba */
}
~~~

* **translate3d():** La función translate3d() te permite especificar los desplazamientos en los ejes X, Y y Z en el espacio 3D. Esto te brinda un mayor control sobre el movimiento del elemento en todas las direcciones. Ejemplo:

    ~~~css
    .my-element {
      transform: translate3d(50px, -20px, 0); /* Mueve el elemento 50 píxeles a la derecha, 20 píxeles hacia arriba y sincambio en la profundidad */
    }
    ~~~

* **`skew()`, `skewX()` y `skewY()`:** Estas funciones te permiten sesgar un elemento en el plano 2D. Puedes especificar ángulos de sesgo en grados para afectar la inclinación del elemento. Si solo se define un argumento, el sesgo se aplicará en un solo eje, mientras que si se definen ambos, se aplicará en ambos ejes de forma independiente. Ejemplo:

~~~css
.my-element {
  transform: skew(10deg); /* Sesga el elemento en ambos ejes */
}
~~~

* **perspective():** La función perspective() se utiliza junto con la propiedad perspective para crear una ilusión de profundidad en elementos 3D. Define la distancia entre el observador y el plano Z. Ejemplo:

~~~css
.my-element {
  perspective: 800px; /* Establece la perspectiva en 800 píxeles */
}
~~~

Estas funciones de transformación te permiten aplicar efectos visuales interesantes y crear animaciones dinámicas en tus elementos. Puedes combinar varias funciones de transformación en una sola regla transform para lograr resultados más complejos. Experimenta con diferentes valores y propiedades para obtener los efectos deseados.

Aquí tienes algunos ejemplos adicionales de uso de funciones de transformación en CSS:

~~~css
.my-element {
  transform: rotate(45deg) scale(1.2) translateX(50px);
}

.my-element {
  transform: rotateY(180deg) scale3d(1.5, 1.5, 1.5) translateY(-20px);
}

.my-element {
  transform: skewX(30deg) translate3d(100px, -50px, 0);
}
~~~

Recuerda que las funciones de transformación se aplican en el orden en que se definen, por lo que puedes combinar varias transformaciones para obtener el resultado deseado. Además, ten en cuenta la compatibilidad con navegadores para asegurarte de que las funciones sean compatibles con los navegadores que estás utilizando.