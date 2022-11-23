import '../style/App.css';
import React, { useEffect, useState } from 'react';
import CheckStock from './CheckStock';
import FilterSearch from './FilterSearch';
import ListItem from './ListItem';
import { UserContext } from '../App';

function Home() {

  const startingArray = React.useContext(UserContext);

  const [objData, setObjData] = useState([]);
  const [valueInput, setValueInput] = useState();
  const [toggleData, setToggleData] = useState(null);
  const [classToggleLeft, setClassToggleLeft] = useState('');
  const [classToggleRight, setClassToggleRight] = useState('');

  useEffect(() => {
      setObjData(startingArray)
    // eslint-disable-next-line
  }, []);

  const filterProducts = (event) => {
    setValueInput(event.target.value);
    setObjData(startingArray.filter(element => element.name.toLowerCase().includes(event.target.value.toLowerCase())));
  }

  const resetSearch = () => {
    setValueInput('');
    setObjData(startingArray);
  }

  const checkIfInStock = (value) => {
    if (toggleData === value) {

      setObjData(startingArray);
      setToggleData(null);
      setClassToggleLeft('');
      setClassToggleRight('');

    } else {

      if (value === 1) {
        setObjData(startingArray.filter(element => element.availability.stock > 0));
        setToggleData(1);
        setClassToggleLeft('toggleLabel')
        setClassToggleRight('')
        
      } else if (value === 0) {
        setObjData(startingArray.filter(element => element.availability.stock === 0));
        setToggleData(0);
        setClassToggleRight('toggleLabel')
        setClassToggleLeft('')
      }
    }
  }

  return (
    <div>

      <header>

        <div id='logo'>150x80</div>

        <CheckStock checkIfInStock={checkIfInStock} classToggleLeft={classToggleLeft} classToggleRight={classToggleRight} />

        <FilterSearch filterProducts={filterProducts} resetSearch={resetSearch} valueInput={valueInput} />

      </header>

      <main>
        {objData.length === 0 ? <h1>No products found</h1> :
          <ul>
            {objData.map((element) => {
              return <ListItem key={element.UPC} element={element} />
            })}
          </ul>
        }
      </main>

    </div>
  )
}

export default Home;
