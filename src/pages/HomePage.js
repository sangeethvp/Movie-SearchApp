import {useState} from 'react';

import SearchBar from '../components/SearchBar';

import MovieList from '../components/MovieList';

import FilterDropdown from '../components/FilterDropdown';

import { fetchMovies } from '../api/api';


const HomePage =() => {

    const [movie,setMovies]=useState([]);
    const [filterType,setFilterType] = useState([]);


    //handlesearch

    const handleSearch = async(searchTerm, type)=>{
        const result = await fetchMovies(searchTerm,type);
        setMovies(result)
    };


    //handle filter
    const handleFilterChange = (type) =>{
        setFilterType(type)
    };


    return(
        <div className='bg-violet-200 flex flex-col items-center gap-4'>
            <h1 className='font-bold text-4xl italic'>Find the Movie You are loooking for</h1>

            <SearchBar onSearch={handleSearch} onTypeChange= {handleFilterChange}/>
            <FilterDropdown onFilterChange={handleFilterChange}/>
            <MovieList movies={movie}/>

        </div>
    )

}
export default HomePage