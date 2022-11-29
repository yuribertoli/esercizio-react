import '../style/App.css';
import React, { useEffect } from 'react';
import CheckStock from './CheckStock';
import FilterSearch from './FilterSearch';
import ListItem from './ListItem';
import { useSelector, useDispatch } from "react-redux";
import { setData, setValueInput, setToggleData, setClassToggleLeft, setClassToggleRight } from '../redux/createSlice';

function Home() {

  const dispatch = useDispatch();

  const {startingData} = useSelector(state => state.data);
  const {loadData} = useSelector(state => state.data);
  const {valueInput} = useSelector(state => state.data);
  const {toggleData} = useSelector(state => state.data);
  const {classToggleLeft} = useSelector(state => state.data);
  const {classToggleRight} = useSelector(state => state.data);

  useEffect(()=>{
    dispatch(setData(startingData))
    // eslint-disable-next-line
  }, [])

  // Funzione per filtrare i prodotti da mostrare in base all'input dell'utente
  const filterProducts = (event) => {

    dispatch(setValueInput(event.target.value)); 

    switch (toggleData) { 
      case 0: 
        dispatch(setData(startingData.filter(element => element.availability.stock === 0 && element.name.toLowerCase().includes(event.target.value.toLowerCase()))))
        break;
      case 1: 
        dispatch(setData(startingData.filter(element => element.availability.stock > 0 && element.name.toLowerCase().includes(event.target.value.toLowerCase()))))
        break;
      default: 
        dispatch(setData(startingData.filter(element => element.name.toLowerCase().includes(event.target.value.toLowerCase()))))
    }
  }

  // Funzione per resettare i valori nell'input di filtraggio e mostrare tutti i prodotti
  const resetSearch = () => {
    dispatch(setToggleData(null));
    dispatch(setClassToggleLeft('')); 
    dispatch(setClassToggleRight(''));
    dispatch(setValueInput(''));
    dispatch(setData(startingData));
  }

  // Funzione per filtrare i prodotti in base alla loro quantità in stock
  const checkIfInStock = (value) => {
    if (toggleData === value) { 
      dispatch(setData(startingData));
      dispatch(setToggleData(null));
      dispatch(setClassToggleLeft('')); 
      dispatch(setClassToggleRight(''));

    } else {

      if (value === 1) { // Bottone IN STOCK
        dispatch(setData(startingData.filter(element => element.availability.stock > 0))); // Tutti gli elementi che hanno almeno un valore di quantità
        dispatch(setToggleData(1));
        dispatch(setClassToggleLeft('toggleLabel')) 
        dispatch(setClassToggleRight(''))

      } else if (value === 0) { // Bottone OUT OF STOCK
        dispatch(setData(startingData.filter(element => element.availability.stock === 0))); // Solo gli elementi che non hanno valori di quantità
        dispatch(setToggleData(0));
        dispatch(setClassToggleRight('toggleLabel'))
        dispatch(setClassToggleLeft(''))
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
        {loadData.length === 0 ? <h1>No products found</h1> :
          <ul>
            {loadData.map((element) => {
              return <ListItem key={element.UPC} element={element} />
            })}
          </ul>
        }
      </main>

    </div>
  )
}

export default Home;
