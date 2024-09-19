import React, {useEffect} from 'react';
import Header from "./components/layout/header/Header";
import {useActions} from "./hooks/useActions";
import {Outlet} from "react-router";

function App() {
    const {fetchEstates} = useActions()

    useEffect(() => {
        fetchEstates()

    }, [fetchEstates])

  return (
    <div className="App">
        <Header />
        <Outlet />
    </div>
  );
}

export default App;
