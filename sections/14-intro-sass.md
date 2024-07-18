# Introducción SASS


---
## Introducción


---
## ¿Qué es SASS?

SASS, que significa **Syntactically Awesome Style Sheets**, es un preprocesador de CSS que extiende las capacidades de CSS, permitiendo a los desarrolladores escribir hojas de estilo de manera más eficiente y manejable. Fue creado por Hampton Catlin y diseñado por Natalie Weizenbaum en 2006. SASS añade características avanzadas como variables, anidamiento, herencia y mixins, que no están disponibles en el CSS estándar. Estas características permiten a los desarrolladores escribir CSS más limpio, con mejor estructura y mantenimiento.

SASS viene en dos sintaxis: la sintaxis original, conocida como "SASS" (indenta la sintaxis), y la sintaxis más reciente, conocida como "SCSS" (utiliza llaves y punto y coma como CSS). SCSS es la sintaxis más popular y compatible con todos los archivos CSS válidos.

**Ventajas de usar SASS**

**1. Variables:**
SASS permite el uso de variables, lo que facilita la gestión de valores repetidos como colores, fuentes y tamaños. Esto hace que la personalización y la actualización de estilos sean más sencillas, ya que los cambios se pueden hacer en un solo lugar en lugar de buscar y reemplazar en todo el archivo CSS.

**2. Anidamiento:**
Con SASS, los selectores se pueden anidar dentro de otros selectores de una manera que refleja la estructura HTML. Esto no solo mejora la legibilidad del código, sino que también ayuda a evitar la repetición de selectores y simplifica la jerarquía de estilo.

