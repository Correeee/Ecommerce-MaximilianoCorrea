import './App.css';
import {Navbar} from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter} from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {

  const nombre_usuario = "Maximiliano";
  const mensaje = "LAS MEJORES OFERTAS";
  const carrito = [];

  return (
    <>
    <BrowserRouter>
      <Navbar name={nombre_usuario}/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={mensaje}/>}/> //HOME
        <Route path='/categorias/:nameCategory' element={<ItemListContainer greeting={mensaje}/>}/> //CATEGORIAS
        <Route path='/producto/:idProduct' element={<ItemDetailContainer cart={carrito}/>}/> //CATEGORIAS
      </Routes>

      {/* <ItemListContainer greeting={mensaje}/> */}
      {/* <ItemDetailContainer/> */}
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
