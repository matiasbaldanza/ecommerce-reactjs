# Pre-entrega 2 curso de ReacjJS #39655 (2023)

- Curso: ReactJS (2023)
- Comisión: 39655
- Profesor: Francisco Pugh
- Alumno: Matias Baldanza
- Fecha: 2023-04-22

## Notas

- Librería de componentes: DaisyUI (TailwindCSS 3.3)
- Build tool: Vite
- Linter: StandardJS (ESLint)

## Demo

![Gif mostrando la navegación](README/matiasbaldanza-reactjs-39655-pre-entrega-2-720p-24fps.gif)

[Deploy en Vercel](https://coderhouse-reactjs-39655-matiasbaldanza-pre-entrega-2.vercel.app/)

<hr />

## Rutas implementadas con react-router-dom

- /
- /category/:categoryId
- /:productId <br />

> _Nota: para los productos, no usé id numérico sino un 'slug' basado en el título de la publicación. Asumo que sería mejor usar un productId y reescribir la ruta con el slug, pero por ahora lo voy a dejar así_

Los cards de producto (Componente `<Item>`) tienen un estado de hover que muestra la segunda imagen disponible.

<hr />

## Páginas de producto (rutas /:productId)

Separado en Componentes:

- `<ProductImage />` para preview de producto

  _(muestra una imagen de varias. TODO: carrusel)_

- `<ProductInfo />` muestra la información de producto, tags,
- `<ProductImage />` muestra la imagen de producto \_(TODO: carrusel)

Los siguientes componentes tienen render condicional, dependiendo de si hay datos disponibles:

- `<ProductPreview />` muestra un banner de producto
- `<ProductDescription />` muestra un párrafo de descripción
- `<ProductSpecs />` muestra las especificaciones de producto
