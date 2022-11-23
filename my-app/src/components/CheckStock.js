const CheckStock = ({checkIfInStock, classToggleLeft, classToggleRight}) => {
  return (
    <div id='checkStock'>

      <label className={`stockLabels ${classToggleLeft}`} id='leftStock' htmlFor="in-stock">
        IN STOCK
        <input onClick={() => checkIfInStock(1)} hidden type="radio" id="in-stock" name="availability" />
      </label>

      <label className={`stockLabels ${classToggleRight}`} id='rightStock' htmlFor="out-of-stock">
        OUT OF STOCK
        <input onClick={() => checkIfInStock(0)} hidden type="radio" id="out-of-stock" name="availability" />
      </label>

    </div>
  )
}

export default CheckStock; 