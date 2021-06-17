import './style.css';
import Cardfilmes from '../card-filmes';

function Filmes({movies, title, handleCard}){
    return(
    <div className="field-filmes">
      <h1>{title}</h1>

      <div className="card-filmes">
        {movies.map(x => <Cardfilmes movie = {x} handle = {handleCard} key = {x.id} />)}
      </div>

    </div>
)};

export default Filmes;