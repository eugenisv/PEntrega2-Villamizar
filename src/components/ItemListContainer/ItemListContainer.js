import { useState } from "react"
import { useEffect } from "react"
import productos from "./ListadoProductos"
import ItemList from "../ItemList/ItemList"
import {useParams} from 'react-router-dom'

const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}

const getProductsByCategory = (category) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.categoria === category))
        }, 500)
    })
}

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()

    useEffect( () => {
        // getProducts()
        const assyncFunc = categoryId ? getProductsByCategory : getProducts

        assyncFunc(categoryId)
        .then(response => {
            setProductos(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [categoryId])


    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList productos={productos}></ItemList>
        </div>
    )
}

export default ItemListContainer