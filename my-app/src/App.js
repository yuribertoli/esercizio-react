import { Outlet } from "react-router-dom"
import React, {Suspense} from 'react'
import Footer from './components/Footer'
import { useEffect } from "react"
import Loading from "./components/redirect/Loading"
import { useDispatch } from "react-redux"
import { setStartingData, setDataFiltered } from "./redux/createSlice"

const App = () => {

    const dispatch = useDispatch()

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
            })
            .catch((error) => {
                console.log(error)
            })
    }, [dispatch])

    return (
        <Suspense fallback={<Loading />}>
            <div id="container">

                <Outlet />

                <footer>
                    <Footer />
                </footer>

            </div>
        </Suspense>
    )
}

export default App