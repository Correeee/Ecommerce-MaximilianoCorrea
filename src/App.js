import './App.css';
import {Navbar} from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <main>
    <ItemListContainer/>
    </main>


    <Footer/>
    </>
  );
}

export default App;
