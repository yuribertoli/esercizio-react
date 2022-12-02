import { Link } from "react-router-dom"
import React from 'react'
import Loading from './redirect/Loading'
import { useSelector, useDispatch } from "react-redux"
import NotFound from "./redirect/NotFound"
import { useEffect } from "react"
import { setStartingColor, setColorSelected } from "../redux/createSlice"
import { StyledComponents as s } from "../style/components/productDetails"

const ProductDetails = () => {

    const dispatch = useDispatch()

    const { startingDetails, colorSelected } = useSelector(state => state.data)

    useEffect(() => {
        fetch(`http://127.0.0.1:8080/lista-dettagli`)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                return Promise.reject(response)
            })
            .then(json => {
                dispatch(setStartingColor(json[0]))
                dispatch(setColorSelected(json[0]))
            })
            .catch((error) => {
                console.log(error)
            })
    }, [dispatch])

    const changeColor = (sunglass) => {
        dispatch(setColorSelected(sunglass))
    }

    if ( startingDetails.length === 0) {
        return <Loading />
    }

    if ( startingDetails === undefined) {
        return <NotFound />
    }

    return (
        <>
            <header id="productDetailsHeader">
                <div className="logo">
                    120x50
                </div>
                <div className="right-header">
                    <nav>
                        <ul id="ulDetails">
                            <li>SUNGLASSES</li>
                            <li>EYEGLASSES</li>
                            <li>LENSES</li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <s.Container>
                    <s.H1>{colorSelected.model}</s.H1>
                    <s.GridContainer>
                        <s.MainImg src={colorSelected.img} alt={colorSelected.name} />
                        <s.UlDetails>
                            <li>{colorSelected.brand}</li>
                            <li>{colorSelected.price.current.value} {colorSelected.price.currency}</li>
                            <li><span>Name:</span> {colorSelected.name}</li>
                            <li><span>Lens color:</span> {colorSelected['lens-color']}</li>
                            <li><span>Size:</span> {colorSelected.size}</li>
                            <li><span>UPC:</span> {colorSelected.UPC}</li>
                            <li><s.ButtonAddToCart>Add to cart</s.ButtonAddToCart></li>
                        </s.UlDetails>
                        <s.Colors>
                            <h2>Available colors:</h2>
                            <s.UlColors>
                                {startingDetails['color-variants'].map(element => {
                                    return <s.ImgColors 
                                                onClick={()=> changeColor(element)} 
                                                key={element.UPC} 
                                                src={element.img} 
                                                alt={element.name} 
                                            />
                                })}
                            </s.UlColors>
                        </s.Colors>
                    </s.GridContainer>
                </s.Container>
            </main>

            <Link to={`/`}>Back to Home Page</Link>
        </>
    )
}

export default ProductDetails