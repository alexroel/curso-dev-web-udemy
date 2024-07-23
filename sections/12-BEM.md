# Fundamentos de BEM

1. [Introducción](#introducción)
2. [Introducción a BEM ](#introducción-a-bem)
3. [Nomenclatura BEM](#nomenclatura-bem)
4. [Conceptos de BEM](#conceptos-de-bem)
5. [Estructura de un Proyecto BEM](#estructura-de-un-proyecto-bem)
6. [Resumen](#resumen)


## Introducción

En esta sección de nuestro curso de desarrollo web, exploraremos la metodología BEM (Block, Element, Modifier), una convención de nomenclatura CSS que facilita la creación de código limpio y mantenible.

**Introducción a BEM**

BEM, desarrollado por Yandex, es una metodología que ayuda a estructurar y nombrar las clases CSS de manera lógica y predecible. Su objetivo es mejorar la mantenibilidad y escalabilidad de los proyectos web.

**Nomenclatura BEM**

La nomenclatura BEM sigue una estructura específica: Block (Bloque), Element (Elemento) y Modifier (Modificador). Esta convención facilita la identificación y la relación entre los elementos de la interfaz y sus estilos.

**Conceptos de BEM**

BEM se basa en la separación de responsabilidades y la creación de componentes reutilizables. Los bloques deben ser autosuficientes, los elementos vinculados a su bloque, y los modificadores permiten personalizaciones sin alterar la estructura básica.

**Estructura de un Proyecto BEM**

La estructura de un proyecto BEM organiza los archivos en directorios que reflejan bloques, elementos y modificadores, facilitando la gestión y el mantenimiento del código.

## Introducción a BEM 

**¿Qué es BEM?**

BEM, que significa **Block Element Modifier** (Bloque, Elemento, Modificador), es una metodología para nombrar clases CSS de manera que el código sea más comprensible y escalable. BEM divide la interfaz de usuario en componentes independientes y reutilizables, organizando el CSS de manera lógica y estructurada. La metodología BEM se enfoca en mejorar la modularidad y la reutilización de los estilos CSS mediante una convención de nombres clara y consistente.

**Principios Básicos de BEM**

1. **Block (Bloque)**: Un bloque es una entidad independiente que representa un componente autónomo de la interfaz. Puede ser un contenedor, un widget, un botón, etc.
   - Ejemplo: `.button`, `.menu`, `.header`

2. **Element (Elemento)**: Un elemento es una parte de un bloque que no tiene sentido fuera de él. Representa un componente hijo dentro de un bloque.
   - Ejemplo: `.button__icon`, `.menu__item`, `.header__title`

3. **Modifier (Modificador)**: Un modificador es una entidad que cambia la apariencia, el comportamiento o el estado de un bloque o elemento. Representa variaciones de un bloque o elemento.
   - Ejemplo: `.button--primary`, `.menu__item--active`, `.header--fixed`

**Historia y Origen de BEM**

La metodología BEM fue desarrollada por el equipo de Yandex, una empresa de tecnología rusa conocida principalmente por su motor de búsqueda. Yandex enfrentaba el desafío de mantener y escalar un código CSS en un entorno de desarrollo complejo con múltiples equipos y proyectos. Para resolver este problema, idearon BEM como una forma de estructurar y organizar el CSS de manera más eficiente.

BEM se introdujo por primera vez en 2005 y desde entonces ha ganado popularidad entre los desarrolladores web de todo el mundo. La metodología BEM ha sido adoptada por muchas empresas y proyectos debido a sus ventajas en la gestión de grandes bases de código CSS y la mejora de la mantenibilidad del código.

**Beneficios del Uso de BEM**

1. **Claridad y Consistencia**: BEM proporciona una convención de nomenclatura clara y consistente que facilita la comprensión del código CSS. Cada clase tiene un propósito definido, lo que reduce la ambigüedad y hace que el código sea más legible.

2. **Modularidad y Reutilización**: Al dividir la interfaz en bloques, elementos y modificadores, BEM promueve la creación de componentes modulares y reutilizables. Esto permite que los desarrolladores reutilicen estilos y componentes en diferentes partes del proyecto sin duplicar código.

3. **Mantenibilidad**: BEM facilita la gestión y el mantenimiento del código CSS a largo plazo. La estructura clara y organizada ayuda a los desarrolladores a realizar cambios y actualizaciones en el código sin afectar otros componentes.

4. **Escalabilidad**: BEM es ideal para proyectos grandes y complejos, donde múltiples desarrolladores trabajan en el mismo código base. La metodología asegura que el CSS permanezca organizado y manejable a medida que el proyecto crece.

5. **Independencia de Componentes**: Cada bloque en BEM es independiente y no depende de otros bloques. Esto significa que los desarrolladores pueden trabajar en componentes específicos sin preocuparse por los estilos de otros componentes.

6. **Facilidad para el Desarrollo Colaborativo**: BEM mejora la colaboración entre los desarrolladores al proporcionar una convención de nomenclatura estándar. Esto permite que los equipos trabajen juntos de manera más eficiente y reduzcan el riesgo de conflictos en el código.

**Ejemplo de BEM en Acción**

**HTML**

```html
<div class="menu">
  <ul class="menu__list">
    <li class="menu__item menu__item--active">Home</li>
    <li class="menu__item">About</li>
    <li class="menu__item">Services</li>
    <li class="menu__item">Contact</li>
  </ul>
</div>
```

**CSS**

```css
.menu {
  background-color: #fff;
  border: 1px solid #ccc;
}

.menu__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu__item {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.menu__item--active {
  font-weight: bold;
  background-color: #f0f0f0;
}
```

En este ejemplo, `menu` es un bloque, `menu__list` y `menu__item` son elementos, y `menu__item--active` es un modificador. La estructura clara y organizada del código facilita su comprensión y mantenimiento.

## Nomenclatura BEM

**Sintaxis de BEM: bloque__elemento--modificador**

La metodología BEM (Block, Element, Modifier) utiliza una convención de nomenclatura específica para nombrar las clases CSS, asegurando así un código más claro, modular y mantenible. La sintaxis de BEM se divide en tres partes:

1. **Bloque (Block)**: Una entidad autónoma e independiente que representa un componente significativo de la interfaz.
2. **Elemento (Element)**: Una parte de un bloque que no tiene sentido fuera de ese bloque.
3. **Modificador (Modifier)**: Una entidad que cambia la apariencia, el comportamiento o el estado de un bloque o elemento.

**Estructura de la Sintaxis**

- **Bloque**: `.bloque`
- **Elemento**: `.bloque__elemento`
- **Modificador**: `.bloque--modificador` o `.bloque__elemento--modificador`

**Ejemplos de Nombres BEM**

**Ejemplo 1: Botón**

```html
<button class="button button--primary">Primary Button</button>
<button class="button button--secondary">Secondary Button</button>
```

En este ejemplo:
- `button` es el bloque.
- `button--primary` y `button--secondary` son modificadores que cambian la apariencia del bloque `button`.

**Ejemplo 2: Tarjeta de Producto**

```html
<div class="product-card">
  <h2 class="product-card__title">Product Title</h2>
  <p class="product-card__description">This is a great product.</p>
  <button class="product-card__button product-card__button--buy">Buy Now</button>
  <button class="product-card__button product-card__button--wishlist">Add to Wishlist</button>
</div>
```

En este ejemplo:
- `product-card` es el bloque.
- `product-card__title`, `product-card__description`, y `product-card__button` son elementos del bloque `product-card`.
- `product-card__button--buy` y `product-card__button--wishlist` son modificadores del elemento `product-card__button`.


## Conceptos de BEM

**Bloques en BEM**

En la metodología BEM (Block, Element, Modifier), los bloques son componentes independientes y reutilizables que forman la estructura básica de una interfaz de usuario. Aquí exploraremos qué son los bloques, cómo se crean y utilizan, y proporcionaremos ejemplos prácticos para una comprensión completa.

**¿Qué es un Bloque?**

Un bloque en BEM es una entidad independiente y autónoma que realiza una función específica dentro de una interfaz de usuario. Puede ser cualquier elemento visual o funcional que se repita en diferentes partes del sitio web. Los bloques son fundamentales para la modularidad y la reutilización del código en el desarrollo front-end.

**Creación y Uso de Bloques**

Para crear un bloque en BEM, se sigue una convención de nomenclatura que lo identifica de manera única y lo relaciona con otros elementos de la interfaz. La sintaxis típica para un bloque en BEM es `block`, donde `block` representa el nombre del bloque.

**Ejemplo de creación de un bloque:**

Supongamos que queremos crear un bloque para un menú de navegación en un sitio web. El nombre del bloque podría ser `header` si el menú de navegación forma parte del encabezado del sitio.

```html
<header class="header">
  <nav class="header__nav">
    <!-- Contenido del menú -->
  </nav>
</header>
```

En este ejemplo:
- **`header`** es el nombre del bloque.
- **`header__nav`** es un elemento dentro del bloque `header`, siguiendo la convención de elementos en BEM.

**Ejemplos Prácticos de Bloques**

Los bloques en BEM pueden representar cualquier componente visual o funcional en una interfaz web. Aquí algunos ejemplos comunes de bloques y sus respectivas clases BEM:

1. **Botón:**

```html
<button class="button">
  <!-- Contenido del botón -->
</button>
```

2. **Tarjeta de Producto:**

```html
<article class="product-card">
  <!-- Contenido de la tarjeta de producto -->
</article>
```

3. **Barra Lateral:**

```html
<aside class="sidebar">
  <!-- Contenido de la barra lateral -->
</aside>
```

**Ventajas de Usar Bloques en BEM**

- **Modularidad**: Los bloques son unidades independientes que pueden ser reutilizadas en diferentes partes del sitio web sin afectar otros componentes.
- **Mantenibilidad**: Facilita la localización y modificación de estilos y funcionalidades específicas al encapsularlas en bloques.
- **Claridad Semántica**: Mejora la comprensión del código al seguir una convención de nomenclatura clara y consistente.
- **Consistencia**: Promueve un diseño coherente al aplicar estilos y funcionalidades de manera uniforme a través de bloques definidos.

**Elementos**

En la metodología BEM (Block, Element, Modifier), los elementos son partes individuales y específicas de un bloque que ayudan a estructurar y definir su funcionalidad. En este artículo, exploraremos qué son los elementos en BEM, cómo se crean y utilizan, y proporcionaremos ejemplos prácticos para una comprensión detallada.

**¿Qué es un Elemento?**

Un elemento en BEM es una parte secundaria y específica de un bloque que no tiene sentido por sí solo fuera del contexto del bloque al que pertenece. Los elementos están estrechamente relacionados con el bloque principal y ayudan a estructurar y definir su contenido y funcionalidad.

**Creación y Uso de Elementos**

Para crear un elemento en BEM, se utiliza la convención de nomenclatura `block__element`, donde `block` es el nombre del bloque principal y `element` es el nombre del elemento dentro de ese bloque.

**Ejemplo de creación de un elemento:**

Supongamos que tenemos un bloque `card` que representa una tarjeta de producto. Dentro de esta tarjeta, podemos tener elementos como `title` (título del producto) y `description` (descripción del producto).

```html
<div class="card">
  <h2 class="card__title">Producto A</h2>
  <p class="card__description">Descripción del producto A.</p>
</div>
```

En este ejemplo:
- **`card`** es el nombre del bloque principal.
- **`card__title`** y **`card__description`** son elementos dentro del bloque `card`, siguiendo la convención de nomenclatura en BEM.

**Ejemplos Prácticos de Elementos**

Los elementos en BEM son componentes más pequeños y específicos que ayudan a estructurar y organizar el contenido dentro de un bloque. A continuación, algunos ejemplos comunes de elementos y sus respectivas clases BEM:

1. **Botón dentro de un formulario:**

```html
<form class="form">
  <button class="form__button">Enviar</button>
</form>
```

2. **Ícono dentro de un encabezado:**

```html
<header class="header">
  <img class="header__icon" src="icon.png" alt="Ícono de la cabecera">
</header>
```

3. **Enlace dentro de una lista de navegación:**

```html
<nav class="nav">
  <ul class="nav__list">
    <li class="nav__item"><a href="#home">Inicio</a></li>
    <li class="nav__item"><a href="#about">Acerca de</a></li>
    <li class="nav__item"><a href="#contact">Contacto</a></li>
  </ul>
</nav>
```

**Ventajas de Usar Elementos en BEM**

- **Encapsulamiento**: Los elementos permiten definir partes específicas de un bloque sin afectar su estructura global ni otros elementos.
- **Reutilización**: Facilitan la reutilización de componentes dentro de un mismo bloque y en diferentes partes del sitio web.
- **Claridad y Mantenibilidad**: Mejoran la legibilidad del código al seguir una convención de nomenclatura clara y estructurar el diseño de manera organizada.
- **Flexibilidad**: Permite ajustar estilos y funcionalidades de manera específica para cada elemento dentro del contexto del bloque.

**Modificadores**

En la metodología BEM (Block, Element, Modifier), los modificadores son extensiones que permiten alterar la apariencia o el comportamiento de un bloque o elemento sin cambiar su estructura base. Este artículo explora qué son los modificadores en BEM, cómo se crean y utilizan, y proporciona ejemplos prácticos para una comprensión detallada.

**¿Qué es un Modificador?**

Un modificador en BEM es una entidad que altera las características predefinidas de un bloque o elemento. Los modificadores son útiles cuando necesitas cambiar el aspecto visual, el estado o el comportamiento de un componente sin tener que reescribir o duplicar código.

**Creación y Uso de Modificadores**

Para crear un modificador en BEM, se utiliza la convención de nomenclatura `block--modifier` o `block__element--modifier`. Esto permite una estructura clara y semántica para aplicar estilos específicos o comportamientos condicionales a los bloques y elementos.

**Ejemplo de creación de un modificador:**

Supongamos que tenemos un bloque `button` que puede tener modificadores como `primary` y `secondary` para estilos diferentes:

```html
<button class="button button--primary">Enviar</button>
<button class="button button--secondary">Cancelar</button>
```

En este ejemplo:
- **`button`** es el nombre del bloque principal.
- **`button--primary`** y **`button--secondary`** son modificadores que alteran el estilo del botón según su propósito específico.

**Ejemplos Prácticos de Modificadores**

Los modificadores en BEM son útiles para aplicar variaciones visuales o comportamentales dentro de un mismo bloque o elemento. A continuación, algunos ejemplos comunes de modificadores y sus respectivas clases BEM:

1. **Modificador de tamaño en un bloque de tarjeta:**

```html
<div class="card card--large">
  <h2 class="card__title">Producto A</h2>
  <p class="card__description">Descripción del producto A.</p>
</div>
```

2. **Modificador de estado activo en un elemento de menú:**

```html
<nav class="menu">
  <ul class="menu__list">
    <li class="menu__item menu__item--active"><a href="#home">Inicio</a></li>
    <li class="menu__item"><a href="#about">Acerca de</a></li>
    <li class="menu__item"><a href="#contact">Contacto</a></li>
  </ul>
</nav>
```

3. **Modificador de tema oscuro en un bloque de encabezado:**

```html
<header class="header header--dark">
  <div class="header__logo">
    <img src="logo-dark.png" alt="Logo en tema oscuro">
  </div>
</header>
```

**Ventajas de Usar Modificadores en BEM**

- **Flexibilidad**: Permite ajustar rápidamente estilos y comportamientos sin afectar otras partes del diseño.
- **Organización**: Facilita la separación de estilos condicionales y variaciones dentro de componentes individuales.
- **Reusabilidad**: Los modificadores pueden aplicarse en múltiples instancias del mismo bloque o elemento, promoviendo el uso eficiente del código.
- **Mantenibilidad**: Mejora la legibilidad y el mantenimiento del código al tener nombres semánticos que describen claramente la función o estado del componente.


**Convenciones y Reglas de Nombramiento**

1. **Nombres Descriptivos**: Los nombres de los bloques, elementos y modificadores deben ser lo suficientemente descriptivos como para que cualquier desarrollador pueda entender su propósito sin contexto adicional.
   
   ```html
   <!-- Incorrecto -->
   <div class="b">
     <h2 class="b__t">Title</h2>
     <p class="b__d">Description</p>
   </div>
   
   <!-- Correcto -->
   <div class="blog-post">
     <h2 class="blog-post__title">Title</h2>
     <p class="blog-post__description">Description</p>
   </div>
   ```

2. **Consistencia en la Nomenclatura**: Mantén una convención de nombres consistente a lo largo de todo el proyecto para evitar confusiones y errores.
   
   ```html
   <!-- Incorrecto -->
   <div class="blog-post">
     <h2 class="post-title">Title</h2>
     <p class="blog-description">Description</p>
   </div>
   
   <!-- Correcto -->
   <div class="blog-post">
     <h2 class="blog-post__title">Title</h2>
     <p class="blog-post__description">Description</p>
   </div>
   ```

3. **Evitar Abreviaturas**: Evita el uso de abreviaturas a menos que sean ampliamente reconocidas y entendidas por todos los miembros del equipo.

   ```html
   <!-- Incorrecto -->
   <div class="bp">
     <h2 class="bp__ttl">Title</h2>
     <p class="bp__desc">Description</p>
   </div>
   
   <!-- Correcto -->
   <div class="blog-post">
     <h2 class="blog-post__title">Title</h2>
     <p class="blog-post__description">Description</p>
   </div>
   ```

4. **Evitar Dependencias de Contexto**: Los nombres de las clases no deben depender del contexto donde se utilizan. Cada bloque, elemento o modificador debe ser autónomo y reutilizable en cualquier parte del proyecto.

   ```html
   <!-- Incorrecto -->
   <div class="header">
     <div class="title">Header Title</div>
   </div>
   
   <!-- Correcto -->
   <div class="header">
     <div class="header__title">Header Title</div>
   </div>
   ```

5. **Uso de Separadores**: Utiliza doble subrayado `__` para separar el nombre del bloque del nombre del elemento y doble guion `--` para separar el nombre del bloque o del elemento del nombre del modificador.

   ```html
   <!-- Incorrecto -->
   <div class="header">
     <div class="header-title">Header Title</div>
     <div class="header__title__main">Main Title</div>
   </div>
   
   <!-- Correcto -->
   <div class="header">
     <div class="header__title">Header Title</div>
     <div class="header__title--main">Main Title</div>
   </div>
   ```

6. **Agrupación Lógica**: Agrupa los nombres de las clases de manera lógica, asegurando que los elementos y modificadores están claramente relacionados con sus respectivos bloques.

   ```html
   <!-- Incorrecto -->
   <div class="header">
     <div class="header-title">Header Title</div>
   </div>
   <div class="footer">
     <div class="header-title">Footer Title</div>
   </div>
   
   <!-- Correcto -->
   <div class="header">
     <div class="header__title">Header Title</div>
   </div>
   <div class="footer">
     <div class="footer__title">Footer Title</div>
   </div>
   ```

**Beneficios de la Nomenclatura BEM**

- **Claridad**: La convención de nombres clara y descriptiva facilita la lectura y comprensión del código.
- **Reutilización**: Los bloques y elementos bien definidos pueden ser reutilizados en diferentes partes del proyecto, reduciendo la duplicación de código.
- **Mantenibilidad**: La estructura organizada de BEM facilita la actualización y el mantenimiento del código a medida que el proyecto crece.
- **Evitación de Conflictos**: La nomenclatura única de BEM ayuda a evitar colisiones de nombres en el CSS, especialmente en proyectos grandes con múltiples desarrolladores.

## Estructura de un Proyecto BEM

La metodología BEM (Block, Element, Modifier) es una práctica ampliamente adoptada en el desarrollo de interfaces de usuario debido a su capacidad para facilitar la creación de componentes reutilizables y mantener un código limpio y mantenible. En este artículo, exploraremos en detalle cómo estructurar un proyecto utilizando BEM, cómo organizar los archivos y carpetas, y cómo separar estilos CSS por bloques con ejemplos prácticos.

**Organización de Archivos y Carpetas**

Organizar los archivos y carpetas de manera estructurada es crucial para mantener la claridad y la escalabilidad de un proyecto. Aquí hay un ejemplo de cómo puedes organizar tu proyecto BEM:

```
project/
│
├── css/
│   ├── blocks/
│   │   ├── header.css
│   │   ├── footer.css
│   │   └── content.css
│   │
│   ├── elements/
│   │   ├── header__logo.css
│   │   ├── header__nav.css
│   │   └── content__title.css
│   │
│   ├── modifiers/
│   │   ├── header--main.css
│   │   ├── content--highlight.css
│   │   └── footer--dark.css
│   │
│   └── main.css
│
├── js/
│   ├── header.js
│   ├── footer.js
│   └── content.js
│
└── index.html
```

- **`blocks/`**: Contiene los estilos principales de cada bloque.
- **`elements/`**: Contiene los estilos para los elementos específicos dentro de los bloques.
- **`modifiers/`**: Contiene los estilos para las variantes de los bloques y elementos.
- **`main.css`**: Archivo principal que importa todos los estilos necesarios para el proyecto.

Esta estructura ayuda a mantener el proyecto organizado, facilita la colaboración en equipo y permite encontrar y modificar estilos rápidamente.

**Separación de Estilos CSS por Bloques**

La separación de estilos CSS en bloques ayuda a mantener un código modular y facilita la reutilización y el mantenimiento. A continuación, se muestra cómo estructurar y escribir los estilos CSS utilizando la metodología BEM.

##### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/main.css">
    <title>Proyecto BEM</title>
</head>
<body>
    <header class="header header--main">
        <div class="header__logo">Logo</div>
        <nav class="header__nav">
            <ul class="header__nav-list">
                <li class="header__nav-item header__nav-item--active"><a href="#">Home</a></li>
                <li class="header__nav-item"><a href="#">About</a></li>
                <li class="header__nav-item"><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main class="content content--highlight">
        <section class="content__section">
            <h1 class="content__title">Welcome</h1>
            <p class="content__text">Lorem ipsum dolor sit amet.</p>
        </section>
    </main>
    <footer class="footer footer--dark">
        <p class="footer__text">© 2024 Project BEM</p>
    </footer>
</body>
</html>
```

##### CSS

```css
/* main.css */
@import "blocks/header.css";
@import "blocks/content.css";
@import "blocks/footer.css";
@import "elements/header__logo.css";
@import "elements/header__nav.css";
@import "elements/content__title.css";
@import "modifiers/header--main.css";
@import "modifiers/content--highlight.css";
@import "modifiers/footer--dark.css";

/* blocks/header.css */
.header {
    background-color: #333;
    color: white;
    padding: 1rem;
}

/* blocks/content.css */
.content {
    padding: 2rem;
}

/* blocks/footer.css */
.footer {
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
}

/* elements/header__logo.css */
.header__logo {
    font-size: 1.5rem;
}

/* elements/header__nav.css */
.header__nav {
    margin-top: 0.5rem;
}

.header__nav-list {
    list-style: none;
    padding: 0;
    display: flex;
}

.header__nav-item {
    margin-right: 1rem;
}

/* elements/content__title.css */
.content__title {
    font-size: 2rem;
}

/* modifiers/header--main.css */
.header--main {
    background-color: #444;
}

/* modifiers/content--highlight.css */
.content--highlight {
    background-color: #f0f0f0;
}

/* modifiers/footer--dark.css */
.footer--dark {
    background-color: #111;
}
```

**Ejemplo de Estructura de Proyecto**

A continuación, te muestro un ejemplo completo de cómo estructurar un proyecto utilizando BEM.

**Proyecto Completo**

```
project/
│
├── css/
│   ├── blocks/
│   │   ├── header.css
│   │   ├── footer.css
│   │   └── content.css
│   │
│   ├── elements/
│   │   ├── header__logo.css
│   │   ├── header__nav.css
│   │   └── content__title.css
│   │
│   ├── modifiers/
│   │   ├── header--main.css
│   │   ├── content--highlight.css
│   │   └── footer--dark.css
│   │
│   └── main.css
│
├── js/
│   ├── header.js
│   ├── footer.js
│   └── content.js
│
└── index.html
```

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/main.css">
    <title>Proyecto BEM</title>
</head>
<body>
    <header class="header header--main">
        <div class="header__logo">Logo</div>
        <nav class="header__nav">
            <ul class="header__nav-list">
                <li class="header__nav-item header__nav-item--active"><a href="#">Home</a></li>
                <li class="header__nav-item"><a href="#">About</a></li>
                <li class="header__nav-item"><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main class="content content--highlight">
        <section class="content__section">
            <h1 class="content__title">Welcome</h1>
            <p class="content__text">Lorem ipsum dolor sit amet.</p>
        </section>
    </main>
    <footer class="footer footer--dark">
        <p class="footer__text">© 2024 Project BEM</p>
    </footer>
</body>
</html>
```

**main.css**

```css
@import "blocks/header.css";
@import "blocks/content.css";
@import "blocks/footer.css";
@import "elements/header__logo.css";
@import "elements/header__nav.css";
@import "elements/content__title.css";
@import "modifiers/header--main.css";
@import "modifiers/content--highlight.css";
@import "modifiers/footer--dark.css";
```

**header.css**

```css
.header {
    background-color: #333;
    color: white;
    padding: 1rem;
}
```

**content.css**

```css
.content {
    padding: 2rem;
}
```

**footer.css**

```css
.footer {
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
}
```

**header__logo.css**

```css
.header__logo {
    font-size: 1.5rem;
}
```

**header__nav.css**

```css
.header__nav {
    margin-top: 0.5rem;
}

.header__nav-list {
    list-style: none;
    padding: 0;
    display: flex;
}

.header__nav-item {
    margin-right: 1rem;
}
```

**content__title.css**

```css
.content__title {
    font-size: 2rem;
}
```

**header--main.css**

```css
.header--main {
    background-color: #444;
}
```

**content--highlight.css**

```css
.content--highlight {
    background-color: #f0f0f0;
}
```

**footer--dark.css**

```css
.footer--dark {
    background-color: #111;
}
```

## Resumen

En esta sección de nuestro curso de desarrollo web, hemos explorado el método BEM (Block, Element, Modifier) para la organización y estructura de CSS. A continuación, te presento un resumen de los conocimientos adquiridos y las aplicaciones prácticas que podrás realizar con lo aprendido:

**Introducción a BEM**

- **Conocimiento Adquirido:** Aprendiste que BEM es una metodología para nombrar y organizar CSS, que facilita la mantenibilidad y reutilización del código.
- **Aplicaciones Prácticas:** Puedes crear hojas de estilo más claras y estructuradas, lo que mejora la colaboración en equipo y la escalabilidad del proyecto.

**Nomenclatura BEM**

- **Conocimiento Adquirido:** Entendiste las reglas de nomenclatura de BEM: Block (Bloque), Element (Elemento), y Modifier (Modificador).
- **Aplicaciones Prácticas:** Puedes nombrar tus clases de CSS de una manera consistente y predecible, lo que facilita la comprensión y el mantenimiento del código.

**Conceptos de BEM**

- **Conocimiento Adquirido:** Aprendiste los conceptos clave de BEM: qué son los Bloques, Elementos y Modificadores, y cómo se relacionan entre sí.
- **Aplicaciones Prácticas:** Puedes descomponer tus componentes de UI en partes más manejables y coherentes, lo que te permite trabajar de manera más eficiente y organizada.

**Estructura de un Proyecto BEM**

- **Conocimiento Adquirido:** Descubriste cómo estructurar un proyecto utilizando BEM, incluyendo la organización de carpetas y archivos.
- **Aplicaciones Prácticas:** Puedes estructurar tus proyectos de manera que sea fácil de navegar y mantener, mejorando la productividad del equipo y la calidad del código.

**Recursos Externos para Continuar Aprendiendo**

1. [BEM Official Documentation](https://en.bem.info/methodology/)
2. [CSS Tricks - BEM 101](https://css-tricks.com/bem-101/)
3. [Smashing Magazine - MindBEMding](https://www.smashingmagazine.com/2012/04/a-new-front-end-methodology-bem/)
4. [FreeCodeCamp - Introduction to BEM](https://www.freecodecamp.org/news/introduction-to-bem-158e8c6f6c35/)

Con estos conocimientos y recursos adicionales, estás bien preparado para aplicar la metodología BEM en tus proyectos, lo que te permitirá crear un código CSS más limpio, modular y fácil de mantener. ¡Sigue explorando y mejorando tus habilidades en desarrollo web!