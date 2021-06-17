import './style.css';
import goldenStar from '../../assets/images/golden-star.svg'

function Cardfilmes({ movie:{id, title, poster_path, vote_average, price}, handle }){
    return(
        <div className="card">

          <img src={poster_path} alt="capa filme" className="filme"></img>
          
          <div className="infos">
            <h2>{title.substr(0,12)}{title.length > 12 ? "..." : ''}</h2>

            <div className="nota">
              <img src={goldenStar} alt="" className="estrela"/>
              <p> {vote_average}</p>
            </div>
            
          </div>
          <button onClick={() => handle(id)}>
            Sacola <span className="preco"> R$ {price.toFixed(2)} </span>  
          </button>
          
        </div>
)};

export default Cardfilmes;