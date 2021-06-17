import './style.css';
import imgBag from '../../assets/images/bag-icon.svg';
import imgPerson from '../../assets/images/person-illustration.svg';
import imgPlus from '../../assets/images/plus-icon.svg';
import imgMinus from '../../assets/images/minus-icon.svg';
import imgTrash from '../../assets/images/trash-icon.svg';


function Sacola({bagMovies, handleAdd, handleRemove, prices}){
  const total = prices.map(x => x.price);
  
  return(
    <div className="bag">

      <div className="header-bag">
         <img src={imgBag} alt=""/>
        <h1>Sacola</h1>
      </div>
       
      <div className="content-bag">
        <h2 className={bagMovies.lenght > 0 ? "populated" : ""}>
          Sua sacola está vazia!
        </h2>

        <p className={bagMovies.lenght > 0 ? "populated" : ""}>
          Adicione filmes agora.
        </p>

        <img src={imgPerson} alt="Pessoa e celular" className={bagMovies.lenght > 0 ? "populated" : ""}/>
      
        <div className="items-bag">
          {bagMovies.map(item => (
            <div className="item-bag" key={item.id}>
              <img src={item.poster_path} alt="Cartaz Filme"/>

              <div className="item-info">
                <h3>{item.title}</h3>
                <h3>R$ {item.price.toFixed(2)}</h3>
              </div>

              <div className="item-qty">
                <img src={imgPlus} alt="ADD item" onClick={() => handleAdd(item.id)}/>
                <p>{item.amount}</p>
                <img src={item.amount > 1 ? imgMinus : imgTrash} alt="Remover item" onClick={() => handleRemove(item.id)}/>
              </div>

            </div>
          ))}
        </div>
      
        {bagMovies.lenght > 0 ? (
          <button>
            Confirme seus dados
            <span>R$ {total.reduce((x,y) => x + y)}</span>
          </button>

        ) : ''}
        
      </div>
    </div>
    
)};

export default Sacola;