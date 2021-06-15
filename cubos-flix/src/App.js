import './App.css';
import Filmes from './components/filmes';
import Navbar from './components/navbar';
import Topfilmes from './components/top-filmes';
import Sacola from './components/bag';

function App() {
  return (
    <>
    <Navbar/>
    <div className="app">
      <div className="painel">
        <Topfilmes/>
        <Filmes/>
      </div>
      <div className="bag">
        <Sacola/>
      </div>
    </div>
    </>
    
  );
}

export default App;
