import './style.css';

function Navbar(){
    return(
    <div className="navbar">
        <img className="img-logo" src='../assets/images/logo.svg' alt=""></img> 
        {/* preciso de alguma biblioteca especial para importar o arquivo svg? */}
        <input placeholder= "Pesquise filmes..."></input>
        <div className="perfil">
            <span className="usuario">Bem vinda Rebeca</span>
            <img className="foto-perfil" src='../assets/images/ft_perfil.jpg' alt=""></img>
            {/* por que td imagem esta corrompida? */}
        </div>
        
    </div>
)};

export default Navbar;