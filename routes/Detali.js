import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../style.css';

function Detail(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const { id } = useParams();
  const getMovie = async () =>{
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    console.log(json);
    setMovies(json.data.movie);
    setLoading(false);
  }
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
    {loading ? (<h1 id="loading">Loading...</h1>) : (
      <div id="box">
        <div className="left">
        <img src={movies.medium_cover_image}></img>
        </div>
        <div className="right">
          <h2>{movies.title}</h2>
          <span>{movies.year} · {movies.genres}</span>
          <span>{movies.description_intro}</span>
        </div>
      </div>
    )}
    </div>
  )
}

export default Detail;