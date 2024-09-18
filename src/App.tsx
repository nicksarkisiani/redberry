import React from 'react';
import Header from "./components/layout/header/Header";
import Card from "./components/shared/card/Card";
import {$api} from "./http";

function App() {
    const agents = $api.get("/cities")
    console.log(agents)
  return (
    <div className="App">
        <Header />
        <Card />
    </div>
  );
}

export default App;
