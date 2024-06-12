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
¡Bienvenidos al curso de HTML básico! En este curso, exploraremos los elementos fundamentales de HTML, el lenguaje de marcado estándar para la creación de páginas web. Comenzaremos con la estructura base de un documento HTML y aprenderemos sobre los elementos clave como imágenes, vínculos y etiquetas de texto. También veremos qué son los atributos y cómo se utilizan para proporcionar información adicional sobre los elementos HTML. Además, aprenderemos a crear listas para organizar el contenido de nuestras páginas web de manera efectiva. ¡Comencemos a construir la web juntos!

---
## De que se encarga HTML
   -> Describir el contenido
   -> Crear elementos 
   -> Mostrar elementos 
   
   - No se ocupa de presentación o estilos 
   - No se ocupa de interacción

---
## ¿Qué son las etiquetas?
   -> Con las etiquetas se crean elementos 
	-> Partes de un elemento

---
## Encabesados y párrafos
   -> Como se usa h1 a h6
	-> H1 y su importancia de uso
	-> Párrafos 
	-> Elementos anidados con <strong>

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
	
   -> Otros elementos como br, hr y otros

---
## ¿Qué es un atributo?
Un atributo en HTML proporciona información adicional sobre un elemento y se agrega a la etiqueta de apertura del elemento para modificar su comportamiento o proporcionar metadatos. Vamos a desglosar qué es un atributo, sus partes y dar un ejemplo específico.

**¿Qué es un Atributo?**

En HTML, un atributo es una característica adicional que se agrega a la etiqueta de apertura de un elemento para proporcionar información adicional sobre ese elemento. Los atributos permiten modificar el comportamiento o proporcionar metadatos que no se expresan directamente en el contenido del elemento.

**Partes de un Atributo**

Un atributo generalmente consta de dos partes:

1. **Nombre del Atributo:** Es el nombre que identifica la propiedad que se está configurando. En el ejemplo `<html lang="es">`, el nombre del atributo es "lang".

2. **Valor del Atributo:** Es la información específica asociada con el atributo. En el ejemplo `<html lang="es">`, el valor del atributo "lang" es "es" (español).

   -> Atributos de imágenes src, alt, title y width-height
	-> Detalles importantes de los atributos como usar comillas y no 
	-> Atributos booleanos
	-> Atributo ID y clase
---
## Etiquetas de texto
-> b, i, u -por que ya no se recomienda
	-> strong - em y su importancia
	-> center - obsoletos -> MDN
	-> Estilos por defectos
   

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

En la sección de Introducción a HTML de nuestro curso de desarrollo web, los estudiantes han aprendido los siguientes temas:

Se ha enseñado la estructura básica de un documento HTML, incluyendo las etiquetas `<html>`, `<head>` y `<body>`, así como la importancia de una estructura bien formada para la creación de páginas web.

Los estudiantes han aprendido sobre los atributos en HTML, que son valores adicionales que se pueden agregar a las etiquetas para proporcionar información adicional. Se han visto ejemplos de atributos como `src` en la etiqueta `<img>` para especificar la fuente de una imagen.

Se ha enseñado cómo insertar imágenes en una página web utilizando la etiqueta `<img>` y cómo utilizar atributos como `alt` para proporcionar texto alternativo para las imágenes, lo cual es importante para la accesibilidad web.

Los estudiantes han aprendido sobre las etiquetas HTML utilizadas para dar formato al texto, como `<h1>` a `<h6>` para encabezados de diferentes tamaños, `<p>` para párrafos y `<strong>` para texto en negrita.

Se ha explicado cómo crear vínculos en HTML utilizando la etiqueta `<a>`, permitiendo a los usuarios navegar entre diferentes páginas web y recursos en línea.

Los estudiantes han aprendido a crear listas ordenadas (`<ol>`), listas desordenadas (`<ul>`) y listas de definición (`<dl>`) para organizar la información de manera estructurada en sus páginas web.

**Con estos conocimientos, los estudiantes son capaces de realizar lo siguiente:**

- Crear una estructura básica para sus páginas web utilizando HTML.
- Insertar y personalizar imágenes en sus páginas web.
- Dar formato al texto y utilizar diferentes niveles de encabezados.
- Crear vínculos que permitan la navegación entre diferentes páginas y recursos.
- Organizar información utilizando listas en sus páginas web.

**Recursos Externos para Seguir Aprendiendo**:

- [Mozilla Developer Network (MDN) - HTML](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics): Documentación completa y actualizada sobre HTML.
- [W3Schools - HTML Tutorial](https://www.w3schools.com/html/): Tutoriales y ejemplos prácticos para aprender HTML.
- [HTML Dog - HTML Beginner Tutorial](https://www.htmldog.com/guides/html/beginner/): Tutorial paso a paso para principiantes en HTML.
- [Codecademy - Learn HTML](https://www.codecademy.com/learn/learn-html): Curso interactivo en línea para aprender HTML.