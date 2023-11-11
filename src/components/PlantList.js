import React from "react";
import PlantCard from "./PlantCard";

function PlantList({displayedPlants}) {

  if (Object.keys(displayedPlants).length !== 0) {
  const dataLayer = displayedPlants.map((x) => 
      <PlantCard data={x}/>)

  return (
    <ul className="cards">{dataLayer}</ul>
  );} else {return <h1>No data</h1>}
}

export default PlantList;
