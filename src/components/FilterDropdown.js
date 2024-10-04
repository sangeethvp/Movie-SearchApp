const FilterDropdown = ({onFilterChange}) => {
    return(
        <select onChange={(e)=>onFilterChange(e.target.value)} className=" hover:bg-black hover:text-white bg-gray-100 border-2 border-transperent rounded-lg font-semibold">
            <option value="">All Types</option>
            <option value="movies">movies</option>
            <option value="Series">Series</option>
            <option value="Episodes">Episodes</option>
        </select>
    )

}

export default FilterDropdown