# Introducción a JavaScript

1.  [Introducción]
2.  [Consola de desarrollador](#consola-de-desarrollador)
3.  [Variables](#consola-de-desarrollador)
4.  [Titopos de datos básicos](#tipos-de-datos)
5.  [Operadores relacionales](#operadores-relacionales)
6.  [Condiciones](#condicionales)
7.  [Funciones](#funciones)
8.  [Comentarios](#comentarios)
9. [Añadir un cambiador de imagen](#añadir-un-cambiador-de-imagen)
10. [Añadir un mensaje de bienvenida personalizado](#añadir-un-mensaje-de-bienvenida-personalizado)
11. [¿Un nombre de usuario nulo?](#¿un-nombre-de-usuario-nulo?)
12. [Resumen]

---
## Introducción
¡Bienvenidos a la sección de Introducción a JavaScript de nuestro apasionante curso de Desarrollo Web! En esta etapa del viaje, nos sumergiremos en el poderoso mundo de la programación del lado del cliente, explorando los fundamentos esenciales que nos permitirán dotar a nuestras páginas web de interactividad y dinamismo. Prepárate para desafiar tu mente y expandir tus habilidades mientras exploramos temas clave que te llevarán de ser un principiante a un desarrollador más confiado.

Comenzaremos nuestra travesía con la Consola de Desarrollador, una herramienta invaluable que nos permitirá comprender y depurar nuestro código JavaScript de manera efectiva. Desde allí, nos adentraremos en el fascinante mundo de las Variables, aprendiendo cómo almacenar y manipular datos en nuestros programas de JavaScript.

Continuaremos nuestro viaje explorando los Tipos de Datos Básicos, comprendiendo cómo JavaScript maneja números, cadenas, booleanos y más. Después, nos sumergiremos en los Operadores Relacionales, herramientas fundamentales para comparar valores y tomar decisiones en nuestros programas.

A medida que avancemos, nos sumergiremos en las Condiciones, una parte esencial de cualquier lenguaje de programación, que nos permitirá controlar el flujo de nuestro código. Luego, exploraremos el emocionante mundo de las Funciones, aprendiendo a encapsular y reutilizar bloques de código para una mayor eficiencia y organización.

No nos detendremos ahí; también aprenderemos sobre los Comentarios, una herramienta invaluable para documentar nuestro código y hacerlo más legible para nosotros y para otros desarrolladores. Y para poner en práctica todo lo que hemos aprendido, nos embarcaremos en proyectos prácticos, como añadir un cambiador de imágenes dinámico y crear un mensaje de bienvenida personalizado, explorando incluso cómo manejar un nombre de usuario nulo.

¡Prepárate para un viaje emocionante lleno de descubrimientos y desafíos! Con determinación y práctica, estarás en camino de convertirte en un hábil desarrollador de JavaScript.

---
## Consola de desarrollador

La consola del navegador es una herramienta de desarrollo que se encuentra en los navegadores web modernos como Chrome, Firefox, Safari y Edge. Permite a los desarrolladores web depurar y probar código JavaScript directamente en el navegador.

**Funciones y Uso de la Consola**

1. **Acceso**:
   - **Chrome**: F12 o Ctrl+Shift+I (Cmd+Opt+I en Mac), luego clic en la pestaña "Console".
   - **Firefox**: F12 o Ctrl+Shift+K (Cmd+Opt+K en Mac).
   - **Safari**: Cmd+Opt+C (debes habilitar el menú de desarrollador primero).
   - **Edge**: F12 o Ctrl+Shift+I, luego clic en la pestaña "Console".

2. **Características**:
   - **Entrada de Comandos**: Permite ejecutar código JavaScript en tiempo real.
   - **Mensajes de Registro**: Muestra mensajes y errores generados por el código.
   - **Inspección de Objetos**: Puedes inspeccionar y explorar objetos y sus propiedades.
   - **Depuración**: Puedes establecer puntos de interrupción y examinar el flujo del código.

3. **Ejemplos de Uso**:
   - Ejecutar un simple `console.log('Hola Mundo');` para verificar que todo esté funcionando.
   - Probar funciones o fragmentos de código rápidamente sin necesidad de recargar la página.
   - Explorar el DOM del documento con comandos como `document.getElementById('id-del-elemento')`.

**Ventajas**

- **Interactividad**: Probar y modificar código al instante.
- **Depuración Eficiente**: Identificar y corregir errores en tiempo real.
- **Exploración de APIs**: Ver cómo las APIs del navegador responden a tus comandos.

**Operadores Aritméticos en JavaScript**

Los operadores aritméticos permiten realizar operaciones matemáticas en JavaScript. Los más comunes son la suma, resta, multiplicación y división, pero hay otros más avanzados también.

1. **Suma (+)**:
   ```javascript
   console.log("Operadores aritméticos")
   5 + 3
   //-> 8
   ```

2. **Resta (-)**:
   ```javascript
   5 - 3
   // resultado es 2
   ```

3. **Multiplicación (*)**:
   ```javascript
   5 * 3
   // resultado es 15
   ```

4. **División (/)**:
   ```javascript
   6 / 3
   // resultado es 2
   ```

5. **Módulo (%)**: Devuelve el resto de una división.
   ```javascript
   7 % 3
   //resultado es 1
   ```

6. **Exponenciación (**)**:
   ```javascript
   2 ** 3
   // resultado es 8
   ```

**Operaciones con textos**
En JavaScript, realizar operaciones entre diferentes tipos de datos puede producir resultados variados debido a la coerción de tipos (la conversión automática entre tipos de datos). Aquí tienes una guía sobre cómo se comportan las operaciones comunes entre diferentes tipos de datos en JavaScript:

**Concatenación**
La operación de suma en JavaScript puede concatenar cadenas o sumar números, dependiendo de los tipos de los operandos.

```javascript
"Hola " + "Mundo"
// Resultado: "Hola Mundo"
"4" + 5
// Resultado: "45"
4 + "5"
// Resultado: "45" 
```

**Resta (-), Multiplicación (*), y División (/)**
Estas operaciones intentan convertir los operandos a números.

**Cadenas de texto**
```javascript
console.log("10" - "5"); // 5 (Las cadenas se convierten en números)
console.log("10" * "5"); // 50
console.log("10" / "5"); // 2
```
**Mezcla de números y cadenas**
```javascript
console.log(10 - "5"); // 5 (La cadena "5" se convierte en el número 5)
console.log("10" * 2); // 20 (La cadena "10" se convierte en el número 10)
console.log("20" / 2); // 10 (La cadena "20" se convierte en el número 20)
```

**Casos con valores no numéricos**
```javascript
console.log(10 - "a"); // NaN (No es posible convertir "a" a número)
console.log("b" * 2); // NaN (No es posible convertir "b" a número)
```

---
## Variables

**Concepto de Variables en JavaScript**

En JavaScript, una variable es un contenedor para almacenar valores. Estos valores pueden ser números, cadenas de texto, objetos, funciones, etc. Las variables en JavaScript son dinámicas, lo que significa que pueden contener diferentes tipos de valores en diferentes momentos durante la ejecución del programa.

**Partes de una Variable**

Una variable en JavaScript tiene tres partes principales:

```
let nombre = valor
```
1. **Nombre**: Es el identificador único de la variable y se utiliza para acceder a su valor.
2. **Valor**: Es el dato almacenado en la variable.
3. **Tipo de Datos**: Es el tipo de dato del valor almacenado en la variable (p.ej., número, cadena de texto, objeto, función, etc.).


- **Declarar una variable** : Puedes declarar una variable sin asignarle un valor inicial. Esto es útil cuando sabes que necesitarás la variable más adelante en tu código, pero aún no tienes un valor para ella. 
    ```js
    let nombre;
    ```
-  **Inicializar una variable**: Dar un valor a una variable.
    ```js
    nombre = 'Juan';
    ```
- **Declarar e inicializar una variable**: También puedes declarar e inicializar una variabl en la misma línea de código.
    ```js
    let nombre = 'Juan'
    ```

**`let`, `const` y `var`**

Las palabras clave `let`, `const` y `var` se utilizan en JavaScript para declarar variables, pero tienen diferencias importantes en cuanto a su alcance y mutabilidad.

**`let`**

- **Re-declaración**: No se permite la re-declaración de la misma variable en el mismo bloque.
    ```html
    <script>
      let x = 10;
      let x = 20;
      console.log(x); // ¡Error!
   </script>
    ```

    Pero se puede modificar el valor de la variables sin la necesidad del uso del `let`.

    ```html
    <script>
      let x = 10;
      x = 20;
      console.log(x); 
    ```

**`const`**

- **Re-asignación**: No se puede reasignar un nuevo valor a una variable declarada con `const` después de su inicialización.

    ```html
    <script>      
    const PI = 3.14;
    // const PI = 3.14159; // ¡Error!
    // PI = 3.14159; // ¡Error!
    </script>
    ```

**`var`**

- **Re-declaración**: Se permite la re-declaración de la misma variable en el mismo ámbito.
    ```html
    <script>
      var x = 10;
      var x = 20;
      console.log(x);
   </script>
    ```
- **Hoisting**: Tanto la declaración como la inicialización se "elevan" al inicio de su contexto (función o global).
    ```html
    <script>
      console.log(nombre);
      var nombre;
      nombre = 'Code';
   </script>
    ```
    - **`var`**: Evitar su uso a menos que sea necesario para mantener compatibilidad con código antiguo. Tiene un alcance de función o global y permite la re-declaración en el mismo ámbito.

En JavaScript, las reglas para declarar una variable se rigen por una serie de convenciones y restricciones. Aquí están las reglas más importantes:

**Reglas Sintácticas**

1. **Caracteres Permitidos:**
   - Una variable debe comenzar con una letra (a-z, A-Z), un guion bajo (_), o un signo de dólar ($).
   - Los caracteres siguientes pueden ser letras, dígitos (0-9), guiones bajos (_) o signos de dólar ($).
   - No se permite que una variable comience con un dígito.

   ```javascript
   let validVariable1 = "valor";
   let _validVariable2 = "valor";
   let $validVariable3 = "valor";
   let invalidVariable! = "valor"; // ¡Esto es inválido!
   let 1invalidVariable = "valor"; // ¡Esto es inválido!
   ```

2. **No usar palabras reservadas:**
   - No se pueden utilizar palabras reservadas de JavaScript como nombres de variables (e.g., `if`, `else`, `while`, `class`, `return`, etc.).

   ```javascript
   let for = 5; // ¡Esto es inválido!
   let function = "función"; // ¡Esto es inválido!
   ```

**Convenciones de Nomenclatura**

1. **Camel Case:**
   - Es una convención común en JavaScript utilizar el estilo camelCase para nombres de variables. La primera palabra comienza con una letra minúscula y cada palabra subsiguiente comienza con una letra mayúscula.

   ```javascript
   let firstName = "John";
   let lastName = "Doe";
   ```

2. **Nombres descriptivos:**
   - Utiliza nombres de variables descriptivos que indiquen claramente el propósito de la variable.

   ```javascript
   let counter = 0;
   let userAge = 25;
   ```

3. **Evitar nombres cortos o crípticos:**
   - Evita el uso de nombres de variables demasiado cortos o crípticos, a menos que el contexto sea claro.

   ```javascript
   let x = 5; // No es descriptivo
   let userCount = 5; // Es descriptivo
   ```

4. **Constantes:**
   - Para variables que representan constantes y cuyo valor no debe cambiar, se suele utilizar el estilo UPPER_SNAKE_CASE.

   ```javascript
   const MAX_USERS = 100;
   const API_KEY = "12345-ABCDE";
   ```

**Ejemplos de Variables Correctamente Declaradas**

```javascript
// Variables válidas
let name = "Alice";
let age = 30;
let _privateVar = "private";
let $dollarSignVar = "value";
let camelCaseVariable = "value";

// Variables válidas pero no recomendadas (falta de descriptividad)
let x = 10;
let y = 20;

// Constantes
const PI = 3.14159;
const MAX_LOGIN_ATTEMPTS = 5;

// Variables descriptivas y en camelCase
let userFirstName = "John";
let userLastName = "Doe";
let userAge = 25;
```

**Consejos Adicionales**

- **Evita nombres de variables globales:** Si es posible, evita declarar variables globales, ya que pueden causar conflictos de nombres y problemas de mantenimiento en proyectos grandes.
- **Usa `let` y `const`:** Prefiere `let` y `const` en lugar de `var` para declarar variables. `const` para valores que no cambian y `let` para variables que pueden cambiar su valor.
  
  ```javascript
  let mutableVariable = 10; // Puede cambiar
  const immutableVariable = 20; // No puede cambiar
  ```

Siguiendo estas reglas y convenciones, podrás declarar variables en JavaScript de manera efectiva y mantener un código más legible y mantenible.


---
## Titopos de datos básicos

En programación, los tipos de datos son una clasificación de los diferentes tipos de valores que pueden ser utilizados en un programa. Los tipos de datos determinan qué tipo de operaciones se pueden realizar en los valores y cómo se almacenan en la memoria de la computadora.

**Números**

En JavaScript, el tipo de datos `Number` se utiliza para representar valores numéricos. Los números pueden ser enteros o de punto flotante.

```javascript
let edad = 30; // Entero
let precio = 19.99; // Punto flotante
```

JavaScript también tiene valores especiales para representar números especiales como `Infinity` (infinito) y `NaN` (No es un número).

**String**

El tipo de datos `String` se utiliza para representar valores de texto. Las cadenas de texto deben estar encerradas entre comillas simples o dobles.

```javascript
let nombre = 'Juan';
let mensaje = "Hola, mundo!";
```

**Boolean**

El tipo de datos `Boolean` se utiliza para representar valores booleanos, que pueden ser `true` (verdadero) o `false` (falso). Se utilizan principalmente en operaciones de control de flujo y lógica.

```javascript
let activo = true;
let finalizado = false;
```

**Null**

El tipo de datos `null` se utiliza para representar la ausencia intencional de algún valor. Es un valor especial que indica la falta de un valor válido.

```javascript
let resultado = null;
```

**Undefined**

El tipo de datos `undefined` se utiliza para representar una variable que ha sido declarada pero aún no tiene un valor asignado. También se utiliza como valor de retorno predeterminado para funciones que no devuelven explícitamente un valor.

```javascript
let valor;
console.log(valor); // Undefined
```

---
## Operadores relacionales

Los operadores relacionales se utilizan para comparar dos valores y devolver un valor booleano (`true` o `false`) que indica si la relación entre los dos valores es verdadera o falsa.

**Igualdad (`==`)**

El operador de igualdad `==` compara dos valores y devuelve `true` si son iguales, o `false` si son diferentes. JavaScript intentará convertir los valores a un tipo común antes de hacer la comparación.

```js
console.log(5 == 5);   // true
console.log('5' == 5); // true (JavaScript convierte '5' a 5 antes de comparar)
console.log(5 == '5'); // true (JavaScript convierte 5 a '5' antes de comparar)
console.log(5 == 10);  // false
```

**Desigualdad (`!=`)**

El operador de desigualdad `!=` compara dos valores y devuelve `true` si son diferentes, o `false` si son iguales.

```javascript
console.log(5 != 10);  // true
console.log('hola' != 'hola'); // false
```

**Estrictamente Igual (`===`)**

El operador de igualdad estricta `===` compara dos valores sin realizar ninguna conversión de tipo. Los valores deben ser del mismo tipo y tener el mismo valor para que la comparación sea verdadera.

```javascript
console.log(5 === 5);   // true
console.log('5' === 5); // false (diferentes tipos)
console.log(5 === '5'); // false (diferentes tipos)
```

**Estrictamente Desigual (`!==`)**

El operador de desigualdad estricta `!==` compara dos valores sin realizar ninguna conversión de tipo, y devuelve `true` si los valores son de tipos diferentes o si tienen valores diferentes.

```javascript
console.log(5 !== 10);  // true
console.log('hola' !== 'adios'); // true
```

**Mayor que (`>`), Menor que (`<`), Mayor o igual que (`>=`), Menor o igual que (`<=`)**

Estos operadores se utilizan para comparar si un valor es mayor, menor, mayor o igual, o menor o igual que otro valor, respectivamente.

```javascript
console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 >= 5);  // true
console.log(5 <= 3);  // false
```

**Operadores Lógicos**

Los operadores lógicos se utilizan para combinar o modificar valores booleanos (`true` o `false`).

**AND lógico (`&&`)**

El operador `&&` devuelve `true` si ambos operandos son `true`, de lo contrario devuelve `false`.

```javascript
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false
```

**OR lógico (`||`)**

El operador `||` devuelve `true` si al menos uno de los operandos es `true`, de lo contrario devuelve `false`.

```javascript
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false
```

**NOT lógico (`!`)**

El operador `!` invierte el valor booleano de su único operando.

```javascript
console.log(!true);  // false
console.log(!false); // true
```

Estos operadores son fundamentales en la programación, ya que permiten realizar comparaciones y tomar decisiones en función de esas comparaciones.

---
## Condicionales 

Los condicionales en JavaScript son estructuras de control que permiten ejecutar cierto bloque de código si se cumple una condición específica. Estas estructuras son fundamentales para tomar decisiones en un programa.

**Sintaxis**

La sintaxis básica de un condicional `if` en JavaScript es la siguiente:

```javascript
if (condicion) {
    // Bloque de código a ejecutar si la condición es verdadera
}
```

Si la condición dentro de los paréntesis es verdadera, el bloque de código dentro de las llaves se ejecutará. Si la condición es falsa, el bloque se omitirá.

**`if`**

El condicional `if` se utiliza para ejecutar un bloque de código si se cumple una condición específica.

```javascript
let n = 18;
if (n % 2 == 0) {
    console.log("El número es Par");
}
```

**`else`**

El condicional `else` se utiliza junto con `if` para ejecutar un bloque de código si la condición del `if` es falsa.

```javascript
let n = 18;
if (n % 2 == 0) {
    console.log("El número es Par");
} else {
    console.log("El número es Impar");
}
```

**`if-else`**

La combinación de `if` y `else` permite crear una estructura de dos caminos, donde se ejecuta un bloque de código si la condición es verdadera y otro bloque si la condición es falsa.

**Condicionales Anidados**

Los condicionales también pueden anidarse, es decir, colocar un condicional dentro de otro. Esto permite crear estructuras más complejas con múltiples condiciones.

```javascript
let hora = 14;
if (hora < 12) {
    console.log("Buenos días");
} else {
    if (hora < 18) {
        console.log("Buenas tardes");
    } else {
        console.log("Buenas noches");
    }
}
```

---
## Funciones

Las funciones en JavaScript son bloques de código reutilizables que se utilizan para realizar una tarea específica. Pueden aceptar parámetros (valores de entrada) y devolver un valor como resultado. Las funciones son fundamentales en JavaScript y son una parte importante de la programación en general.

**Declaración de una Función**

Puedes declarar una función en JavaScript de la siguiente manera:

```javascript
function nombreFuncion(parametro1, parametro2) {
    // Bloque de código
    return resultado;
}
```

- `nombreFuncion`: El nombre de la función.
- `parametro1, parametro2`: Parámetros que la función acepta (pueden ser opcionales).
- `return`: Palabra clave para devolver un valor desde la función.

**Ejemplo** 

```javascript
function saludar(){
   alert("Hola desde la función saludar")
}

// Función que resive valores
function saludar(nombre){
   return "Hola " + nombre
   //alert("Hola "+ nombre)
}

```

**Llamando a una Función**

Para usar una función, simplemente la llamas por su nombre y pasas los valores de los parámetros requeridos, si los hay.

```javascript
//Utilizando la Funciones 
nombre = prompt("Ingrese su nombre")
//saludar(nombre)
alert(saludar(nombre))
```

**Mas ejemplos con funciones**
```javascript
function sumar(a, b){
   return a + b
}

a = prompt("Ingrese n1: ")
b = prompt("Ingrese n2: ")

//Combersion de datos 
a = parseInt(a)
b = parseInt(b)

alert(sumar(a, b))
```

---
## Comentarios

Los comentarios en JavaScript son parte fundamental de la programación, ya que permiten documentar y explicar el código. Los comentarios son ignorados por el intérprete de JavaScript y no tienen ningún impacto en la ejecución del programa. Aquí tienes información detallada sobre los comentarios en JavaScript:

**Tipos de Comentarios**

En JavaScript, hay dos formas principales de hacer comentarios:

**Comentarios de una línea**

Se utilizan para hacer comentarios cortos en una sola línea.

```javascript
// Este es un comentario de una línea
let x = 5; // Asignar el valor 5 a la variable x
```

**Comentarios de múltiples líneas**

Se utilizan para hacer comentarios que abarcan varias líneas.

```javascript
/*
Este es un comentario
de múltiples líneas
que explica una sección de código
*/
let y = 10; // Asignar el valor 10 a la variable y
```

**Documentar una función con JSDoc**
Documentar funciones en JavaScript es esencial para mantener un código claro, comprensible y fácil de mantener. Una de las formas más comunes de documentación es mediante comentarios JSDoc, un estándar de documentación que permite generar automáticamente documentación legible para los desarrolladores. Aquí te muestro cómo documentar una función en JavaScript utilizando JSDoc.

*Comentarios JSDoc Básicos*

Un comentario JSDoc comienza con `/**` y termina con `*/`. Dentro de este bloque, se utilizan etiquetas específicas para describir diferentes partes de la función.

**Ejemplo Básico**

```javascript
/**
 * Suma dos números.
 *
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} La suma de los dos números.
 */
function sum(a, b) {
  return a + b;
}
```

- `@param {tipo} nombre - Descripción`: Describe un parámetro de la función.
- `@returns {tipo} Descripción`: Describe el valor de retorno de la función.
- `@throws {tipo} Descripción`: Describe los errores que la función puede lanzar.
- `@example`: Proporciona un ejemplo de cómo usar la función.

**Propósitos de los Comentarios**

- **Documentación**: Explicar el propósito de una función, clase o sección de código.
- **Depuración**: Marcar secciones de código que necesitan ser revisadas o corregidas.
- **Explicación**: Detallar cómo funciona un fragmento de código para futura referencia.

**Mejores Prácticas**

- **Clarity**: Mantén los comentarios claros y concisos.
- **Consistency**: Usa un estilo de comentario coherente en todo el código.
- **Relevance**: Comenta solo cuando sea necesario para explicar algo que no sea obvio.
- **Actualización**: Mantén los comentarios actualizados con el código que describen.

---
## Añadir un cambiador de imagen
Este código esencialmente alterna la fuente de la imagen entre dos opciones (`logo-google.png` y `logo-google2.webp`) cada vez que se llama a la función `cambiarImg`.

Agregar desde HTML `<script src="scripts/main.js"></script>`

```javascript
// Imagen dinámica
let miImagen = document.querySelector('img');

/**
 * Cambia la fuente de la imagen entre dos opciones.
 */
function cambiarImg() {
    let miSrc = miImagen.getAttribute('src');
    if (miSrc === 'images/logo-google.png') {
        miImagen.setAttribute('src', 'images/logo-google2.webp');
    } else {
        miImagen.setAttribute('src', 'images/logo-google.png');
    }
}
```

1. **Declaración y selección de la imagen**:
    ```javascript
    // Imagen dinámica
    let miImagen = document.querySelector('img');
    ```
    - Este comentario indica que la variable `miImagen` está destinada a almacenar una imagen de manera dinámica.
    - `let miImagen = document.querySelector('img');` utiliza el método `querySelector` del DOM para seleccionar el primer elemento `<img>` del documento HTML y asignarlo a la variable `miImagen`.

2. **Declaración de la función `cambiarImg`**:
    ```javascript
    /**
     * Cambia la fuente de la imagen entre dos opciones.
     */
    function cambiarImg() {
    ```
    - El bloque de comentarios JSDoc describe el propósito de la función `cambiarImg`, indicando que cambia la fuente de la imagen entre dos opciones.
    - Se declara la función `cambiarImg` utilizando la palabra clave `function`.

3. **Obteniendo la fuente actual de la imagen**:
    ```javascript
    let miSrc = miImagen.getAttribute('src');
    ```
    - Dentro de la función, se declara una variable `miSrc` y se le asigna el valor del atributo `src` de la imagen `miImagen`. Esto se hace usando el método `getAttribute`.

4. **Condicional para cambiar la fuente de la imagen**:
    ```javascript
    if (miSrc === 'images/logo-google.png') {
        miImagen.setAttribute('src', 'images/logo-google2.webp');
    } else {
        miImagen.setAttribute('src', 'images/logo-google.png');
    }
    ```
    - Se utiliza una declaración `if` para comprobar si el valor de `miSrc` es `'images/logo-google.png'`.
    - Si esta condición es verdadera (`true`), se cambia el atributo `src` de la imagen a `'images/logo-google2.webp'` usando el método `setAttribute`.
    - Si la condición es falsa (`false`), se ejecuta el bloque `else` que cambia el atributo `src` de la imagen a `'images/logo-google.png'`.

---
## Añadir un mensaje de bienvenida personalizado
Este código crea un encabezado dinámico que interactúa con el usuario. Primero, selecciona el elemento `<h1>` del documento. Luego, a través de la función `enviarNombreUsuario`, solicita al usuario que ingrese su nombre. Si el usuario no proporciona un nombre, la función vuelve a solicitarlo. Una vez que se obtiene un nombre válido, se guarda en el almacenamiento local y se actualiza el contenido del encabezado `<h1>` con un mensaje personalizado que incluye el nombre del usuario.

```javascript
// Perosonalización de mensaje de título principal
let miTitulo = document.querySelector('h1');

/**
 * Solicita al usuario que ingrese su nombre, lo almacena en el almacenamiento local
 * y actualiza el contenido del elemento <h1> con un mensaje personalizado.
 */
function enviarNombreUsuario() {
    let miNombre = prompt('Ingrese su nombre por favor:');
    
    // Si no hay nombre
    if (!miNombre) {
        enviarNombreUsuario();
    } else {
        localStorage.setItem('name', miNombre);
        miTitulo.innerHTML = 'Google es genial, ' + miNombre;
    }
}
```
En HTML agregar el código:
```html
<!--Al final-->
<button onclick="enviarNombreUsuario()">Nuevo nombre de usuario</button>
```

**Explicación del código:**

1. **Selección del elemento `<h1>` del documento**:
    ```javascript
    // Selecciona el elemento <h1> del documento.
    let miTitulo = document.querySelector('h1');
    ```
    - Este comentario explica que la variable `miTitulo` se usará para almacenar el primer elemento `<h1>` que se encuentra en el documento HTML.
    - `let miTitulo = document.querySelector('h1');` utiliza el método `querySelector` del DOM para seleccionar este elemento y asignarlo a la variable `miTitulo`.

2. **Declaración de la función `enviarNombreUsuario`**:
    ```javascript
    /**
     * Solicita al usuario que ingrese su nombre, lo almacena en el almacenamiento local
     * y actualiza el contenido del elemento <h1> con un mensaje personalizado.
     */
    function enviarNombreUsuario() {
    ```
    - El bloque de comentarios JSDoc describe el propósito y funcionamiento de la función `enviarNombreUsuario`.
    - La función solicita al usuario que ingrese su nombre, lo guarda en el almacenamiento local del navegador y actualiza el contenido del elemento `<h1>` con un mensaje personalizado.

3. **Solicitar el nombre del usuario**:
    ```javascript
    let miNombre = prompt('Ingrese su nombre por favor:');
    ```
    - Se declara una variable `miNombre` y se le asigna el valor ingresado por el usuario a través de la función `prompt`. Esta función muestra un cuadro de diálogo que solicita al usuario que ingrese su nombre.

4. **Comprobación del nombre y almacenamiento en `localStorage`**:
    ```javascript
    // Si no hay nombre
    if (!miNombre) {
        enviarNombreUsuario();
    } else {
        localStorage.setItem('name', miNombre);
        miTitulo.innerHTML = 'Google es genial, ' + miNombre;
    }
    ```
    - La declaración `if` comprueba si `miNombre` está vacío (`null` o una cadena vacía).
    - Si `miNombre` no tiene un valor válido, la función `enviarNombreUsuario` se llama recursivamente para volver a solicitar el nombre del usuario. Esta recursión asegura que el usuario proporcione un nombre válido antes de proceder.
    - Si `miNombre` tiene un valor válido, se guarda en el almacenamiento local del navegador usando `localStorage.setItem('name', miNombre);`.
    - Finalmente, se actualiza el contenido del elemento `<h1>` con un mensaje personalizado que incluye el nombre del usuario (`miTitulo.innerHTML = 'Google es genial, ' + miNombre;`). Esto se hace concatenando la cadena `'Google es genial, '` con el valor de `miNombre`.

---
## ¿Un nombre de usuario nulo?
Este código verifica si hay un nombre de usuario almacenado en el almacenamiento local del navegador. Si existe un nombre almacenado, lo recupera y actualiza el contenido del encabezado `<h1>` con un mensaje personalizado que incluye el nombre del usuario. Si no hay un nombre almacenado, llama a la función `enviarNombreUsuario` para solicitar al usuario que ingrese su nombre, almacenarlo y actualizar el encabezado.

```javascript
// Recuperar nombre de usuario desde navegador
if (localStorage.getItem('name')) {
    let nombreAlmacenado = localStorage.getItem('name');
    miTitulo.innerHTML = 'Google es genial, ' + nombreAlmacenado;
} else {
    enviarNombreUsuario();
}
```

*Explicación del código:*

1. **Comentario inicial**:
    ```javascript
    // Recuperar nombre de usuario desde navegador
    ```
    - Este comentario indica que el siguiente bloque de código se utiliza para recuperar el nombre de usuario almacenado previamente en el navegador.

2. **Comprobación del almacenamiento local**:
    ```javascript
    if (localStorage.getItem('name')) {
    ```
    - Se utiliza una declaración `if` para verificar si existe un ítem con la clave `'name'` en el almacenamiento local del navegador (`localStorage`).
    - `localStorage.getItem('name')` intenta recuperar el valor asociado a la clave `'name'`. Si existe un valor almacenado, la condición será verdadera (`true`).

3. **Recuperación y uso del nombre almacenado**:
    ```javascript
    let nombreAlmacenado = localStorage.getItem('name');
    miTitulo.innerHTML = 'Google es genial, ' + nombreAlmacenado;
    ```
    - Si el valor existe, se declara una variable `nombreAlmacenado` y se le asigna el valor recuperado del almacenamiento local.
    - Luego, se actualiza el contenido del elemento `<h1>` (`miTitulo`) con un mensaje personalizado que incluye el nombre almacenado. Esto se logra concatenando la cadena `'Google es genial, '` con el valor de `nombreAlmacenado`.

4. **Solicitud de nombre al usuario si no está almacenado**:
    ```javascript
    } else {
        enviarNombreUsuario();
    }
    ```
    - Si no existe un valor asociado a la clave `'name'` en el almacenamiento local, se ejecuta el bloque `else`.
    - Dentro del bloque `else`, se llama a la función `enviarNombreUsuario()`, que solicita al usuario que ingrese su nombre, lo almacena en el almacenamiento local y actualiza el contenido del elemento `<h1>` con el nombre proporcionado.


---
## Resumen
En la sección de Introducción a JavaScript de nuestro curso de Desarrollo Web, los estudiantes adquirieron una sólida comprensión de los conceptos fundamentales de este lenguaje de programación. Aprendieron a utilizar la Consola de Desarrollador para depurar y ejecutar código JavaScript de manera efectiva. Dominaron el concepto de Variables, permitiéndoles almacenar y manipular datos dentro de sus programas.

Exploraron los Tipos de Datos Básicos en JavaScript, incluyendo números, cadenas de texto y booleanos, comprendiendo cómo trabajar con ellos de manera eficiente. Los Operadores Relacionales se convirtieron en una herramienta poderosa para comparar valores y tomar decisiones basadas en esas comparaciones.

Las Condiciones se convirtieron en una parte esencial de su caja de herramientas de programación, permitiéndoles controlar el flujo de ejecución de su código de manera más precisa. Aprendieron a definir y utilizar Funciones para encapsular bloques de código y promover la reutilización y la modularidad.

Además, se familiarizaron con el uso de Comentarios para documentar su código de manera efectiva y hacerlo más comprensible para ellos mismos y para otros desarrolladores. Finalmente, pusieron en práctica sus conocimientos al trabajar en proyectos prácticos, como crear un cambiador de imágenes dinámico y manejar un nombre de usuario nulo.

Con estos conocimientos, los estudiantes ahora son capaces de crear páginas web interactivas y dinámicas, dotando a sus proyectos de una mayor funcionalidad y experiencia de usuario mejorada. Pueden manipular elementos en la página, responder a la interacción del usuario y crear experiencias personalizadas y atractivas.

Para seguir ampliando su dominio de JavaScript, aquí tienes una lista de recursos externos recomendados:

1. [JavaScript.info](https://es.javascript.info/): Una guía completa que cubre desde los conceptos básicos hasta temas avanzados de JavaScript.
2. [MDN Web Docs](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/JavaScript_basics): La documentación oficial de Mozilla Developer Network ofrece una referencia completa y tutoriales detallados sobre JavaScript.
3. [Eloquent JavaScript](https://eloquentjavascript.net/): Un libro en línea gratuito que explora JavaScript en profundidad con ejemplos prácticos y proyectos.
4. [W3Schools](https://www.w3schools.com/js/default.asp): Una fuente de recursos completa que ofrece tutoriales, ejemplos prácticos y una referencia detallada de HTML, CSS, JavaScript y otras tecnologías web.
5. [Desarrollo web para principiantes](https://learn.microsoft.com/es-es/training/paths/web-development-101/)

