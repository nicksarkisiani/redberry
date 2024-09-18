import React, {useEffect} from 'react';
import Header from "./components/layout/header/Header";
import Card from "./components/shared/card/Card";
import {useActions} from "./hooks/useActions";

function App() {
    const {fetchEstates} = useActions()

    useEffect(() => {
        fetchEstates()

    }, [fetchEstates])

  return (
    <div className="App">
        <Header />
        <Card />
    </div>
  );
}

export default App;