**3. Herencia:**
SASS permite que un selector herede estilos de otro, utilizando la directiva `@extend`. Esto promueve la reutilización del código y ayuda a mantener las hojas de estilo DRY (Don't Repeat Yourself).

**4. Mixins:**
Los mixins son bloques de código reutilizables que se pueden incluir en cualquier lugar de la hoja de estilo. Pueden aceptar parámetros, lo que permite crear estilos dinámicos y reutilizables. Esto es particularmente útil para propiedades CSS que requieren prefijos específicos del navegador.

**5. Funciones y Operaciones:**
SASS incluye una variedad de funciones predefinidas y permite a los desarrolladores definir las suyas propias. Estas funciones pueden realizar operaciones matemáticas, manipular colores y más, lo que proporciona un control preciso sobre los estilos.

**6. Modulares:**
SASS promueve una estructura modular mediante el uso de la directiva `@import` (aunque ahora se recomienda `@use` y `@forward`). Esto permite dividir las hojas de estilo en archivos más pequeños y manejables, mejorando la organización y facilitando el mantenimiento.

**7. Control de flujo:**
SASS incluye directivas de control de flujo como `@if`, `@for`, `@each` y `@while`, que permiten añadir lógica a los estilos. Esto es útil para crear estilos dinámicos y condicionales.

**8. Compatibilidad con CSS:**
SCSS, una de las dos sintaxis de SASS, es una extensión de CSS3, lo que significa que cualquier hoja de estilo CSS válida también es un archivo SCSS válido. Esto facilita la adopción de SASS en proyectos existentes.

**9. Comunidad y Herramientas:**
SASS tiene una comunidad activa y extensa, lo que significa que hay una gran cantidad de recursos, tutoriales y herramientas disponibles. Además, SASS se integra bien con muchas herramientas y frameworks de desarrollo front-end, como Compass, Bourbon y Bootstrap.

---
## Instalación compilardor de SASS
    - usas Live Sass Compiler de VSCode
    - Configuraciones Basicas

---

## Sintaxis de SASS

**SCSS vs. SASS: Diferencias y similitudes**

**SASS (Syntactically Awesome Style Sheets)** es un preprocesador CSS que permite escribir CSS de manera más eficiente y con características adicionales. SASS tiene dos sintaxis diferentes: **SCSS** y **SASS**.

**SCSS (Sassy CSS)**

- **Sintaxis**: SCSS es una extensión de la sintaxis CSS. Cualquier archivo CSS válido también es un archivo SCSS válido.
- **Estructura**: Usa llaves `{}` para definir bloques de reglas y punto y coma `;` para separar declaraciones, al igual que CSS.
- **Ejemplo**:
  ```scss
  $color-primary: #3498db;

  body {
    font-family: Arial, sans-serif;
    color: $color-primary;
  }

  .container {
    width: 80%;
    margin: 0 auto;
  }
  ```

**SASS (indented syntax)**

- **Sintaxis**: La sintaxis SASS no usa llaves ni punto y coma. Depende de la indentación (espacios o tabulaciones) para definir bloques de reglas.
- **Estructura**: Es más concisa y se asemeja más a la estructura de lenguajes como Python.
- **Ejemplo**:
  ```sass
  $color-primary: #3498db

  body
    font-family: Arial, sans-serif
    color: $color-primary

  .container
    width: 80%
    margin: 0 auto
  ```

**Diferencias clave:**

- **Uso de llaves y punto y coma**: SCSS usa llaves y punto y coma, mientras que SASS usa indentación.
- **Compatibilidad**: SCSS es más cercano al CSS tradicional, lo que lo hace más fácil de adoptar para quienes ya están familiarizados con CSS.
- **Preferencia personal**: La elección entre SCSS y SASS a menudo se reduce a una cuestión de preferencia personal y del equipo.

**Comentarios en SASS**

SASS admite dos tipos de comentarios:

**Comentarios de una sola línea**

- **Sintaxis**: Utilizan `//` y no se compilan en el archivo CSS final.
- **Uso**: Son útiles para dejar notas o comentarios que solo necesitan ser vistos durante el desarrollo.
- **Ejemplo**:
  ```scss
  // Este comentario no aparecerá en el CSS compilado
  .header {
    background-color: #fff;
  }
  ```

**Comentarios de múltiples líneas**

- **Sintaxis**: Utilizan `/* ... */` y se comportan como los comentarios tradicionales en CSS.
- **Uso**: Estos comentarios sí se compilan en el archivo CSS final a menos que se use una opción específica en la configuración de compilación para excluirlos.
- **Ejemplo**:
  ```scss
  /* Este comentario sí aparecerá en el CSS compilado */
  .footer {
    background-color: #333;
  }
  ```

---


## Anidamiento en SASS

El anidamiento es una característica poderosa de SASS que permite agrupar selectores y propiedades dentro de otros selectores, facilitando la escritura y mantenimiento del código CSS al reflejar la estructura HTML de manera más directa.

**Formas de Anidamiento**

1. **Anidamiento de Propiedades CSS**

   En SASS, puedes anidar propiedades CSS dentro de otras, lo cual es útil cuando varias propiedades comparten un prefijo común.

   **Ejemplo:**
   ```scss
   .enlarge {
     font-size: 14px;
     transition: {
       property: font-size;
       duration: 4s;
       delay: 2s;
     }

     &:hover {
       font-size: 36px;
     }
   }
   ```
   Este código se compila a:
   ```css
   .enlarge {
     font-size: 14px;
     transition-property: font-size;
     transition-duration: 4s;
     transition-delay: 2s;
   }

   .enlarge:hover {
     font-size: 36px;
   }
   ```

2. **Anidamiento de Propiedades Abreviadas**

   Algunas propiedades CSS tienen versiones abreviadas que usan el mismo prefijo como nombre de propiedad. En SASS, puedes escribir tanto la versión abreviada como la explícita de manera anidada.

   **Ejemplo:**
   ```scss
   .info-page {
     margin: auto {
       bottom: 10px;
       top: 2px;
     }
   }
   ```
   Este código se compila a:
   ```css
   .info-page {
     margin-bottom: 10px;
     margin-top: 2px;
     margin-left: auto;
     margin-right: auto;
   }
   ```

**Buenas Prácticas en Anidamiento**

Para mantener el código CSS limpio y fácil de mantener, es importante seguir algunas buenas prácticas:

- **Evitar Anidamiento Profundo**: Limita el anidamiento a 3 niveles como máximo para mantener la claridad y evitar selectores demasiado específicos.

- **Utilizar Selectores Padres con Moderación**: El selector `&` se usa para referirse al selector padre. Úsalo con moderación para evitar complicaciones innecesarias.

  **Ejemplo:**
  ```scss
  .button {
    color: #fff;

    &.primary {
      background-color: #3498db;
    }

    &.secondary {
      background-color: #95a5a6;
    }
  }
  ```
  Mejor opción:
  ```scss
  .button {
    color: #fff;

    &.primary {
      background-color: #3498db;
    }
    &.secondary {
      background-color: #95a5a6;
    }
  }
  ```

- **Anidar Media Queries en Contexto**: Colocar las media queries dentro de los selectores relevantes mantiene los estilos relacionados juntos y facilita su mantenimiento.

  **Ejemplo:**
  ```scss
  .card {
    padding: 20px;

    @media (min-width: 768px) {
      padding: 40px;
    }
  }
  ```
  Esto mantiene los estilos organizados y facilita su mantenimiento a medida que se escala el proyecto.

El anidamiento en SASS es una técnica poderosa que, cuando se utiliza correctamente y siguiendo buenas prácticas, mejora la legibilidad, mantenibilidad y organización del código CSS en proyectos grandes y complejos.



**Uso de Sufijos en SASS y Metodologías como BEM**

En el desarrollo de estilos CSS con SASS, es común encontrarse con la necesidad de estructurar clases de manera organizada y semántica. Una técnica poderosa para lograr esto es el uso de sufijos, especialmente útil al aplicar metodologías como BEM (Block Element Modifier). Este enfoque permite mantener un código CSS más legible y mantenible, facilitando la estructuración de estilos en proyectos grandes y complejos.

**Añadir Sufijos con el Selector Padre**

Una de las características más útiles de SASS es la capacidad de usar el selector padre (`&`) para agregar sufijos adicionales al selector externo. Esto es especialmente beneficioso cuando se trabaja con nombres de clases estructurados, como los que propone BEM.

**Ejemplo:**

```scss
.accordion {
  max-width: 600px;
  margin: 4rem auto;
  width: 90%;
  font-family: "Raleway", sans-serif;
  background: #f4f4f4;

  &__copy {
    display: none;
    padding: 1rem 1.5rem 2rem 1.5rem;
    color: gray;
    line-height: 1.6;
    font-size: 14px;
    font-weight: 500;

    &--open {
      display: block;
    }
  }
}
```

En este ejemplo, `&__copy` y `&--open` utilizan el selector padre `&` para agregar sufijos a la clase `.accordion`. Esto se traduce a CSS como:

```css
.accordion {
  max-width: 600px;
  margin: 4rem auto;
  width: 90%;
  font-family: "Raleway", sans-serif;
  background: #f4f4f4;
}

.accordion__copy {
  display: none;
  padding: 1rem 1.5rem 2rem 1.5rem;
  color: gray;
  line-height: 1.6;
  font-size: 14px;
  font-weight: 500;
}

.accordion__copy--open {
  display: block;
}
```

**Beneficios de Utilizar Sufijos y Metodologías como BEM**

1. **Organización Estructurada**: Permite organizar las clases CSS de manera jerárquica y semántica, siguiendo principios como BEM para nombres de clases descriptivos y significativos.
   
2. **Legibilidad Mejorada**: Facilita la comprensión del código CSS al reflejar la estructura HTML directamente en el CSS, haciendo más fácil la navegación y el mantenimiento del código.

3. **Mantenimiento Simplificado**: Al separar claramente los estilos de los diferentes componentes y modificadores, se facilita la modificación y expansión del sistema de diseño sin afectar otros estilos.

---
## Variables

Las variables en SASS permiten almacenar valores que puedes reutilizar a lo largo de tu hoja de estilo. Esto facilita la gestión de estilos y hace que el código sea más mantenible y consistente.

**Declaración**

Las variables en SASS se declaran usando el signo `$` seguido del nombre de la variable. El valor se asigna usando `:`.

**Ejemplo:**
```scss
$primary-color: #3498db;
$font-stack: Helvetica, sans-serif;
```

**Uso**

Una vez declaradas, puedes usar las variables en cualquier parte de tu hoja de estilo.

**Ejemplo:**
```scss
body {
  font-family: $font-stack;
  color: $primary-color;
}
```
Este código se compila a:
```css
body {
  font-family: Helvetica, sans-serif;
  color: #3498db;
}
```

**Tipos de Datos en SASS**

SASS admite varios tipos de datos que puedes utilizar en las variables. Estos incluyen números, cadenas, colores, listas y mapas.

**1. Números**

Los números en SASS pueden incluir unidades como `px`, `em`, `%`, etc.

**Ejemplo:**
```scss
$base-font-size: 16px;
$line-height: 1.5;
$width: 50%;
```

Puedes usar operadores aritméticos con números en SASS.

**Ejemplo:**
```scss
$base-margin: 20px;
$double-margin: $base-margin * 2; // 40px
```

**2. Cadenas**

Las cadenas en SASS pueden ser con o sin comillas. Las cadenas sin comillas son útiles para nombres de fuentes y otras propiedades CSS.

**Ejemplo:**
```scss
$font-stack: "Helvetica, sans-serif";
$bg-image: url('background.jpg');
```

**3. Colores**

Los colores en SASS pueden ser definidos por nombres de colores, valores hexadecimales, valores RGB(a) o HSL(a).

**Ejemplo:**
```scss
$primary-color: #3498db;
$secondary-color: rgba(255, 99, 71, 0.5);
```

**4. Listas**

Las listas en SASS son colecciones de valores separados por comas o espacios.

**Ejemplo:**
```scss
$font-sizes: 12px, 14px, 16px, 18px;
$border-styles: solid dashed dotted;
```

Puedes acceder a los elementos de la lista usando la función `nth()`.

**Ejemplo:**
```scss
$first-size: nth($font-sizes, 1); // 12px
```

**5. Mapas**

Los mapas en SASS son colecciones de pares clave-valor, similares a los objetos en otros lenguajes de programación.

**Ejemplo:**
```scss
$theme-colors: (
  primary: #3498db,
  secondary: #2ecc71,
  danger: #e74c3c
);
```

Puedes acceder a los valores del mapa usando la función `map-get()`.

**Ejemplo:**
```scss
$primary-color: map-get($theme-colors, primary); // #3498db
```

**Ejemplos Prácticos**

A continuación, se muestran algunos ejemplos prácticos de cómo usar variables en SASS:

**Ejemplo 1: Configuración de Temas**
```scss
$primary-color: #3498db;
$secondary-color: #2ecc71;
$font-stack: 'Roboto', sans-serif;

body {
  font-family: $font-stack;
  color: $primary-color;
}

a {
  color: $secondary-color;
}
```

**Ejemplo 2: Gestión de Espaciado**
```scss
$base-spacing: 10px;

.header {
  padding: $base-spacing * 2; // 20px
}

.footer {
  margin-top: $base-spacing * 3; // 30px
}
```

---
## Mixins

Los mixins en SASS son una de las características más poderosas que permiten reutilizar bloques de estilos. Los mixins pueden aceptar parámetros y contenido, lo que los hace muy flexibles y útiles para evitar la repetición de código.

**Creación de Mixins**

Para definir un mixin en SASS, se utiliza la directiva `@mixin` seguida del nombre del mixin y el bloque de estilos que se desea reutilizar.

**Ejemplo:**
```scss
@mixin rounded-corners {
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
}
```

Para usar este mixin, se emplea la directiva `@include` seguida del nombre del mixin.

**Ejemplo:**
```scss
.button {
  @include rounded-corners;
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
}
```
Este código se compila a:
```css
.button {
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
}
```

**Parámetros en Mixins**

Los mixins pueden aceptar parámetros, lo que permite pasar valores personalizados al mixin.

**Ejemplo:**
```scss
@mixin box-shadow($x, $y, $blur, $color) {
  -webkit-box-shadow: $x $y $blur $color;
  -moz-box-shadow: $x $y $blur $color;
  box-shadow: $x $y $blur $color;
}

.card {
  @include box-shadow(0px, 4px, 10px, rgba(0, 0, 0, 0.25));
}
```
Este código se compila a:
```css
.card {
  -webkit-box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}
```

**Mixins Anidados**

Los mixins pueden ser anidados dentro de otros mixins, lo que permite crear estructuras más complejas y modulares.

**Ejemplo:**
```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin card($width, $height) {
  width: $width;
  height: $height;
  background-color: #fff;
  border: 1px solid #ccc;
  @include flex-center;
}

.profile-card {
  @include card(300px, 400px);
}
```
Este código se compila a:
```css
.profile-card {
  width: 300px;
  height: 400px;
  background-color: #fff;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

**Uso de `@content` en Mixins**

La directiva `@content` permite insertar bloques de contenido en el lugar donde se usa el mixin. Esto es útil para crear mixins que actúan como contenedores para otros estilos.

**Ejemplo:**
```scss
@mixin media($query) {
  @media #{$query} {
    @content;
  }
}

