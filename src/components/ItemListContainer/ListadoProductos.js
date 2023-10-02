const productos = [{
    id : "1",
    nombre: "Silla",
    precio: 100,
    categoria: 'muebleria',
    img : "./assets/silla-azul.jpg",
    stock: 10,
    descripcion: 'Buena silla para sentarse.'
},
{
    id : "2",
    nombre: "Silla2",
    precio: 200,
    categoria: 'deco',
    img : "#",
    stock: 5,
    descripcion: 'Buena silla2 para sentarse.'
}]

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


