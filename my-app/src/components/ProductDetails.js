import { useParams, Link } from "react-router-dom";
import React from 'react';
import Loading from './redirect/Loading';
import { useSelector } from "react-redux";
import NotFound from "./redirect/NotFound";

const ProductDetails = () => {

    const { idCode } = useParams();

    const {startingData} = useSelector(state => state.data);

    let objectFiltered = startingData.find(element => parseInt(element.UPC) === parseInt(idCode))

    if(objectFiltered === null){
        return <Loading/>
    }

    if(objectFiltered === undefined){
        return <NotFound/>
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