# Flexbox

## Temario

¿Qué se puede hacer con flexbox?
Creando un contenedor flexbox
Contenedor con flexbox
Elementos con flexbox

## ¿Qué se puede hacer con flexbox?

Flexbox es un modelo de distribución en CSS que revoluciona la forma en que organizamos y alineamos elementos en una página web. Con Flexbox, podemos distribuir grupos de elementos en una dimensión, ya sea horizontal o verticalmente, de manera eficiente y fácil de mantener.

La introducción de Flexbox ha sido un gran avance para el diseño responsivo y la creación de diseños fluidos. Antes de Flexbox, lograr diseños complejos y flexibles requería un esfuerzo considerable y el uso de técnicas de posicionamiento complicadas. Con Flexbox, podemos lograr diseños complejos de manera más sencilla y eficiente.

Flexbox nos permite alinear elementos y distribuir el espacio disponible de forma inteligente. Podemos controlar el tamaño de los elementos, su orden, su alineación y la distribución del espacio entre ellos con propiedades simples y poderosas. Esto nos brinda un mayor control y flexibilidad en el diseño de nuestras páginas web.

Además, Flexbox es altamente compatible con los navegadores modernos, lo que significa que podemos utilizarlo en la mayoría de los proyectos sin preocuparnos por problemas de compatibilidad. Esto lo convierte en una herramienta confiable y ampliamente adoptada en la comunidad de desarrollo web.

En resumen, Flexbox es una técnica de distribución en CSS que nos permite crear diseños responsivos y fluidos de manera más eficiente. Nos brinda un mayor control sobre la alineación, el orden y la distribución de los elementos en una página web. Con Flexbox, podemos crear diseños complejos de forma más sencilla y mejorar la experiencia de los usuarios al adaptar el diseño a diferentes tamaños de pantalla.

## Conceptos clave de Flexbox

En Flexbox, existen algunos conceptos clave que debemos comprender para utilizarlo de manera efectiva. Estos conceptos nos ayudarán a entender cómo se distribuyen y alinean los elementos en un diseño flexible. Veamos estos conceptos más detalladamente:

* **Eje principal y eje transversal:**
En Flexbox, los elementos se distribuyen a lo largo de dos ejes: el eje principal y el eje transversal. El eje principal es la dirección principal en la que los elementos se distribuyen, ya sea horizontalmente o verticalmente. Por otro lado, el eje transversal es la dirección perpendicular al eje principal.
Ejemplo:

~~~css
.container {
  display: flex;
  flex-direction: row;
  /* El eje principal es horizontal */
}
~~~

* **Dirección de los elementos:**
La propiedad flex-direction se utiliza para controlar la dirección en la que los elementos se distribuyen dentro del contenedor flex. Puede establecer valores como "row" (fila), "column" (columna), "row-reverse" (fila invertida) y "column-reverse" (columna invertida) para cambiar la dirección de los elementos.
Ejemplo:

~~~css
.container {
  display: flex;
  flex-direction: column;
  /* Los elementos se distribuyen en una columna */
}
~~~

* **Contenedor flex:**
Para utilizar Flexbox, es necesario declarar el contenedor como un contexto de formato flex. Esto se logra estableciendo la propiedad display en "flex" para el contenedor. Al hacer esto, el contenedor se convierte en un contenedor flex y los elementos secundarios se comportan como elementos flexibles.
Ejemplo:

~~~css
.container {
  display: flex;
  /* El contenedor se convierte en un contenedor flex */
}
~~~

Estos conceptos son fundamentales para comprender cómo se organizan y alinean los elementos en un diseño flexbox. Al manipular el eje principal, el eje transversal y la dirección de los elementos, podemos lograr diferentes distribuciones y diseños flexibles.

Es importante tener en cuenta que estos conceptos se aplican a nivel de contenedor. Cada contenedor flex puede tener su propia configuración de ejes principales y transversales, lo que permite una mayor flexibilidad en el diseño de la página.

Recuerda practicar con diferentes configuraciones y explorar cómo estos conceptos influyen en la distribución de los elementos en tus diseños flexbox.

## Distribución de elementos con Flexbox

Flexbox proporciona diversas características que permiten distribuir los elementos de manera flexible y dinámica. Estas características son fundamentales para lograr diseños fluidos y responsivos en CSS. Algunas de las principales características de distribución en Flexbox son:

* **Alineación de elementos:** Flexbox ofrece propiedades como justify-content y align-items que permiten alinear los elementos a lo largo del eje principal y el eje transversal respectivamente. Esto es especialmente útil cuando se desea alinear los elementos horizontal o verticalmente dentro de un contenedor flex.
Ejemplo:

~~~css
.container {
  display: flex;
  justify-content: center; /* Alineación horizontal al centro */
  align-items: center; /* Alineación vertical al centro */
}
~~~

* **Orden de los elementos:** La propiedad order en Flexbox permite cambiar el orden visual de los elementos sin afectar el orden en el documento HTML. Esto brinda flexibilidad para reorganizar visualmente los elementos y lograr diseños personalizados.
Ejemplo:

~~~css
.item {
  order: 2; /* Cambia el orden visual del elemento */
}
~~~

* **Distribución del espacio disponible:** Flexbox permite distribuir automáticamente el espacio disponible entre los elementos utilizando las propiedades flex-grow, flex-shrink y flex-basis. Estas propiedades determinan cómo los elementos crecen, se contraen y se ajustan dentro del contenedor flex, garantizando un uso eficiente del espacio.
Ejemplo:

