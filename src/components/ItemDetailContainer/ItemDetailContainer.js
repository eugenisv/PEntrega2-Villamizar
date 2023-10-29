import { useState, useEffect } from "react";
// import { getProductById } from "../ItemListContainer/ListadoProductos";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from 'react-router-dom'
import './ItemDetailContainer.css'
import { collection, doc, getDoc } from "firebase/firestore";
import { db} from "../../services/firebase";



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const {itemId} = useParams()

    // useEffect(() => {
    //     getProductById(itemId)
    //     .then(response => {
    //         setProducto(response)
    //     })
    //     .catch(error => {
    //         console.error(error)
    //     })

    // }, [itemId])

    useEffect(()=> {
        const collectionProd = collection(db, 'productos')
        const referenciaAlDoc = doc(collectionProd, itemId)
        getDoc(referenciaAlDoc)
        .then((res)=> setProducto({id:res.id, ...res.data()}))
        .catch((error)=> console.log(error))
    })
    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer