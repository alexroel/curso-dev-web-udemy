# Etiquetas multimedia

1. [Introducción](#introducción)
2. [Imagenes](#imagenes)
3. [Etiquetas de videos](#etiquetas-de-videos)
4. [Etiquetas de audio](#etiquetas-de-audio)
5. [Videos y páginas extenas](#videos-y-páginas-extenas)
6. [Resumen](#resumen)


---
## Introducción

¡Bienvenidos a la sección de Introducción a HTML de nuestro curso de desarrollo web! En esta sección, exploraremos cómo enriquecer tus páginas web con elementos multimedia. Aprenderás a insertar y manejar imágenes, videos y audio, y a integrar contenido multimedia de páginas externas. A través de estos temas, podrás crear páginas web dinámicas y atractivas que ofrecen una experiencia enriquecedora para los usuarios.

**Temas que cubriremos:**

**Imágenes**: Cómo insertar imágenes en tus páginas web usando la etiqueta `<img>` y personalizarlas con atributos como `src`, `alt` y `width`.

**Etiquetas de Videos**: Cómo incorporar videos directamente en tus páginas utilizando la etiqueta `<video>` y controlar su reproducción con atributos como `controls`, `autoplay` y `loop`.

**Etiquetas de Audio**: Cómo añadir archivos de audio a tus páginas web utilizando la etiqueta `<audio>` y gestionar su reproducción con atributos como `controls` y `autoplay`.

**Videos y Páginas Externas**: Cómo integrar contenido multimedia de otras plataformas, como YouTube y Vimeo, en tus páginas web utilizando iframes y códigos de inserción.

Esta sección te proporcionará las habilidades necesarias para agregar y gestionar contenido multimedia, mejorando la interactividad y el atractivo visual de tus proyectos web. ¡Empecemos!

---
## Imagenes 
Las imágenes son una parte crucial de la mayoría de las páginas web. Aquí te ofrecemos una guía sobre cómo utilizar etiquetas de imágenes en HTML, incluyendo aspectos avanzados como el atributo `loading`, la propiedad `aspect-ratio`, y el uso de la etiqueta `figure`.

**Etiqueta `<img>`**

La etiqueta `<img>` se utiliza para insertar imágenes en una página web. Aquí un ejemplo básico:

```html
<img src="ruta-de-la-imagen.jpg" alt="Descripción de la imagen">
```

- `src`: Especifica la ruta de la imagen.
- `alt`: Proporciona una descripción alternativa para la imagen, útil para accesibilidad y casos donde la imagen no se puede cargar.

**Atributo `loading` - lazy**

El atributo `loading` permite diferir la carga de las imágenes que están fuera del viewport, mejorando el rendimiento de la página. Los valores posibles son `lazy` y `eager` (carga inmediata).

```html
<img src="ruta-de-la-imagen.jpg" alt="Descripción de la imagen" loading="lazy">
```

**Etiqueta `<figure>` y `<figcaption>`**

La etiqueta `<figure>` se utiliza para agrupar contenido relacionado, como una imagen y su descripción. La etiqueta `<figcaption>` se usa para agregar una leyenda a la imagen.

```html
<figure>
  <img src="ruta-de-la-imagen.jpg" alt="Descripción de la imagen" style="width: 100%; aspect-ratio: 638 / 317;" loading="lazy">
  <figcaption>Esta es una leyenda descriptiva de la imagen.</figcaption>
</figure>
```

**Ejemplo Completo**

Aquí tienes un ejemplo completo que incorpora todos estos elementos:

```html
    <section>
        <h2>Creadores de Google</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsa adipisci dolor pariatur quos, doloribus nisi porro dolorem ipsam quaerat, ea sequi unde maxime tenetur! Porro quia quaerat cupiditate illo!</p>
        <figure>
            <img src="https://serenitymarkets.com/wp-content/uploads/2023/09/larry-page.jpg" alt="Foto de Larry Page" width="300">
            <figcaption>Larry Page fundador de Google</figcaption>
        </figure>

        <figure>
            <img src="https://statics.forbesargentina.com/2022/08/62f41f2e82fb2.jpg" alt="Foto de Larry Page" width="300">
            <figcaption>Sergey Brin fundador de Google</figcaption>
        </figure>
    </section>

    <section>
        <h2>Galeria de Google</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi perspiciatis rem, voluptas sunt sit sapiente quam tempore eius similique perferendis architecto illo provident consectetur magni reiciendis ut. Ratione, voluptas deleniti.</p>
        <figure>
            <picture>
                <source srcset="images/laptop-home.avif" type="image/avif">
                <source srcset="images/laptop-home.webp" type="image/webp">
                <img src="images/laptop-home.png" alt="Usando Google" width="100%" loading="lazy">
            </picture>
            <figcaption>Usando Google en una MacBook.</figcaption>
        </figure>
    </section>
```

**Consideraciones Adicionales**

- **Accesibilidad**: Siempre incluye el atributo `alt` en las imágenes para mejorar la accesibilidad.
- **SEO**: Las descripciones en `alt` también ayudan a los motores de búsqueda a entender el contenido de las imágenes.
- **Optimización de Imágenes**: Usa formatos modernos como WebP para reducir el tamaño de los archivos y mejorar los tiempos de carga.

---
## Etiquetas de videos

El uso de videos en una página web puede enriquecer la experiencia del usuario. Aquí te ofrecemos una guía sobre cómo utilizar la etiqueta `<video>` en HTML, incluyendo atributos como `loop`, `poster`, `autoplay`, y `mute`, así como la propiedad `aspect-ratio` para hacer los videos responsivos.

**Etiqueta `<video>`**

La etiqueta `<video>` se utiliza para incrustar videos en una página web. Aquí un ejemplo básico:

```html
<video src="ruta-del-video.mp4" controls></video>
```

- `src`: Especifica la ruta del video.
- `controls`: Añade controles de reproducción (play, pause, etc.).

**Atributos de la etiqueta `<video>`**

- `loop`: Hace que el video se reproduzca en bucle.
- `poster`: Especifica una imagen que se muestra antes de que el video comience a reproducirse.
- `autoplay`: Hace que el video comience a reproducirse automáticamente al cargar la página.
- `muted`: Silencia el video.
- `controls`: Muestra los controles de reproducción.

```html
<video src="ruta-del-video.mp4" controls loop poster="imagen-poster.jpg" autoplay muted></video>
```

**Propiedad `width: 100%` y `aspect-ratio`**

Para hacer que los videos sean responsivos y mantengan su proporción, puedes usar la propiedad `width: 100%` junto con `aspect-ratio`. La propiedad `aspect-ratio` asegura que el video mantenga su proporción independientemente del tamaño de la pantalla.

```html
<video src="ruta-del-video.mp4" controls style="width: 100%; aspect-ratio: 16 / 9;" loop poster="imagen-poster.jpg" autoplay muted></video>
```

En este ejemplo, el video se ajustará al ancho de su contenedor y mantendrá una relación de aspecto de 16:9.

**Ejemplo Completo**

Aquí tienes un ejemplo completo que incorpora todos estos elementos:

```html
    <section>
        <h2>Presentación de Google</h2>
        <video controls width="100%">
            <source src="video/presentacion-google.mp4" type="video/mp4">
            Tu navegador no soporta la etiqueta de video.
        </video>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum nihil corrupti blanditiis sunt mollitia! Quae, sapiente ratione assumenda nemo fugit maiores atque, velit necessitatibus quo, rerum quas aspernatur ea soluta.</p>
    </section>
```

**Consideraciones Adicionales**

- **Compatibilidad de Formatos**: Asegúrate de proporcionar videos en formatos compatibles con todos los navegadores principales (por ejemplo, MP4, WebM, y Ogg).
- **Accesibilidad**: Proporciona subtítulos para mejorar la accesibilidad del video usando la etiqueta `<track>`.

```html
<video src="ruta-del-video.mp4" controls loop poster="imagen-poster.jpg" autoplay muted>
  <track src="subtitulos.vtt" kind="subtitles" srclang="es" label="Español">
</video>
```

---
## Etiquetas de audio
Incorporar audio en una página web puede mejorar significativamente la experiencia del usuario. En esta guía, cubriremos cómo utilizar la etiqueta `<audio>` en HTML, junto con varios atributos que controlan la reproducción del audio.

**Etiqueta `<audio>`**

La etiqueta `<audio>` se utiliza para incrustar archivos de audio en una página web. Aquí tienes un ejemplo básico:

```html
<audio src="ruta-del-audio.mp3" controls></audio>
```

- `src`: Especifica la ruta del archivo de audio.
- `controls`: Añade controles de reproducción (play, pause, etc.).

**Atributos de la etiqueta `<audio>`**

- `loop`: Hace que el audio se reproduzca en bucle.
- `autoplay`: Hace que el audio comience a reproducirse automáticamente al cargar la página.
- `muted`: Silencia el audio.
- `controls`: Muestra los controles de reproducción.

```html
<audio src="ruta-del-audio.mp3" controls loop autoplay muted></audio>
```

**Proporcionar múltiples fuentes de audio**

Para asegurar la compatibilidad con todos los navegadores, es una buena práctica proporcionar el audio en diferentes formatos (por ejemplo, MP3, Ogg, WAV).

```html
    <section>
        <h2>Podcast sobre Google</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vel adipisci incidunt esse, iste ad nostrum illo ab qui voluptate optio repudiandae in quam rerum omnis sapiente ducimus excepturi dicta.</p>
        <audio controls>
            <source src="audio/lofi.mp3" type="audio/mpeg">
            Tu navegador no soporta la etiqueta de audio.
        </audio>
    </section>
```
---
## Videos y páginas extenas
Incorporar videos de plataformas externas como YouTube puede enriquecer la experiencia del usuario en tu página web. Aquí te ofrecemos una guía sobre cómo utilizar la etiqueta `<iframe>` para insertar videos de YouTube, y cómo hacer que sean responsivos utilizando `width: 100%` y `aspect-ratio`.

**Etiqueta `<iframe>`**

La etiqueta `<iframe>` se utiliza para incrustar contenido externo en una página web, como videos de YouTube. Aquí tienes un ejemplo básico:

```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

- `src`: Especifica la URL del video de YouTube. Reemplaza `VIDEO_ID` con el ID del video que deseas insertar.
- `frameborder`: Define el borde del iframe. Generalmente se establece en `0` para quitar el borde.
- `allowfullscreen`: Permite que el video se vea en pantalla completa.

**Hacer el video responsivo**

Para hacer que los videos sean responsivos y mantengan su proporción, puedes usar las propiedades `width: 100%` y `aspect-ratio`. La propiedad `aspect-ratio` asegura que el video mantenga su proporción independientemente del tamaño de la pantalla.

```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen style="width: 100%; aspect-ratio: 16 / 9;"></iframe>
```

En este ejemplo, el video se ajustará al ancho de su contenedor y mantendrá una relación de aspecto de 16:9.

**Ejemplo Completo**

Aquí tienes un ejemplo completo que incorpora todos estos elementos:

```html
    <section>
        <h2>Google, Facebook, Amazon - El poder ilimitado de los consorcios digitales | DW Documental</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquid adipisci numquam repudiandae eum corporis excepturi distinctio labore ullam consequatur ut porro molestias, qui repellat est voluptatibus odio optio quisquam.</p>
        
        
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/A3cGMNxRNJ0?si=YLajhm8oZAQ577ee" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
    </section>
```

**Consideraciones Adicionales**

- **Privacidad Mejorada**: Puedes utilizar `https://www.youtube-nocookie.com/embed/VIDEO_ID` en el atributo `src` para mejorar la privacidad del usuario.
- **Carga Diferida**: Para mejorar el rendimiento, puedes cargar el video solo cuando el usuario interactúe con él. Esto se puede hacer utilizando técnicas de JavaScript para cargar el iframe dinámicamente.

```html
    <section>
        <h2>Ubicación de Google</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dicta officiis modi quam laborum dolorum, distinctio expedita veniam voluptatum, voluptatibus repellendus eum optio? Error impedit dolores totam sequi exercitationem beatae.</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.3030502909178!2d-77.03812456575541!3d-12.097620507335074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c92f3847675b%3A0x49f9d9498e2b2cfa!2sGoogle%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1721265841219!5m2!1ses!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
```

---
## Resumen

En la sección de Etiquetas Multimedia de nuestro curso de desarrollo web, los estudiantes aprendieron a integrar y manejar diversos tipos de contenido multimedia en sus páginas web. Aquí tienes un resumen de los temas cubiertos y las habilidades adquiridas:

**Imágenes**: Los estudiantes aprendieron a insertar y configurar imágenes en sus páginas web utilizando la etiqueta `<img>`. Aprendieron a utilizar atributos como `src` para especificar la fuente de la imagen y `alt` para proporcionar texto alternativo, mejorando así la accesibilidad y la experiencia del usuario.

**Etiquetas de videos**: Se cubrió cómo incluir videos en una página web utilizando la etiqueta `<video>`. Los estudiantes aprendieron a usar atributos como `controls`, `autoplay`, `loop` y `poster` para personalizar la reproducción del video y mejorar la interacción del usuario.

**Etiquetas de audio**: Los estudiantes descubrieron cómo insertar archivos de audio en sus páginas web utilizando la etiqueta `<audio>`. Aprendieron a utilizar atributos como `controls`, `autoplay` y `loop` para gestionar la reproducción de audio, ofreciendo una experiencia más rica a los visitantes de sus sitios web.

**Videos y páginas externas**: Se enseñó cómo incrustar videos de plataformas externas como YouTube utilizando la etiqueta `<iframe>`. Los estudiantes aprendieron a personalizar el tamaño y la apariencia del contenido incrustado, permitiéndoles integrar fácilmente videos externos en sus propias páginas web.

**Con estos conocimientos, los estudiantes son capaces de:**

- Integrar y personalizar imágenes en sus páginas web, mejorando la presentación visual.
- Incluir y gestionar videos, ofreciendo contenido multimedia enriquecido a los usuarios.
- Insertar y controlar la reproducción de archivos de audio para crear experiencias web más dinámicas.
- Incrustar videos de plataformas externas, ampliando el alcance y la variedad del contenido disponible en sus sitios.

**Recursos Externos para Seguir Aprendiendo**:

- [Mozilla Developer Network (MDN) - Multimedia and embedding](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding): Guía completa sobre el uso de multimedia en HTML.
- [W3Schools - HTML Media](https://www.w3schools.com/html/html_media.asp): Tutoriales y ejemplos prácticos sobre la integración de multimedia en HTML.
- [Web.dev - Audio y Video](https://web.dev/learn/html/audio-video?continue=https%3A%2F%2Fweb.dev%2Flearn%2Fhtml&hl=es-419#article-https://web.dev/learn/html/audio-video&hl=es-419): Curso completo que cubre la integración de multimedia en el desarrollo web.