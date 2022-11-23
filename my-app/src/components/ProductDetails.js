import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import React from 'react';
import { UserContext } from "../App";
import Loading from './Loading';

const ProductDetails = () => {

    const [productData, setStartingArray] = useState([]);

    const { idCode } = useParams();

    const startingArray = React.useContext(UserContext);

    useEffect(() => {
        let objectFiltered = startingArray.filter(element => parseInt(element.UPC) === parseInt(idCode))
        setStartingArray(objectFiltered)
        // eslint-disable-next-line
    }, [])

    if(productData.length === 0){
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
                            <li className='element-name'>{productData[0].name}</li>
                            <li className='element-price'>$ {productData[0].price.current.value}</li>
                            {productData[0].availability.stock > 0 ? <li className='element-stock'><span>in stock</span></li> : <li className='d-none'></li>}
                        </ul>
                    </div>
                </div>

            </div>

            <Link to={`/`}>Back to Home Page</Link>
        </>
    )
}

export default ProductDetails;