import './style.css';
import Movies from '../../data';

function Topfilmes(){
    return(
    <>
      <h1>Top Filmes</h1>  
      <div className="topfilmes">
        <div className="card">
          <img src={Movies[0].poster_path} alt="" className="filme"></img>
          <div className="nome-nota">
            <h2>{Movies[0].title}</h2>
              <p>{Movies[0].vote_average}</p>
          </div>
          <button>
            Sacola <span className="preco"> R$ {Movies[0].price} </span>  
          </button>
          
        </div>
      </div>
    </>
   
)};

export default Topfilmes;