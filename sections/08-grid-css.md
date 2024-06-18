Introducción a Grid

**¿Qué es Grid y ventajas de usar Grid?**

- los elementos pueden tener tamaños fijos y flexibles
- Usando cuadrículas en Grid
- `display: grid;`, cuadrículas en el navegador.

**Creando filas y columnas**

- La abreviatura de columnas y filas (``grid: ;``)

**Unidades de medida** 

- Las columnas y filas aceptan unidades de medida (``px, rem, auto``)
- Unidad de medida ``fr``
	- Como realizar las medidas de ``fr``, ``1fr 2fr 1fr ==> 100% / 4 = 1fr`` y ``1fr 2fr 100px ==> (100% - 100px) / 3 = 1fr``.

**Más sobre filas**

- filas y cuadrículas vacías.
- filas automáticas ``grid-auto-rows: ;``

**``repeat()``**

- uso del ``25 px repeat(3, 1fr) 20px`` y`` repeat(2, 25px 50px)``

**Grid ``gap``**

- ``column-gap:;``, ``row-gap:;`` y ``gap:;``
- uso del gap con fracciones y sin fracciones

**Grid ``grid-clumn-start/end``**

**``span``**

**Grid ``grid-row-start/end``**

- Abreviatura ``grid-row/end``

**``span row/column``**

**``autoflow``**

**Grid áreas**

- ``grid-template-areas:;`` y ``grid-area:;``
- uso del punto 
- Abreviatura de ``grid-template:;`` 

**Unidades de medidas de Grid**
- Alinear elementos de la cuadrícula
	- ``justify-items:;`` Alineación en línea (horizontalmente)
	- ``align-items:;`` Alineación en bloque (Verticalmente)
- Alinear toda la cuadrícula
	- ``justify-content:;`` Alinear en línea (Horizontalmente)
	- ``align-content:;`` Alinear en bloque (verticalmente)
	-`` place-content:;`` centrar los elementos tanto horizontalmente y verticalmente.
- ``justify-self:;`` Es para alinear un elemento en concreto

**Uso de ``minmax()``**

**``Autofill`` y ``autofit``**

- ¿Qué es ``autofill``?
- ``Autofill`` 
- ¿Qué es ``autofit``?
	- ``Autofit``
	- ``autofill`` y ``autofit`` con fracciones y otras medidas 
- Diferencias de ``autofill`` y ``autofit``