# Etiquetas multimedia


---
## Introducción


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

**Propiedad `width: 100%` y `aspect-ratio`**

Para hacer que las imágenes sean responsivas y mantengan su proporción, puedes usar la propiedad `width: 100%` junto con `aspect-ratio`. La propiedad `aspect-ratio` asegura que la imagen mantenga su proporción independientemente del tamaño de la pantalla.

```html
<img src="ruta-de-la-imagen.jpg" alt="Descripción de la imagen" style="width: 100%; aspect-ratio: 638 / 317;">
```

En este ejemplo, la imagen se ajustará al ancho de su contenedor y mantendrá una relación de aspecto de 638:317.

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
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo de Imágenes en HTML</title>
  <style>
    img {
      width: 100%;
      aspect-ratio: 638 / 317;
    }
  </style>
</head>
<body>
  <h1>Ejemplo de uso de imágenes en HTML</h1>
  <figure>
    <img src="ruta-de-la-imagen.jpg" alt="Descripción de la imagen" loading="lazy">
    <figcaption>Esta es una leyenda descriptiva de la imagen.</figcaption>
  </figure>
</body>
</html>
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
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo de Videos en HTML</title>
  <style>
    video {
      width: 100%;
      aspect-ratio: 16 / 9;
    }
  </style>
</head>
<body>
  <h1>Ejemplo de uso de videos en HTML</h1>
  <video src="ruta-del-video.mp4" controls loop poster="imagen-poster.jpg" autoplay muted></video>
</body>
</html>
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
<audio controls>
  <source src="ruta-del-audio.mp3" type="audio/mpeg">
  <source src="ruta-del-audio.ogg" type="audio/ogg">
  Tu navegador no soporta la reproducción de audio.
</audio>
```

**Ejemplo Completo**

Aquí tienes un ejemplo completo que incorpora todos estos elementos:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo de Audio en HTML</title>
</head>
<body>
  <h1>Ejemplo de uso de audio en HTML</h1>
  <audio controls loop autoplay muted>
    <source src="ruta-del-audio.mp3" type="audio/mpeg">
    <source src="ruta-del-audio.ogg" type="audio/ogg">
    Tu navegador no soporta la reproducción de audio.
  </audio>
</body>
</html>
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
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo de Videos de YouTube en HTML</title>
  <style>
    .video-container {
      width: 100%;
      aspect-ratio: 16 / 9;
    }
  </style>
</head>
<body>
  <h1>Ejemplo de uso de videos de YouTube en HTML</h1>
  <div class="video-container">
    <iframe src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
  </div>
</body>
</html>
```

**Consideraciones Adicionales**

- **Privacidad Mejorada**: Puedes utilizar `https://www.youtube-nocookie.com/embed/VIDEO_ID` en el atributo `src` para mejorar la privacidad del usuario.
- **Carga Diferida**: Para mejorar el rendimiento, puedes cargar el video solo cuando el usuario interactúe con él. Esto se puede hacer utilizando técnicas de JavaScript para cargar el iframe dinámicamente.

---
## Resumen