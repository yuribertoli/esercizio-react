import { Link } from "react-router-dom";

const ListItem = ({element}) => {
    console.log(element)
    return (
        <li className='listProduct'>
            <Link to={`/product/${element.UPC}`}>
                <div className='containerProduct'>
                    <div className='topCard'>
                        <div className='noImage'>350x350</div>
                        <span>Powered by HTML.COM</span>
                    </div>
                    <div className='bottomCard'>
                        <ul>
                            <li className='element-name'>{element.name}</li>
                            <li className='element-price'>$ {element.price.current.value}</li>
                            {element.availability.stock > 0 ? <li className='element-stock'><span>in stock</span></li> : <li className='d-none'></li>}
                        </ul>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default ListItem;