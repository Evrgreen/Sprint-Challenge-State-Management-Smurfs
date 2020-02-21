import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import "./App.css";

import { VillageContext } from "../context/VillageContext";

import SmurfCardList from "./SmurfCardList";
import Form from "./Form";
const App = () => {
  const [village, setVillage] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3333/smurfs").then((response) => {
      setVillage(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <VillageContext.Provider value={{ village, setVillage }}>
        <Form></Form>
        <SmurfCardList />
      </VillageContext.Provider>
    </div>
  );
};

export default App;
