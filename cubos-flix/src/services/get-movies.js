async function getMovies(){
    const response = await fetch ('https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR');
    
    const data = await response.json();
    return data;
};

export default getMovies;