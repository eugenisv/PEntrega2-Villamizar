import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import {useParams} from 'react-router-dom'
// import {getProducts, getProductsByCategory} from './ListadoProductos'
import { collection, getDocs, query, where} from "firebase/firestore"
import { db } from "../../services/firebase"


const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()

    // useEffect( () => {
    //     const assyncFunc = categoryId ? getProductsByCategory : getProducts;

    //     assyncFunc(categoryId)
    //     .then(response => {
    //         setProductos(response)
    //     })
    //     .catch(error => {
    //         console.error(error)
    //     })
    // }, [categoryId])

    useEffect(() => {
        const coleccionProductos = categoryId ? query(collection(db, "productos"), where("categoria", "==",categoryId )):collection(db, "productos")
        getDocs(coleccionProductos)
        .then((res)=> {
            const list = res.docs.map((producto)=> {
                return{
                    id:producto.id,
                    ...producto.data()
                }
            })
            setProductos(list)
        }
       )
        .catch((error)=>console.log(error))
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList productos={productos}></ItemList>
        </div>
    )
}

export default ItemListContainer