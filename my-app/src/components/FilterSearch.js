import TextField from '@mui/material/TextField';

const FilterSearch = ({ filterProducts, resetSearch, valueInput }) => {
    return (
        <div className="searchingBar">
            <TextField  value={valueInput || ''} 
                        id='outlined-basic' 
                        variant='outlined' 
                        label="Search" 
                        onChange={filterProducts}
            />
            <button className='resetBtn' onClick={resetSearch}>RESET</button>
        </div>
    )
}

export default FilterSearch; 