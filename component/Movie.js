import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import '../style.css';


function Movie({id, coverImg, title, summary, genres}){
  return(
    <div id="box">
      <div className="left">
      <img src={coverImg} alt={title}></img>
      </div>
      <div className="right">
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <span>{summary.length > 150 ? `${summary.slice(0.150)}...` : summary}</span>
        <ul>
          {genres.map((g) => (<li key={g}>- {g}</li>))}
        </ul>
      </div>
    </div>
  )
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres:PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;