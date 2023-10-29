export const productos = [
{
    nombre: "Silla Blanca",
    precio: 150,
    categoria: 'muebleria',
    img : "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    stock: 5,
    descripcion: 'Buena silla para sentarse, de madera.'
},
{
    nombre: "Banco de Madera",
    precio: 200,
    categoria: 'muebleria',
    img : "https://images.unsplash.com/photo-1552324190-9e86fa095c4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    stock: 5,
    descripcion: 'Ideal para cocinas.'
},
{
    nombre: "Set de Cucharas",
    precio: 25,
    categoria: 'cocina',
    img : "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    stock: 5,
    descripcion: 'Ideal para cocinas.'
},

{
    nombre: "Estatuilla Caballito de Mar",
    precio: 75,
    categoria: 'deco',
    img : "https://images.unsplash.com/photo-1601681940017-77b68db5ba67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80",
    stock: 5,
    descripcion: 'Ideal para cocinas.'
},

{
    nombre: "Florero de Arcilla",
    precio: 55,
    categoria: 'deco',
    img : "https://images.unsplash.com/photo-1520320010102-6186e97bb42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    stock: 5,
    descripcion: 'Ideal para cocinas.'
},

{
    nombre: "Spray Dispensador",
    precio: 5,
    categoria: 'bano',
    img : "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    stock: 5,
    descripcion: 'Precio por cada uno.'
},

{
    nombre: "Escoba Natural",
    precio: 125,
    categoria: 'limpieza',
    img : "https://images.unsplash.com/photo-1638900999395-22595e1785f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    stock: 5,
    descripcion: 'Precio por cada uno.'
},

{
    nombre: "Tapiz Tradicional",
    precio: 1000,
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


