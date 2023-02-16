import './App.css';
import {Navbar} from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter} from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';

function App() {

  const nombre_usuario = "Maximiliano";
  const mensaje = "LAS MEJORES OFERTAS";

  return (
    <>
    <BrowserRouter>
      <Navbar name={nombre_usuario}/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={mensaje}/>}/> //HOME
        <Route path='/categorias/:nameCategory' element={<ItemListContainer greeting={mensaje}/>}/> //CATEGORIAS
        <Route path='/producto/:idProduct' element={<ItemDetailContainer/>}/> //CATEGORIAS
      </Routes>

      {/* <ItemListContainer greeting={mensaje}/> */}
      {/* <ItemDetailContainer/> */}
    </BrowserRouter>
    </>
  );
}

export default App;
