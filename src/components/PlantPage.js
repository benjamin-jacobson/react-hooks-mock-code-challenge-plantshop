import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  
useEffect(() => {
  fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then((plantsArray) => {
      setPlants(plantsArray);
    });
}, []);

function addNewPlant(newPlant){
  console.log("I was added!")
  const newPlants = [...plants, newPlant];
  setPlants(newPlants)
}


  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList displayedPlants={displayedPlants}/>
    </main>
  );
}

export default PlantPage;
