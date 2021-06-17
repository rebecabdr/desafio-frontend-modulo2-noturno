import './App.css';
import {useState, useEffect} from 'react';
import getMovies from './services/get-movies';
import Navbar from './components/navbar';
import Filmes from './components/field-filmes';
import Sacola from './components/bag';

function App() {

  const [movies, setMovies] = useState([]);
  const [filterMovies, setfilterMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [bag, setBag] = useState([]);
  const [prices, setPrices] = useState([]);

  useEffect( async () => {
 
    const  {results}   = await getMovies()
    const allMovies =  results.map(x => {return {...x, amount:0} })

    setMovies(allMovies);
    setfilterMovies(allMovies);

  }, [])
  
  async function movieSearch (){

    let moviesCopy = [...movies]
    moviesCopy = moviesCopy.filter(x => x.title.includes(search));
    
    setfilterMovies(moviesCopy);
  }

  
function addHandler(id){

  const moviesCopy = [...movies];
  const bagCopy = [...bag];
  const pricesCopy = [...prices];

  const movie = moviesCopy.find(x => x.id === id);
  movie.amount += 1;

  if(bagCopy.includes(movie)){
    const itemTotalPrice = pricesCopy.find(x => x.id ===id);
    itemTotalPrice.price = movie.price * movie.amount;

    setPrices(pricesCopy);
    setBag(bagCopy);
    return;
  }

  const price = movie.price * movie.amount;

  pricesCopy.push({price: price, id: movie.id});
  bagCopy.push(movie);

  setPrices(pricesCopy);
  setBag(bagCopy);

}


function removeHandler(id){

  const moviesCopy = [...movies];
  const bagCopy = [...bag];
  const pricesCopy = [...prices];

  const movie = moviesCopy.find(x => x.id === id);
  movie.amount -= 1;

  const price = movie.price * movie.amount;
  const updatedPrice = pricesCopy.find(x => x.id === id);
  updatedPrice.price = price;

  if(movie.amount === 0){
    const movieIndex = bagCopy.indexOf(movie);
    const priceIndex = pricesCopy.indexOf(updatedPrice);

    bagCopy.splice(movieIndex, 1);
    pricesCopy.splice(priceIndex, 1);
  }

  setPrices(pricesCopy);
  setBag(bagCopy);

}

  return (
    <div className="app">
      <Navbar
      handle = {movieSearch}
      setSearch = {setSearch}
      />

      <div className="painel">
        <div className="painel-filmes">
          <Filmes
            movies = {movies.filter((movie, index) => index < 5)}
            title = "Top Filmes"
            handleCard = {addHandler}
          />


          <Filmes
            movies = {filterMovies}
            title = "Filmes"
            handleCard = {addHandler}
          />
        </div>

        <div className="bag">
          <Sacola
          bagMovies = {bag}
          handleAdd = {addHandler}
          handleRemove = {removeHandler}
          prices = {prices}
          />
        </div>
      </div>

      
    </div>
  );
}

export default App;
