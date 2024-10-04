const API_KEY = 'f6ac10aa';

//function to fetch movie serach results

export const fetchMovies = async(searchTerm,type)=>{
    //construct the URL for the api request

    const url = `https://www.omdbapi.com/?s=${searchTerm}&type=${type}&apikey=${API_KEY}`;

    try{
        const response = await fetch(url);

        const data = await response.json();

        return data.Search || []

    }catch(error){
        console.error("error fetching",error);
        return[];
    }
}


//function to fetch the detailed information for the specific movie

export const fetchMovieDetail = async(id)=>{
    const url = `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`;

    
    try{
        const response = await fetch(url);

        const data = await response.json();

        return data;

    }catch(error){
        console.error("error fetching",error);
        return null
    }
}
    
//http://img.omdbapi.com/?apikey=[yourkey]&
//http://www.omdbapi.com/?apikey=[yourkey]&
