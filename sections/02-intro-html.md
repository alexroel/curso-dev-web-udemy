# Introducción a HTML

1. [Introducción](#introducción)
2. [De que se encarga HTML](#de-que-se-encarga-html)
3. [¿Qué son las etiquetas?](#qué-son-las-etiquetas)
4. [Encabesados y párrafos](#encabesados-y-párrafos)
5. [Imáges y elemenos unicos](#imáges-y-elemenos-unicos)
6. [¿Qué es un atributo?](#¿qué-es-un-atributo)
7. [Etiquetas de texto](#etiquetas-de-texto)
8. [Vínculos](#vínculos)
9. [Etiquetas de Listas](#etiquetas-de-listas)
10. [Estructura base de HTML](#estructura-base-de-html)
11. [Resumen](#resumen)

---
## Introducción

HTML (HyperText Markup Language) es el lenguaje estándar utilizado para crear páginas web. Se encarga de estructurar el contenido de una página, permitiendo definir elementos como encabezados, párrafos, imágenes, enlaces y listas. En esta sección, aprenderás cómo utilizar las etiquetas HTML para dar formato y organizar tu contenido web de manera semántica. ¡Vamos a sumergirnos en el mundo de HTML y empezar a construir sitios web increíbles juntos!

---
## De que se encarga HTML

HTML, o HyperText Markup Language, es el lenguaje fundamental utilizado para crear y estructurar páginas web. A diferencia de otros lenguajes de programación que pueden ejecutar operaciones complejas, HTML se centra en definir la estructura y el contenido de una página web. A continuación, se describen las tres principales responsabilidades de HTML: describir el contenido, crear elementos y mostrar elementos.

**Describir el Contenido**

HTML se encarga de describir el contenido de una página web mediante el uso de etiquetas. Cada etiqueta tiene un propósito específico que comunica al navegador cómo debe interpretarse y desplegarse el contenido. Por ejemplo, hay etiquetas para títulos, párrafos, enlaces, listas y muchos otros tipos de contenido. Esta descripción es esencial para que los navegadores presenten la información de manera coherente y accesible para los usuarios.

**Crear Elementos**

Crear elementos en HTML implica el uso de diversas etiquetas que definen diferentes partes de la página web. Estas etiquetas no solo ayudan a estructurar el contenido, sino que también aportan significado semántico, lo que mejora la accesibilidad y la optimización en motores de búsqueda. Los elementos básicos incluyen divisiones de contenido, secciones específicas, artículos, barras laterales y áreas de navegación. Cada uno de estos elementos contribuye a la organización y jerarquización del contenido en una página web.

**Mostrar Elementos**

Mostrar elementos se refiere a cómo los componentes del contenido se presentan visualmente en el navegador. HTML permite la inclusión de diversos tipos de contenido, como tablas, imágenes y formularios, que se visualizan de manera específica en función de las etiquetas utilizadas. Aunque HTML no define estilos (esa es la función de CSS), sí establece la estructura básica sobre la cual se aplican esos estilos. Esto asegura que todos los elementos se desplieguen de manera coherente y en el orden correcto.

```html
<h1>Bienvenidos a mi página web</h1>
<h2>Subtítulo de sección</h2>
```

**¿Qué no hace HTML?**

**No se Ocupa de la Presentación o Estilos**

HTML no se encarga de la presentación visual de una página web. La presentación se refiere a cómo se ven los elementos HTML en términos de colores, fuentes, tamaños, márgenes, alineaciones y otros aspectos visuales. En lugar de HTML, el lenguaje utilizado para manejar estos aspectos es CSS (Cascading Style Sheets).


Ejemplo:
```css
body {
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f4f4f4;
}
```

**No se Ocupa de la Interacción**

HTML no se encarga de la interacción del usuario con la página web. La interacción se refiere a la capacidad de responder a acciones del usuario, como clics, desplazamientos, entradas de teclado y otras formas de eventos. Para manejar la interacción, se utiliza JavaScript.

Ejemplo:
```javascript
document.getElementById("miBoton").addEventListener("click", function() {
  alert("Botón clicado!");
});
```

---
## ¿Qué son las etiquetas?

Las etiquetas en HTML son la base fundamental para la creación de páginas web. Son instrucciones que los navegadores utilizan para renderizar y estructurar el contenido de una página. Cada etiqueta define un tipo específico de contenido o un elemento estructural en la página.

**Sintaxis de las Etiquetas**

La sintaxis de las etiquetas HTML sigue una estructura específica que facilita la creación y comprensión del código. Una etiqueta HTML consta de:

1. **Etiqueta de Apertura**: Indica el inicio de un elemento.
2. **Contenido**: El texto o elementos anidados dentro de la etiqueta.
3. **Etiqueta de Cierre**: Indica el final del elemento.

```html
<nombre_de_etiqueta>contenido</nombre_de_etiqueta>
```

Algunas etiquetas son auto-cerradas y no requieren una etiqueta de cierre separada, como la etiqueta `<hr>` para insertar una linea hoizontal.

**Partes de un Elemento**

Cada elemento HTML se compone de varias partes clave:

1. **Etiqueta de Apertura**: Consiste en el nombre de la etiqueta encerrado entre corchetes angulares (`<>`). Puede incluir atributos que proporcionan información adicional sobre el elemento.
   ```html
   <p>Este es un párrafo.</p>
   ```

2. **Contenido**: Es el texto o los elementos anidados dentro de la etiqueta. En el caso de etiquetas auto-cerradas, no hay contenido entre la apertura y el cierre.
   ```html
   <p>Este es un párrafo.</p>
   ```

3. **Etiqueta de Cierre**: Similar a la etiqueta de apertura, pero incluye una barra inclinada (`/`) antes del nombre de la etiqueta.
   ```html
   </p>
   ```
---
## Encabesados y párrafos

En HTML, los encabezados (h1 a h6) y los párrafos son elementos fundamentales para estructurar y organizar el contenido de una página web. Además de mejorar la legibilidad y la experiencia del usuario, también desempeñan un papel crucial en la optimización para motores de búsqueda (SEO).

**Uso de los encabezados (h1 a h6):**

- **h1 a h6** se utilizan para definir los niveles de encabezado, siendo h1 el más importante y h6 el menos importante.
- Cada página debe tener un único **h1**, que debe reflejar el tema principal de la página.
- Los **h2** a **h6** se utilizan para organizar el contenido en subsecciones, siguiendo un orden jerárquico.

```html
<h1>Encabezado Principal</h1>
<h2>Subencabezado</h2>
<h3>Subencabezado de nivel 3</h3>
```

**Párrafos:**

- Los **párrafos** en HTML se definen con la etiqueta `<p>` y se utilizan para estructurar el texto en bloques.
- Ayudan a mantener el contenido organizado y fácil de leer.

```html
<p>Este es un párrafo de ejemplo.</p>
```

**Preformateados:**
a etiqueta <pre> en HTML se utiliza para representar texto preformateado. El texto dentro de una etiqueta <pre> se muestra en una fuente monoespaciada (de ancho fijo), y los espacios en blanco y saltos de línea se preservan exactamente como se escriben en el código fuente. Esto la diferencia de las etiquetas de párrafo como <p>, que normalmente colapsan los espacios en blanco y los saltos de línea.


```html
<pre>
  Esto es texto preformateado.
  Los espacios y saltos de línea
  se preservan.
</pre>
```

---
## Imáges y elemenos unicos
Las imágenes son un componente esencial en el desarrollo web, y en HTML, el elemento `<img>` es la herramienta principal para incorporarlas. Este elemento permite la inclusión de imágenes en una página web, proporcionando una manera visualmente atractiva de presentar información. Vamos a explorar brevemente cómo funciona y analizar el siguiente ejemplo:

```html
<img src="images/logo-google.png" alt="Logo de Google" width="300">
```

**1. La etiqueta `<img>`:**

La etiqueta `<img>` se utiliza para insertar imágenes en una página HTML. En el ejemplo, esta etiqueta es el punto de partida y le indica al navegador que se incluirá una imagen.

**2. Atributo "src":**
El atributo `src` (source) especifica la ruta de la imagen. En este caso, "images/logo-google.png" indica que la imagen llamada "logo-google.png" se encuentra en la carpeta "images" del directorio actual.

**3. Atributo "alt":**
El atributo `alt` (alternative text) proporciona un texto alternativo que se mostrará si la imagen no puede cargarse. Es esencial para la accesibilidad web y para describir el contenido de la imagen. En este ejemplo, "Logo de Google" describe la imagen.

**4. Atributo "width":**
El atributo `width` establece el ancho de la imagen en píxeles. En este caso, la imagen se mostrará con un ancho de 300 píxeles. Es una práctica común definir el ancho y alto para controlar mejor la presentación de las imágenes en la página.

En resumen, el ejemplo `<img src="img/logo-google.png" alt="Logo de Google" width="300">` ilustra cómo agregar una imagen llamada "logo-google.png" a una página HTML, con un texto alternativo y un ancho específico. Al entender estos conceptos básicos, los desarrolladores pueden enriquecer sus sitios web con contenido visual de manera efectiva y accesible.

**Otros elementos `<br>` `<hr>`**

En HTML, existen elementos que permiten añadir funcionalidades específicas o mejorar la presentación de una página web. A continuación, se detallan algunos de estos elementos:

**`<br>` (salto de línea):**

- La etiqueta `<br>` se utiliza para insertar un salto de línea dentro de un texto o un párrafo.
- No tiene etiqueta de cierre y se considera un elemento vacío.
- Se usa principalmente para separar líneas de texto o elementos en línea.

```html
<p>Línea 1<br>Línea 2</p>
```

*`<hr>` (línea horizontal):*
- La etiqueta `<hr>` se utiliza para insertar una línea horizontal que separa contenido en la página.
- También es un elemento vacío y no tiene etiqueta de cierre.
- Se puede usar para dividir secciones de contenido o para añadir un separador visual.

```html
<div>Contenido</div>
<hr>
<div>Otro contenido</div>
```

---
## ¿Qué es un atributo?
Un atributo en HTML proporciona información adicional sobre un elemento y se agrega a la etiqueta de apertura del elemento para modificar su comportamiento o proporcionar metadatos. Vamos a desglosar qué es un atributo, sus partes y dar un ejemplo específico.

**¿Qué es un Atributo?**

En HTML, un atributo es una característica adicional que se agrega a la etiqueta de apertura de un elemento para proporcionar información adicional sobre ese elemento. Los atributos permiten modificar el comportamiento o proporcionar metadatos que no se expresan directamente en el contenido del elemento.

**Partes de un Atributo**

Un atributo generalmente consta de dos partes:

1. **Nombre del Atributo:** Es el nombre que identifica la propiedad que se está configurando. En el ejemplo `<html lang="es">`, el nombre del atributo es "lang".

2. **Valor del Atributo:** Es la información específica asociada con el atributo. En el ejemplo `<html lang="es">`, el valor del atributo "lang" es "es" (español).

**Atributos de Imágenes**

Los atributos de las imágenes en HTML permiten controlar aspectos importantes como la ruta de la imagen (`src`), el texto alternativo (`alt`), el título (`title`), el ancho y alto (`width` y `height`), así como otros atributos útiles.

**src` (source):**

- El atributo `src` especifica la ruta de la imagen que se va a mostrar.
- Es obligatorio y debe contener la URL de la imagen.
- Se recomienda usar comillas dobles para especificar la URL de la imagen.

```html
<img src="imagen.jpg" alt="Descripción de la imagen">
```

**`alt` (alternative text):**

- El atributo `alt` proporciona un texto alternativo para la imagen, que se muestra si la imagen no se puede cargar o para usuarios con discapacidad visual.
- Es obligatorio y debe ser descriptivo de la imagen.
- Se recomienda usar comillas dobles para el texto alternativo.

```html
<img src="imagen.jpg" alt="Descripción de la imagen">
```

**`title`:**

- El atributo `title` proporciona un título para la imagen, que se muestra cuando el usuario pasa el cursor sobre la imagen.
- No es obligatorio, pero se recomienda para mejorar la accesibilidad y la experiencia del usuario.
- Se recomienda usar comillas dobles para el título.

```html
<img src="imagen.jpg" alt="Descripción de la imagen" title="Título de la imagen">
```

**`width` y `height`:**

- Los atributos `width` y `height` especifican el ancho y alto de la imagen en píxeles, respectivamente.
- No son obligatorios, pero se recomienda establecerlos para evitar cambios bruscos en la página al cargar la imagen.
- Se recomienda usar comillas dobles para los valores de ancho y alto.

```html
<img src="imagen.jpg" alt="Descripción de la imagen" width="300" height="200">
```

**Atributos booleanos:**

- Algunos atributos, como `download` y `hidden`, son booleanos, lo que significa que su presencia indica verdadero y su ausencia indica falso.
- Para atributos booleanos, se recomienda no especificar un valor, solo el nombre del atributo.

```html
<a href="archivo.pdf" download>Descargar PDF</a>
<div hidden>Este contenido está oculto</div>
```

**`id` y `class`:**

- El atributo `id` se utiliza para identificar de forma única un elemento en el documento.
- El atributo `class` se utiliza para asignar una o más clases a un elemento, que se pueden utilizar para aplicar estilos o funcionalidades específicas.
- Se recomienda usar comillas dobles para los valores de `id` y `class`.

```html
<img src="imagen.jpg" alt="Descripción de la imagen" id="imagen1" class="imagen-grande">
```

Al utilizar correctamente estos atributos en las imágenes de tu página web, mejorarás la accesibilidad, la experiencia del usuario y la presentación visual de tu contenido.

---
## Etiquetas de texto

**Etiquetas de formato en HTML**

En HTML, las etiquetas `<b>`, `<i>`, y `<u>` solían utilizarse para aplicar formato de negrita, cursiva y subrayado respectivamente. Sin embargo, su uso ha sido desaconsejado en favor de un enfoque más semántico y accesible. En su lugar, se recomienda utilizar las siguientes etiquetas y atributos:

- **Negrita (`<b>`):** Se recomienda usar la etiqueta `<strong>` en su lugar, ya que `<strong>` tiene un significado semántico más fuerte, indicando que el texto es importante o relevante en términos de significado.

```html
<p>Este es un texto en <strong>negrita</strong>.</p>
```

- **Cursiva (`<i>`):** Se recomienda usar la etiqueta `<em>` en su lugar, que indica énfasis en el texto. `<em>` tiene un significado semántico más adecuado para expresar énfasis que `<i>`.

```html
<p>Este es un texto en <em>cursiva</em>.</p>
```

- **Subrayado (`<u>`):** El subrayado se considera menos legible y puede ser confundido con un enlace. En su lugar, se recomienda utilizar estilos CSS para resaltar el texto de manera más efectiva.

**Importancia de `<strong>` y `<em>`**

- `<strong>`: Indica que el texto es especialmente relevante en términos de significado, como un término clave o un aviso importante. Además de aplicar formato visual de negrita, también ayuda a los motores de búsqueda a identificar la importancia del texto.

```html
<p>¡<strong>Importante:</strong> no olvides guardar tus cambios!</p>
```

- `<em>`: Indica énfasis en el texto, lo que puede interpretarse como un cambio en la entonación o significado en la lectura. Ayuda a transmitir emociones o tono en el texto.

```html
<p>Por favor, <em>no</em> toques ese botón.</p>
```

Ejemplo final:
```html
<!DOCTYPE html>
<html lang="es">

<head>
   <title>Mi Web</title>
</head>

<body>
   <h1>Google es genial.</h1>
   <p>
      <strong>Google</strong> es el principal motor de búsqueda en línea, <u>lanzado en 1998</u>,
      que conecta a los usuarios con información relevante en la web.
   </p>

   <img src="images/logo-google.png" alt="Logo de Google" width="300">

   <p>
      Sumérgete en la eficacia del motor de búsqueda más utilizado en todo el mundo.
      Experimenta la rapidez y precisión al encontrar información relevante con tan solo unos clics.
      Puedes usar el siguiente URL para poder acceder a la página de Google: <i>https://www.google.com/</i>
   </p>

   <p></p>
</body>

</html>
```

Estas son solo algunas de las etiquetas más comunes para trabajar con texto en HTML. Puedes combinarlas y personalizarlas según tus necesidades específicas para crear una presentación de texto efectiva en tu página web.


---
## Vínculos
En HTML, las etiquetas de enlaces se utilizan para crear hipervínculos que conectan diferentes páginas web, recursos o ubicaciones dentro de una página. Aquí están las principales etiquetas de enlaces:

1. **Enlace (`<a>`):**
   - Se utiliza para crear un enlace a otra página o recurso.

   ```html
   <a href="https://www.ejemplo.com">Enlace a Ejemplo</a>
   ```

   También puedes enlazar a ubicaciones internas en la misma página utilizando identificadores (`id`) de elementos:

   ```html
   <a href="#seccion1">Ir a la Sección 1</a>
   ```

2. **Enlace con Apertura en Nueva Pestaña (`target="_blank"`):**
   - Permite que el enlace se abra en una nueva pestaña o ventana del navegador.

   ```html
   <a href="https://www.ejemplo.com" target="_blank">Abrir en Nueva Pestaña</a>
   ```

3. **Enlace con Título (`title`):**
   - Proporciona información adicional al usuario cuando pasa el cursor sobre el enlace.

   ```html
   <a href="https://www.ejemplo.com" title="Visitar Ejemplo">Enlace a Ejemplo</a>
   ```

**Ejemplo Final**

```html
    <p>
      Sumérgete en la eficacia del motor de búsqueda más utilizado en todo el mundo.
      Experimenta la rapidez y precisión al encontrar información relevante con tan solo unos clics.
      Puedes usar el siguiente enlace para poder acceder a la página de Google:
      <a href="https://www.google.com/" target="_blank" title="Página de google">Ir a Google</a>.
   </p>
```

---
## Etiquetas de Listas
En HTML, puedes crear listas ordenadas y no ordenadas utilizando las siguientes etiquetas:

1. **Lista Ordenada (`<ol>`):**
   - La etiqueta `<ol>` se utiliza para crear listas ordenadas.
   - Los elementos de la lista se definen con la etiqueta `<li>` (elemento de lista).

   Ejemplo:
   ```html
   <ol>
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
   </ol>
   ```

2. **Lista No Ordenada (`<ul>`):**
   - La etiqueta `<ul>` se utiliza para crear listas no ordenadas.
   - Los elementos de la lista también se definen con la etiqueta `<li>`.

   Ejemplo:
   ```html
   <ul>
      <li>Elemento A</li>
      <li>Elemento B</li>
      <li>Elemento C</li>
   </ul>
   ```

3. **Lista de Definición (`<dl>`):**
   - La etiqueta `<dl>` se utiliza para crear listas de definición.
   - Los términos se definen con la etiqueta `<dt>` (término de definición) y las definiciones con la etiqueta `<dd>` (definición).

   Ejemplo:
   ```html
   <dl>
      <dt>Término 1</dt>
      <dd>Definición 1</dd>
      <dt>Término 2</dt>
      <dd>Definición 2</dd>
   </dl>
   ```

Estas etiquetas son esenciales para estructurar el contenido y presentar información de manera organizada en una página web.

**Ejemoplo final**
```html
   <h2>Mas alla del buscador</h2>
   <p>
      Google no se limita solo a su icónico motor de búsqueda. Este gigante tecnológico ofrece un extenso ecosistema de
      plataformas y servicios que abarcan diversas necesidades en línea. Algunas de las notables incluyen:
   </p>

   <ul>
      <li>Gmail</li>
      <li>Google Drive</li>
      <li>Google Maps</li>
      <li>YouTube</li>
      <li>Android</li>
   </ul>
```

---
## Estructura base de HTML

HTML, el lenguaje de marcado utilizado para crear páginas web, tiene una estructura básica que consta de elementos anidados. Vamos a analizar la anatomía de un elemento HTML y la anidación de elementos utilizando el siguiente ejemplo como referencia:

```html
<!DOCTYPE html>
<html>
   <head>
      <title>Mi Web</title>
   </head>
   <body>
      <h1>Hola Mundo</h1>
      <p>Este es mi primer sitio web.</p>
   </body>
</html>
```

**Anatomía de un Elemento HTML**

En HTML, un elemento básico consta de una etiqueta de apertura, contenido y una etiqueta de cierre. Analizaremos el ejemplo `<h1>Hola Mundo</h1>` para entender su estructura:

- **Etiqueta de Apertura (`<h1>`):** Inicia el elemento, en este caso, un encabezado de nivel 1.

- **Contenido (`Hola Mundo`):** Es el texto o contenido del elemento.

- **Etiqueta de Cierre (`</h1>`):** Finaliza la definición del elemento.

**Anidación de Elementos**

La anidación implica colocar elementos dentro de otros. En el segundo ejemplo, se muestra una estructura básica con anidación:

```html
<html>
   <head>
      
   </head>
   <body>
   
   </body>
</html>
```

- **Etiqueta de Apertura (`<html>`):** Inicia el documento HTML.

- **Etiqueta de Apertura (`<head>`):** Inicia la sección de metadatos del documento.

- **Etiqueta de Cierre (`</head>`):** Marca el final de la sección de metadatos.

- **Etiqueta de Apertura (`<body>`):** Inicia la sección de contenido principal del documento.

- **Etiqueta de Cierre (`</body>`):** Marca el final de la sección de contenido.

- **Etiqueta de Cierre (`</html>`):** Marca el final del documento HTML.

**Estructura Base Completa**

Ahora, consideremos la estructura completa del documento HTML original:

```html
<!DOCTYPE html>
<html>
   <head>
      <title>Mi Web</title>
   </head>
   <body>
      <h1>Hola Mundo</h1>
      <p>Este es mi primer sitio web.</p>
   </body>
</html>
```

- **`<!DOCTYPE html>`:** Declara la versión de HTML que se está utilizando (en este caso, HTML5).

- **Etiqueta de Apertura (`<html>`):** Inicia y cierra el documento HTML.

- **Etiqueta de Apertura (`<head>`):** Inicia y cierra la sección de metadatos.

- **Etiqueta de Apertura (`<title>`):** Define el título de la página.

- **Etiqueta de Apertura (`<h1>`):** Define un encabezado de nivel 1.

- **Etiqueta de Apertura (`<p>`):** Define un párrafo.


Comprender la anatomía y la anidación de elementos en HTML es fundamental para desarrollar páginas web correctamente estructuradas y comprensibles para los navegadores web.

---
## Resumen 

En la sección de Introducción a HTML, los estudiantes aprendieron los fundamentos de HTML y cómo se utiliza para crear páginas web. Estos fueron los puntos clave que se cubrieron:

**¿De qué se encarga HTML?**: HTML se encarga de estructurar el contenido de una página web, permitiendo definir elementos como encabezados, párrafos, imágenes, enlaces y listas.

**¿Qué son las etiquetas?**: Las etiquetas HTML son elementos que se utilizan - para marcar diferentes partes del contenido y aplicarles formato.

**Encabezados y párrafos**: HTML ofrece etiquetas para crear encabezados de diferentes niveles (h1 a h6) y párrafos de texto.

**Imágenes y elementos únicos**: Con HTML, se pueden insertar imágenes y otros elementos multimedia en una página web.

**¿Qué es un atributo?**: Los atributos son valores adicionales que se pueden agregar a las etiquetas para proporcionar información adicional sobre cómo debe ser tratado un elemento.

**Etiquetas de texto**: HTML ofrece etiquetas para dar formato al texto, como negrita (`<strong>`) y cursiva (`<em>`).

**Vínculos**: HTML permite crear vínculos a otras páginas web o recursos utilizando la etiqueta `<a>`.

**Etiquetas de listas**: HTML ofrece etiquetas para crear listas ordenadas (`<ol>`) y no ordenadas (`<ul>`).

**Estructura base de HTML**: Los estudiantes aprendieron la estructura básica de un documento HTML, que incluye la declaración `<!DOCTYPE html>`, la etiqueta `<html>`, `<head>` y `<body>`.

Al finalizar esta sección, los estudiantes fueron capaces de crear páginas web simples utilizando HTML, estructurando el contenido y aplicando formato de manera adecuada. Además, quedaron preparados para aprender conceptos más avanzados de desarrollo web.

**Recursos adicionales para seguir aprendiendo:**

- W3Schools HTML Tutorial: https://www.w3schools.com/html/
- Mozilla Developer Network (MDN) HTML Guide: https://developer.mozilla.org/en-US/docs/Web/HTML