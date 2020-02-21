import React, { useState, useContext } from "react";

import { VillageContext } from "../context/VillageContext";

import SmurfCard from "./SmurfCard";

const SmurfCardList = () => {
  const { village } = useContext(VillageContext);
  return (
    <div>
      <h1>Smurfs</h1>
      {village.length ? (
        village.map((smurf) => <SmurfCard key={smurf.id} smurf={smurf} />)
      ) : (
        <p>Checking the Village</p>
      )}
    </div>
  );
};

export default SmurfCardList;
