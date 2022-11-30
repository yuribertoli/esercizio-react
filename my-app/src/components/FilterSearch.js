import TextField from '@mui/material/TextField';
import { useSelector } from "react-redux"

const FilterSearch = ({ filterProducts, resetSearch }) => {
    
    const {valueInput} = useSelector(state => state.data)
    
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