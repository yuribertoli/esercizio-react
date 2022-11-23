import { Outlet } from "react-router-dom";
import React from 'react';
import Footer from './components/Footer';
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

export const UserContext = React.createContext();

const App = () => {

    const [startingArray, setStartingArray] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://assets.fc-dev.instore.oakley.com/assets/products/products.json')
            .then(response => response.json())
            .then(json => {
                setStartingArray(json)
                setLoading(false)
            })
    }, [])

    if (isLoading) {
        return <Loading/>
    }

    return (
        <div id="container">

            <UserContext.Provider value={startingArray}>
                <Outlet />
            </UserContext.Provider>

            <footer>
                <Footer />
            </footer>

        </div>
    )
};

export default App;