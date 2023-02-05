import './App.css';
import {Navbar} from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

function App() {

  const nombre_usuario = "Maximiliano";
  const mensaje = "LAS MEJORES OFERTAS";

  return (
    <>
    <Navbar name={nombre_usuario}/>
    <main>
    <ItemListContainer greeting={mensaje}/>
    </main>

    </>
  );
}

export default App;
