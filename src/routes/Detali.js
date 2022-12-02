import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    {loading ? (<h1>Loading...</h1>) : (
      <div>
        {movies.map((movie) => (
          <div>
            <img scr={movie.medium_cover_image} alt={movie.id}></img>
            <h2>{movie.title}</h2>
            <span>{movie.year}</span>
            <span>{movie.description_intro}</span>
          </div>
        ))}
      </div>
    )}
    </div>
  )
}

export default Detail;