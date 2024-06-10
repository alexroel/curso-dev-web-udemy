# Introducción a JavaScript

1.  [Introducción]
2.  [Consola de desarrollador](#consola-de-desarrollador)
3.  [Variables](#consola-de-desarrollador)
4.  [Titopos de datos básicos](#tipos-de-datos)
5.  [Operadores relacionales](#operadores-relacionales)
6.  [Condiciones](#condicionales)
7.  [Funciones](#funciones)
8.  [Comentarios](#comentarios)
9.  [Eventos](#eventos)
10. [Añadir un cambiador de imagen](#añadir-un-cambiador-de-imagen)
11. [Añadir un mensaje de bienvenida personalizado](#añadir-un-mensaje-de-bienvenida-personalizado)
12. [¿Un nombre de usuario nulo?](#¿un-nombre-de-usuario-nulo?)
13. [Resumen]

---
## Introducción

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
   let a = 5;
   let b = 3;
   let resultado = a + b; // resultado es 8
   ```

2. **Resta (-)**:
   ```javascript
   let a = 5;
   let b = 3;
   let resultado = a - b; // resultado es 2
   ```

3. **Multiplicación (*)**:
   ```javascript
   let a = 5;
   let b = 3;
   let resultado = a * b; // resultado es 15
   ```

4. **División (/)**:
   ```javascript
   let a = 6;
   let b = 3;
   let resultado = a / b; // resultado es 2
   ```

5. **Módulo (%)**: Devuelve el resto de una división.
   ```javascript
   let a = 7;
   let b = 3;
   let resultado = a % b; // resultado es 1
   ```

6. **Exponenciación (**)**:
   ```javascript
   let a = 2;
   let b = 3;
   let resultado = a ** b; // resultado es 8
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
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
}
```

**`else`**

El condicional `else` se utiliza junto con `if` para ejecutar un bloque de código si la condición del `if` es falsa.

```javascript
let edad = 15;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
```

**`if-else`**

La combinación de `if` y `else` permite crear una estructura de dos caminos, donde se ejecuta un bloque de código si la condición es verdadera y otro bloque si la condición es falsa.

```javascript
let hora = 14;
if (hora < 12) {
    console.log("Buenos días");
} else {
    console.log("Buenas tardes");
}
```

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
function sumar(a, b) {
    return a + b;
}
```

**Llamando a una Función**

Para usar una función, simplemente la llamas por su nombre y pasas los valores de los parámetros requeridos, si los hay.

```javascript
let resultado = sumar(5, 3); // resultado será 8
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

**Propósitos de los Comentarios**

- **Documentación**: Explicar el propósito de una función, clase o sección de código.
- **Depuración**: Marcar secciones de código que necesitan ser revisadas o corregidas.
- **Explicación**: Detallar cómo funciona un fragmento de código para futura referencia.

**Mejores Prácticas**

- **Clarity**: Mantén los comentarios claros y concisos.
- **Consistency**: Usa un estilo de comentario coherente en todo el código.
- **Relevance**: Comenta solo cuando sea necesario para explicar algo que no sea obvio.
- **Actualización**: Mantén los comentarios actualizados con el código que describen.

**Ejemplo de Uso de Comentarios**

```javascript
// Función para sumar dos números
function sumar(a, b) {
    return a + b;
}

/*
Función para multiplicar dos números
Este comentario tiene varias líneas
*/
let multiplicar = function(a, b) {
    return a * b;
};
```

Los comentarios son una herramienta poderosa para mejorar la legibilidad y mantenibilidad del código JavaScript. Utilízalos de manera efectiva para explicar y documentar tu código.


---
## Eventos



---
## Añadir un cambiador de imagen



---
## Añadir un mensaje de bienvenida personalizado


---
## ¿Un nombre de usuario nulo?


---
## Resumen