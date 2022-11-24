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
  }, [startingArray]);

  // Funzione per filtrare i prodotti da mostrare in base all'input dell'utente
  const filterProducts = (event) => {

    setValueInput(event.target.value); // Ricopia i valori digitati nello stato dell'input 

    switch (toggleData) { // Controllo se il bottone per IN STOCK / OUT OF STOCK è stato premuto
      case 0: // Se è premuto OUT OF STOCK:
        // Filtro gli elementi solo OUT OF STOCK e che abbiano una corrispondenza con il nome digitato
        setObjData(startingArray.filter(element => element.availability.stock === 0 && element.name.toLowerCase().includes(event.target.value.toLowerCase())));
        break;
      case 1: // Se è premuto IN STOCK:
        // Filtro gli elementi solo IN STOCK e che abbiano una corrispondenza con il nome digitato
        setObjData(startingArray.filter(element => element.availability.stock > 0 && element.name.toLowerCase().includes(event.target.value.toLowerCase())))
        break;
      default: // Se non è stato premuto:
        // Filtro gli elementi che abbiano una corrispondenza con il nome digitato
        setObjData(startingArray.filter(element => element.name.toLowerCase().includes(event.target.value.toLowerCase())));
    }
  }

  // Funzione per resettare i valori nell'input di filtraggio e mostrare tutti i prodotti
  const resetSearch = () => {
    setToggleData(null);
    setClassToggleLeft(''); // resetto le classi CSS
    setClassToggleRight('');
    setValueInput('');
    setObjData(startingArray);
  }

  // Funzione per filtrare i prodotti in base alla loro quantità in stock
  const checkIfInStock = (value) => {
    if (toggleData === value) { // Value viene passato dalla funzione e sarà sempre 0 o 1 (bottone di destra o sinistra)
      // Qui controllo se il bottone è già stato schiacciato 
      setObjData(startingArray);
      setToggleData(null);
      setClassToggleLeft(''); // resetto le classi CSS
      setClassToggleRight('');

    } else { // Se non è già stato cliccato, controllo che bottone è

      if (value === 1) { // Bottone IN STOCK
        setObjData(startingArray.filter(element => element.availability.stock > 0)); // Tutti gli elementi che hanno almeno un valore di quantità
        setToggleData(1);
        setClassToggleLeft('toggleLabel') // Aggiungo la classe CSS
        setClassToggleRight('')

      } else if (value === 0) { // Bottone OUT OF STOCK
        setObjData(startingArray.filter(element => element.availability.stock === 0)); // Solo gli elementi che non hanno valori di quantità
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
