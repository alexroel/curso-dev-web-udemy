# Introducción a Bootstrap 5


---
## Introducción

---
## ¿Qué es Bootstrap?

- ¿qué es Framework?
- ¿Qué es Framewor de CSS?
- ¿Qué es Bootstrap?

---
## Comience a usar Bootstrap

- Crea proyecto y agregar contenido
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo de Bootstrap</title>

</head>
<body>

    <h1>Hola Mundo</h1>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolores hic incidunt quos vel, laudantium cupiditate unde alias! Quia asperiores impedit et delectus consectetur autem ex! Numquam iure quis voluptatibus.
    </p>
    <button class="btn btn-primary">Empieza Ahora</button>

</body>
</html>
```
- Agregar cdn de Bootstrap 

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

- Descargar y agregar al proyecto

---
## Utilidades de Bootstrap

´´´html
<style>
    html{
        font-size: 62.5%;
    }

    body{
        font-size: 1.6rem;
    }

</style>

<section class="m-3 p-5 bg-body-secondary rounded-3">
    <h1 class="display-1 fw-bold">Hola Mundo</h1>
    <p class="my-5 fs-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolores hic incidunt quos vel,
        laudantium cupiditate unde alias!
    </p>
    <button class="btn btn-primary btn-lg">Empieza Ahora</button>
</section>
´´´

---
## Contenedores de Bootstrap 

```html
<section class="container mt-4 p-5 bg-body-secondary rounded-3">
    <h1 class="display-1 fw-bold">Hola Mundo</h1>
    <p class="my-5 fs-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolores hic incidunt quos vel,
        laudantium cupiditate unde alias!
    </p>
    <button class="btn btn-primary btn-lg">Empieza Ahora</button>
</section>

```
---
## Grid de Bootstrap

```html
    <section class="container p-4 text-center bg-body-secondary rounded-3">
        <div class="row gap-3 mb-3">
            <div class="col bg-white rounded-3 p-2">1- Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
            <div class="col bg-white rounded-3">2- Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div class="col bg-white rounded-3">3- Lorem ipsum dolor sit amet consectetur, adipisicing elit. </div>
        </div>
        <div class="row gap-3">
            <div class="col bg-white rounded-3">5- Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
            <div class="col bg-white rounded-3">6- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima vitae accusantium error.</div>
        </div>
    </section>
```


---
## Alineación de cuadriculas

```html
    <section class="container p-4 text-center bg-body-secondary rounded-3 ">
        <div class="row gap-3 mb-3 align-items-start">
            <div class="col bg-white rounded-3 p-2">1- Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
            <div class="col bg-white rounded-3 align-self-center">2- Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div class="col bg-white rounded-3 align-self-end">3- Lorem ipsum dolor sit amet consectetur, adipisicing elit. </div>
        </div>
        <div class="row gap-3 justify-content-between">
            <div class="col-3 bg-white rounded-3">5- Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
            <div class="col-3 bg-white rounded-3">6- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima vitae accusantium error.</div>
        </div>
    </section>
```

---
## Flexbox de Bootstrap

```html
    <header class="container bg-body-secondary rounded-3 p-4 mt-3">
        <nav class="d-flex justify-content-between align-items-center">
            <a href="" class="text-decoration-none text-dark">
                <h2>Bootstrap</h2>
            </a>

            <div class="menu">
                <a href="" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Inicio</a>
                <a href="" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Acerca de</a>
                <a href="" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Contato</a>
            </div>
        </nav>
    </header>
```

---
## Componentes de Bootstrap
