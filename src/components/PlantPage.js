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

function handleDeletePlant(e){
  console.log("i was deleted")
}

function handleDeletePlant(id) {
  const updatedPlantsArray = plants.filter((plant) => plant.id !== id);
  setPlants(updatedPlantsArray);
}

function handleUpdatePlant(updatedPlant) {
  const updatedPlantsArray = plants.map((plant) => {
    if (plant.id === updatedPlant.id) {
      return updatedPlant;
    } else {
      return plant;
    }
  });
  setPlants(updatedPlantsArray);
}

  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList displayedPlants={displayedPlants} handleDeletePlant={handleDeletePlant}
      onUpdatePlant={handleUpdatePlant}/>
    </main>
  );
}

export default PlantPage;