~~~css
.container {
  display: flex;
}

.item {
  flex-grow: 1; /* Permite que el elemento crezca para ocupar espacio adicional */
  flex-shrink: 0; /* Evita que el elemento se contraiga cuando hay falta de espacio */
  flex-basis: auto; /* Establece el tamaño inicial del elemento */
}
~~~

Estas características de distribución en Flexbox brindan un gran control sobre la disposición y el flujo de los elementos dentro de un contenedor flex. Al aprovechar estas propiedades, es posible crear diseños flexibles y adaptativos que se ajusten a diferentes tamaños de pantalla y requisitos de diseño.

Recuerde experimentar con las propiedades de alineación, orden y distribución de espacio en Flexbox para lograr el resultado deseado en sus diseños.

## Diseños flexibles con Flexbox

Flexbox es una herramienta poderosa para crear diseños flexibles y responsivos en una página web. A continuación, exploraremos algunas técnicas comunes para crear diseños utilizando Flexbox:

* **Diseño de una sola columna:**
Puede utilizar Flexbox para crear un diseño de una sola columna que se adapte automáticamente al ancho del contenedor. Esto es útil cuando se desea que el contenido fluya de manera lineal y se ajuste a diferentes tamaños de pantalla. Veamos un ejemplo:
~~~css
.container {
  display: flex;
  flex-direction: column;
}
~~~

* **Diseño de varias columnas:**
Flexbox también permite crear diseños de varias columnas con elementos flexibles que se ajustan automáticamente al espacio disponible. Esto es especialmente útil cuando se desea mostrar contenido en columnas equitativas. Veamos un ejemplo:
~~~css
.container {
  display: flex;
  flex-wrap: wrap;
}

.column {
  flex-basis: 50%;
}
~~~

* **Diseño de barra lateral:**
Flexbox es ideal para crear una barra lateral que se alinee con el contenido principal y se adapte a diferentes tamaños de pantalla. Esto proporciona un diseño fluido y responsivo. Veamos un ejemplo:
~~~css
.container {
  display: flex;
}

.sidebar {
  flex: 0 0 25%;
}

.content {
  flex: 1;
}
~~~

En este ejemplo, la barra lateral tiene un ancho fijo del 25% del contenedor, mientras que el contenido principal ocupa el resto del espacio disponible.

Estos son solo algunos ejemplos de cómo utilizar Flexbox para crear diseños flexibles. Con Flexbox, tienes la flexibilidad de ajustar y personalizar los diseños según tus necesidades. Recuerda experimentar y explorar diferentes combinaciones de propiedades de Flexbox para lograr el diseño deseado.

La capacidad de crear diseños flexibles y responsivos con Flexbox es una de las razones por las que se ha convertido en una herramienta fundamental en el desarrollo web moderno.

## Propiedades adicionales de Flexbox

* **Flex-wrap:** Esta propiedad permite controlar si los elementos flexibles se ajustan en una sola línea o se envuelven en varias líneas cuando no hay suficiente espacio disponible. Al establecer el valor "wrap", los elementos se envolverán en líneas adicionales según sea necesario.

Ejemplo:
~~~css
.container {
display: flex;
flex-wrap: wrap;
}
~~~

* **Flex-grow:** Esta propiedad determina cómo se distribuye el espacio adicional entre los elementos cuando hay espacio disponible. Los elementos flexibles con un valor mayor de flex-grow se expandirán más que los elementos con un valor menor.

Ejemplo:
~~~css
.item {
flex-grow: 1;
}
~~~

* **Flex-shrink:** Esta propiedad especifica cómo se reduce el tamaño de los elementos cuando no hay suficiente espacio disponible. Los elementos flexibles con un valor mayor de flex-shrink se reducirán más que los elementos con un valor menor.

Ejemplo:
~~~css
.item {
flex-shrink: 0;
}
~~~

* **Flex-basis:** La propiedad flex-basis establece el tamaño inicial de los elementos antes de que se distribuya el espacio adicional. Puede establecer un valor específico en píxeles o porcentaje para definir el tamaño inicial de los elementos.

Ejemplo:
~~~css
.item {
flex-basis: 200px;
}
~~~

* **Align-self:** Esta propiedad permite alinear de manera individual un elemento específico dentro del contenedor flex, anulando la alineación predeterminada establecida por align-items. Puede utilizar valores como "flex-start", "flex-end", "center", "baseline" y "stretch" para alinear el elemento según sus necesidades.

Ejemplo:
~~~css
.item {
align-self: flex-start;
}
~~~

* **Flex-flow:** Esta propiedad es una forma abreviada de combinar las propiedades flex-direction y flex-wrap en una sola declaración. Puede establecer los valores de ambas propiedades en una sola declaración para controlar la dirección y el ajuste de los elementos flexibles.

Ejemplo:
~~~css
.container {
flex-flow: row wrap;
}
~~~

Estas propiedades adicionales de Flexbox brindan un mayor control sobre el comportamiento y la apariencia de los elementos flexibles. Puede utilizar estas propiedades de manera individual o en combinación para lograr diseños flexibles y responsivos en CSS. Experimente con diferentes valores y observe cómo afectan el diseño de sus elementos flexibles.