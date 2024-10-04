import { useState } from "react"


const SearchBar = ({onSearch, onTypeChange}) => {

    const [searchTerm,setSearchTerm] = useState('');

    const[type,setType] = useState('movie');

    const handleSearch=(e)=>{
        e.preventDefault();
        onSearch(searchTerm,type)
    };

    return(
        <form onSubmit={handleSearch} className="flex gap-3">
        <input className=" px-6 rounded-lg text-center" type="text"
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        placeholder="search the movie"/>

        <select className="border-2 rounded-lg hover:bg-black hover:text-white" value={type} onChange={(e)=>setType(e.target.value)}>
            <option value="movies">Movies</option>
            <option value="Series">Series</option>
            <option value="Episodes">Episodes</option>
        </select>

        <button className="bg-slate-100 border-2 rounded-lg px-2 hover:translate-y-1 hover:scale-110 hover:bg-black hover:text-white" type="submit">Search</button>
    </form>

    )

}
export default SearchBar