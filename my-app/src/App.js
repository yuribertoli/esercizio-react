import { Outlet } from "react-router-dom"
import React from 'react'
import Footer from './components/Footer'
import { useEffect } from "react"
import Loading from "./components/redirect/Loading"
import { useSelector, useDispatch } from "react-redux"
import { setStartingData, setLoading, setDataFiltered } from "./redux/createSlice"

const App = () => {

    const dispatch = useDispatch()

    const {isLoading} = useSelector(state => state.data)

    useEffect(() => {
        fetch('http://127.0.0.1:8080/lista-prodotti')
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                return Promise.reject(response) 
            })
            .then(json => {
                dispatch(setStartingData(json))
                dispatch(setDataFiltered(json))
                dispatch(setLoading(false))
            })
            .catch((error) => {
                console.log(error)
            })
    }, [dispatch])

    if (isLoading) {
        return <Loading />
    }

    return (
        <div id="container">

            <Outlet />

            <footer>
                <Footer />
            </footer>

        </div>
    )
}

export default App