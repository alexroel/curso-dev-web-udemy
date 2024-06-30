# Primeros pasos en la Web

1. [Introducción](#introducción)
2. [¿Qué es la Web?](#qué-es-la-web)
3. [¿Cómo Funciona la Web?](#cómo-funciona-la-web)
4. [Instalación de Visual Studio Code](#instalacic3b3n-de-visual-studio-code)
5. [Crea tu primer sitio web](#crea-tu-primer-sitio-web)
6. [Las tecnologías principal de la Web](#las-tecnologías-principal-de-la-web)
7. [Resumen](#resumen)
---
## Introducción 

¡Bienvenidos al curso introductorio sobre la Web y Programación! En este curso, exploraremos los fundamentos de la Web, desde su definición hasta su funcionamiento. Aprenderemos sobre programación y cómo dar tus primeros pasos en el mundo de la creación web. Además, te guiaré en la instalación de Visual Studio Code, un editor de código popular. ¡Prepárate para crear tu primer sitio web y descubrir las tecnologías principales que hacen posible la Web moderna!

---
## ¿Qué es la Web?

La web, o World Wide Web (WWW), es una parte esencial de nuestra vida diaria, pero ¿alguna vez te has preguntado cómo funciona realmente? Vamos a explorar los conceptos fundamentales que componen la web y cómo llegó a ser lo que conocemos hoy.

**Conexión de Documentos: Antes de los Vínculos**

Antes de que existieran los vínculos o enlaces para navegar entre documentos, los documentos digitales eran entidades aisladas. No había una forma sencilla de saltar de un documento a otro. Todo esto cambió con la invención de la web, que permitió conectar documentos de una manera fluida y accesible.

**El Creador de la Web: Tim Berners-Lee**

La web fue creada por Tim Berners-Lee en 1989 mientras trabajaba en el CERN, el laboratorio de física de partículas en Suiza. Berners-Lee propuso un sistema para gestionar y compartir información de manera eficiente. Este sistema se basaba en la idea de utilizar hipervínculos (o enlaces) para conectar diferentes documentos, permitiendo a los usuarios navegar de uno a otro fácilmente.

**Funcionamiento de la Web con Enlaces (Hyperlinks)**

Los hipervínculos son la esencia de la navegación web. Un hipervínculo es un enlace que conecta un documento con otro. Al hacer clic en un enlace, el navegador web lleva al usuario al documento vinculado. Esto crea una red interconectada de información que es fácil de explorar.

**Creación de URLs (Uniform Resource Locator)**

Para que los documentos puedan ser encontrados y accedidos en la web, cada uno necesita una dirección única, conocida como URL (Uniform Resource Locator). Una URL es como la dirección de una casa: específica y única para cada documento en la web. Por ejemplo, la URL "https://www.google.com/" lleva a la página principal de Google.

**Lenguaje HTML: Navegación entre Documentos**

HTML (HyperText Markup Language) es el lenguaje utilizado para crear documentos en la web. HTML permite estructurar el contenido y crear enlaces entre documentos. Con HTML, los desarrolladores pueden definir títulos, párrafos, imágenes, y, lo más importante, hipervínculos que permiten la navegación entre diferentes páginas.

**Protocolo de Comunicaciones: TCP/IP y HTTP**

Para que la web funcione, los documentos necesitan ser transferidos de un servidor a otro a través de Internet. Esto se logra utilizando protocolos de comunicación:

- **TCP/IP (Transmission Control Protocol/Internet Protocol)**: Este protocolo es el conjunto de reglas que permite que los dispositivos se comuniquen a través de redes.
- **HTTP (HyperText Transfer Protocol)**: Este es el protocolo específico que permite la transferencia de documentos HTML. Por ejemplo, cuando escribes "https://www.google.com/" en tu navegador, se envía una solicitud HTTP a los servidores de Google, que responden con el documento HTML de la página solicitada.

**Comunicación Global: World Wide Web (WWW)**

La WWW es la red global de documentos interconectados a través de Internet. Cada documento en la web es una página web, y todas estas páginas juntas forman lo que conocemos como la web. Por ejemplo, "www.google.com/" es una dirección web que te lleva a la página de inicio de Google, una de las miles de millones de páginas que componen la WWW.

**Documentos HTML: Páginas Web**

Cada documento HTML en la web es una página web. Estas páginas están conectadas globalmente a través de la red, permitiendo a los usuarios acceder a una vasta cantidad de información con solo unos clics. La combinación de HTML, URLs y protocolos de comunicación hace posible esta red interconectada que utilizamos a diario.

La web es una red global de documentos interconectados mediante hipervínculos. Fue creada por Tim Berners-Lee y se basa en el uso de URLs para identificar documentos, HTML para estructurar contenido y enlaces, y protocolos de comunicación como HTTP para transferir información. La WWW ha transformado la forma en que accedemos y compartimos información, conectando el mundo como nunca antes.

---
## ¿Cómo Funciona la Web?

Para comprender cómo funciona la web, es fundamental conocer los componentes principales involucrados y cómo interactúan entre sí. La web se basa en una arquitectura cliente-servidor y opera a través de Internet, utilizando software específico tanto en el lado del cliente como en el del servidor. A continuación, desglosamos estos conceptos clave.

**Cliente y Servidor**

La web sigue un modelo de cliente-servidor. En este modelo:

- **Cliente**: Es el dispositivo que solicita acceso a la información, generalmente un ordenador, un smartphone o una tableta. El cliente utiliza un software específico para realizar estas solicitudes, conocido como navegador web.
- **Servidor**: Es el dispositivo que almacena y proporciona acceso a la información solicitada por el cliente. Los servidores ejecutan software de servidor web que maneja las solicitudes entrantes y envía las respuestas correspondientes.

**Conexión a Través de Internet**

La conexión entre el cliente y el servidor se realiza a través de Internet, una vasta red de redes interconectadas que permite la transferencia de datos entre dispositivos en todo el mundo. Cuando un cliente quiere acceder a una página web, envía una solicitud a través de Internet al servidor que aloja la página web. El servidor procesa la solicitud y devuelve la información solicitada al cliente.

**Software de Cliente: Navegadores**

El software que utilizan los clientes para acceder a la web se llama navegador web. Los navegadores interpretan y muestran la información contenida en los documentos HTML que reciben de los servidores. Ejemplos de navegadores web populares incluyen:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

Los navegadores no solo muestran el contenido, sino que también permiten la interacción con la página web, como hacer clic en enlaces, rellenar formularios y enviar datos.

**Software de Servidores: Servidores Web**

En el lado del servidor, el software encargado de manejar las solicitudes de los clientes y entregar los documentos web se llama servidor web. Los servidores web más comunes incluyen:

- Apache HTTP Server
- Nginx
- Microsoft Internet Information Services (IIS)

Estos servidores reciben las solicitudes HTTP del navegador, buscan el contenido solicitado y lo envían de vuelta al navegador para que se muestre al usuario.

**Diferencia entre Internet y la Web**

Es importante distinguir entre Internet y la web, ya que aunque están estrechamente relacionadas, no son lo mismo:

- **Internet**: Es la infraestructura física y lógica que conecta millones de redes y dispositivos en todo el mundo. Incluye cables, routers, switches y otros equipos de red, así como los protocolos de comunicación que permiten la transferencia de datos.
- **Web**: Es un servicio que opera sobre Internet. Es una colección de documentos y recursos interconectados mediante hipervínculos y accesibles a través de navegadores web. La web utiliza Internet como su plataforma para transferir información entre clientes y servidores.

**Resumen del Funcionamiento de la Web**

1. **El cliente (usuario) abre un navegador web** y escribe una URL (por ejemplo, https://www.google.com).
2. **El navegador envía una solicitud HTTP** a través de Internet al servidor que aloja la página web de Google.
3. **El servidor web de Google recibe la solicitud** y procesa la información solicitada.
4. **El servidor envía de vuelta una respuesta HTTP** que contiene el documento HTML y otros recursos (imágenes, CSS, JavaScript).
5. **El navegador web interpreta y muestra el contenido** al usuario, permitiendo la interacción con la página web.

En resumen, la web funciona mediante la

interacción de clientes y servidores a través de Internet, utilizando navegadores web para solicitar y mostrar información y servidores web para procesar y entregar los documentos solicitados. Esta estructura permite la navegación eficiente y accesible entre millones de páginas web interconectadas a nivel mundial.

**Ejemplo Práctico: Accediendo a una Página Web**

Para ilustrar mejor este proceso, consideremos un ejemplo práctico:

1. **Cliente Abre el Navegador**: Un usuario abre su navegador web (por ejemplo, Google Chrome) y escribe "https://www.google.com" en la barra de direcciones.
2. **Solicitud HTTP**: El navegador envía una solicitud HTTP a través de Internet al servidor de Google.
3. **Servidor Recibe la Solicitud**: El servidor web de Google, que puede estar alojado en uno de sus centros de datos en cualquier parte del mundo, recibe la solicitud.
4. **Procesamiento de la Solicitud**: El servidor de Google procesa la solicitud, buscando el documento HTML correspondiente a la página de inicio de Google.
5. **Respuesta HTTP**: El servidor envía una respuesta HTTP que contiene el documento HTML de la página de inicio de Google, junto con otros recursos como imágenes, archivos CSS y JavaScript.
6. **Navegador Muestra el Contenido**: El navegador recibe la respuesta, interpreta el documento HTML y los recursos asociados, y muestra la página de inicio de Google al usuario.
7. **Interacción del Usuario**: El usuario puede ahora interactuar con la página, realizar búsquedas, hacer clic en enlaces y navegar a otras páginas, repitiendo el ciclo de solicitudes y respuestas.

---
## Instalación de Visual Studio Code

1. Descarga VSCode desde el sitio web oficial: [Visual Studio Code](https://code.visualstudio.com/).
2. Sigue las instrucciones de instalación para tu sistema operativo.

**Paso 2: Instalación de Extensiones**

Una vez que hayas instalado VSCode, puedes agregar extensiones para ampliar sus funcionalidades. Abre VSCode y sigue estos pasos:

1. **Ir a la sección de Extensiones:**
   - Haz clic en el ícono de extensiones en la barra lateral izquierda (o usa el atajo `Ctrl+Shift+X` o `Cmd+Shift+X` en Mac).

2. **Buscar y Instalar Extensiones:**
   - Busca cada extensión por su nombre en la barra de búsqueda.
   - Instala las siguientes extensiones:
     - **Live Server o Live Preview:** Proporciona un servidor en vivo para la vista previa de tus proyectos web.
     - **Auto Rename Tag:** Modificación de etiquetas de html

   Para instalar una extensión, simplemente haz clic en el botón "Instalar".

**Opcionales: Temas y Íconos**

1. **Material Icon Theme (Opcional):**
   - Esta extensión agrega íconos coloridos a los archivos y carpetas en el explorador de archivos.
   - Busca "Material Icon Theme" en la barra de búsqueda de extensiones y haz clic en "Instalar".

2. **Symbols (Opcional):**
   - Esta extensión agrega íconos coloridos a los archivos y carpetas en el explorador de archivos.

3. **Fluent Icons (Opcional):**
   - Esta extensión agrega íconos en el menu de explorador.

4. **One Dark Theme (Opcional):**
   - Cambia la apariencia de VSCode al tema oscuro "One Dark".
   - Busca "One Dark Theme" verificado en la barra de búsqueda de extensiones y haz clic en "Instalar".

**Configuración Adicional (Si es necesario):**

- Algunas extensiones pueden requerir configuración adicional. Verifica la documentación de cada extensión para obtener detalles sobre la configuración.

**Mi configuración persnal**
```json
{
    "window.zoomLevel": 2,
    "editor.minimap.enabled": false,
    "breadcrumbs.enabled": false,
    "editor.renderWhitespace": "none",
    "window.commandCenter": false,
    "editor.cursorBlinking": "expand",
    "editor.linkedEditing": true,
    "editor.glyphMargin": false,
    "editor.fontSize": 16,
    "workbench.sash.size": 4,
    "workbench.settings.applyToAllProfiles": [
        "editor.renderLineHighlightOnlyWhenFocus"
    ],
    "editor.fontLigatures": false,
    "[html]": {
        "editor.tabSize": 4,
        "editor.insertSpaces": true
    },
    "workbench.colorTheme": "One Dark",
    "symbols.hidesExplorerArrows": false,
    "workbench.iconTheme": "symbols",
    "workbench.productIconTheme": "fluent-icons",
    "editor.stickyScroll.enabled": false,
    "terminal.integrated.fontFamily": "Hack Nerd Font Mono",
    "editor.indentSize": "tabSize",
    "oneDark.italic": false
}
```

**¡Listo!**

Con estas extensiones instaladas, podrás disfrutar de una experiencia de desarrollo más fluida en VSCode. Recuerda explorar las configuraciones y ajustes adicionales según tus preferencias. ¡Happy coding!

---
## Crea tu primer sitio web
¡Vamos a crear tu primer sitio web! Sigue estos pasos:

**Paso 1: Crear el Espacio de Trabajo y Proyecto**

1. **Crea un Espacio de Trabajo:**
   - Crea una carpeta llamada `espacio-trabajo` y selecciónala como tu espacio de trabajo.

2. **Crea el Proyecto "mi-web":**
   - Dentro de `espacio-trabajo`, crea una nueva carpeta llamada `mi-web`.

**Paso 2: Crea el Archivo "index.html"**

1. **Crea el Archivo "index.html":**
   - Dentro de la carpeta "mi-web", crea un nuevo archivo llamado "index.html".
   - Abre este archivo con VSCode.

2. **Agrega Contenido Básico:**
   - Dentro de "index.html", escribe el siguiente código:

```html
    <h1>Hola Mundo</h1>
    <p>Este es mi primer sitio web.</p>
```

**Paso 3: Abre el Archivo con Live Server**

1. **Instala la Extensión Live Server:**
   - Si aún no lo has hecho, ve a la sección de Extensiones en VSCode (puedes usar `Ctrl+Shift+X` o `Cmd+Shift+X` en Mac).
   - Busca "Live Server" y haz clic en "Instalar".

2. **Usa Live Server:**
   - Haz clic derecho en "index.html".
   - Selecciona "Open with Live Server" (Abrir con Live Server).

3. **Visualiza tu Sitio Web:**
   - Se abrirá una nueva pestaña en tu navegador con tu sitio web.
   - Deberías ver "Hola Mundo" y "Este es mi primer sitio web".

¡Felicidades! Acabas de crear y visualizar tu primer sitio web. Este es solo el comienzo, ¡sigue explorando y aprendiendo más sobre el emocionante mundo del desarrollo web!

---
## Las tecnologías principal de la Web
La web es una vasta red de documentos y aplicaciones interconectadas que se acceden a través de internet. Aquí hay una explicación detallada de los componentes principales de la web:

1. **HTML (HyperText Markup Language)**:
   - HTML es el lenguaje de marcado utilizado para estructurar y presentar contenido en la web. Utiliza etiquetas para definir elementos como títulos, párrafos, imágenes, enlaces, etc.
   - Ejemplo de código HTML:
     ```html
     <!DOCTYPE html>
     <html>
     <head>
        <title>Ejemplo de HTML</title>
     </head>
     <body>
        <h1>¡Hola, Mundo!</h1>
        <p>Esta es una página web de ejemplo.</p>
     </body>
     </html>
     ```

2. **CSS (Cascading Style Sheets)**:
   - CSS es el lenguaje utilizado para describir la apariencia y el formato de un documento escrito en HTML. Permite separar el contenido de la presentación, lo que facilita el mantenimiento y mejora la apariencia visual de las páginas web.
   - Ejemplo de código CSS:
     ```css
     body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f4f4;
        color: #333;
     }
     ```

3. **JavaScript**:
   - JavaScript es un lenguaje de programación que permite añadir interactividad y dinamismo a las páginas web. Puede modificar el contenido y el estilo de una página web en respuesta a eventos del usuario, como clics de botones o movimientos del ratón.
   - Ejemplo de código JavaScript:
     ```js
     document.getElementById('miBoton').addEventListener('click', function() {
     alert('¡Hiciste clic en el botón!');
     });
     ```

4. **Navegadores Web**:
   - Los navegadores web son aplicaciones que permiten a los usuarios acceder y navegar por la web. Algunos ejemplos populares incluyen Google Chrome, Mozilla Firefox, Safari y Microsoft Edge.
   - Los navegadores interpretan el código HTML, CSS y JavaScript para mostrar páginas web de forma visual e interactiva.

5. **Servidor y Cliente**:
   - La web sigue un modelo cliente-servidor. El cliente es el navegador web que envía solicitudes para acceder a páginas web, y el servidor es el sistema que almacena y envía los recursos solicitados.
   - Cuando ingresas una URL en el navegador, este envía una solicitud HTTP al servidor, que responde con el código HTML de la página.

6. **Protocolo HTTP/HTTPS**:
   - HTTP (HyperText Transfer Protocol) es el protocolo utilizado para la transferencia de datos en la web. HTTPS es la versión segura de HTTP, que encripta los datos para proteger la privacidad y la integridad de la información.

---
## Resumen

En la sección de Primeros Pasos en la Web de nuestro curso de desarrollo web, los estudiantes han aprendido los siguientes temas:

Se ha explicado que la Web es una red global de documentos interconectados que se acceden a través de Internet, permitiendo a los usuarios acceder y compartir información de manera eficiente.

Se ha explorado el funcionamiento de la Web, desde la solicitud de información por parte del cliente hasta la respuesta del servidor, utilizando protocolos como HTTP para la transferencia de datos.

Se han introducido conceptos básicos de programación, como la estructura de un programa y la sintaxis de un lenguaje de programación, con el objetivo de preparar a los estudiantes para escribir sus primeras instrucciones en código.

Los estudiantes han dado sus primeros pasos en la programación, escribiendo instrucciones simples en un lenguaje como JavaScript, y comprendiendo cómo estas instrucciones pueden afectar el comportamiento de una página web.

Se ha enseñado a los estudiantes cómo instalar y configurar Visual Studio Code, un editor de código popular, para que puedan comenzar a escribir y editar código de manera eficiente.

Los estudiantes han creado su primer sitio web utilizando HTML, CSS y JavaScript básico, aprendiendo a estructurar contenido, aplicar estilos y agregar interactividad a sus páginas.

Se han presentado las tecnologías principales que hacen posible la Web, como HTML, CSS, JavaScript, así como el papel de los navegadores web y los servidores en la transferencia de datos.

Con estos conocimientos, los estudiantes son capaces de realizar lo siguiente:

- Comprender el funcionamiento básico de la Web y su impacto en la sociedad.
- Escribir y ejecutar instrucciones simples en un lenguaje de programación.
- Crear y modificar páginas web utilizando HTML, CSS y JavaScript básico.
- Utilizar Visual Studio Code como herramienta de desarrollo web.
- Identificar las tecnologías principales que sustentan la Web y su papel en el desarrollo web moderno.

**Recursos Externos para Seguir Aprendiendo**:

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web)
- [Creación de la primera página web HTML](https://learn.microsoft.com/es-es/training/modules/build-first-html-webpage/)