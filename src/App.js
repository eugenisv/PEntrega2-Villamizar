import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CartProvider} from './context/CartContext';
import Cart from './components/Cart/Cart';
// import React, { useEffect } from 'react';
// import { db } from './services/firebase';
// import {productos} from './components/ItemListContainer/ListadoProductos'
// import { addDoc, collection } from 'firebase/firestore';



function App() {
  //Para cargar productos al firebase
  // useEffect(()=> {
  //   const coleccionProductos = collection(db, 'productos')
  //   productos.map((item) => addDoc(coleccionProductos, item))
  
  // }, [])
  return (
    <div className="App">

      <BrowserRouter>
      <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>} />
            {/* <Route path='/checkout' element={<Checkout/>}/> */}
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
          </CartProvider>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
