import '../style/App.css'
import React from 'react'
import CheckStock from './CheckStock'
import FilterSearch from './FilterSearch'
import ListItem from './ListItem'
import { useSelector, useDispatch } from "react-redux"
import { setInitialState, setDataFiltered, setValueInput, setToggleData, setClassToggleLeft, setClassToggleRight } from '../redux/createSlice'

function Home() {

  const dispatch = useDispatch()

  const {startingData, dataFiltered, valueInput, toggleData} = useSelector(state => state.data)

  // Funzione per filtrare i prodotti da mostrare in base all'input dell'utente
  const filterProducts = (event) => {

    dispatch(setValueInput(event.target.value)) 

    switch (toggleData) { 
      case 0: 
        dispatch(setDataFiltered(startingData.filter(element => element.availability.stock === 0 
                                                     && element.name.toLowerCase().includes(event.target.value.toLowerCase()))))
        break
      case 1: 
        dispatch(setDataFiltered(startingData.filter(element => element.availability.stock > 0 
                                                     && element.name.toLowerCase().includes(event.target.value.toLowerCase()))))
        break
      default: 
        dispatch(setDataFiltered(startingData.filter(element => element.name.toLowerCase().includes(event.target.value.toLowerCase()))))
    }
  }

  // Funzione per resettare i valori nell'input di filtraggio e mostrare tutti i prodotti
  const resetSearch = () => {
    dispatch(setInitialState())
  }

  // Funzione per filtrare i prodotti in base alla loro quantità in stock
  const checkIfInStock = (value) => {
    if (toggleData === value) {  
      dispatch(setDataFiltered(startingData.filter(el => el.name.toLowerCase().includes(valueInput.toLowerCase()))))
      dispatch(setToggleData(null))
      dispatch(setClassToggleLeft('')) 
      dispatch(setClassToggleRight(''))

    } else {

      if (value === 1) { // Bottone IN STOCK
        dispatch(setDataFiltered(startingData.filter(element => element.availability.stock > 0 
                                                     && element.name.toLowerCase().includes(valueInput.toLowerCase())))) 
        dispatch(setToggleData(1))
        dispatch(setClassToggleLeft('toggleLabel')) 
        dispatch(setClassToggleRight(''))

      } else if (value === 0) { // Bottone OUT OF STOCK
        dispatch(setDataFiltered(startingData.filter(element => element.availability.stock === 0
                                                     && element.name.toLowerCase().includes(valueInput.toLowerCase())))) 
        dispatch(setToggleData(0))
        dispatch(setClassToggleRight('toggleLabel'))
        dispatch(setClassToggleLeft(''))
      }
    }
  }

  return (
    <div>

      <header>

        <div className='logo'>150x80</div>

        <CheckStock checkIfInStock={checkIfInStock} />

        <FilterSearch filterProducts={filterProducts} resetSearch={resetSearch} />

      </header>

      <main>
        {dataFiltered.length === 0 ? <h1>No products found</h1> :
          <ul>
            {dataFiltered.map((element) => {
              return <ListItem key={element.UPC} element={element} />
            })}
          </ul>
        }
      </main>

    </div>
  )
}

export default Home
