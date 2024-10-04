import { useParams } from "react-router-dom"
import MovieDetail from "../components/MovieDetail";




const MoviePage =()=>{
    const {id} = useParams();
    return(
        <div className="bg-violet-200">
            <MovieDetail id = {id}/>
        </div>
    )

}

export default MoviePage