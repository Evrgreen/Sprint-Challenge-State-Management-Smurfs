import React from "react";
import SmurfCardList from "./SmurfCardList";

export default function SmurfCard({ smurf }) {
  console.log(smurf);
  return (
    <div>
      <h2>{smurf.name}</h2>
      <p>{smurf.age}</p>
      <p>{smurf.height}</p>
    </div>
  );
}
