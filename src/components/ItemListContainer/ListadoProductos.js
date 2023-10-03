const productos = [{
    id : "1",
    nombre: "Silla Azul",
    precio: 100,
    categoria: 'muebleria',
    img : "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    stock: 10,
    descripcion: 'Buena silla para sentarse.'
},
{
    id : "2",
    nombre: "Silla Blanca",
    precio: 200,
    categoria: 'muebleria',
    img : "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    stock: 5,
    descripcion: 'Buena silla para sentarse, de madera.'
},
{
    id : "3",
    nombre: "Banco de Madera",
    precio: 200,
    categoria: 'muebleria',
    img : "https://images.unsplash.com/photo-1552324190-9e86fa095c4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    stock: 5,
    descripcion: 'Ideal para cocinas.'
},
{
    id : "4",
    nombre: "Set de Cucharas",
    precio: 200,
    categoria: 'cocina',
    img : "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    stock: 5,
    descripcion: 'Ideal para cocinas.'
},

{
    id : "5",
    nombre: "Estatuilla Caballito de Mar",
    precio: 200,
    categoria: 'deco',
    img : "https://images.unsplash.com/photo-1601681940017-77b68db5ba67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80",
    stock: 5,
    descripcion: 'Ideal para cocinas.'
},

{
    id : "6",
    nombre: "Florero de Arcilla",
    precio: 200,
    categoria: 'deco',
    img : "https://images.unsplash.com/photo-1520320010102-6186e97bb42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    stock: 5,
    descripcion: 'Ideal para cocinas.'
},

{
    id : "7",
    nombre: "Spray Dispensador",
    precio: 200,
    categoria: 'bano',
    img : "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    stock: 5,
    descripcion: 'Precio por cada uno.'
},

{
    id : "8",
    nombre: "Escoba Natural",
    precio: 200,
    categoria: 'limpieza',
    img : "https://images.unsplash.com/photo-1638900999395-22595e1785f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    stock: 5,
    descripcion: 'Precio por cada uno.'
},

{
    id : "9",
    nombre: "Tapiz Tradicional",
    precio: 200,
    categoria: 'textiles',
    img : "https://images.unsplash.com/photo-1671063185805-b430c400be27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    stock: 5,
    descripcion: 'Precio por cada uno.'
}
]

export default productos

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}


export const getProductsByCategory = (category) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === category))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 500)
    })
}


