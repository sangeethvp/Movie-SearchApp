import MovieCard from "./MovieCard"

const MovieList = ({movies}) => {
    return(
        <div className="flex justify-center items-center flex-wrap gap-10 p-10 bg-violet-200">
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie ={movie}/>
            ))}
        </div>
    )

}
export default MovieList