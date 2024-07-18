# Estructura de una página

1. [Introducción](#introducción)
2. [Semántica y Contenedor de elementos](#semántica-y-contenedor-de-elementos)
3. [Etiquetas de citas](#etiquetas-de-citas)
4. [Formularios](#formularios)
5. [Tipos de `input`](#tipos-de-input)
6. [Validación de formulario](#validación-de-formulario)
7. [Etiquetas de selección y lista de datos](#etiquetas-de-selección-y-lista-de-datos)
8. [Etiquetas de detalles](#etiquetas-de-detalles)
9. [Metadatos](#metadatos)
10. [Resumen](#resumen)

---
## Introducción

¡Bienvenidos a la sección de Estructura de una Página de nuestro curso de desarrollo web! En esta sección, aprenderemos a construir páginas web bien organizadas y accesibles. Exploraremos la **semántica de HTML**, utilizando etiquetas específicas para dar significado y estructura a nuestro contenido. Veremos cómo usar **contenedores de elementos** para agrupar contenido de manera lógica y eficaz. Aprenderemos a dar formato a las citas con las **etiquetas de citas**, y a crear **formularios** funcionales y accesibles para la interacción con los usuarios. Además, entenderemos la importancia de los **metadatos** para la configuración y el comportamiento de nuestras páginas web, y cómo añadir un **favicon** para mejorar la identidad visual de nuestro sitio web. ¡Comencemos a estructurar nuestras páginas web de manera profesional!

---
## Semántica y Contenedor de elementos

La semántica en HTML se refiere a la utilización de etiquetas que transmiten el significado del contenido que envuelven. Este enfoque no solo ayuda a los navegadores y motores de búsqueda a interpretar mejor la estructura y el propósito del contenido, sino que también facilita la accesibilidad para usuarios con discapacidades. A continuación, exploraremos la importancia de la semántica, compararemos ejemplos de código semántico y no semántico, y explicaremos el uso del atributo `role` en etiquetas no semánticas.

**¿Por Qué es Importante la Semántica en HTML?**

1. **Accesibilidad**: Las etiquetas semánticas mejoran la accesibilidad del contenido. Los lectores de pantalla y otras tecnologías asistivas pueden interpretar y navegar mejor el contenido cuando se utiliza HTML semántico.
2. **SEO (Optimización para Motores de Búsqueda)**: Los motores de búsqueda utilizan la semántica para comprender y clasificar mejor el contenido de una página, lo que puede mejorar su visibilidad en los resultados de búsqueda.
3. **Mantenibilidad y Legibilidad**: Un código semántico es más fácil de leer y mantener, tanto para el desarrollador original como para cualquier persona que trabaje en el proyecto en el futuro.

**Uso de etiquetas No Semánticos vs. Etiquetas Semánticas**

**Ejemplo No Semántico**

```html
<div>
    <div>Mi Sitio Web</div>
    <div>
        <div>Inicio</div>
        <div>Acerca de</div>
        <div>Contacto</div>
    </div>
</div>
<div>
    <div>
        <div>Bienvenidos</div>
        <div>
            <p>Contenido principal aquí.</p>
        </div>
    </div>
</div>
<div>© 2024 Mi Sitio Web</div>
```

**Ejemplo Semántico**

```html
<header>
    <h1>Google es genial.</h1>
    <nav>
        <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="index.html#acerca-de">Acerca de</a></li>
            <li><a href="multimedia.html">Multimedias</a></li>
            <li><a href="contacto.html">Contacto</a></li>
        </ul>
    </nav>
</header>
<main>
    <section>
        <h2>Bienvenidos</h2>
        <p>Contenido principal aquí.</p>
    </section>
</main>
<footer>© 2024 Mi Sitio Web</footer>
```

En el primer ejemplo, el uso de `<div>` para todo el contenido hace que el código sea menos claro y menos accesible. En el segundo ejemplo, el uso de etiquetas semánticas como `<header>`, `<nav>`, `<main>`, `<section>`, `<h1>`, `<h2>`, y `<footer>` proporciona una estructura clara y significativa que mejora la accesibilidad, SEO y mantenibilidad.

**Uso del Atributo `role` en Etiquetas No Semánticas**

El atributo `role` se utiliza para proporcionar información adicional sobre el propósito de un elemento en situaciones donde no se pueden utilizar etiquetas semánticas. Esto es especialmente útil para tecnologías asistivas.

1. **Compatibilidad hacia atrás**: En proyectos que requieren compatibilidad con navegadores más antiguos que no soportan etiquetas HTML5 semánticas.
2. **Componentes de UI personalizados**: Cuando se crean componentes de interfaz de usuario personalizados con `div` o `span`, el atributo `role` puede describir su función.
3. **Marcos y Librerías**: En algunos casos, los marcos y librerías de JavaScript pueden utilizar `div` y `span` por flexibilidad, y el atributo `role` ayuda a mantener la semántica.

El uso de etiquetas semánticas en HTML es una práctica esencial que mejora la accesibilidad, SEO y mantenibilidad del código. Cuando no es posible utilizar etiquetas semánticas, el atributo `role` proporciona una manera de mantener la claridad y accesibilidad del contenido. Implementar semántica en tus páginas web no solo crea una mejor experiencia para los usuarios, sino que también facilita el trabajo de los desarrolladores y optimiza la interacción con los motores de búsqueda.

**Contenedor de elementos**

Los contenedores en HTML son etiquetas que permiten agrupar otros elementos para organizar el contenido de una página web de manera estructurada y lógica. Estos contenedores son fundamentales para el diseño web, la accesibilidad y la mantenibilidad del código. A continuación, se detallan los contenedores más comunes en HTML, cómo se usan y en qué momentos se deben utilizar.

**`<div>`: El Contenedor Genérico**

La etiqueta `<div>` es un contenedor de bloque genérico que no tiene ningún significado específico. Es extremadamente flexible y se utiliza para agrupar bloques de contenido para aplicar estilos CSS o scripts JavaScript.

**Ejemplo**:
```html
<div class="container">
    <div class="header">Encabezado</div>
    <div class="content">Contenido principal</div>
    <div class="footer">Pie de página</div>
</div>
```

**Cuándo Usar**: Úsalo para agrupar contenido que no encaja en una categoría semántica específica o cuando necesites aplicar un conjunto de estilos o comportamientos a un grupo de elementos.

**`<span>`: El Contenedor en Línea**

La etiqueta `<span>` es un contenedor en línea que no tiene significado específico. Es utilizada para agrupar texto o elementos en línea dentro de un documento.

**Ejemplo**:
```html
<p>Este texto es <span class="highlight">muy importante</span> en este contexto.</p>
```

**Cuándo Usar**: Úsalo para pequeñas porciones de texto o elementos en línea que requieren estilos específicos o interacciones con JavaScript.

**`<header>`: El Encabezado de Documento o Sección**

La etiqueta `<header>` se utiliza para definir el encabezado de un documento o una sección. Puede contener elementos como títulos, logotipos, menús de navegación, etc.

**Ejemplo**:
```html
<header>
    <h1>Google es genial.</h1>
    <nav>
        <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="index.html#acerca-de">Acerca de</a></li>
            <li><a href="multimedia.html">Multimedias</a></li>
            <li><a href="contacto.html">Contacto</a></li>
        </ul>
    </nav>
</header>
```

**Cuándo Usar**: Úsalo para encabezados de documentos completos o secciones específicas dentro de una página.

**`<nav>`: Navegación**

La etiqueta `<nav>` se utiliza para definir un conjunto de enlaces de navegación.

**Ejemplo**:
```html
    <nav>
        <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="index.html#acerca-de">Acerca de</a></li>
            <li><a href="multimedia.html">Multimedias</a></li>
            <li><a href="contacto.html">Contacto</a></li>
        </ul>
    </nav>
```

**Cuándo Usar**: Úsalo para crear menús de navegación principales o secundarios en tu sitio.

**`<main>`: Contenido Principal**

La etiqueta `<main>` se utiliza para definir el contenido principal de un documento. El contenido dentro de `<main>` debe ser único y no debe incluir contenido que se repite en todas las páginas como encabezados o pies de página.

**Ejemplo**:
```html
<main>
    <h1>Bienvenidos a Nuestro Sitio</h1>
    <p>Aquí encontrarás la mejor información sobre...</p>
</main>
```

**Cuándo Usar**: Úsalo para agrupar el contenido principal de la página, excluyendo el contenido repetitivo como encabezados y pies de página.

**`<section>`: Sección del Documento**

La etiqueta `<section>` se utiliza para definir secciones temáticas en un documento, agrupando contenido relacionado.

**Ejemplo**:
```html
<section>
    <h2>Acerca de Nosotros</h2>
    <p>Somos una empresa dedicada a...</p>
</section>
```

**Cuándo Usar**: Úsalo para agrupar contenido relacionado dentro de una sección temática específica de tu documento.

**`<article>`: Contenido Autónomo**

**Descripción**: La etiqueta `<article>` se utiliza para definir contenido autónomo que puede ser distribuido independientemente del resto del sitio, como artículos de blog, noticias, etc.

**Ejemplo**:
```html
<article>
    <h2>Título del Artículo</h2>
    <p>Contenido del artículo...</p>
</article>
```

**Cuándo Usar**: Úsalo para artículos de blog, noticias u otras piezas de contenido que puedan existir de manera independiente.

**`<aside>`: Contenido Adicional**

**Descripción**: La etiqueta `<aside>` se utiliza para definir contenido adicional que está relacionado con el contenido principal pero no es esencial para su comprensión, como barras laterales o cuadros de información.

**Ejemplo**:
```html
<aside>
    <h2>Noticias Relacionadas</h2>
    <ul>
        <li><a href="#news1">Noticia 1</a></li>
        <li><a href="#news2">Noticia 2</a></li>
    </ul>
</aside>
```

**Cuándo Usar**: Úsalo para barras laterales, cuadros de información o cualquier contenido adicional que complemente el contenido principal.

**`<footer>`: Pie de Página**

**Descripción**: La etiqueta `<footer>` se utiliza para definir el pie de página de un documento o una sección. Generalmente, contiene información de autoría, enlaces a términos de servicio, políticas de privacidad, etc.

**Ejemplo**:
```html
<footer>
    <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
</footer>
```

**Cuándo Usar**: Úsalo para incluir información sobre la autoría, términos de servicio, políticas de privacidad y otros detalles al final de tu página o sección.

**Buenas Prácticas al Utilizar Contenedores en HTML**

1. **Utiliza Etiquetas Semánticas Siempre que Sea Posible**: Prefiere etiquetas como `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, y `<footer>` sobre `<div>` y `<span>`.
2. **Mantén un Código Limpio y Organizado**: Agrupa el contenido de manera lógica y coherente para mejorar la legibilidad y mantenibilidad del código.
3. **Aplica Clases y IDs Descriptivos**: Utiliza nombres descriptivos para las clases y los IDs para facilitar la comprensión del código.
4. **Asegura la Accesibilidad**: Utiliza atributos ARIA (Accessible Rich Internet Applications) cuando sea necesario para mejorar la accesibilidad.
5. **Evita el Uso Excesivo de Contenedores**: No anides contenedores innecesariamente, ya que esto puede complicar el diseño y dificultar la lectura del código.

---
## Etiquetas de citas

Las citas en HTML son esenciales para representar contenido citado o referenciado de otra fuente. Estas etiquetas no solo ayudan a estructurar el contenido, sino que también mejoran la legibilidad y la semántica de las páginas web. A continuación, se detallan todas las etiquetas de citas disponibles en HTML, explicando su uso y proporcionando ejemplos.

**`<blockquote>`**

La etiqueta `<blockquote>` se utiliza para definir una sección que es una cita larga de otra fuente. Generalmente, el contenido dentro de `<blockquote>` está indentado.

**Ejemplo**:
```html
<h2>Acerca de Google</h2>
<p>Google es una de las empresas más influyentes del mundo, fundada en 1998 por Larry Page y Sergey Brin.</p>

<blockquote cite="https://www.google.com/about/">
"Nuestra misión es organizar la información del mundo y hacerla universalmente accesible y útil."
</blockquote>
```

**Cuándo Usar**: Úsalo para citas extensas de otras fuentes, proporcionando el atributo `cite` opcionalmente para indicar la fuente.

**`<q>`**

La etiqueta `<q>` se utiliza para definir una breve cita en línea. Los navegadores normalmente muestran el contenido de `<q>` entre comillas.

**Ejemplo**:
```html
<p>
    El éxito de Google no se puede negar; <q>ha cambiado la forma en que vivimos y trabajamos</q>, afirma <cite>Wired Magazine</cite>.
</p>
```

**Cuándo Usar**: Úsalo para citas breves dentro de párrafos o texto en línea.

**`<cite>`**

La etiqueta `<cite>` se utiliza para definir el título de una obra, como un libro, un poema, una película, una canción, un programa de televisión, una pintura, una escultura, etc.

**Ejemplo**:
```html
<p>
    Según <cite>The New York Times</cite>, Google ha revolucionado la manera en que accedemos a la información.
</p>
```

**`<abbr>`**

La etiqueta `<abbr>` se utiliza para definir una abreviatura o acrónimo, proporcionando una explicación completa mediante el atributo `title`.

**Ejemplo**:
```html
<p>
    Google ofrece una variedad de servicios y productos, desde su motor de búsqueda hasta <abbr title="Inteligencia Artificial">IA</abbr> avanzada y plataformas de publicidad digital.
</p>
```

**Cuándo Usar**: Úsalo para acrónimos y abreviaturas, mejorando la accesibilidad al proporcionar el significado completo.

**`<address>`**

La etiqueta `<address>` se utiliza para definir la información de contacto de una persona o una organización.

**Ejemplo**:
```html
        <p>
            La empresa tiene su sede en:
            <address>
            Google LLC<br>
            1600 Amphitheatre Parkway<br>
            Mountain View, CA 94043<br>
            Estados Unidos
            </address>
        </p>

```

**Cuándo Usar**: Utiliza `<address>` para información de contacto como direcciones físicas, direcciones de correo electrónico, enlaces de redes sociales, etc.

**`<time>`**

La etiqueta `<time>` se utiliza para definir fechas u horas específicas, proporcionando el valor de la fecha/hora mediante el atributo `datetime`.

**Ejemplo**:
```html
<p>
    La última actualización sobre su misión fue realizada el <time datetime="2023-03-01">1 de marzo de 2023</time>.
</p>
```

**Cuándo Usar**: Utiliza `<time>` para representar fechas y horas, mejorando la semántica y la accesibilidad de los datos temporales.

---
## Formularios

**Etiqueta `<form>`**
La etiqueta `<form>` se utiliza para crear un formulario en HTML. Es uno de los elementos fundamentales para recopilar datos de los usuarios. Algunos atributos importantes son:

- `action`: Especifica la URL a la que se enviarán los datos del formulario.
- `method`: Especifica el método de envío de los datos, como GET o POST.

Ejemplo:
```html
<form action="/ruta-de-destino" method="POST">
    <!-- Aquí van los elementos del formulario -->
</form>
```

**Etiqueta `<fieldset>` y `<legend>`**
La etiqueta `<fieldset>` se utiliza para agrupar elementos relacionados en un formulario, mientras que `<legend>` proporciona un título descriptivo para el grupo de elementos. Esto ayuda a estructurar y organizar el formulario de manera más clara.

Ejemplo:
```html
<fieldset>
    <legend>Información Personal</legend>
    <!-- Otros elementos del formulario -->
</fieldset>
```

En este ejemplo, "Información Personal" sería el título que aparecería arriba o alrededor del grupo de elementos relacionados dentro del `<fieldset>`.

Estas etiquetas son especialmente útiles cuando tienes varios elementos en un formulario que están relacionados entre sí, como datos de contacto o información de envío. Permiten crear formularios más accesibles y fáciles de entender para los usuarios.

**Etiqueta `<label>`**

La etiqueta `<label>` se utiliza para asociar texto descriptivo con elementos de formulario, lo que mejora la accesibilidad y usabilidad del formulario. El uso básico de `<label>` es el siguiente:

```html
<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre">
```

- El atributo `for` en la etiqueta `<label>` se utiliza para asociarla con un elemento de formulario específico mediante el valor del atributo `id`.
- El atributo `id` en el elemento de formulario (como `<input>`) debe coincidir con el valor del atributo `for` en la etiqueta `<label>`. Esto permite que los usuarios hagan clic en la etiqueta para activar el campo de entrada correspondiente.

**Etiqueta `<input>`**

La etiqueta `<input>` se utiliza para crear campos de entrada en un formulario. Algunos de los atributos comunes de `<input>` son:

- `type`: Especifica el tipo de campo de entrada (como `text`, `checkbox`, `radio`, `submit`, etc.).
- `id`: Proporciona un identificador único para el campo de entrada.
- `name`: Especifica el nombre del campo de entrada, que se utilizará para identificar el valor del campo cuando se envíe el formulario.

**Anidar `<input>` en `<label>`**

También es posible anidar un `<input>` dentro de un `<label>` sin necesidad de utilizar los atributos `for` e `id`. Esto es útil en situaciones en las que no es posible o necesario asociar explícitamente la etiqueta con el campo de entrada. Por ejemplo:

```html
<label>
    Nombre:
    <input type="text" name="nombre">
</label>
```

En este caso, el campo de texto `<input>` está dentro de la etiqueta `<label>`, por lo que hacer clic en el texto "Nombre:" activará automáticamente el campo de entrada. Esta técnica es útil para simplificar el código cuando la asociación explícita entre la etiqueta y el campo de entrada no es necesaria.

**`<input type="submit">`**

El elemento `<input>` con el atributo `type="submit"` se utiliza para crear un botón que envía el formulario cuando se hace clic en él. Es el método más común para crear botones de envío en los formularios HTML.

Ejemplo:
```html
<form action="/ruta-de-destino" method="POST">
    <!-- Otros campos de formulario -->
    <input type="submit" value="Enviar">
</form>
```

**`<button>`**

El elemento `<button>` se puede utilizar de dos maneras en un formulario. Si se coloca dentro de un formulario y no se especifica ningún atributo `type`, se comportará como un botón de envío por defecto, enviando el formulario cuando se hace clic en él.

Ejemplo:
```html
<form action="/ruta-de-destino" method="POST">
    <!-- Otros campos de formulario -->
    <button>Enviar</button>
</form>
```

También se puede utilizar el atributo `type="submit"` en un `<button>` para que se comporte explícitamente como un botón de envío.

Ejemplo:
```html
<form action="/ruta-de-destino" method="POST">
    <!-- Otros campos de formulario -->
    <button type="submit">Enviar</button>
</form>
```

---
## Tipos de `input`
La etiqueta `<input>` en HTML tiene varios atributos de tipo (`type`) que se utilizan comúnmente para crear diferentes tipos de campos de entrada en formularios. Algunos de los más usados son:

1. **`text`**: Crea un campo de texto de una sola línea. Se utiliza para ingresar texto corto, como nombres, direcciones de correo electrónico, etc.

   ```html
   <input type="text" name="nombre">
   ```

2. **`password`**: Crea un campo de texto donde los caracteres ingresados se ocultan. Se utiliza para ingresar contraseñas.

   ```html
   <input type="password" name="contrasena">
   ```

3. **`checkbox`**: Crea una casilla de verificación que permite al usuario seleccionar una o varias opciones.

   ```html
   <input type="checkbox" name="opcion1" value="1"> Opción 1
   <input type="checkbox" name="opcion2" value="2"> Opción 2
   ```

4. **`radio`**: Crea un botón de opción que permite al usuario seleccionar una opción de un conjunto de opciones.

   ```html
   <input type="radio" name="opcion" value="1"> Opción 1
   <input type="radio" name="opcion" value="2"> Opción 2
   ```

5. **`submit`**: Crea un botón que envía el formulario al servidor para su procesamiento.

   ```html
   <input type="submit" value="Enviar">
   ```

6. **`reset`**: Crea un botón que restablece todos los campos del formulario a sus valores predeterminados.

   ```html
   <input type="reset" value="Restablecer">
   ```

7. **`file`**: Crea un campo de carga de archivos que permite al usuario seleccionar un archivo para cargar.

   ```html
   <input type="file" name="archivo">
   ```

8. **`date`**, **`time`**, **`datetime`**, **`datetime-local`**: Crea campos para ingresar fechas y horas en varios formatos.

   ```html
   <input type="date" name="fecha">
   <input type="time" name="hora">
   <input type="datetime" name="fecha-hora">
   <input type="datetime-local" name="fecha-hora-local">
   ```

Estos son solo algunos de los atributos de tipo comúnmente utilizados en la etiqueta `<input>`. Cada uno tiene un propósito específico y se utiliza para recopilar diferentes tipos de datos de los usuarios en formularios HTML.

---
## Validación de formulario 
La validación de formularios es un componente esencial en el desarrollo web que garantiza que los datos ingresados por los usuarios cumplan con los requisitos específicos antes de ser procesados o almacenados. Este proceso es crucial para mantener la integridad de los datos, mejorar la experiencia del usuario y proteger la aplicación contra ataques maliciosos. En esta guía, exploraremos los conceptos fundamentales y las mejores prácticas para implementar la validación de formularios de manera efectiva.

**Tipos de Validación**

1. **Validación del Lado del Cliente**
La validación del lado del cliente se realiza en el navegador del usuario antes de enviar los datos al servidor. Esto proporciona una respuesta inmediata a los usuarios, mejorando la experiencia de uso.

**Ventajas:**
- Respuesta rápida.
- Reducción de carga en el servidor.

**Desventajas:**
- Puede ser omitida si JavaScript está deshabilitado.
- No es completamente segura, debe ser complementada con validación del lado del servidor.

2. **Validación del Lado del Servidor**
La validación del lado del servidor se realiza después de que los datos son enviados al servidor. Este tipo de validación es crucial para la seguridad, ya que no puede ser eludida por el usuario.

**Ventajas:**
- Mayor seguridad.
- No depende del navegador o las configuraciones del cliente.

**Desventajas:**
- Puede aumentar la carga del servidor.
- La respuesta no es inmediata, lo que puede afectar la experiencia del usuario.

**Validación HTML5**
HTML5 ofrece varios atributos de validación que se pueden aplicar directamente a los elementos de formulario.

- `required`: asegura que el campo no esté vacío.
- `type`: define el tipo de entrada (e.g., `email`, `number`).
- `pattern`: define una expresión regular que debe coincidir con la entrada.
- `min` y `max`: especifican los valores mínimo y máximo para números.
- `maxlength`: establece el número máximo de caracteres.

**Ejemplo:**

```html
<form action="/index.html" method="post">
    <fieldset>
        <legend>Regístrate</legend>
        <label>Edad:
            <input type="number" name="edad" required min="18">
        </label>
        <label>
            Nombre:
            <input type="text" name="nombre" required minlength="2">
        </label>

        <label>
            Correo:
            <input type="email" name="correo" required>
        </label>

        <button type="submit">Enviar</button>
</fieldset>
```

---
## Etiquetas de selección y lista de datos

En HTML, las etiquetas `<select>` y `<datalist>` se utilizan para crear listas desplegables y listas de sugerencias autocompletables, respectivamente. A continuación, se explica en detalle cómo usarlas y sus elementos asociados.

**Etiqueta `<select>` y `<option>`**

La etiqueta `<select>` crea un menú desplegable. Dentro de esta etiqueta, se utiliza `<option>` para definir cada una de las opciones que el usuario puede seleccionar.

*Estructura básica de `<select>`*

```html
<select name="fruits" id="fruit-select">
    <option value="apple">Manzana</option>
    <option value="banana">Banana</option>
    <option value="cherry">Cereza</option>
</select>
```

**Atributos importantes**

- `name`: Define el nombre del control, utilizado para identificar el dato cuando se envía el formulario.
- `id`: Asigna un identificador único para el elemento, útil para estilos CSS y scripts JavaScript.
- `value` (en `<option>`): El valor que se enviará si esa opción es seleccionada.
- `selected` (en `<option>`): Atributo booleano que define la opción preseleccionada.

**Ejemplo avanzado de `<select>`**

```html
<fieldset>
    <legend>Evento</legend>
    <label for="evento">Selecciona el Evento:</label>
    <select id="evento" name="evento" required>
        <option value="conferencia_tec">Conferencia Tecnológica</option>
        <option value="webinar_seo">Webinar sobre SEO</option>
        <option value="taller_cloud">Taller sobre Cloud Computing</option>
    </select>
</fieldset>
```

En este ejemplo, la primera opción no tiene valor (`value`), actuando como un marcador de posición.

**Etiqueta `<datalist>`, `<option>` e `<input>`**

La etiqueta `<datalist>` se utiliza para proporcionar opciones sugeridas a un campo de entrada `<input>`. A diferencia de `<select>`, `<datalist>` no muestra un menú desplegable hasta que el usuario comience a escribir en el campo de entrada asociado.

**Estructura básica de `<datalist>`**

```html
<input list="browsers" name="browser" id="browser-input">
<datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Safari">
    <option value="Edge">
    <option value="Opera">
</datalist>
```

**Atributos importantes**

- `list` (en `<input>`): Asocia el campo de entrada con un `<datalist>` específico mediante el ID.
- `id` (en `<datalist>`): Asigna un identificador único para el elemento, enlazándolo con el campo de entrada.

**Ejemplo avanzado de `<datalist>`**

```html
<fieldset>
    <legend>Ciudades de evento</legend>
    <label for="ciudad">Ciudad:</label>
    <input list="ciudades" id="ciudad" name="ciudad" required>
    <datalist id="ciudades">
        <option value="Madrid">
        <option value="Barcelona">
        <option value="Valencia">
        <option value="Sevilla">
        <option value="Bilbao">
    </datalist>
</fieldset>
```

En este ejemplo, el usuario verá sugerencias de ciudades a medida que escriba en el campo de entrada.

---
## Etiquetas de detalles

La etiqueta `<details>` de HTML es una herramienta útil para crear elementos de contenido plegables que los usuarios pueden expandir o contraer para ver más información. Se usa comúnmente para descripciones detalladas, FAQs y secciones informativas que no necesitan estar siempre visibles. En esta guía, exploraremos cómo utilizar la etiqueta `<details>` con ejemplos prácticos y mencionaremos algunos atributos útiles.

**Estructura Básica de `<details>`**

La estructura básica de la etiqueta `<details>` incluye una etiqueta `<summary>` que actúa como un título o encabezado, y el contenido que se mostrará o se ocultará se coloca dentro del elemento `<details>`. Aquí tienes un ejemplo simple:

```html
<details>
    <summary>Título Desplegable</summary>
    <p>Contenido detallado que se puede expandir o contraer.</p>
</details>
```

*Ejemplo Completo*

A continuación, te mostramos un ejemplo más elaborado, utilizando una sección de eventos. Este ejemplo contiene varios elementos `<details>` para diferentes eventos:

```html
<section>
    <h2>Más Información sobre los Eventos</h2>

    <details>
        <summary>Conferencia Tecnológica</summary>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quod, suscipit commodi ipsa saepe
            ipsam nihil consequatur, at itaque dolor neque, quasi enim qui fugit tempore officiis sit animi
            molestias.</p>
    </details>

    <details>
        <summary>Webinar sobre SEO</summary>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur distinctio impedit quia et iusto
            consequatur quos obcaecati. Recusandae et sunt dolores aut, ratione voluptatum aperiam libero veniam
            sed harum eveniet?</p>
    </details>

    <details>
        <summary>Taller sobre Cloud Computing</summary>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ex enim dignissimos illo? Harum
            libero, odit dicta impedit reiciendis doloremque ipsam nulla iure maiores vel at omnis fuga tempora
            illo.</p>
    </details>
</section>
```

**Atributos Útiles**

El atributo `open` se puede usar para que el contenido esté expandido de forma predeterminada cuando se carga la página. Si se incluye este atributo, el contenido dentro del `<details>` se mostrará inmediatamente.

**Ejemplo:**

```html
<details open>
    <summary>Evento Abierto por Defecto</summary>
    <p>Este contenido está visible cuando la página se carga.</p>
</details>
```

*Conclusión*

La etiqueta `<details>` es una excelente herramienta para crear contenido plegable en tu página web, permitiendo a los usuarios acceder a información adicional sin sobrecargar la vista inicial. Este ejemplo te muestra cómo estructurar y usar atributos útiles de `<details>` para mejorar la experiencia del usuario. Experimenta con diferentes contenidos y funcionalidades para ver cómo puedes integrarlo en tus proyectos web.


---
## Metadatos
Los metadatos en HTML son fragmentos de información que proporcionan detalles adicionales sobre el contenido de una página web. Estos datos no son visibles directamente para los usuarios, pero juegan un papel crucial en la forma en que los motores de búsqueda y las redes sociales interpretan y muestran tu sitio web. A continuación, exploraremos los metadatos más importantes y cómo implementarlos en tu sitio web.

**Metadato de caracteres**

El atributo `charset` de la etiqueta `<meta>` especifica la codificación de caracteres utilizada por el documento HTML. UTF-8 es una codificación de caracteres muy utilizada que soporta casi todos los caracteres escritos en todos los idiomas, lo que la hace ideal para páginas web.

- **Propósito**: Garantizar que todos los caracteres se muestren correctamente en el navegador.
- **Importancia**: Es crucial para la correcta visualización de caracteres especiales y diferentes alfabetos.
  
Ejemplo:
```html
<meta charset="UTF-8">
```

**Metadatos para responsive design**

El atributo `viewport` es esencial para el diseño web adaptable (responsive design). Define cómo se debe mostrar el contenido en diferentes dispositivos y tamaños de pantalla.

- **`width=device-width`**: Establece el ancho del área de visualización igual al ancho del dispositivo, lo que asegura que el contenido se ajuste al ancho de la pantalla del dispositivo.
- **`initial-scale=1.0`**: Establece el nivel de zoom inicial al cargar la página. Un valor de 1.0 significa que no hay zoom inicial.

Ejemplo:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Metadato `robots`**

El metadato `robots` se utiliza para controlar cómo los motores de búsqueda interactúan con tu página web. Puedes especificar qué partes de tu sitio deben ser indexadas o no, y si deben seguir los enlaces en la página.

```html
<meta name="robots" content="index, follow">
```

- `index`: Permite que la página sea indexada.
- `follow`: Permite que los enlaces en la página sean seguidos.
- `noindex`: Evita que la página sea indexada.
- `nofollow`: Evita que los enlaces en la página sean seguidos.

**Metadato `description`**

El metadato `description` proporciona un resumen breve de la página web. Es fundamental para el SEO, ya que los motores de búsqueda lo utilizan a menudo como la descripción que aparece en los resultados de búsqueda.

```html
<meta name="description" content="Descubre las últimas noticias, eventos y conferencias sobre tecnologías en nuestro blog. Mantente informado sobre tendencias y avances en la industria tecnológica.">
```

**Metadato `author`**

El metadato `author` especifica el autor del contenido de la página.

```html
<meta name="author" content="Juan Pérez">
```

**Metadato para Open Graph**

Open Graph es un protocolo que permite a cualquier página web convertirse en un objeto rico en un gráfico social. Facebook y otras redes sociales utilizan estos datos para crear tarjetas enriquecidas cuando se comparte una página.

```html
    <meta property="og:title" content="Mi Web - Noticias y Eventos Tecnológicos">
    <meta property="og:description"
        content="Explora las últimas noticias y eventos sobre tecnología en nuestro sitio.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://mi-web.com">
    <meta property="og:image" content="images/imagen-03.png" alt="">
    <meta property="og:site_name" content="Mi Web">
```

Para más detalles sobre Open Graph, puedes visitar [Open Graph Protocol](https://ogp.me/).

**Link `alternate`**

El enlace `alternate` se utiliza para definir versiones alternativas del contenido, como versiones en diferentes idiomas.

```html
<link rel="alternate" href="https://ejemplo.com/en/articulo" hreflang="en">
```

**Link `canonical`**

El enlace `canonical` ayuda a evitar contenido duplicado especificando la URL preferida de una página web.

```html
<link rel="canonical" href="https://ejemplo.com/articulo">
```

---
## Favicon

**Importancia del Favicon**

El favicon es el pequeño icono que aparece en la pestaña del navegador junto al título de la página. Es crucial para la identificación visual y la marca, mejorando la experiencia del usuario al facilitar la identificación de tu sitio entre varias pestañas abiertas.

**Cómo cargar el Favicon**

Para agregar un favicon a tu sitio web, primero debes tener un archivo de imagen (preferiblemente en formato `.ico`, `.png`, o `.svg`). Luego, incluye el siguiente código en la sección `<head>` de tu HTML:

```html
<link rel="icon" href="https://ejemplo.com/favicon.ico" type="image/x-icon">
```

O para otros formatos de imagen:

```html
<link rel="icon" href="https://ejemplo.com/favicon.png" type="image/png">
<link rel="icon" href="https://ejemplo.com/favicon.svg" type="image/svg+xml">
```

---
## Resumen

En la sección de Estructura de una Página de nuestro curso de desarrollo web, los estudiantes han aprendido los siguientes temas:

**Semántica de HTML**: Se ha enseñado la importancia de utilizar etiquetas HTML semánticas como `<header>`, `<nav>`, `<article>`, `<section>` y `<footer>` para estructurar el contenido de una manera que sea significativa tanto para los navegadores como para los motores de búsqueda y las tecnologías de asistencia.

**Contenedor de elementos**: Los estudiantes han aprendido sobre las etiquetas de contenedor como `<div>` y `<span>`, así como las etiquetas semánticas como `<main>`, `<aside>` y `<figure>`, que ayudan a agrupar y organizar el contenido de manera lógica y clara en una página web.

**Etiquetas de citas**: Se ha explicado el uso de etiquetas de citas como `<blockquote>` para citas largas, `<q>` para citas en línea y `<cite>` para referencias de citas, y cómo estas etiquetas ayudan a dar formato y proporcionar contexto a las citas en una página web.

**Formularios**: Los estudiantes han aprendido a crear formularios HTML utilizando etiquetas como `<form>`, `<fieldset>`, `<legend>`, `<label>`, `<input>`, `<textarea>`, `<select>` y `<button>`. También se ha visto cómo utilizar atributos como `placeholder`, `required` y `name` para mejorar la funcionalidad y la accesibilidad de los formularios.

**Metadatos**: Se ha enseñado el uso de etiquetas `<meta>` para proporcionar información adicional sobre la página web, como `<meta charset="UTF-8">` para definir la codificación de caracteres, `<meta name="viewport" content="width=device-width, initial-scale=1.0">` para configurar el comportamiento de la página en dispositivos móviles y `<meta name="theme-color" content="#09f">` para personalizar la barra de herramientas del navegador.

**Favicon**: Los estudiantes han aprendido a añadir un favicon a su sitio web utilizando la etiqueta `<link rel="icon" type="image/png" href="favicon.png">`, lo que ayuda a mejorar la identificación visual y la marca del sitio web en la barra de direcciones del navegador.

**Con estos conocimientos, los estudiantes son capaces de realizar lo siguiente:**

- Estructurar sus páginas web utilizando etiquetas HTML semánticas para mejorar la accesibilidad y el SEO.
- Utilizar contenedores de elementos para organizar y dar formato al contenido de sus páginas web.
- Implementar citas de manera adecuada utilizando las etiquetas de citas.
- Crear formularios funcionales y accesibles para la recopilación de datos de los usuarios.
- Añadir metadatos importantes para definir la configuración y el comportamiento de sus páginas web.
- Incorporar un favicon para mejorar la identidad visual de su sitio web.

**Recursos Externos para Seguir Aprendiendo**:

- [Mozilla Developer Network (MDN) - HTML](https://developer.mozilla.org/es/docs/Web/HTML): Documentación completa y actualizada sobre HTML, incluyendo semántica, contenedores y formularios.
- [W3Schools - HTML Tutorial](https://www.w3schools.com/html/): Tutoriales y ejemplos prácticos para aprender HTML.
- [HTML5 - semántico](https://web.dev/learn/html/semantic-html?hl=es-419): Recursos y guías sobre la semántica de HTML5.
- [Codecademy - Learn HTML](https://www.codecademy.com/learn/learn-html): Curso interactivo en línea para aprender HTML.