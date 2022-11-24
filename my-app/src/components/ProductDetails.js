import { useParams, Link } from "react-router-dom";
import React from 'react';
import { UserContext } from "../App";
import Loading from './Loading';

const ProductDetails = () => {

    const { idCode } = useParams();

    const startingArray = React.useContext(UserContext);

    let objectFiltered = startingArray.find(element => parseInt(element.UPC) === parseInt(idCode))

    if(objectFiltered === null){
        return <Loading/>
    }

    return (
        <>
            <div className='listProduct'>

                <div className='containerProduct'>
                    <div className='topCard'>
                        <div className='noImage'>350x350</div>
                        <span>Powered by HTML.COM</span>
                    </div>
                    <div className='bottomCard'>
                        <ul>
                            <li className='element-name'>{objectFiltered.name}</li>
                            <li className='element-price'>$ {objectFiltered.price.current.value}</li>
                            {objectFiltered.availability.stock > 0 ? <li className='element-stock'><span>in stock</span></li> : <li className='d-none'></li>}
                        </ul>
                    </div>
                </div>

            </div>

            <Link to={`/`}>Back to Home Page</Link>
        </>
    )
}

export default ProductDetails;