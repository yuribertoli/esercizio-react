import { Outlet } from "react-router-dom";
import React from 'react';
import Footer from './components/Footer';
import { useEffect } from "react";
import Loading from "./components/Loading";
import { useSelector, useDispatch } from "react-redux";
import { startingData, setLoading } from "./redux/createSlice";

const App = () => {

    const dispatch = useDispatch();

    const {isLoading} = useSelector(state => state.data);

    useEffect(() => {
        fetch('https://assets.fc-dev.instore.oakley.com/assets/products/products.json')
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                //throw new Error('Something went wrong');
                return Promise.reject(response); //reject instead of throw Error
            })
            .then(json => {
                dispatch(startingData(json))
                dispatch(setLoading(false))
            })
            .catch((error) => {
                console.log(error)
            });
    // eslint-disable-next-line
    }, [])

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

export default App;