# Introducción HTML

1. [Introducción](#introducción)
2. [¿Qué es HTML?](#¿qué-es-html?)
3. [Sintaxis y etiquetas](#sintaxis-y-etiquetas)
4. [Estructura base de un documento HTML](#estructura-base-de-un-documento-html)
5. [Encabezados y comentarios](#encabezados-y-comentarios)
6. [Etiquetas de texto](#etiquetas-de-texto)
7. [Ejemplos sobre etiquetas de texto](#ejemplos-sobre-etiquetas-de-texto)
8. [Código HTML](#código-html)
9. [Herramienta para desarrollador](#herramienta-para-desarrollador)
10. [Resumen](#resumen)

---

## Introducción

![Descripción de la imagen](../img/20.jpg)
![Descripción de la imagen](../img/21.jpg)

HTML, siglas de HyperText Markup Language (Lenguaje de Marcado de Hipertexto), es el lenguaje estándar utilizado para crear y estructurar el contenido de las páginas web. Permite definir la estructura y presentación de los elementos de una página, como encabezados, párrafos, enlaces, imágenes y más.

La sintaxis de HTML se basa en el uso de etiquetas, que son elementos marcados por "<>" (corchetes angulares). Las etiquetas se utilizan para envolver el contenido y darle significado, como indicar un título, un párrafo o un enlace.

Un documento HTML básico tiene una estructura base que incluye las etiquetas `<html>`, `<head>` y `<body>`. El elemento `<html>` envuelve todo el contenido de la página, el `<head>` contiene información sobre el documento, como el título de la página y enlaces a archivos externos, y el `<body>` contiene el contenido visible de la página.

Los encabezados (`<h1>` a `<h6>`) se utilizan para resaltar títulos y subtitulos en el contenido. Los comentarios en HTML se escriben entre "<!--" y "-->", y se utilizan para añadir notas o aclaraciones en el código que no se mostrarán en la página web.

Existen etiquetas de texto para dar formato al contenido, como `<p>` para párrafos, `<strong>` para resaltar en negrita, `<em>` para resaltar en cursiva, `<u>` para subrayar, entre otras. Estas etiquetas permiten dar estructura y estilo al texto.

HTML se escribe en archivos con extensión ".html". Puedes crear y editar archivos HTML con cualquier editor de texto, como el Bloc de notas, o utilizar herramientas específicas para desarrollo web, como Visual Studio Code, Sublime Text o Atom.

Para ver el resultado de tu código HTML, puedes abrir el archivo en un navegador web. Los navegadores modernos tienen herramientas para desarrolladores que permiten inspeccionar y depurar el código HTML, así como realizar pruebas y ajustes en tiempo real.

Esta es solo una breve introducción a HTML. A medida que profundices en el lenguaje, podrás aprender más etiquetas, atributos y técnicas para crear páginas web completas y funcionales.

---

## ¿Qué es HTML?

![Descripción de la imagen](../img/22.jpg)

HTML significa "HyperText Markup Language" (Lenguaje de Marcado de Hipertexto), y es el lenguaje utilizado para crear y estructurar el contenido de las páginas web.

En términos más simples, HTML es un conjunto de etiquetas (o "marcas") que se utilizan para describir el contenido de una página web. Las etiquetas se utilizan para definir los elementos como títulos, párrafos, enlaces, imágenes, listas, formularios, entre otros.

HTML es el lenguaje básico de la web y es interpretado por los navegadores web. Cuando creas una página web en HTML, tu navegador interpreta el código HTML y muestra el contenido en pantalla.

![Descripción de la imagen](../img/23.jpg)

El HTML se ha ido actualizando a lo largo de los años, con la última versión siendo HTML5. HTML5 ha introducido nuevas características y etiquetas que hacen más fácil crear sitios web modernos y eficientes.

---

## Sintaxis y etiquetas

![Descripción de la imagen](../img/25.jpg)

La sintaxis de HTML consiste en etiquetas que se utilizan para crear elementos. Una etiqueta HTML consta de un nombre de etiqueta rodeado de corchetes angulares `< >`.

Los elementos pueden tener atributos que se utilizan para proporcionar información adicional sobre el elemento. Los atributos se agregan a la etiqueta de apertura del elemento y constan de un nombre y un valor, separados por un signo igual.

La mayoría de los elementos de HTML tienen una etiqueta de apertura y una etiqueta de cierre, que se utilizan para indicar el comienzo y el final del elemento. El contenido del elemento se coloca entre las etiquetas de apertura y cierre.

Aquí hay algunos ejemplos de etiquetas HTML comunes:

- `<html>`: Define el inicio del documento HTML.
- `<head>`: Define la sección de encabezado del documento.
- `<title>`: Define el título del documento, que aparece en la pestaña del navegador.
- `<body>`: Define la sección principal del documento, que contiene todo el contenido visible.
`<h1>` a `<h6>`: Define encabezados con diferentes niveles de importancia.
`<p>`: Define un párrafo de texto.
`<img>`: Inserta una imagen en el documento.
`<a>`: Define un enlace a otro documento o recurso web.

Además, hay etiquetas HTML que no tienen etiqueta de cierre, como `<br>` para salto de línea y `<hr>` para una línea horizontal. Estas etiquetas se denominan etiquetas de "autocierre".

### Partes de un elemento HTML

- **Etiqueta de apertura**: indica el inicio del elemento y el tipo de elemento que se está utilizando. Se escribe entre corchetes angulares `< >` y puede incluir atributos. Por ejemplo, `<p>` es la etiqueta de apertura para un párrafo.

- **Contenido**: es el texto o elementos que se encuentran dentro del elemento. Por ejemplo, el texto que se escribe dentro de la etiqueta de apertura y cierre de un párrafo `<p>`y `</p>`.

- **Etiqueta de cierre**: indica el final del elemento y se escribe entre corchetes angulares, con una barra diagonal antes del nombre del elemento. Por ejemplo, `</p>` es la etiqueta de cierre para un párrafo.

- **Atributos**: proporcionan información adicional sobre el elemento y se utilizan para personalizar el comportamiento o la apariencia del elemento. Se escriben dentro de la etiqueta de apertura y consisten en un nombre y un valor, separados por un signo igual. Por ejemplo, el atributo `src` se utiliza para especificar la URL de una imagen en un elemento `<img>`.

#### Ejemplos de un elemento HTML

Aquí hay un ejemplo de un elemento HTML que muestra un párrafo:

~~~html
<p>Este es un párrafo de ejemplo.</p>
~~~

- **Etiqueta de apertura**: `<p>`
- **Contenido**: "Este es un párrafo de ejemplo."
- **Etiqueta de cierre**: </p>

Aquí hay un ejemplo de un elemento que muestra una imagen con atributos.

~~~html
<img src="roelcode.png" alt="Logo de roelcode">
~~~

- **Atributos**: `src` con valor "`roelcode.png`" y `alt` con valor "`Logo de roelcode`".
Es importante tener en cuenta que no todos los elementos HTML tienen contenido o atributos, pero la mayoria ellos tienen etiquetas de apertura y cierre.

---

## Estructura base de un documento HTML

![Descripción de la imagen](../img/26.jpg)

La estructura básica de un documento HTML consta de dos partes principales: el encabezado (head) y el cuerpo (body). Aquí hay un ejemplo de la estructura básica de un documento HTML:

~~~html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi página</title>
</head>
<body>
    <!-- Contenido de la página -->
    <h1>Hola Mundo</h1>
    <p>Este es mi primer párrafo de ejemplo.</p>
</body>
</html>
~~~

El código HTML proporcionado es la estructura básica de una página web y consta de los siguientes elementos:

- `<!DOCTYPE html>`: Declaración de tipo de documento HTML, que indica que el documento es un archivo HTML5.

- `<html lang="es">`: Elemento raíz de la página, que indica que todo el contenido de la página se encuentra dentro de este elemento. También se especifica que el idioma predeterminado de la página es el español.

- `<head>`: Sección que contiene metadatos sobre la página y otros elementos que no se muestran en la página, como la información de la ventana del navegador.

- `<meta charset="UTF-8">`: Especifica el juego de caracteres utilizado en la página, que en este caso es UTF-8.

- `<meta http-equiv="X-UA-Compatible" content="IE=edge">`: Define el modo de compatibilidad de Internet Explorer, que en este caso se establece en el modo de compatibilidad más reciente.

- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Define las dimensiones y la escala de la página en dispositivos móviles y tabletas.

- `<title>Mi página</title>`: Define el título de la página que aparece en la pestaña del navegador.

- `<body>`: Contiene todo el contenido visible de la página.

- `<h1>Hola Mundo</h1>`: Crea un encabezado de nivel 1 que dice "Hola Mundo".

- `<p>Este es mi primer párrafo de ejemplo.</p>`: Crea un párrafo que dice "Este es mi primer párrafo de ejemplo".

En resumen, este código define la estructura básica de una página web, establece el título de la página, define el idioma predeterminado y el conjunto de caracteres utilizado, así como el contenido visible de la página.

---

## Encabezados y comentarios

![Descripción de la imagen](../img/27.jpg)

En HTML, los encabezados se utilizan para definir la estructura jerárquica de una página web y para organizar el contenido. Los encabezados se definen con las etiquetas `<h1>` a `<h6>`, siendo `<h1>` el encabezado principal y `<h6>` el menos importante.

* `<h1>` define el encabezado más importante.

* `<h6>` define el encabezado menos importante.

Por ejemplo, para crear un encabezado principal en una página web, se puede utilizar la siguiente sintaxis:

~~~html
<h1>Este es un encabezado principal</h1>
~~~

**La estructura correcta importa** : Los motores de búsqueda y otros agentes de usuario suelen indexar el contenido de la página en función de los elementos del encabezado, por ejemplo, para crear una tabla de contenido, por lo que es importante utilizar la estructura correcta para los encabezados.

En general, un artículo debe tener un elemento h1 para el título principal seguido de subtítulos h2 , bajando una capa si es necesario. Si hay elementos h1 en un nivel superior, no deben usarse para describir ningún contenido de nivel inferior.

`<h1>` define el encabezado más importante. `<h6>` define el encabezado menos importante.
Los motores de búsqueda y otros agentes de usuario suelen indexar el contenido de la página en función de los elementos del encabezado, por ejemplo, para crear una tabla de contenido, por lo que es importante utilizar la estructura correcta para los encabezados.

Documento de ejemplo (intención adicional para ilustrar la jerarquía):

~~~html
  <h1>TÍTULO PRINCIPAL</h1>
  <p>Introducción</p>

    <h2>Razones</h2>
      
      <h3>Razón 1</h3>
      <p>Párrafo</p>

      <h3>Razón 2</h3>
      <p>Párrafo</p>
    
    <h2>En conclusión</h2>
    <p>Párrafo</p>
~~~

![Descripción de la imagen](../img/28.jpg)

Los comentarios en HTML se utilizan para agregar notas o información útil que no se mostrará en la página web. Los comentarios comienzan con `<!--` y terminan con `-->`, y todo lo que se escribe entre estos dos símbolos será ignorado por el navegador al cargar la página web.

Por ejemplo, para agregar un comentario en HTML, se puede utilizar la siguiente sintaxis:

~~~html
<!-- Este es un comentario en HTML -->
~~~

Los comentarios son útiles para explicar el código a otros desarrolladores, para dejar notas para uno mismo, o para desactivar temporalmente una sección de código sin tener que borrarlo por completo.

---

## Etiquetas de texto

![Descripción de la imagen](../img/30.jpg)

Algunas etiquetas de texto en HTML incluyen:

- `<p>`: Define un párrafo de texto.

    ~~~html
    <p>Esto es un párrafo</p>
    ~~~

    Con HTML, no puede cambiar la salida agregando espacios adicionales o líneas adicionales en su código HTML.
    El navegador eliminará los espacios adicionales y las líneas adicionales cuando se muestre la página:

    ~~~html
    <p>Esto                 e            s un                           párrafo</p>
    ~~~

### Resaltar

- `<mark>`: El elemento `<mark>` es nuevo en HTML5 y se usa para marcar o resaltar texto   en un documento "debido a su relevancia en otro contexto".
    El ejemplo más común sería en los resultados de una búsqueda donde el usuario ha ingresado una consulta de búsqueda y los resultados se muestran resaltando la consulta deseada

    ~~~html
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus nihil, quaerat numquam placeat eius molestiae libero quod <mark>praesentium nobis beatae, hic impedit modi. Earum doloribus </mark>deleniti laudantium ipsa perferendis assumenda.
    </p>
    ~~~

### Negrita, cursiva y subrayado

- `<strong>`: Aplica negrita a una parte del texto para darle mayor importancia.
- `<em>`: Emplea la cursiva para enfatizar una parte del texto.

    - **Texto en negrita**: ¿Cual es la diferencia? Semántica. `<strong>` se utiliza para indicar que el texto es fundamental o semánticamente importante para el texto que lo rodea, mientras que `<b>` indica que no tiene tanta importancia y simplemente representa el texto que debe estar en negrita.

    Se recomienda utilizarla cuando el texto tiene un significado más relevante o enfático, como títulos, subtítulos, palabras clave o frases que transmiten información crucial.

    ~~~html
    <p>Este es un <strong>texto importante</strong> en negrita.</p>
    ~~~

    La etiqueta `<b>`, por otro lado, se utiliza para aplicar formato de negrita sin implicar una importancia semántica adicional. Se utiliza cuando se desea resaltar visualmente el texto sin agregar significado adicional a su contenido.

    ~~~html
    <p>Este es un <b>texto en negrita</b> sin una importancia semántica especial.</p>
    ~~~

    En resumen, la etiqueta `<strong>` se utiliza para enfatizar un texto importante desde un punto de vista semántico, mientras que la etiqueta `<b>` se utiliza para aplicar formato de negrita sin implicaciones semánticas adicionales. En la mayoría de los casos, se recomienda utilizar `<strong>` en lugar de `<b>` para un mejor acceso y comprensión del contenido por parte de los motores de búsqueda y los dispositivos de asistencia.

    - **Texto en Cursiva** :

    * **em**: La etiqueta `<em></em>` se utiliza para resaltar un texto enfatizado desde un punto de vista semántico. Se recomienda utilizarla cuando el texto tiene un significado más relevante o cuando se quiere transmitir una mayor intensidad o énfasis. Normalmente, los navegadores representan el texto enfatizado en cursiva, aunque el estilo exacto puede variar según la configuración del navegador y la hoja de estilos.

    ~~~html
    <p>Este es un texto <em>enfatizado</em>.</p>
    ~~~

    * **i**: La etiqueta `<i>`, por otro lado, se utiliza para aplicar formato de itálica sin implicaciones semánticas adicionales. Se utiliza cuando se desea resaltar visualmente el texto en cursiva, pero sin agregar significado adicional a su contenido. Al igual que la etiqueta `<em>`, la representación visual del texto en cursiva puede variar según el navegador y la hoja de estilos.
    ~~~html
    <p>Este es un texto en <i>cursiva</i>.</p>
    ~~~

    En resumen, la etiqueta `<em>` se utiliza para enfatizar un texto desde un punto de vista semántico, mientras que la etiqueta `<i>` se utiliza para aplicar formato de itálica sin implicaciones semánticas adicionales. Es importante utilizar estas etiquetas de manera apropiada según el significado y el énfasis que se quiera transmitir en el contenido.

    - **Texto subrayado**
    La etiqueta `<u>` en HTML se utiliza para subrayar el texto. Anteriormente, se solía utilizar para indicar enlaces no visitados, pero esta práctica ha caído en desuso debido a la confusión que puede generar con los enlaces reales.

    ~~~html
    <p>Este es un texto <u>subrayado</u>.</p>
    ~~~

### Insertado, eliminado o tachado

* Etiqueta `<ins>`: Se utiliza para representar el texto como insertado, es decir, texto nuevo que ha sido añadido al documento. Por lo general, se muestra subrayado por defecto.

    ~~~html
    <p>Este es un <ins>texto insertado</ins>.</p>
    ~~~

* Etiqueta `<del>`: Se utiliza para representar el texto como eliminado, es decir, texto que ha sido eliminado o ya no es válido en el documento. Por lo general, se muestra tachado por defecto.

    ~~~html
    <p>Este es un <del>texto eliminado</del>.</p>
    ~~~

* Etiqueta `<s>`: Se utiliza para representar el texto como tachado, indicando que el texto es obsoleto o ya no es relevante. Por lo general, se muestra tachado por defecto.

    ~~~html
    <p>Este es un <s>texto tachado</s>.</p>
    ~~~

### Superíndice y Subíndice

En HTML, puedes utilizar las etiquetas `<sup>` y `<sub>` para crear superíndices y subíndices, respectivamente. Estas etiquetas se utilizan para mostrar texto ligeramente elevado o ligeramente hundido en relación al texto circundante.

* La etiqueta `<sup>` se utiliza para representar superíndices, que son números, letras o símbolos que se colocan ligeramente por encima de la línea de texto. Se suelen utilizar para indicar exponentes, notas al pie o referencias.

    Aquí tienes un ejemplo de cómo utilizar la etiqueta `<sup>` para crear un superíndice:

    ~~~html
    H<sup>2</sup>O
    ~~~

* La etiqueta `<sub>` se utiliza para representar subíndices, que son números, letras o símbolos que se colocan ligeramente por debajo de la línea de texto. Se suelen utilizar para mostrar fórmulas químicas, notas al pie o índices.

    Aquí tienes un ejemplo de cómo utilizar la etiqueta `<sub>` para crear un subíndice:

    ~~~html
    CO<sub>2</sub>
    ~~~

    Puedes combinar estas etiquetas con otros elementos de texto en HTML para crear fórmulas químicas, expresiones matemáticas o cualquier otro contenido que requiera superíndices o subíndices. Recuerda que el estilo visual de los superíndices y subíndices puede variar dependiendo del navegador y la configuración de estilo aplicada.

- `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>`: Encabezados de distintos niveles, del 1 al 6.
- `<br>`: Inserta un salto de línea sin crear un nuevo párrafo.
- `<hr>`: Inserta una línea horizontal para separar distintas secciones de la página.
- `<pre>`: Se utiliza para mostrar texto formateado de una manera predefinida.
- `<code>`: Se utiliza para resaltar el código dentro de un párrafo o una sección de texto, lo que hace que se vea diferente al texto normal y sea más fácil de identificar como código.

Estas etiquetas son solo algunas de las muchas que se pueden usar para dar formato y estilo al texto de una página web. Cada una tiene sus propios atributos y propiedades que se pueden utilizar para personalizar su apariencia.

---

## Ejemplos sobre etiquetas de texto

En este ejemplo utlilizaremos la mayoria de las etiquetas de texto.

~~~html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Web</title>
</head>

<body>

    <!-- Contenido de la página -->
    <h1>Bienvenidos a mi página</h1>
    <p>
        Mi nombre es Alex Roel y en este blog podrás encontrar todo tipo de contenido. Desde tutoriales sobre
        programación, hasta artículos de opinión sobre temas de actualidad.
    </p>

    <!-- Ejemplo 01 de etiquetas de texto -->
    <hr>
    <h2>Cálculo del área de un círculo</h2>

    <p>
        El área de un círculo se calcula multiplicando π (pi) por el radio al cuadrado. Mientras que el perímetro de un
        círculo, también conocido como circunferencia, se calcula multiplicando 2π (pi) por el radio.
    </p>

    <h3>Ejemplo</h3>

    <p>Supongamos que tenemos un círculo con un radio de 5 cm.</p>

    <h4>Cálculo del área</h4>
    <p>Para calcular el área, usamos la fórmula:</p>

    <pre>Área = π x r<sup>2</sup></pre>
    <p>Sustituyendo los valores, obtenemos:</p>
    <pre>a = 3.141592 x 5<sup>2</sup> = 78,5 cm<sup>2</sup></pre>

    <!-- Ejemplo 02 de etiquetas de texto -->
    <br>
    <hr>
    <h2>Fórmulas Químicas</h2>
    <p>
        En química, una fórmula química es una forma de expresar información acerca de las proporciones de los átomos
        que
        constituyen un compuesto químico. A continuación, se muestran algunas fórmulas comunes:
    </p>

    <h3>Agua</h3>
    <p>
        La fórmula química del agua es <strong>H<sub>2</sub>O</strong>. Esto significa que una molécula de agua está
        compuesta por dos átomos de hidrógeno y un átomo de oxígeno.
    </p>

</body>

</html>
~~~

---

## Código HTML

Si deseas mostrar código HTML en una página HTML, se puede utilizar la etiqueta `<code>` para indicar que el contenido es un fragmento de código, y la etiqueta `<pre>` para preservar la estructura y el formato del código tal como aparece en el código fuente.

Puedes utilizar la siguiente sintaxis HTML para mostrar el código dentro de una etiqueta `<code>` dentro de una etiqueta `<pre>`:

~~~html
<!-- Ejemplo 03 de etiquetas de texto -->
    <hr>
    <h2>Hola mundo con HTML</h2>

    <p>
        Para imprimir "Hola mundo" en HTML se utiliza la etiqueta <b><code>h1</code> </b>, que es una etiqueta de
        encabezado de nivel 1. El siguiente código mostrará "Hola mundo" en el navegador:
    </p>

    <pre>
        <code>
            &lt;!DOCTYPE html&gt;
            &lt;html&gt;
                &lt;head&gt;
                    &lt;title&gt;Mi primera página en HTML&lt;/title&gt;
                &lt;/head&gt;
                &lt;body&gt;
                    &lt;h1&gt;Hola mundo&lt;/h1&gt;
                &lt;/body&gt;
            &lt;/html&gt;
        </code>
    </pre>
~~~

La etiqueta `<code>` indicará que el contenido es un fragmento de código, mientras que la etiqueta `<pre>` preservará la estructura y el formato del código. Además, se ha utilizado la entidad HTML`&lt;` para representar el símbolo `<` y `&gt;` para representar el símbolo `>`, para que el código se muestre correctamente en el navegador.

---

## Herramienta para desarrollador

Consola de desarrollador: Es una herramienta integrada en los navegadores web que permite depurar y analizar problemas en el código de una página web, visualizar y manipular el DOM, probar código JavaScript y realizar pruebas de rendimiento, entre otras funciones.

---

## Resumen

HTML fue el lenguaje fundamental para crear páginas web y estructurar su contenido. En esta breve introducción, aprendimos sobre la sintaxis de HTML y las etiquetas básicas que se utilizan para definir la estructura y presentación de una página web.

Exploramos cómo utilizar encabezados, comentarios y etiquetas de texto para dar formato al contenido y resaltar información importante. También mencionamos la importancia de la estructura base de un documento HTML, que incluye las etiquetas `<html>`, `<head>` y `<body>`.

Además, mencionamos la existencia de herramientas para desarrolladores, que nos permiten inspeccionar y depurar el código HTML, así como ajustar y probar nuestro trabajo en tiempo real.

Con este conocimiento básico de HTML, estabas preparado para comenzar a explorar y aprender más sobre el lenguaje. A medida que te familiarices con más etiquetas, atributos y técnicas avanzadas, podrás crear páginas web más complejas y atractivas.

Recuerda que HTML es solo uno de los componentes clave en el desarrollo web. Para construir sitios web interactivos y dinámicos, también puedes combinar HTML con CSS para estilizar la apariencia de la página, y JavaScript para agregar interactividad y funcionalidad.

¡Espero que hayas disfrutado tu viaje de aprendizaje en el mundo del desarrollo web y hayas explorado las infinitas posibilidades que HTML te ofrece!
