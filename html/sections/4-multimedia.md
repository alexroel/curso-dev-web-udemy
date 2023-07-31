# Multimedias

1. [Introducción](#introducción)
2. [Etiquetas de imágenes](#etiquetas-de-imágenes)
3. [Etiquetas de figuras](#etiquetas-de-figuras)
4. [Srcset y sizes](#srcset-y-sizes)
5. [Pictures](#pictures)
6. [Audio y videos](#audio-y-videos)
7. [Rutas relativas y absolutas](#rutas-relativas-y-absolutas)
8. [Multimedias externas](#multimedias-externas)
9. [Galeria de Imágenes de Gatos](#galeria-de-imágenes-de-gatos)
10. [Resumen](#resumen)

---

## Introducción

![Descripción de la imagen](../img/40.jpg)
![Descripción de la imagen](../img/41.jpg)

En la sección de Multimedias de nuestro curso de HTML, exploramos cómo agregar elementos multimedia a nuestras páginas web. Aprendimos sobre diferentes etiquetas y atributos que nos permiten insertar imágenes, figuras, audio y video en nuestro código HTML.

Comenzamos con las etiquetas de imágenes, como `<img>`, que nos permitieron insertar imágenes en nuestras páginas. Aprendimos a especificar la ruta de la imagen, ajustar su tamaño, agregar texto alternativo y utilizar atributos adicionales para mejorar la accesibilidad y la experiencia del usuario.

Exploramos también las etiquetas de figuras, como `<figure>` y `<figcaption>`, que nos brindaron una forma semántica de agrupar imágenes y proporcionarles leyendas o descripciones adicionales.

Además, aprendimos sobre los conceptos de srcset y tamaños, que nos permitieron especificar diferentes versiones de una imagen para adaptar a diferentes dispositivos y tamaños de pantalla. Utilizamos estos atributos para optimizar la carga de imágenes y mejorar el rendimiento de nuestras páginas.

En cuanto a los elementos de audio y video, aprendimos a insertar y controlar la reproducción de archivos de audio y video usando las etiquetas `<audio>` y `<video>`. También exploramos atributos adicionales para personalizar la apariencia y el comportamiento de estos elementos.

Además, nos familiarizamos con las diferencias entre las rutas relativas y absolutas, y aprendimos a utilizarlas correctamente al enlazar archivos multimedia desde nuestras páginas web.

Por último, exploramos cómo agregar contenido multimedia, como videos de YouTube o archivos de audio alojados en otros sitios web, utilizando las etiquetas y atributos adecuados.

A lo largo de esta sección, vimos ejemplos prácticos y aprendimos buenas prácticas para trabajar con elementos multimedia en HTML. Estos conocimientos nos permitirán enriquecer nuestras páginas web con imágenes, videos, audio y otros recursos multimedia para brindar una experiencia atractiva y dinámica a nuestros usuarios.

¡Hemos adquirido habilidades valiosas para trabajar con multimedia en HTML y estamos listos para crear contenido impactante en nuestras páginas web!

---

## Etiquetas de imágenes

![Descripción de la imagen](../img/42.jpg)

Las etiquetas de imágenes en HTML se utilizan para insertar y mostrar imágenes en una página web. A continuación, te proporciono información sobre las etiquetas más comunes utilizadas para las imágenes en HTML:

* `<img>`: La etiqueta `<img>` se utiliza para insertar una imagen en la página web. Esta etiqueta no tiene una etiqueta de cierre, ya que se considera un elemento vacío. Aquí tienes un ejemplo básico:

~~~html
<img src="ruta-de-la-imagen.jpg" alt="Texto alternativo">
~~~

* El atributo `src` especifica la ruta o URL de la imagen que se va a mostrar.
* El atributo `alt` proporciona un texto alternativo que se muestra si la imagen no se puede cargar o si el usuario utiliza un lector de pantalla. Se recomienda agregar un texto descriptivo para mejorar la accesibilidad.

---

## Etiquetas de figuras

![Descripción de la imagen](../img/43.jpg)

La etiqueta `<figure>` en HTML se utiliza para envolver contenido independiente, como imágenes, ilustraciones, diagramas, código, entre otros elementos, junto con una leyenda o descripción relacionada. A continuación, te proporciono información sobre cómo utilizar la etiqueta `<figure>` y su complemento, la etiqueta `<figcaption>`:

* `<figure>`: La etiqueta `<figure>` se utiliza para envolver el contenido independiente, como imágenes u otros elementos multimedia, junto con su descripción o leyenda. Puede contener uno o varios elementos, como `<img>`, `<video>`, `<audio>`, `<canvas>`, `<iframe>`, etc. Aquí tienes un ejemplo básico:

~~~html
<figure>
  <img src="ruta-de-la-imagen.jpg" alt="Texto alternativo">
</figure>
~~~

* `<figcaption>`: La etiqueta `<figcaption>` se utiliza dentro de la etiqueta `<figure>` para proporcionar una descripción o leyenda para el contenido envuelto. Es especialmente útil para describir imágenes o proporcionar contexto adicional. Aquí tienes un ejemplo:

~~~html
<figure>
  <img src="ruta-de-la-imagen.jpg" alt="Texto alternativo">
  <figcaption>Descripción de la imagen</figcaption>
</figure>
~~~

Puedes personalizar la apariencia de `<figure>` y `<figcaption>` utilizando CSS para adaptar el estilo según tus necesidades. Estas etiquetas son particularmente útiles para mejorar la semántica y accesibilidad de tu página web al proporcionar una estructura clara y descriptiva para el contenido independiente.

Es importante tener en cuenta que la etiqueta `<figure>` no está limitada solo a imágenes, puedes utilizarla para envolver otros tipos de contenido que requieran una descripción o leyenda.

---

## Srcset y sizes

![Descripción de la imagen](../img/44.jpg)

Los atributos **srcset** y **sizes** son utilizados en conjunto con la etiqueta `<img>` en HTML para proporcionar versiones de imágenes optimizadas y adaptativas según las características del dispositivo y la resolución de la pantalla. A continuación, te proporciono información sobre cada uno de estos atributos:

* **srcset:** El atributo srcset se utiliza para especificar una lista de imágenes alternativas con diferentes resoluciones o tamaños. El navegador seleccionará la imagen más adecuada según la resolución de pantalla del dispositivo. Aquí tienes un ejemplo:

~~~html
<img src="imagen-pequena.jpg" srcset="imagen-grande.jpg 2x, imagen-mediana.jpg 1.5x" alt="Texto alternativo">
~~~

En este ejemplo, se especifican tres imágenes diferentes. La primera imagen, `imagen-pequena.jpg`, se considera la imagen por defecto. La segunda imagen, `imagen-grande.jpg`, se muestra cuando la resolución de pantalla es de alta densidad (2x). La tercera imagen, imagen-mediana.jpg, se muestra cuando la resolución de pantalla es de densidad media (1.5x).

* **sizes:** El atributo `sizes` se utiliza para definir el tamaño de la imagen en relación con la ventana del navegador o el contenedor del elemento `<img>`. Ayuda a los navegadores a seleccionar la imagen adecuada según el espacio disponible. Aquí tienes un ejemplo:

~~~html
<img src="imagen-pequena.jpg" srcset="imagen-grande.jpg 800w, imagen-mediana.jpg 600w" sizes="(max-width: 600px) 100vw, 50vw" alt="Texto alternativo">
~~~

En este ejemplo, se establece que cuando el ancho máximo de la ventana del navegador es de 600 píxeles, la imagen ocupará el 100% del ancho de la ventana (`100vw`). Cuando el ancho de la ventana es mayor a 600 píxeles, la imagen ocupará el 50% del ancho de la ventana (`50vw`).

Estos atributos (`srcset` y `sizes`) se utilizan en conjunto para permitir que los navegadores seleccionen la imagen óptima según la resolución y el tamaño de la pantalla del dispositivo. Esto ayuda a mejorar el rendimiento y la experiencia de los usuarios al cargar imágenes de menor tamaño en dispositivos con menor resolución o espacio disponible.

Es importante proporcionar diferentes versiones de la imagen con resoluciones y tamaños adecuados para asegurar una correcta visualización en diferentes dispositivos. Además, también se recomienda incluir un texto alternativo adecuado utilizando el atributo `alt` para mejorar la accesibilidad de las imágenes.

---

## Pictures

![Descripción de la imagen](../img/45.jpg)

La etiqueta `<picture>` en HTML se utiliza para ofrecer imágenes alternativas en función de las características del dispositivo, como la resolución de pantalla, la densidad de píxeles y el tipo de archivo admitido. Proporciona una forma más avanzada y flexible de mostrar imágenes adaptativas en comparación con el uso tradicional de la etiqueta `<img>`. A continuación, te proporciono información sobre cómo utilizar la etiqueta `<picture>`:

La estructura básica de la etiqueta `<picture>` incluye uno o varios elementos `<source>` seguidos de un elemento `<img>` opcional:

~~~html
<picture>
  <source srcset="imagen-1.jpg" media="(condición-1)">
  <source srcset="imagen-2.jpg" media="(condición-2)">
  <img src="imagen-por-defecto.jpg" alt="Texto alternativo">
</picture>
~~~

Aquí tienes una explicación de los componentes utilizados en la estructura de `<picture>`:

* `<source>`: El elemento `<source>` se utiliza para especificar una imagen alternativa y su correspondiente conjunto de fuentes (`srcset`) basado en diferentes condiciones. Las condiciones se definen mediante el atributo `media`, que utiliza consultas de medios para evaluar características específicas del dispositivo, como el ancho de la ventana del navegador o la densidad de píxeles. El navegador seleccionará la imagen más adecuada según la condición que cumpla. Puedes agregar múltiples elementos `<source>` para ofrecer diferentes opciones de imagen para diferentes condiciones.

* `<img>`: El elemento `<img>` se utiliza como una opción por defecto para mostrar una imagen en caso de que ninguna de las condiciones especificadas en los elementos `<source>` se cumpla. Es similar a la etiqueta `<img>` tradicional y proporciona una imagen básica que se mostrará si no se encuentra una coincidencia adecuada en los elementos `<source>`. Se recomienda utilizar el atributo `alt` para agregar un texto alternativo descriptivo para la imagen.

La etiqueta `<picture>` permite ofrecer diferentes versiones de una imagen para adaptarse a diferentes resoluciones y características del dispositivo. Esto ayuda a mejorar la carga y el rendimiento de la página, al mostrar imágenes optimizadas y de tamaño adecuado para cada situación.

Recuerda que es importante proporcionar imágenes alternativas para asegurar una buena experiencia de usuario, así como utilizar consultas de medios (media) y conjuntos de fuentes (`srcset`) adecuados para adaptar las imágenes a diferentes dispositivos y condiciones de visualización.

---

## Audio y videos

En HTML, se pueden insertar y reproducir audios y videos utilizando las etiquetas `<audio>` y `<video>`. A continuación, te proporciono información sobre cómo utilizar estas etiquetas:

![Descripción de la imagen](../img/46.jpg)

* Etiqueta `<audio>`:
  Sintaxis básica:
  El elemento `<audio>` se utiliza para envolver el contenido de audio. Puedes incluir uno o varios elementos de origen `<source>` dentro del elemento `<audio>`, cada uno con diferentes formatos de audio. El navegador seleccionará automáticamente el formato adecuado según la compatibilidad.

  ~~~html
  <audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Tu navegador no admite el elemento de audio.
  </audio>
  ~~~

* Atributos principales:
  * `src:` Especifica la URL del archivo de audio.
  * `type:` Define el tipo de archivo de audio (por ejemplo, "audio/mpeg" para archivos MP3).
  * `controls:` Muestra los controles de reproducción estándar en el reproductor de audio.

* Otras opciones de atributos:
  * `autoplay:` Inicia la reproducción del audio automáticamente.
  * `loop:` Reproduce el audio en un bucle continuo.
  * `muted:` Establece el audio en silencio.
  * `preload:` Especifica cómo se carga el archivo de audio ("auto", "metadata" o "none").

  ~~~html
  <audio src="audio.mp3" type="audio/mpeg" autoplay loop muted preload="auto"></audio>
  ~~~

* Controles personalizados:
Si deseas crear tus propios controles de audio personalizados, puedes utilizar JavaScript y CSS para lograrlo. Puedes controlar la reproducción, pausa, avance rápido, volumen y otras acciones mediante eventos y métodos JavaScript.

* Compatibilidad de navegadores:
La compatibilidad con formatos de audio puede variar según el navegador y el dispositivo. Para garantizar la reproducción en diferentes navegadores, se recomienda proporcionar múltiples formatos de audio utilizando la etiqueta `<source>` y especificar formatos como MP3, Ogg y WAV.
![Descripción de la imagen](../img/47.jpg)

* Etiqueta `<video>`:
  Sintaxis básica:
  El elemento `<video>` se utiliza para envolver el contenido de video. Puedes incluir uno o varios elementos de origen `<source>` dentro del elemento `<video>`, cada uno con diferentes formatos de video. El navegador seleccionará automáticamente el formato adecuado según la compatibilidad.

  ~~~html
  <video controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Tu navegador no admite el elemento de video.
  </video>
  ~~~

  * Atributos principales:
    * `src:` Especifica la URL del archivo de video.
    * `type:` Define el tipo de archivo de video (por ejemplo, "video/mp4" para archivos MP4).
    * `controls:` Muestra los controles de reproducción estándar en el reproductor de video.
  * Otras opciones de atributos:
    * `autoplay:` Inicia la reproducción del video automáticamente.
    * `loop:` Reproduce el video en un bucle continuo.
    * `muted:` Establece el video en silencio.
    * `poster:` Especifica una imagen de vista previa para mostrar antes de que se inicie el video.

    ~~~html
    <video src="video.mp4" type="video/mp4" autoplay loop muted poster="preview.jpg"></video>
    ~~~

  * Controles personalizados:
  Si deseas crear tus propios controles de video personalizados, puedes utilizar JavaScript y CSS para lograrlo. Puedes controlar la reproducción, pausa, avance rápido, volumen y otras acciones mediante eventos y métodos JavaScript.

  * Compatibilidad de navegadores:
  Es importante tener en cuenta que la compatibilidad con formatos de video puede variar según el navegador y el dispositivo. Para garantizar la reproducción en diferentes navegadores, se recomienda proporcionar múltiples formatos de video utilizando la etiqueta `<source>` y especificar formatos como MP4, WebM y Ogg.

---

## Rutas relativas y absolutas

![Descripción de la imagen](../img/48.jpg)

En HTML, las rutas relativas y absolutas se utilizan para especificar la ubicación de archivos, como imágenes, enlaces o scripts, dentro de una estructura de carpetas. A continuación, te proporciono información sobre las rutas relativas y absolutas:

* Rutas relativas:
  Las rutas relativas se definen en relación con la ubicación del archivo HTML actual. Esto significa que la ruta se calcula desde la ubicación del archivo HTML en el que se encuentra la referencia. Las rutas relativas son útiles cuando los archivos que deseas referenciar se encuentran en el mismo directorio o en subdirectorios de tu proyecto.

* Para referenciar un archivo en el mismo directorio, simplemente proporciona el nombre del archivo. Por ejemplo: `imagen.jpg`.
* Para referenciar un archivo en un subdirectorio, especifica el nombre del subdirectorio seguido por el nombre del archivo. Por ejemplo: `subdirectorio/imagen.jpg`.
* Para subir un nivel en la jerarquía de directorios, utiliza `../`. Por ejemplo, para referenciar un archivo en el directorio padre, utiliza: `../imagen.jpg`.

* Rutas absolutas:
Las rutas absolutas especifican la ubicación completa del archivo, desde la raíz del sistema de archivos o desde la URL base. Las rutas absolutas son útiles cuando deseas referenciar archivos en ubicaciones específicas o externas a tu proyecto.
  * Para referenciar un archivo desde la raíz del sistema de archivos, utiliza / seguido de la ruta completa. Por ejemplo: /ruta-completa/imagen.jpg.
  * Para referenciar un archivo desde una URL base, utiliza la URL completa. Por ejemplo: `https://www.ejemplo.com/ruta/imagen.jpg`.

Es importante tener en cuenta que las rutas relativas y absolutas dependen de la estructura de carpetas y de la ubicación del archivo HTML en el que se utiliza la ruta. Asegúrate de ajustar las rutas según la estructura de tu proyecto y las ubicaciones reales de los archivos que deseas referenciar.

Además, al utilizar rutas relativas o absolutas, presta atención a las mayúsculas y minúsculas en los nombres de archivos y directorios, ya que esto puede variar dependiendo del sistema operativo y del servidor web en el que se aloje tu proyecto.

---

## Multimedias externas

![Descripción de la imagen](../img/49.jpg)

Para incorporar contenido multimedia externo como videos de YouTube, mapas de Google Maps y widgets de redes sociales en HTML, puedes utilizar las siguientes técnicas:

* **Videos de YouTube:**
Para insertar un video de YouTube en tu página web, puedes utilizar la etiqueta `<iframe>` de HTML y el código de inserción proporcionado por YouTube. Aquí tienes un ejemplo:

~~~html
<iframe width="560" height="315" src="https://www.youtube.com/embed/TU_CODIGO_DE_VIDEO" frameborder="0" allowfullscreen></iframe>
~~~

Reemplaza "TU_CODIGO_DE_VIDEO" con el código de identificación único del video de YouTube que deseas insertar. Puedes obtener este código de identificación desde la URL del video en YouTube.

* **Mapas de Google Maps:**

  Para insertar un mapa de Google Maps en tu página web, puedes utilizar la etiqueta `<iframe>` y el código de inserción proporcionado por Google Maps. Aquí tienes un ejemplo:

~~~html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.3190578170475!2d-71.53656324154777!3d-16.408614500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424af999a14adf%3A0x8abd18c875ab957c!2sRecavarren%20103%2C%20Arequipa%2004001!5e0!3m2!1ses-419!2spe!4v1687385413179!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
~~~

Reemplaza `"YOUR_LATITUDE"` con la latitud deseada, `"YOUR_LONGITUDE"` con la longitud deseada y `"YOUR_ZOOM_LEVEL"` con el nivel de zoom que prefieras.

* **Widgets de redes sociales:**
  Para agregar widgets de redes sociales, como botones de compartir o feeds de redes sociales, los proveedores de redes sociales suelen proporcionar código de inserción específico para cada widget. Puedes copiar y pegar este código de inserción en tu página web para agregar el widget.
  
Por ejemplo, para agregar un botón de compartir de Twitter, puedes copiar el código de inserción provisto por Twitter y pegarlo en tu página:

~~~html
<a class="twitter-share-button"
  href="https://twitter.com/intent/tweet?text=TU_TEXTO"
  data-size="large">Tweet</a>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
~~~

Reemplaza "TU_TEXTO" con el texto que deseas que se comparta en Twitter.

Cabe destacar que el código de inserción puede variar según el proveedor de la plataforma externa. Asegúrate de consultar la documentación proporcionada por el proveedor para obtener el código de inserción actualizado y personalizado para tus necesidades.

Recuerda que al incorporar contenido externo, como videos de YouTube, mapas de Google Maps o widgets de redes sociales, es posible que se carguen recursos adicionales y se realicen solicitudes a los servidores de terceros. Considera el rendimiento de tu página y la privacidad del usuario al utilizar estos elementos externos.

---

### Galeria de Imágenes de Gatos

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galeria</title>
</head>
<body>
    <header>
        <h1>Gatos</h1>
    
        <p>
            Los gatos son mamíferos pertenecientes a la familia Felidae y son conocidos por ser animales domésticos populares en todo el mundo. A lo largo de la historia, los gatos han sido apreciados por su belleza, gracia y misterio. Aquí hay una descripción general de algunas características comunes de los gatos:
        </p>
    </header>

    <hr>

    <main>
        <h2>Imágenes de Gatos</h2>
        <div>
            <img src="https://loremflickr.com/320/240">
            <img src="https://loremflickr.com/320/241">
            <img src="https://loremflickr.com/320/242">
            <img src="https://loremflickr.com/320/243">
            <hr>
            <img src="https://loremflickr.com/320/244">
            <img src="https://loremflickr.com/320/245">
            <img src="https://loremflickr.com/320/246">
            <img src="https://loremflickr.com/320/247">
            <hr>
            <img src="https://loremflickr.com/320/248">
            <img src="https://loremflickr.com/320/249">
            <img src="https://loremflickr.com/320/250">
            <img src="https://loremflickr.com/320/251">
        </div>
    </main>

    <hr>

    <footer>
        <div>
          <h3>Sobre los gatos</h3>
          <p>Los gatos son animales fascinantes y adorables. Son conocidos por su belleza, comportamiento independiente y habilidades para la caza. Si eres amante de los gatos, aquí encontrarás información interesante sobre estas increíbles criaturas.</p>
        </div>
        
        <div>
          <p>&copy; 2023 Todos los derechos reservados | Nombre de tu sitio web</p>
        </div>
      </footer>
      
</body>
</html>
~~~

---

## Resumen

En conclusión, en esta sección del curso de HTML sobre Multimedia, hemos explorado diferentes aspectos relacionados con la incorporación de elementos multimedia en nuestras páginas web. Hemos aprendido a utilizar etiquetas como `<img>`, `<figure>`, `<audio>` y `<video>` para agregar imágenes, figuras, audio y video respectivamente.

Hemos descubierto cómo especificar rutas de archivo, ajustar tamaño, agregar texto alternativo y aplicar atributos adicionales para mejorar la accesibilidad y la experiencia del usuario. También hemos aprendido sobre conceptos como srcset y tamaños, que nos permiten adaptar las imágenes a diferentes dispositivos y tamaños de pantalla.

Además, hemos explorado la diferencia entre rutas relativas y absolutas, y hemos comprendido cómo enlazar contenido multimedia desde fuentes externas, como videos de YouTube o archivos de audio alojados en otros sitios web.

Durante el curso, hemos visto ejemplos prácticos y hemos adquirido habilidades fundamentales para trabajar con elementos multimedia en HTML. Estas habilidades nos permitirán crear páginas web atractivas y dinámicas, enriquecidas con imágenes, videos, audio y otros recursos multimedia.

Al dominar el uso de etiquetas y atributos para elementos multimedia, podemos mejorar la experiencia de nuestros usuarios y transmitir eficazmente nuestra información y mensajes a través de contenido visual y auditivo.

En resumen, hemos ampliado nuestro conocimiento de HTML al abordar el tema de multimedia, y estamos listos para aplicar estos conceptos en nuestros proyectos web para crear contenido impactante y envolvente.
