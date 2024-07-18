# Responsive Web Design
1. [Introducción](#introducción)
2. [¿Qué es Responsive Web Design?](#qué-es-responsive-web-design)
3. [¿Qué es Mobile First y Desktop First?](#qué-es-mobile-first-y-desktop-first)
4. [Herramientas para Probar tu Diseño Responsivo](#herramientas-para-probar-tu-diseño-responsivo)
5. [Creando Media Queries](#creando-media-queries)
6. [Operadores de Comparación en Media Queries](#operadores-de-comparación-en-media-queries)
7. [Snippet para Media Queries](#snippet-para-media-queries)
8. [Tamaños Estándar para Media Queries](#tamaños-estándar-para-media-queries)
9. [Obtimizar tu sitio web](#obtimizar-tu-sitio-web)
10. [Snippet para AVIF y WebP](#snippet-para-avif-y-webp)
11. [Obtimizar tu sitio web en aplicaciones moviles ](#obtimizar-tu-sitio-web-en-aplicaciones-moviles)
12. [Resumen](#resumen)




## Introducción

### Introducción a HTML

En esta sección de nuestro curso de desarrollo web, exploraremos los fundamentos de HTML (HyperText Markup Language) y su importancia en la creación de páginas web. HTML es el lenguaje estándar para estructurar y presentar contenido en la web, proporcionando la base sobre la cual se construyen todos los sitios y aplicaciones web. A medida que avancemos en este curso, aprenderás a utilizar HTML para crear y estructurar tus propios sitios web de manera efectiva.

**¿Qué es Responsive Web Design?**

El Responsive Web Design (RWD) es una técnica de diseño web que garantiza que los sitios web se vean y funcionen bien en una amplia variedad de dispositivos y tamaños de pantalla. A través de RWD, los desarrolladores pueden crear páginas web que se adapten automáticamente al entorno del usuario, proporcionando una experiencia de usuario óptima sin importar si se accede desde un teléfono móvil, una tableta o una computadora de escritorio.

**¿Qué es Mobile First y Desktop First?**

"Mobile First" y "Desktop First" son enfoques diferentes para el diseño web responsivo. "Mobile First" implica diseñar primero para dispositivos móviles y luego escalar hacia arriba para pantallas más grandes. Este enfoque asegura que el contenido y la funcionalidad esenciales estén optimizados para usuarios móviles. Por otro lado, "Desktop First" comienza con el diseño para pantallas grandes y luego se ajusta hacia abajo para dispositivos más pequeños. Ambos enfoques tienen sus propias ventajas y desafíos, y elegir entre ellos dependerá de las necesidades específicas de tu proyecto.

**Herramientas para Probar tu Diseño Responsivo**

Existen diversas herramientas que puedes utilizar para probar la responsividad de tu diseño web. Las herramientas de desarrollo del navegador, como las de Google Chrome y Firefox, permiten simular diferentes dispositivos y tamaños de pantalla, facilitando la detección y solución de problemas. Además, plataformas como BrowserStack y Responsinator ofrecen pruebas en una variedad de dispositivos reales y emulados, asegurando que tu sitio web funcione correctamente en todas las condiciones posibles.

**Creando Media Queries**

Las Media Queries son una característica clave del CSS que permite aplicar estilos específicos en función de las características del dispositivo, como el ancho de la pantalla. Aprenderemos a crear Media Queries para diseñar páginas web que se adapten a diferentes resoluciones y orientaciones, asegurando que tu contenido se presente de manera óptima en cualquier dispositivo.

**Snippet para Media Queries**

Proporcionaremos ejemplos de snippets de código para Media Queries, que podrás utilizar y adaptar a tus propios proyectos. Estos snippets te ayudarán a implementar rápidamente estilos responsivos, mejorando la eficiencia y consistencia de tu diseño web.

**Tamaños Estándar para Media Queries**

Exploraremos los tamaños de pantalla más comunes y cómo utilizarlos en tus Media Queries. Conocer estos estándares te permitirá diseñar de manera más efectiva para los dispositivos más utilizados por los usuarios, optimizando la experiencia de usuario en todos los contextos.

**Optimizar tu Sitio Web**

La optimización de tu sitio web es crucial para garantizar una carga rápida y un rendimiento eficiente. Aprenderemos técnicas y mejores prácticas para optimizar imágenes, scripts y otros recursos, reduciendo el tiempo de carga y mejorando la experiencia del usuario.

**Snippet para AVIF y WebP**

AVIF y WebP son formatos de imagen modernos que ofrecen mejor compresión y calidad en comparación con los formatos tradicionales como JPEG y PNG. Proporcionaremos snippets de código para implementar estos formatos en tu sitio web, mejorando la velocidad de carga y la calidad visual.

**Optimizar tu Sitio Web en Aplicaciones Móviles**

Finalmente, exploraremos técnicas específicas para optimizar tu sitio web en aplicaciones móviles. Desde la implementación de Progressive Web Apps (PWA) hasta la optimización de la interfaz de usuario y la experiencia del usuario, aprenderás a crear aplicaciones móviles que sean rápidas, responsivas y atractivas.

## ¿Qué es Responsive Web Design?

El Responsive Web Design (Diseño Web Responsivo) es una técnica de diseño y desarrollo web que asegura que los sitios web se vean bien y funcionen correctamente en una variedad de dispositivos y tamaños de pantalla. Esto se logra mediante el uso de CSS y HTML de manera inteligente para adaptar el diseño y la disposición del contenido según las características del dispositivo utilizado por el usuario.

**Antes de que hubiera Media Queries en el Responsive Web Design**

Antes de la introducción de las media queries en CSS3, los diseñadores enfrentaban desafíos significativos al intentar hacer que los sitios web fueran compatibles con diferentes dispositivos y resoluciones de pantalla. Las técnicas para lograr un diseño responsivo incluían:

1. **Tablas y Imágenes Flexibles:** Utilizar tablas y imágenes que se redimensionaran automáticamente según el tamaño de la pantalla del dispositivo.
   
2. **Unidades Relativas:** Emplear unidades relativas como porcentajes (`%`) en lugar de unidades absolutas como píxeles (`px`) para el diseño de elementos.

3. **Diseño Fluidos:** Crear diseños que se expandieran o contrajeran proporcionalmente según el ancho del contenedor padre.

**Ventajas de usar sitios responsive**

Implementar un diseño web responsivo ofrece una serie de beneficios significativos tanto para los desarrolladores como para los usuarios:

1. **Experiencia de Usuario Consistente:** Los usuarios experimentan una navegación más fluida y consistente sin importar el dispositivo que utilicen, mejorando así la satisfacción del usuario.

2. **SEO Mejorado:** Google y otros motores de búsqueda prefieren los sitios web responsivos, ya que facilitan el rastreo y la indexación del contenido al tener una única URL y código HTML.

3. **Ahorro de Tiempo y Costos:** Mantener un único sitio web responsivo es más eficiente que gestionar múltiples versiones del mismo sitio para diferentes dispositivos.

4. **Adaptabilidad Futura:** Los diseños responsivos están preparados para adaptarse a nuevos dispositivos y tamaños de pantalla que puedan surgir en el futuro, lo que garantiza la longevidad y la accesibilidad del sitio.

## ¿Qué es Mobile First y Desktop First?

**Mobile First**

**Mobile First** es una estrategia de diseño y desarrollo web que prioriza la optimización y la experiencia del usuario en dispositivos móviles antes que en dispositivos de escritorio. Esta metodología sugiere comenzar el diseño del sitio web desde una versión móvil y luego expandirse hacia versiones de escritorio o tablets si es necesario.

**Ventajas de Mobile First:**
- **Optimización para Dispositivos Móviles:** Garantiza que el sitio sea completamente funcional y fácil de usar en dispositivos móviles, que son cada vez más utilizados para acceder a internet.
- **Mejora la Performance:** Fomenta prácticas de desarrollo más eficientes y livianas, reduciendo el tiempo de carga y mejorando la velocidad del sitio.
- **SEO Mejorado:** Google y otros motores de búsqueda favorecen los sitios optimizados para dispositivos móviles, lo que puede mejorar el posicionamiento en los resultados de búsqueda.

**Implementación de Mobile First:**
- Utilización de unidades relativas como porcentajes y `em` para el diseño.
- Priorización de contenidos y funcionalidades esenciales en la versión móvil.
- Uso de media queries para ajustar el diseño y la disposición de los elementos en pantallas más grandes.

**Desktop First**

**Desktop First** es la metodología opuesta, donde el diseño y desarrollo del sitio web comienza desde una versión para escritorio y luego se adapta para dispositivos móviles más pequeños. Esta estrategia fue más común antes de la prevalencia de los dispositivos móviles.

**Ventajas de Desktop First:**
- **Enfoque en Funcionalidades Complejas:** Permite desarrollar funcionalidades complejas que pueden ser más difíciles de implementar en dispositivos móviles.
- **Diseños Elaborados:** Facilita la creación de diseños más detallados y visualmente complejos para pantallas más grandes.
- **Compatibilidad con Tecnologías Antiguas:** Algunas empresas todavía pueden tener requisitos específicos para usuarios de escritorio.

**Implementación de Desktop First:**
- Uso de unidades absolutas como píxeles para dimensiones y espaciados.
- Requerimiento de optimización posterior para dispositivos móviles, lo que puede ser más complicado y requerir más tiempo.

**¿Cuál es Recomendable Usar?**

**Mobile First** se ha convertido en la metodología preferida y recomendada por muchos diseñadores y desarrolladores debido al creciente uso de dispositivos móviles para acceder a internet. Priorizar la experiencia del usuario en dispositivos móviles desde el inicio no solo mejora la accesibilidad y la usabilidad del sitio web, sino que también se alinea mejor con las tendencias actuales de consumo de contenido en línea.

**Recomendación:**
- **Para Nuevos Proyectos:** Es recomendable adoptar la estrategia de Mobile First para garantizar un diseño y experiencia de usuario óptimos en todos los dispositivos.
- **Para Sitios Existentes:** Si estás trabajando en un sitio existente desarrollado con Desktop First, considera optimizarlo gradualmente para dispositivos móviles utilizando principios de Mobile First para mejorar la experiencia del usuario y el rendimiento del sitio.

Adoptar Mobile First no solo es una buena práctica de desarrollo web moderno, sino que también ayuda a futurizar el sitio web para las tendencias emergentes en dispositivos móviles y asegura una base sólida para el crecimiento y la expansión futura.


## Herramientas para Probar tu Diseño Responsivo

El diseño web responsivo (Responsive Web Design, RWD) es una técnica de diseño que permite que un sitio web se adapte a diferentes tamaños de pantalla y dispositivos. Para garantizar que un sitio web sea verdaderamente responsivo, es fundamental probarlo en varias resoluciones y dispositivos. A continuación, se detallan algunas herramientas y emuladores que pueden ayudarte en esta tarea.

**Emuladores de los Navegadores**

1. **Google Chrome DevTools**

   Google Chrome DevTools es una suite de herramientas de desarrollo integrada en el navegador Chrome. Entre sus características, incluye un emulador que permite simular diferentes dispositivos y tamaños de pantalla.

   **Cómo usarlo:**
   - Abre Google Chrome y navega al sitio web que deseas probar.
   - Presiona `Ctrl+Shift+I` (o `Cmd+Option+I` en Mac) para abrir DevTools.
   - Haz clic en el ícono de "Dispositivos móviles" en la parte superior izquierda de DevTools (o presiona `Ctrl+Shift+M`).
   - Selecciona un dispositivo predefinido de la lista desplegable o personaliza el tamaño de la pantalla.

2. **Microsoft Edge DevTools**

   Similar a Chrome DevTools, Microsoft Edge DevTools ofrece una variedad de herramientas para desarrolladores, incluyendo un emulador para probar la responsividad.

   **Cómo usarlo:**
   - Abre Microsoft Edge y navega al sitio web que deseas probar.
   - Presiona `F12` para abrir DevTools.
   - Haz clic en el ícono de "Dispositivos móviles" en la parte superior izquierda de DevTools (o presiona `Ctrl+Shift+M`).
   - Selecciona un dispositivo predefinido o ajusta manualmente el tamaño de la pantalla.

3. **Firefox Developer Tools**

   Firefox Developer Tools también incluye una herramienta de diseño responsivo que permite simular cómo se verá tu sitio web en diferentes dispositivos.

   **Cómo usarlo:**
   - Abre Firefox y navega al sitio web que deseas probar.
   - Presiona `Ctrl+Shift+I` (o `Cmd+Option+I` en Mac) para abrir Developer Tools.
   - Haz clic en el ícono de "Diseño responsivo" en la barra de herramientas (o presiona `Ctrl+Shift+M`).
   - Selecciona un dispositivo predefinido o ajusta manualmente el tamaño de la pantalla.

**Emulador Blisk**

Blisk es un navegador web diseñado específicamente para desarrolladores web. Ofrece una gama de características útiles, incluyendo emulación de dispositivos, captura de pantalla y grabación de video, y sincronización de desplazamiento entre dispositivos.

**Características principales:**
- **Emulación de dispositivos:** Blisk permite emular una amplia gama de dispositivos móviles y de escritorio.
- **Sincronización de desplazamiento:** Sincroniza el desplazamiento entre dispositivos emulados y la ventana del navegador.
- **Captura de pantalla y grabación de video:** Facilita la creación de documentación y la demostración de la responsividad del sitio.

**Cómo usarlo:**
- Descarga e instala Blisk desde su sitio web oficial.
- Abre Blisk y navega al sitio web que deseas probar.
- Selecciona un dispositivo de la lista de emulación en la barra lateral.

**Emulador Responsively App**

Responsively App es una herramienta de desarrollo diseñada para simplificar la prueba de diseño responsivo. Permite ver y probar tu sitio web en múltiples dispositivos al mismo tiempo.

**Características principales:**
- **Vista múltiple:** Permite ver cómo se renderiza tu sitio en varios dispositivos simultáneamente.
- **Sincronización:** Realiza acciones como desplazamiento, clics y navegación sincronizadas entre todas las vistas.
- **Herramientas de desarrollo integradas:** Ofrece una suite de herramientas de desarrollo para depurar y ajustar tu diseño.

**Cómo usarlo:**
- Descarga e instala Responsively App desde su sitio web oficial.
- Abre Responsively App y carga tu sitio web.
- Configura los dispositivos y tamaños de pantalla que deseas emular.

## Creando Media Queries

Los media queries son una parte esencial del diseño web responsivo. Permiten aplicar estilos CSS de manera condicional, según las características del dispositivo que esté viendo la página, como el ancho de la pantalla, la resolución, la orientación, y más. A continuación, se explica en detalle cómo crear y utilizar media queries en tus proyectos.

**Sintaxis de los Media Queries**

La sintaxis básica de un media query en CSS se ve así:

```css
@media (condición) {
  /* Estilos CSS aquí */
}
```

La condición puede ser cualquier característica del dispositivo, como el ancho de la pantalla. Aquí hay un ejemplo básico que aplica estilos solo si el ancho de la pantalla es de 600 píxeles o menos:

```css
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

En este caso, si el ancho de la pantalla es menor o igual a 600 píxeles, el color de fondo del `body` será `lightblue`.

**Usando el `print`**

Los media queries también pueden usarse para aplicar estilos específicos cuando un documento se imprime. Esto es útil para asegurarse de que la versión impresa de tu página web sea legible y se vea bien.

```css
@media print {
  body {
    font-size: 12pt;
    color: black;
    background-color: white;
  }
  .no-print {
    display: none;
  }
}
```

En este ejemplo, cuando se imprime la página, el tamaño de la fuente del `body` se ajusta a `12pt`, el color del texto se cambia a negro, y el color de fondo se establece en blanco. Además, cualquier elemento con la clase `no-print` no se mostrará en la versión impresa.


**Usando `and`:**

La palabra clave `and` permite combinar varias condiciones en un solo media query. Por ejemplo, puedes aplicar estilos solo si el ancho de la pantalla está entre 600 y 800 píxeles:

```css
@media (min-width: 600px) and (max-width: 800px) {
  body {
    background-color: yellow;
  }
}
```

En este ejemplo, el fondo del `body` se volverá amarillo solo si el ancho de la pantalla está entre 600 y 800 píxeles.

**Usando `or` (`,`):**

La palabra clave `or` se representa con una coma (`,`) y permite combinar varias condiciones donde al menos una de ellas debe ser verdadera. Por ejemplo, puedes aplicar estilos si el ancho de la pantalla es menor a 600 píxeles o mayor a 1200 píxeles:

```css
@media (max-width: 600px), (min-width: 1200px) {
  body {
    background-color: green;
  }
}
```

En este caso, el fondo del `body` se volverá verde si el ancho de la pantalla es menor a 600 píxeles o mayor a 1200 píxeles.

## Operadores de Comparación en Media Queries

La especificación de Media Queries Level 4 introduce nuevos operadores de comparación que permiten evaluar directamente si un valor es menor, mayor, igual, menor o igual, o mayor o igual a otro valor. Esto hace que las consultas de medios sean más simples y directas, eliminando la necesidad de combinar condiciones con el operador `and`. Aquí te explico a detalle cada uno de estos operadores y cómo se utilizan:


1. **< (menor que)**:
   - Evalúa si un valor es menor que otro valor.
   - Ejemplo: `@media (width < 600px) { ... }`
     ```css
     @media (width < 600px) {
       body {
         background-color: lightblue;
       }
     }
     ```
     En este ejemplo, el fondo del cuerpo será de color azul claro si el ancho de la ventana gráfica es menor que 600 píxeles.

2. **> (mayor que)**:
   - Evalúa si un valor es mayor que otro valor.
   - Ejemplo: `@media (width > 600px) { ... }`
     ```css
     @media (width > 600px) {
       body {
         background-color: lightgreen;
       }
     }
     ```
     Aquí, el fondo del cuerpo será de color verde claro si el ancho de la ventana gráfica es mayor que 600 píxeles.

3. **= (igual a)**:
   - Evalúa si un valor es igual a otro valor.
   - Ejemplo: `@media (width = 600px) { ... }`
     ```css
     @media (width = 600px) {
       body {
         background-color: yellow;
       }
     }
     ```
     En este caso, el fondo del cuerpo será de color amarillo si el ancho de la ventana gráfica es exactamente 600 píxeles.

4. **<= (menor o igual que)**:
   - Evalúa si un valor es menor o igual que otro valor.
   - Ejemplo: `@media (width <= 600px) { ... }`
     ```css
     @media (width <= 600px) {
       body {
         background-color: lightcoral;
       }
     }
     ```
     Aquí, el fondo del cuerpo será de color coral claro si el ancho de la ventana gráfica es menor o igual a 600 píxeles.

5. **>= (mayor o igual que)**:
   - Evalúa si un valor es mayor o igual que otro valor.
   - Ejemplo: `@media (width >= 600px) { ... }`
     ```css
     @media (width >= 600px) {
       body {
         background-color: lightgoldenrodyellow;
       }
     }
     ```
     En este ejemplo, el fondo del cuerpo será de color amarillo dorado claro si el ancho de la ventana gráfica es mayor o igual a 600 píxeles.

**Comparación con la Sintaxis Tradicional**

En las versiones anteriores de Media Queries, tendrías que combinar varias condiciones utilizando el operador `and` para lograr el mismo resultado. Por ejemplo:

```css
/* Versión anterior sin operadores de comparación */
@media (min-width: 600px) and (max-width: 1200px) {
  body {
    background-color: pink;
  }
}
```

Con los nuevos operadores de comparación en Media Queries Level 4, esto se simplifica:

```css
/* Usando operadores de comparación */
@media (600px <= width <= 1200px) {
  body {
    background-color: pink;
  }
}
```

**Beneficios de los Nuevos Operadores**

- **Claridad**: Hacen que las consultas de medios sean más legibles y fáciles de entender.
- **Concisión**: Reducen la necesidad de escribir múltiples condiciones con `and`.
- **Precisión**: Permiten expresar condiciones exactas de manera más directa.

Estos nuevos operadores de comparación hacen que trabajar con Media Queries sea más intuitivo y eficiente, especialmente cuando se trata de condiciones complejas.


## Snippet para Media Queries

Los snippets de código son atajos que te permiten escribir código repetitivo de manera rápida y eficiente en editores de texto como Visual Studio Code. En el contexto de los media queries, puedes crear snippets que faciliten la escritura de estas reglas CSS, ahorrando tiempo y reduciendo errores. A continuación, se explica cómo crear y usar un snippet para media queries, junto con un ejemplo detallado.

Un snippet para media queries te permite generar rápidamente la estructura básica de un media query con parámetros predefinidos. Para ello, generalmente se utiliza un editor de código que admite la configuración de snippets, como Visual Studio Code.

**Snippet para Media Queries**

A continuación se muestra un ejemplo de cómo podrías configurar dos snippets para media queries en Visual Studio Code. Estos snippets permiten escribir rápidamente media queries para anchos mínimos (`min-width`) y máximos (`max-width`).

```json
"media query1": {
  "prefix": "q-min",
  "body": [
    "@media (min-width: $1) {",
    "\t$2",
    "}"
  ],
  "description": "Media query for min-width"
},
"media query2": {
  "prefix": "q-max",
  "body": [
    "@media (max-width: $1) {",
    "\t$2",
    "}"
  ],
  "description": "Media query for max-width"
}
```

**Explicación del Código del Snippet**

- `"media query1"` y `"media query2"`: Son los nombres que identifican cada snippet. Puedes cambiar estos nombres según tu preferencia.

- `"prefix": "q-min"` y `"prefix": "q-max"`: Son los atajos de teclado que activan cada snippet cuando los escribes en tu editor. `q-min` se usa para media queries de `min-width` y `q-max` para media queries de `max-width`.

- `"body": [...]`: Define el cuerpo del snippet, que es un arreglo de líneas de texto que constituyen el código del media query.

  - `"@media (min-width: $1) {", "\t$2", "}"`: Aquí `$1` y `$2` son marcadores de posición. Cuando activas el snippet, `$1` se convierte en el primer lugar donde puedes escribir el valor del ancho mínimo (`min-width`), y `$2` es donde puedes escribir el contenido CSS que deseas aplicar dentro del media query. El `\t` representa un tabulador para la indentación.

- `"description": "Media query for min-width"` y `"description": "Media query for max-width"`: Proporciona una descripción opcional del snippet, que se mostrará en el editor de código cuando busques o explores los snippets disponibles.

**Uso del Snippet**

Para usar estos snippets en Visual Studio Code:

1. Abre Visual Studio Code.
2. Ve a `File` > `Preferences` > `User Snippets`.
3. Selecciona el lenguaje para el cual deseas crear el snippet (generalmente CSS o cualquier otro que estés usando).
4. Copia y pega el código del snippet proporcionado anteriormente en el archivo correspondiente (`css.json` para CSS, por ejemplo).
5. Guarda el archivo y usa los atajos `q-min` y `q-max` en tu editor para generar rápidamente media queries.

**Beneficios de Usar Snippets**

- **Ahorro de tiempo:** Escribir media queries manualmente puede ser propenso a errores y llevar tiempo. Los snippets te permiten generar rápidamente la estructura básica.
  
- **Consistencia:** Los snippets aseguran que tus media queries sigan un formato consistente en todo tu proyecto.

- **Facilidad de mantenimiento:** Puedes ajustar fácilmente los snippets según tus necesidades de desarrollo sin cambiar manualmente cada instancia de media query en tu código.

En resumen, los snippets de media queries son una herramienta poderosa para mejorar tu flujo de trabajo de desarrollo web al facilitar la escritura y mantenimiento de reglas CSS responsivas. Utilizarlos puede optimizar tu productividad y asegurar la coherencia en tus proyectos.

**Snippet Mejorado**

Para mejorar el snippet existente y hacerlo más versátil, puedes ajustarlo para que incluya comentarios explicativos y una estructura más clara. Aquí te dejo una versión mejorada del snippet para media queries:

```json
"media query for min-width": {
  "prefix": "q-min",
  "body": [
    "@media (min-width: ${1:768px}) {",
    "\t/* Agregar estilos para pantalla mayor o igual a ${1:768px} */",
    "\t$2",
    "}"
  ],
  "description": "Media query para min-width"
},
"media query for max-width": {
  "prefix": "q-max",
  "body": [
    "@media (max-width: ${1:768px}) {",
    "\t/* Agregar estilos para pantalla menor o igual a ${1:768px} */",
    "\t$2",
    "}"
  ],
  "description": "Media query para max-width"
}
```

**Explicación del Snippet**

- **`prefix`:** Define el atajo de teclado que activará el snippet (`q-min` para `min-width` y `q-max` para `max-width`).

- **`body`:** Especifica el contenido del snippet, que se expandirá cuando uses el atajo. Incluye comentarios para guiar sobre el propósito del media query y dónde ingresar los estilos CSS.

  - `${1:768px}`: Es un marcador de posición con un valor predeterminado (`768px` en este caso) que puedes modificar según tus necesidades. Al usar el snippet, puedes presionar `Tab` para moverte entre los marcadores de posición y editarlos rápidamente.

  - `$2`: Es el segundo lugar de edición después del valor del ancho. Aquí puedes escribir o pegar los estilos CSS que deseas aplicar dentro del media query.

- **`description`:** Proporciona una breve descripción del snippet que se mostrará en el editor cuando explores los snippets disponibles.

**Uso del Snippet Mejorado**

1. Abre Visual Studio Code.
2. Ve a `File` > `Preferences` > `User Snippets`.
3. Selecciona el lenguaje para el cual deseas crear el snippet (por ejemplo, CSS).
4. Reemplaza el código existente con el nuevo código proporcionado.
5. Guarda el archivo y usa los atajos `q-min` y `q-max` en tu editor para generar rápidamente media queries con comentarios explicativos y marcadores de posición editables.

**Beneficios del Snippet Mejorado**

- **Claridad y legibilidad:** Los comentarios explicativos ayudan a comprender rápidamente el propósito del media query.
  
- **Flexibilidad:** Puedes ajustar rápidamente el valor del ancho (por ejemplo, `768px`) directamente desde el snippet sin necesidad de modificar cada instancia manualmente.

- **Productividad:** Aumenta la eficiencia al escribir media queries repetitivos, reduciendo errores y asegurando consistencia en el código.

Utilizar snippets mejorados como este puede mejorar significativamente tu flujo de trabajo de desarrollo frontend al simplificar tareas comunes como la creación de media queries responsivas.

## Tamaños Estándar para Media Queries

Los media queries son fundamentales en el desarrollo web moderno para crear diseños responsivos que se adapten a diferentes tamaños de pantalla y dispositivos. Establecer tamaños estándar en tus media queries te ayuda a asegurar que tu sitio web se vea bien en una variedad de dispositivos, desde teléfonos móviles hasta pantallas de escritorio. En este artículo, exploraremos los tamaños estándar más comunes utilizados en media queries, con recursos adicionales para aprender más sobre el tema.

**Tamaño Estándar para Media Queries**

Los tamaños estándar en media queries se basan típicamente en puntos de ruptura específicos, que corresponden a anchos de pantalla comunes en diferentes tipos de dispositivos. Estos puntos de ruptura se utilizan para aplicar estilos CSS específicos según el tamaño de la pantalla del dispositivo.

**Recursos Recomendados**

1. **Bootstrap**

Bootstrap, un popular framework frontend, utiliza puntos de ruptura bien definidos que puedes usar en tus media queries. Aquí están los puntos de ruptura estándar de Bootstrap 5:

- **Extra small**: Menor a 576px
- **Small**: 576px o mayor
- **Medium**: 768px o mayor
- **Large**: 992px o mayor
- **Extra large**: 1200px o mayor

Puedes aprender más sobre los puntos de ruptura de Bootstrap en su documentación oficial de [Layout Breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/).

2. **Media Queries for Standard Devices (CSS-Tricks)**

CSS-Tricks ofrece una colección útil de snippets de media queries para dispositivos estándar. Estos snippets te proporcionan puntos de ruptura predefinidos basados en tamaños de pantalla comunes. Algunos ejemplos incluyen:

- **Teléfonos móviles**: Menor a 768px
- **Tablets**: 768px a 992px
- **Tablets en modo paisaje y escritorios pequeños**: 992px a 1200px
- **Escritorios estándar**: 1200px o mayor

Puedes explorar más sobre estos puntos de ruptura en [Media Queries for Standard Devices](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/) en CSS-Tricks.

## Obtimizar tu sitio web

En el desarrollo web moderno, la optimización de imágenes es crucial para mejorar el rendimiento y la experiencia del usuario. Formatos como AVIF y WebP han ganado popularidad debido a su capacidad para ofrecer alta calidad con tamaños de archivo más pequeños, beneficiando especialmente a dispositivos móviles y conexiones de red más lentas. En este artículo, exploraremos cómo implementar imágenes responsive utilizando etiquetas como `<picture>` y `<source>`, junto con atributos como `srcset`, `type` y `loading="lazy"`.

1. **Utilizando Etiquetas como `<picture>` y `<source>`**

La etiqueta `<picture>` junto con `<source>` permite especificar múltiples fuentes de imagen para un mismo elemento, facilitando la entrega de la imagen más adecuada según las capacidades del dispositivo del usuario.

***Ejemplo:***

```html
<picture>
  <!-- Fuente AVIF para navegadores compatibles -->
  <source type="image/avif" srcset="imagen.avif">
  <!-- Fuente WebP para navegadores que no soportan AVIF -->
  <source type="image/webp" srcset="imagen.webp">
  <!-- Fuente alternativa en formato JPG para navegadores sin soporte de AVIF o WebP -->
  <img src="imagen.jpg" alt="Descripción de la imagen">
</picture>
```

***En este ejemplo:***

- `<source type="image/avif" srcset="imagen.avif">`: Especifica una imagen en formato AVIF con su correspondiente ruta.
- `<source type="image/webp" srcset="imagen.webp">`: Proporciona una imagen en formato WebP como alternativa para navegadores que no soportan AVIF.
- `<img src="imagen.jpg" alt="Descripción de la imagen">`: Especifica una imagen en formato JPG como último recurso para navegadores que no soportan ni AVIF ni WebP.

## Snippet para AVIF y WebP

En el desarrollo web moderno, la optimización de imágenes es esencial para mejorar el rendimiento y la experiencia del usuario. Los formatos AVIF y WebP ofrecen una excelente calidad de imagen con tamaños de archivo más pequeños, ideales para reducir el tiempo de carga de páginas web. Este artículo explora cómo crear un snippet personalizado para HTML que permita la inclusión de imágenes en formatos AVIF, WebP y JPG, optimizando así la entrega de contenido visual adaptativo.

El siguiente snippet para Visual Studio Code te permitirá generar rápidamente una estructura `<picture>` con soporte para AVIF, WebP y JPG:

```json
"images": {
  "prefix": "im",
  "body": [
    "<picture>",
    "\t<source srcset=\"$1.avif\" type=\"image/avif\">",
    "\t<source srcset=\"$2.webp\" type=\"image/webp\">",
    "\t<img loading=\"lazy\" src=\"$3.jpg\" alt=\"$4\">",
    "</picture>"
  ],
  "description": "Snippet para insertar imágenes en formatos AVIF, WebP y JPG con soporte para lazy loading"
}
```

**Explicación**

- `"images"`: Nombre del snippet para identificación en Visual Studio Code.

- `"prefix": "im"`: Atajo de teclado que activará el snippet cuando escribas `im` seguido de `Tab`.

- `"body"`: Array que define el contenido del snippet, representando las líneas de código que se generarán al expandir el snippet.

  - `"<picture>"`: Inicia el elemento `<picture>`, que permite la inclusión de múltiples fuentes de imagen.

  - `"\t<source srcset=\"$1.avif\" type=\"image/avif\">"`: Define una fuente de imagen en formato AVIF. El marcador `$1` indica el primer campo editable, donde puedes ingresar el nombre base del archivo AVIF.

    - `srcset=\"$1.avif\"`: Especifica la ruta y nombre de archivo base del formato AVIF.

    - `type=\"image/avif\"`: Indica que la fuente es un archivo AVIF.

  - `"\t<source srcset=\"$2.webp\" type=\"image/webp\">"`: Define una fuente de imagen en formato WebP. El marcador `$2` indica el segundo campo editable, donde puedes ingresar el nombre base del archivo WebP.

    - `srcset=\"$2.webp\"`: Especifica la ruta y nombre de archivo base del formato WebP.

    - `type=\"image/webp\"`: Indica que la fuente es un archivo WebP.

  - `"\t<img loading=\"lazy\" src=\"$3.jpg\" alt=\"$4\">"`: Define la etiqueta `<img>` como una alternativa para navegadores que no soportan AVIF ni WebP.

    - `loading=\"lazy\"`: Atributo que indica que la imagen debe cargarse de manera perezosa (lazy loading), mejorando así el tiempo de carga inicial de la página.

    - `src=\"$3.jpg\"`: Especifica la ruta y nombre de archivo base del formato JPG.

    - `alt=\"$4\"`: Atributo `alt` que proporciona texto alternativo para la imagen, importante para accesibilidad y SEO.

  - `"</picture>"`: Cierra el elemento `<picture>`.

- `"description": "Snippet para insertar imágenes en formatos AVIF, WebP y JPG con soporte para lazy loading"`: Descripción que aparecerá en Visual Studio Code al explorar los snippets disponibles, proporcionando contexto sobre el uso y la funcionalidad del snippet.

**Uso del Snippet**

1. Abre Visual Studio Code.
2. Ve a `File` > `Preferences` > `User Snippets`.
3. Selecciona el lenguaje HTML (o crea uno nuevo si no existe).
4. Reemplaza o añade el snippet en el archivo correspondiente.
5. Guarda el archivo y usa el atajo `im` seguido de `Tab` en tu editor para generar rápidamente la estructura de imágenes responsive con soporte para AVIF, WebP y JPG.

**Beneficios del Snippet**

- **Eficiencia**: Aumenta la productividad al eliminar la necesidad de escribir manualmente la estructura `<picture>` cada vez que se necesite insertar imágenes responsivas con formatos optimizados.

- **Compatibilidad**: Asegura la compatibilidad con una variedad de navegadores al proporcionar alternativas en formatos de imagen modernos y tradicionales.

- **Mejora del Rendimiento**: Implementa lazy loading para optimizar el tiempo de carga de la página y mejorar la experiencia del usuario.

Utilizar este snippet optimizado para AVIF, WebP y JPG te ayudará a incorporar imágenes de alta calidad de manera eficiente y accesible en tus proyectos web, cumpliendo con los estándares modernos de optimización de contenido visual.

## Obtimizar tu sitio web en aplicaciones moviles 

El siguiente código HTML utiliza la etiqueta `<picture>` para proporcionar varias versiones de una imagen en diferentes formatos y tamaños, optimizando así la carga y la visualización de la imagen según las capacidades del navegador y el dispositivo del usuario.

```html
<picture>
   <source
      sizes="(max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px"
      srcset="img/.avif 640w, img/.avif 1280w, img/.avif 1920w"
      type="image/avif">
   <source
      sizes="(max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px"
      srcset="img/.webp 640w, img/.webp 1280w, img/.webp 1920w"
      type="image/webp">
   <source
      sizes="(max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px"
      srcset="img/.jpg 640w, img/.jpg 1280w, img/.jpg 1920w"
      type="image/jpeg">
   <img loading="lazy" decoding="async" src="img/.jpg" alt="" width="500" height="300">
</picture>
```

**Explicación Detallada:**

#### 1. `<picture>`:
La etiqueta `<picture>` es un contenedor que permite especificar múltiples fuentes de imagen para diferentes condiciones. Esto ayuda a cargar la mejor versión de la imagen según el navegador y el dispositivo del usuario.

#### 2. `<source>`:
Cada etiqueta `<source>` dentro del `<picture>` define una fuente de imagen alternativa. Las fuentes se especifican en orden de prioridad, de modo que la primera fuente compatible será la que el navegador utilice.

##### Primer `<source>`:
```html
<source
   sizes="(max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px"
   srcset="img/.avif 640w, img/.avif 1280w, img/.avif 1920w"
   type="image/avif">
```
- **`sizes`**: Define las condiciones de visualización y el tamaño de la imagen que debe usarse. En este caso, si el ancho máximo de la ventana es de 640px, se usará una imagen de 640px; si el ancho máximo es de 1280px, se usará una imagen de 1280px; de lo contrario, se usará una imagen de 1920px.
- **`srcset`**: Proporciona una lista de URLs de la imagen en diferentes resoluciones, seguidas por el ancho correspondiente. Aquí se indican tres versiones de la imagen en formato AVIF: 640px, 1280px, y 1920px.
- **`type="image/avif"`**: Especifica que este `<source>` es para imágenes en formato AVIF.

##### Segundo `<source>`:
```html
<source
   sizes="(max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px"
   srcset="img/.webp 640w, img/.webp 1280w, img/.webp 1920w"
   type="image/webp">
```
- **`sizes`**: Igual que el primer `<source>`, define las condiciones de visualización y el tamaño de la imagen.
- **`srcset`**: Proporciona URLs de la imagen en formato WebP en diferentes resoluciones.
- **`type="image/webp"`**: Especifica que este `<source>` es para imágenes en formato WebP.

##### Tercer `<source>`:
```html
<source
   sizes="(max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px"
   srcset="img/.jpg 640w, img/.jpg 1280w, img/.jpg 1920w"
   type="image/jpeg">
```
- **`sizes`**: Igual que los `<source>` anteriores, define las condiciones de visualización y el tamaño de la imagen.
- **`srcset`**: Proporciona URLs de la imagen en formato JPEG en diferentes resoluciones.
- **`type="image/jpeg"`**: Especifica que este `<source>` es para imágenes en formato JPEG.

#### 3. `<img>`:
```html
<img loading="lazy" decoding="async" src="img/.jpg" alt="" width="500" height="300">
```
- **`loading="lazy"`**: Indica que la imagen debe cargarse de forma diferida (lazy loading), es decir, solo cuando está a punto de entrar en el viewport. Esto mejora el rendimiento de la página.
- **`decoding="async"`**: Permite que la imagen se decodifique de forma asíncrona, lo que puede mejorar el rendimiento de la página.
- **`src="img/.jpg"`**: Especifica la URL de la imagen en formato JPEG. Esta es la imagen predeterminada que se cargará si el navegador no soporta los formatos AVIF o WebP especificados en las fuentes anteriores.
- **`alt=""`**: Proporciona un texto alternativo para la imagen. Aunque está vacío en este caso, generalmente se usa para mejorar la accesibilidad.
- **`width="500" height="300"`**: Especifica el ancho y la altura de la imagen, lo que ayuda a reservar el espacio adecuado en el diseño de la página mientras la imagen se carga.

Este snippet está diseñado para insertar un elemento `<picture>` en HTML que contiene múltiples fuentes de imagen en diferentes formatos (AVIF, WebP y JPEG) y resoluciones, optimizando la carga y el rendimiento de las imágenes en la web. Vamos a desglosar cada línea del código:

```json
"images2": {
  "prefix": "pic",
  "body": [
    "<picture>",
    "\t<source",
    "\t\tsizes=\"(max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px\"",
    "\t\tsrcset=\"img/$1.avif 640w, img/$2.avif 1280w, img/$3.avif 1920w\"",
    "\t\ttype=\"image/avif\">",
    "\t<source",
    "\t\tsizes=\"(max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px\"",
    "\t\tsrcset=\"img/$4.webp 640w, img/$5.webp 1280w, img/$6.webp 1920w\"",
    "\t\ttype=\"image/webp\">",
    "\t<source",
    "\t\tsizes=\"(max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px\"",
    "\t\tsrcset=\"img/$7.jpg 640w, img/$8.jpg 1280w, img/$9.jpg 1920w\"",
    "\t\ttype=\"image/jpeg\">",
    "\t<img loading=\"lazy\" decoding=\"async\" src=\"img/$10.jpg\" alt=\"$11\" width=\"500\" height=\"300\">",
    "</picture>"
  ],
  "description": "Snippet para insertar imágenes en formatos AVIF, WebP y JPG con diferentes resoluciones y lazy loading"
}
```

**Explicación**

1. **"images2": {**
   - Define el nombre del snippet, en este caso "images2", que se usará para identificar el snippet en Visual Studio Code.

2. **"prefix": "pic",**
   - Establece el prefijo que se usará para activar el snippet. Al escribir "pic" y presionar `Tab`, el snippet se expandirá.

3. **"body": [**
   - Comienza la definición del cuerpo del snippet. Cada elemento del array representa una línea del código que se generará.

4. **"<picture>",**
   - Inicia el elemento `<picture>`, que permite definir múltiples fuentes de imagen para diferentes formatos y resoluciones.

5. **"\t<source",**
   - Inicia la definición de una fuente `<source>` para la imagen en formato AVIF. La tabulación `\t` se usa para mantener el código indentado y organizado.

6. **"\t\tsizes=\"(max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px\"",**
   - Define los tamaños que ocupará la imagen en diferentes tamaños de pantalla usando unidades relativas:
     - `(max-width: 640px) 640px`: Usa 640px si la pantalla tiene un ancho máximo de 640px.
     - `(max-width: 1280px) 1280px`: Usa 1280px si la pantalla tiene un ancho máximo de 1280px.
     - `1920px`: Usa 1920px para pantallas más anchas.

7. **"\t\tsrcset=\"img/$1.avif 640w, img/$2.avif 1280w, img/$3.avif 1920w\"",**
   - Define las rutas y resoluciones de las imágenes en formato AVIF:
     - `img/$1.avif 640w`: Imagen en AVIF de 640px de ancho.
     - `img/$2.avif 1280w`: Imagen en AVIF de 1280px de ancho.
     - `img/$3.avif 1920w`: Imagen en AVIF de 1920px de ancho.

8. **"\t\ttype=\"image/avif\">",**
   - Especifica que la fuente es un archivo AVIF.

9. **"\t<source",**
   - Inicia la definición de una fuente `<source>` para la imagen en formato WebP.

10. **"\t\tsizes=\"(max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px\"",**
    - Define los tamaños que ocupará la imagen en diferentes tamaños de pantalla para el formato WebP.

11. **"\t\tsrcset=\"img/$4.webp 640w, img/$5.webp 1280w, img/$6.webp 1920w\"",**
    - Define las rutas y resoluciones de las imágenes en formato WebP:
      - `img/$4.webp 640w`: Imagen en WebP de 640px de ancho.
      - `img/$5.webp 1280w`: Imagen en WebP de 1280px de ancho.
      - `img/$6.webp 1920w`: Imagen en WebP de 1920px de ancho.

12. **"\t\ttype=\"image/webp\">",**
    - Especifica que la fuente es un archivo WebP.

13. **"\t<source",**
    - Inicia la definición de una fuente `<source>` para la imagen en formato JPEG.

14. **"\t\tsizes=\"(max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px\"",**
    - Define los tamaños que ocupará la imagen en diferentes tamaños de pantalla para el formato JPEG.

15. **"\t\tsrcset=\"img/$7.jpg 640w, img/$8.jpg 1280w, img/$9.jpg 1920w\"",**
    - Define las rutas y resoluciones de las imágenes en formato JPEG:
      - `img/$7.jpg 640w`: Imagen en JPEG de 640px de ancho.
      - `img/$8.jpg 1280w`: Imagen en JPEG de 1280px de ancho.
      - `img/$9.jpg 1920w`: Imagen en JPEG de 1920px de ancho.

16. **"\t\ttype=\"image/jpeg\">",**
    - Especifica que la fuente es un archivo JPEG.

17. **"\t<img loading=\"lazy\" decoding=\"async\" src=\"img/$10.jpg\" alt=\"$11\" width=\"500\" height=\"300\">",**
    - Define la etiqueta `<img>` con las siguientes propiedades:
      - `loading=\"lazy\"`: Indica que la imagen debe cargarse de manera perezosa (lazy loading), es decir, solo cuando esté a punto de entrar en el viewport.
      - `decoding=\"async\"`: Permite que la imagen se decodifique de manera asíncrona para mejorar el rendimiento.
      - `src=\"img/$10.jpg\"`: Especifica la ruta de la imagen por defecto en formato JPEG.
      - `alt=\"$11\"`: Proporciona texto alternativo para la imagen, que es importante para la accesibilidad.
      - `width=\"500\" height=\"300\"`: Especifica el tamaño de la imagen para evitar el salto de contenido durante la carga.

18. **"</picture>"**
    - Cierra el elemento `<picture>`.

19. **"description": "Snippet para insertar imágenes en formatos AVIF, WebP y JPG con diferentes resoluciones y lazy loading"**
    - Proporciona una descripción del snippet para que los usuarios sepan qué hace y cómo se utiliza.

**Beneficios del Snippet**

- **Eficiencia**: Permite la rápida inserción de una estructura `<picture>` completa con soporte para múltiples formatos y resoluciones.
- **Compatibilidad**: Asegura que las imágenes se rendericen correctamente en navegadores modernos y antiguos, proporcionando alternativas de alta calidad.
- **Optimización del Rendimiento**: Implementa lazy loading y carga asíncrona de imágenes, mejorando el tiempo de carga de la página y la experiencia del usuario.

Utiliza este snippet en tu editor de código para incorporar fácilmente imágenes responsive y optimizadas en tus proyectos web.

## Resumen

En esta sección de nuestro curso de desarrollo web, hemos explorado en profundidad el tema de la estructura de una página web con un enfoque particular en el diseño responsivo. Aquí tienes un resumen de los conocimientos adquiridos y las aplicaciones prácticas que podrás realizar con lo aprendido:

**¿Qué es Responsive Web Design?**

- **Conocimiento Adquirido:** Aprendiste que Responsive Web Design (RWD) es una técnica para crear sitios web que se adaptan automáticamente a diferentes tamaños de pantalla y dispositivos.
- **Aplicaciones Prácticas:** Puedes diseñar y desarrollar sitios web que funcionen perfectamente en cualquier dispositivo, mejorando la experiencia del usuario.

**¿Qué es Mobile First y Desktop First?**

- **Conocimiento Adquirido:** Entendiste las dos estrategias principales de diseño: Mobile First (diseñar primero para dispositivos móviles) y Desktop First (diseñar primero para escritorios).
- **Aplicaciones Prácticas:** Puedes decidir la mejor estrategia para tu proyecto y comenzar a diseñar de acuerdo a la prioridad de los dispositivos de tus usuarios.

**Herramientas para Probar tu Diseño Responsivo**

- **Conocimiento Adquirido:** Descubriste varias herramientas para probar cómo se ve tu diseño en diferentes dispositivos y resoluciones.
- **Aplicaciones Prácticas:** Puedes usar estas herramientas para garantizar que tu diseño sea efectivo en todos los dispositivos antes de lanzarlo.

**Creando Media Queries**

- **Conocimiento Adquirido:** Aprendiste a crear Media Queries para aplicar estilos específicos según las características del dispositivo, como el ancho de la pantalla.
- **Aplicaciones Prácticas:** Puedes escribir CSS que solo se aplique en ciertos tamaños de pantalla, haciendo tu sitio más adaptable.

**Snippet para Media Queries**

- **Conocimiento Adquirido:** Obtuvimos fragmentos de código reutilizables (snippets) para implementar rápidamente Media Queries.
- **Aplicaciones Prácticas:** Puedes implementar media queries de manera eficiente en tus proyectos utilizando estos snippets.

**Tamaños Estándar para Media Queries**

- **Conocimiento Adquirido:** Conociste los tamaños de pantalla estándar para aplicar Media Queries.
- **Aplicaciones Prácticas:** Puedes crear Media Queries optimizadas para los dispositivos más comunes utilizados por los usuarios.

**Optimizar tu sitio web**

- **Conocimiento Adquirido:** Aprendiste técnicas para optimizar el rendimiento de tu sitio web.
- **Aplicaciones Prácticas:** Puedes mejorar la velocidad de carga y la eficiencia de tu sitio web, ofreciendo una mejor experiencia a los usuarios.

**Snippet para AVIF y WebP**

- **Conocimiento Adquirido:** Descubriste cómo usar los formatos de imagen AVIF y WebP para mejorar la carga de imágenes.
- **Aplicaciones Prácticas:** Puedes implementar estos formatos en tus proyectos para reducir el tiempo de carga y mejorar la calidad de las imágenes.

**Optimizar tu sitio web en aplicaciones móviles**

- **Conocimiento Adquirido:** Aprendiste técnicas específicas para optimizar tu sitio web para aplicaciones móviles.
- **Aplicaciones Prácticas:** Puedes garantizar que tu sitio web funcione de manera eficiente en dispositivos móviles, mejorando la accesibilidad y la usabilidad.

**Recursos Externos para Continuar Aprendiendo**

1. [MDN Web Docs - Responsive Web Design Basics](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
2. [Google Developers - Responsive Web Design Fundamentals](https://developers.google.com/web/fundamentals/design-and-ux/responsive)
3. [W3Schools - CSS Media Queries](https://www.w3schools.com/css/css3_mediaqueries.asp)
4. [A List Apart - Mobile First](https://alistapart.com/article/mobile-first/)
5. [Smashing Magazine - The Guide To Responsive Web Design](https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/)
6. [Google Developers - Optimize Web Performance](https://developers.google.com/web/fundamentals/performance/)

Con estos conocimientos y recursos adicionales, estás bien preparado para crear sitios web responsivos y optimizados para cualquier dispositivo. ¡Continúa explorando y mejorando tus habilidades en desarrollo web!