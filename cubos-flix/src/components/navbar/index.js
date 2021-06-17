import './style.css';
import logo from '../../assets/images/logo.svg';
import perfil from '../../assets/images/ft_perfil.jpg';
import lupa from '../../assets/images/search-icon.svg';

function Navbar({handle, setSearch}){
    return(
    <div className="navbar">
        
        <img className="img-logo" src={logo} alt=""></img> 

        <input type="text" placeholder= "Pesquise filmes..." onKeyDown={e => e.key ==='Enter' ? handle(e) : false} onChange={e => setSearch(e.target.value)}/>
        <button onClick={e => handle(e)}> <img src={lupa} alt="Lupa Pesquisa"/> </button>
        
        <div className="perfil">
            <span className="usuario">Bem vinda Rebeca</span>
            <img className="foto-perfil" src={perfil} alt=""></img>
        </div>
        
    </div>
)};

export default Navbar;