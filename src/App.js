import './App.css';
import {Navbar} from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter} from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';


function App() {

  const nombre_usuario = "Maximiliano";
  const mensaje = "LAS MEJORES OFERTAS";

  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <Navbar name={nombre_usuario}/>    
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={mensaje}/>}/> //HOME
          <Route path='/categorias/:nameCategory' element={<ItemListContainer greeting={mensaje}/>}/> //CATEGORIAS
          <Route path='/producto/:idProduct' element={<ItemDetailContainer/>}/> //CATEGORIAS
          <Route path='/cart' element={<Cart/>}/> //CARRITO
        </Routes>
      </CartProvider>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