.container {
  @include media(min-width: 768px) {
    width: 80%;
  }
  @include media(min-width: 1024px) {
    width: 70%;
  }
}
```
Este código se compila a:
```css
@media (min-width: 768px) {
  .container {
    width: 80%;
  }
}

@media (min-width: 1024px) {
  .container {
    width: 70%;
  }
}
```

**Ejemplos Prácticos**

A continuación, se presentan algunos ejemplos prácticos de cómo usar mixins en SASS:

**Ejemplo 1: Botón Reutilizable**
```scss
@mixin button($bg-color, $text-color) {
  background-color: $bg-color;
  color: $text-color;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
}

.primary-button {
  @include button(#3498db, #fff);
}

.secondary-button {
  @include button(#2ecc71, #fff);
}
```
Este código se compila a:
```css
.primary-button {
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.primary-button:hover {
  opacity: 0.8;
}

.secondary-button {
  background-color: #2ecc71;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.secondary-button:hover {
  opacity: 0.8;
}
```

**Ejemplo 2: Contenedor Responsivo**
```scss
@mixin responsive($property, $small, $medium, $large) {
  #{$property}: $small;

  @include media(min-width: 768px) {
    #{$property}: $medium;
  }

  @include media(min-width: 1024px) {
    #{$property}: $large;
  }
}

.container {
  @include responsive(width, 100%, 80%, 60%);
}
```
Este código se compila a:
```css
.container {
  width: 100%;
}

@media (min-width: 768px) {
  .container {
    width: 80%;
  }
}

@media (min-width: 1024px) {
  .container {
    width: 60%;
  }
}
```

---

## Extends y Placeholders

En SASS, `@extend` y los placeholders (`%`) son herramientas que permiten reutilizar estilos y evitar la repetición de código. Aunque tienen funciones similares, se utilizan de manera diferente y cada uno tiene sus propias ventajas y desventajas.

**Diferencia entre @extend**

**`@extend`**

La directiva `@extend` permite compartir un conjunto de reglas CSS de un selector a otro. Cuando se usa `@extend`, el selector que extiende hereda todas las reglas del selector extendido. Esto puede ayudar a reducir la redundancia en tu CSS.

**Ejemplo:**
```scss
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: #2ecc71;
}

.error {
  @extend .message;
  border-color: #e74c3c;
}
```
Este código se compila a:
```css
.message, .success, .error {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: #2ecc71;
}

.error {
  border-color: #e74c3c;
}
```

**Ventajas y Desventajas de `@extend`**

**Ventajas:**
- Reduce la repetición de código.
- Genera CSS más compacto.

**Desventajas:**
- Puede generar selectores CSS muy complejos y difíciles de leer.
- Todos los selectores extendidos se combinan en una sola regla, lo que puede causar problemas si no se tiene cuidado con la especificidad.

**Uso de Placeholders (%)**

Los placeholders en SASS se declaran usando el signo `%` seguido del nombre del placeholder. Los placeholders no se compilan a CSS por sí solos; deben ser extendidos por otros selectores usando `@extend`.

**Ejemplo:**
```scss
%message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend %message;
  border-color: #2ecc71;
}

.error {
  @extend %message;
  border-color: #e74c3c;
}
```
Este código se compila a:
```css
.success, .error {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: #2ecc71;
}

.error {
  border-color: #e74c3c;
}
```

**Ventajas y Desventajas de Placeholders**

**Ventajas:**
- No generan CSS innecesario, ya que no se compilan por sí solos.
- Facilitan la creación de reglas CSS modulares y reutilizables.

**Desventajas:**
- No pueden ser usados directamente en HTML como selectores de clase o ID.

**Herencia de Estilos**

La herencia de estilos en SASS mediante `@extend` y placeholders permite compartir estilos comunes entre diferentes selectores sin duplicar código. Aquí hay algunos ejemplos prácticos para ilustrar la herencia de estilos:

**Ejemplo 1: Herencia Simple con `@extend`**

```scss
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.primary-button {
  @extend .button;
  background-color: #3498db;
  color: #fff;
}

.secondary-button {
  @extend .button;
  background-color: #2ecc71;
  color: #fff;
}
```
Este código se compila a:
```css
.button, .primary-button, .secondary-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.primary-button {
  background-color: #3498db;
  color: #fff;
}

.secondary-button {
  background-color: #2ecc71;
  color: #fff;
}
```

**Ejemplo 2: Herencia con Placeholders**

```scss
%button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.primary-button {
  @extend %button;
  background-color: #3498db;
  color: #fff;
}

.secondary-button {
  @extend %button;
  background-color: #2ecc71;
  color: #fff;
}
```
Este código se compila a:
```css
.primary-button, .secondary-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.primary-button {
  background-color: #3498db;
  color: #fff;
}

.secondary-button {
  background-color: #2ecc71;
  color: #fff;
}
```

---
## Importación de Archivos en SASS

La importación de archivos en SASS es fundamental para mantener el código organizado y modularizado. SASS ofrece varias directivas para la importación, como `@import`, `@use` y `@forward`, cada una con su propia funcionalidad y beneficios.

**Importación de Parciales**

Los parciales en SASS son archivos que contienen fragmentos de CSS que puedes incluir en otros archivos SASS. Los parciales se nombran con un guion bajo (`_`) al principio del nombre del archivo, lo que indica a SASS que no debe compilar estos archivos por sí solos, sino que deben ser importados en otros archivos SASS.

**Ejemplo:**
```scss
// _variables.scss
$primary-color: #3498db;
$secondary-color: #2ecc71;

// _mixins.scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// styles.scss
@import 'variables';
@import 'mixins';

body {
  color: $primary-color;
}

.container {
  @include flex-center;
}
```

**Uso de `@import`, `@use` y `@forward`**

**`@import`**

La directiva `@import` se usa para incluir archivos SASS en otros archivos. Sin embargo, es importante notar que `@import` está siendo reemplazada por `@use` y `@forward` en la especificación más reciente de SASS.

**Ejemplo:**
```scss
@import 'variables';
@import 'mixins';
```
Este método importa los archivos especificados y sus contenidos estarán disponibles en el archivo que realiza la importación.

**Desventajas de `@import`:**
- Puede causar problemas de rendimiento porque cada `@import` se traduce en una solicitud HTTP separada.
- Puede haber problemas de variables globales y mixins que no están claramente definidos.

**`@use`**

La directiva `@use` es la recomendada en la especificación más reciente de SASS. Importa un archivo y crea un espacio de nombres, lo que evita conflictos de nombres y hace que el código sea más modular y mantenible.

**Ejemplo:**
```scss
// _variables.scss
$primary-color: #3498db;
$secondary-color: #2ecc71;

// styles.scss
@use 'variables' as *;

body {
  color: $primary-color;
}
```
En este ejemplo, usamos el alias `as *` para importar todas las variables sin prefijo. Alternativamente, podemos usar un prefijo:

**Ejemplo:**
```scss
@use 'variables';

body {
  color: variables.$primary-color;
}
```

**Ventajas de `@use`:**
- Mejora la organización y evita conflictos de nombres.
- Facilita la reutilización de estilos en proyectos grandes.

**`@forward`**

La directiva `@forward` se utiliza para reenviar un módulo a otro archivo, lo que permite crear bibliotecas de estilos más estructuradas y organizadas.

**Ejemplo:**
```scss
// _colors.scss
$primary-color: #3498db;
$secondary-color: #2ecc71;
@forward 'colors';

// _mixins.scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
@forward 'mixins';

// styles.scss
@use 'colors';
@use 'mixins';

body {
  color: colors.$primary-color;
}

.container {
  @include mixins.flex-center;
}
```

**Ventajas de `@forward`:**
- Permite construir bibliotecas de estilos de manera más organizada.
- Facilita la gestión de dependencias y la reutilización de módulos.

**Modularización del Código CSS**

La modularización del código CSS implica dividir el código en partes más pequeñas y manejables. Esto se logra fácilmente con la ayuda de parciales y las directivas `@use` y `@forward`.

**Ejemplo de Estructura Modular**

**Estructura del proyecto:**
```
styles/
|-- _variables.scss
|-- _mixins.scss
|-- _reset.scss
|-- components/
|   |-- _buttons.scss
|   |-- _cards.scss
|-- layouts/
|   |-- _header.scss
|   |-- _footer.scss
main.scss
```

**Contenido de los archivos:**
```scss
// _variables.scss
$primary-color: #3498db;
$secondary-color: #2ecc71;
$font-stack: 'Helvetica, sans-serif';

// _mixins.scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// _reset.scss
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// _buttons.scss
@use '../variables' as v;
@use '../mixins';

.button {
  background-color: v.$primary-color;
  color: #fff;
  @include mixins.flex-center;
}

// _cards.scss
@use '../variables' as v;
@use '../mixins';

.card {
  border: 1px solid v.$primary-color;
  @include mixins.flex-center;
}

// _header.scss
@use '../variables' as v;
.header {
  background-color: v.$primary-color;
  color: #fff;
}

// _footer.scss
@use '../variables' as v;
.footer {
  background-color: v.$secondary-color;
  color: #fff;
}

// main.scss
@use 'variables';
@use 'mixins';
@use 'reset';
@use 'components/buttons';
@use 'components/cards';
@use 'layouts/header';
@use 'layouts/footer';

body {
  font-family: variables.$font-stack;
}
```

En este ejemplo, cada componente y layout tiene su propio archivo SASS, lo que facilita la gestión y el mantenimiento del código.

---
## Resumen