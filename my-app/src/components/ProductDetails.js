import { useParams, Link } from "react-router-dom"
import React from 'react'
import Loading from './redirect/Loading'
import { useSelector, useDispatch } from "react-redux"
import NotFound from "./redirect/NotFound"
import { useEffect } from "react"
import { setProductDetails, setSharingDetails } from "../redux/createSlice"

const ProductDetails = () => {

    const dispatch = useDispatch()

    const { productDetails } = useSelector(state => state.data)
    const { sharingDetails } = useSelector(state => state.data)

    const { idCode } = useParams()

    useEffect(() => {
        //cerco il prodotto corrispondente al codice ID (non lo uso in questo caso, solo come esercizio)
        fetch(`http://127.0.0.1:8080/product/${idCode}`)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                return Promise.reject(response)
            })
            .then(json => {
                dispatch(setProductDetails(json))
            })
            .catch((error) => {
                console.log(error)
            })
        //carico i dati statici per tutti i prodotti
        fetch(`http://127.0.0.1:8080/lista-dettagli`)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                return Promise.reject(response)
            })
            .then(json => {
                dispatch(setSharingDetails(json))
            })
            .catch((error) => {
                console.log(error)
            })
    }, [dispatch, idCode])

    if (productDetails === null || sharingDetails.length === 0) {
        return <Loading />
    }

    if (productDetails === undefined || sharingDetails === undefined) {
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
                <div>{sharingDetails[0].name}</div>
            </main>

            <Link to={`/`}>Back to Home Page</Link>
        </>
    )
}

export default ProductDetails