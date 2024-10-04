import { Link } from "react-router-dom"

const MovieCard = ({movie}) => {

    return(
        <div className="hover:translate-y-1 hover:scale-110 hover:bg-slate-200 rounded-lg">
             <Link to={`/movies/${movie.imdbID}`}>
             <img src={movie.Poster} alt={movie.Title}/>
             <div className="flex flex-col justify-center items-center gap-3 bg-red-300 rounded-lg">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
             </div>
             </Link>
        </div>
    )

}

export default MovieCard