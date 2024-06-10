# Primeros pasos en la Web

1. [Introducción](#introducción)
2. [¿Qué es la Web?](#qué-es-la-web)
3. [¿Cómo Funciona la Web?](#cómo-funciona-la-web)
4. [Programación](#programación)
5. [Tus primeras instrucciones](#tus-primeras-instrucciones)
6. [Instalación de Visual Studio Code](#instalacic3b3n-de-visual-studio-code)
7. [Crea tu primer sitio web](#crea-tu-primer-sitio-web)
8. [Las tecnologías principal de la Web](#las-tecnologías-principal-de-la-web)
9. [Resumen](#resumen)
---
## Introducción 

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
## Programación 

**¿Qué es Programación?**

La programación es como dar instrucciones a una computadora para que haga lo que queremos. Imagina que le enseñas a una máquina a hacer tareas específicas siguiendo un conjunto de reglas.

**Lenguajes de Programación:**

Son como idiomas que usamos para hablar con las computadoras. Algunos son más difíciles (como hablar en código secreto) y otros son más fáciles (como hablar en inglés simple). Los lenguajes de bajo nivel son más cercanos a las máquinas, mientras que los de alto nivel son más fáciles para nosotros.

- **Lenguajes de Bajo Nivel:**
  Son como hablar en un código muy específico que solo las computadoras entienden bien. Es como decirle a la máquina cada paso detallado.

- **Lenguajes de Alto Nivel:**
  Son más fáciles para nosotros porque son más parecidos al lenguaje humano. Podemos decirle a la computadora qué hacer de una manera más comprensible.

**Compilación e Interpretación:**

Son dos formas de hacer que la computadora entienda y ejecute nuestras instrucciones.

- **Compilación:**
  Es como escribir una carta y luego traducirla a un idioma que la máquina pueda entender. Después, la máquina puede seguir esas instrucciones sin necesidad de traducción cada vez.

- **Interpretación:**
  Es como leer en voz alta una historia a la máquina. La computadora no recibe una traducción previa; entiende y sigue las instrucciones mientras las escucha.

**Algoritmos**:
   - Un algoritmo es una secuencia de pasos o instrucciones que se siguen para resolver un problema o realizar una tarea.
   - Los algoritmos pueden ser simples, como sumar dos números, o complejos, como ordenar una lista de millones de elementos.

En resumen, programar es enseñar a las computadoras a hacer lo que queremos usando lenguajes que ellas entiendan. Algunos idiomas son más fáciles, y hay diferentes formas de hacer que la computadora siga nuestras instrucciones. Con el tiempo, aprenderemos a hablar el idioma de las máquinas y a contarles lo que queremos que hagan.

---
## Tus primeras instrucciones

En esta primera lección, vamos a aprender cómo dar las primeras instrucciones a la computadora para que realice acciones simples. Usaremos el navegador y el documento `about:blank` como nuestro lienzo en blanco.

**Instrucciones Básicas en JavaScript:**

En programación, usamos un lenguaje llamado JavaScript para darle órdenes a la computadora. Vamos a empezar con algunos ejemplos básicos:

**Práctica:**

1. Abre tu navegador y crea un nuevo documento en blanco utilizando "about:blank".
2. Abre las herramientas de desarrollo del navegador (puedes hacer clic derecho en la página y seleccionar "Inspeccionar" o "Elemento").
3. Ve a la pestaña "Consola".
4. Copia y pega cada uno de los ejemplos de código en la consola y presiona Enter para ejecutarlos.

**1. Alerta:**
```javascript
alert("Mensaje de alerta.");
```
Cuando ejecutamos este código, aparecerá una ventana emergente en la pantalla con el mensaje "Mensaje de alerta." Esto es útil para mostrar información importante al usuario.

**2. Escribir en el Documento:**
```javascript
document.write("Escribiendo en el documento");
```
Con este código, escribiremos "Escribiendo en el documento" directamente en la página. Puedes pensar en esto como si estuvieras escribiendo en una hoja de papel.

**3. Registro en la Consola:**
```javascript
console.log("Registro en la consola.");
```
En este caso, utilizamos `console.log` para imprimir el mensaje "Registro en la consola." en la consola del navegador. Esto es útil para ver mensajes mientras trabajamos en el código.

**4. Error en la Consola:**
```javascript
console.error("Error en la consola.");
```
Aquí, usamos `console.error` para imprimir un mensaje de error en la consola. Esto nos ayuda a identificar y corregir problemas en nuestro código.


¡Genial! Has dado tus primeros pasos en la programación. En las próximas lecciones, exploraremos más sobre JavaScript y cómo usarlo para crear programas más complejos. ¡Sigue practicando y divirtiéndote programando!

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
     - **ESLint:** Ayuda a mantener un código JavaScript/TypeScript limpio y consistente.

   Para instalar una extensión, simplemente haz clic en el botón "Instalar".

**Opcionales: Temas y Íconos**

1. **Material Icon Theme (Opcional):**
   - Esta extensión agrega íconos coloridos a los archivos y carpetas en el explorador de archivos.
   - Busca "Material Icon Theme" en la barra de búsqueda de extensiones y haz clic en "Instalar".

2. **Atom One Dark Theme (Opcional):**
   - Cambia la apariencia de VSCode al tema oscuro "Atom One Dark".
   - Busca "Atom One Dark Theme" en la barra de búsqueda de extensiones y haz clic en "Instalar".

**Configuración Adicional (Si es necesario):**

- Algunas extensiones pueden requerir configuración adicional. Verifica la documentación de cada extensión para obtener detalles sobre la configuración.

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

En este fascinante recorrido por los fundamentos de la programación, nos sumergimos en el pasado digital para explorar conceptos esenciales. Comenzamos desentrañando el misterioso lenguaje de la programación y descubriendo cómo los lenguajes actúan como el alfabeto digital, permitiendo a los programadores dar vida a sus ideas.

Después, nos aventuramos en el emocionante mundo de tus primeras instrucciones. Desde el lienzo digital en blanco proporcionado por `about:blank` hasta la consola de JavaScript, experimentamos con comandos básicos y aprendimos a interactuar con la máquina.

Luego, nos sumergimos en el desarrollo práctico con herramientas esenciales. Desde la instalación de Firefox hasta la configuración de Visual Studio Code, construimos nuestro entorno de desarrollo. Estas herramientas se convirtieron en aliadas indispensables para crear y depurar código de manera efectiva.

El viaje continuó con la creación de tu primer sitio web. Utilizando HTML y CSS, construimos la estructura y el estilo básicos de una página web sencilla. Este paso no solo fue un hito en nuestro aprendizaje, sino también una introducción a la magia de compartir contenido en el vasto mundo de la web.

Finalmente, exploramos las tecnologías principales que sustentan la web. HTML definió la estructura, CSS dio estilo, y JavaScript aportó la interactividad dinámica. Además, entendimos la importancia de HTTP/HTTPS y las URL como componentes esenciales para la comunicación y la identificación de recursos en la red.

Así concluye nuestro recorrido por la introducción a la programación en el pasado digital. Estos fundamentos sentaron las bases para comprender y participar en el emocionante universo de la creación digital. ¡Enhorabuena por tus primeros pasos en este viaje de descubrimiento y aprendizaje!
