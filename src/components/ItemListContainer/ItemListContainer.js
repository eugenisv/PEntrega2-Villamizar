import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import {useParams} from 'react-router-dom'
import {getProducts, getProductsByCategory} from './ListadoProductos'


const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()

    useEffect( () => {
        const assyncFunc = categoryId ? getProductsByCategory : getProducts;

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