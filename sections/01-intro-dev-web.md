# Primeros pasos en la Web

1. [Introducción](#introducción)
2. [Programación y la web](#programación-y-la-web)
3. [Tus primeras instrucciones](#tus-primeras-instrucciones)
4. [Instalación de Visual Studio Code](#instalacic3b3n-de-visual-studio-code)
5. [Crea tu primer sitio web](#crea-tu-primer-sitio-web)
6. [Las tecnologías principal de la Web](#las-tecnologías-principal-de-la-web)
7. [Resumen](#resumen)
---
## Introducción 


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
