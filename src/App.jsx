import Header from "./components/header.jsx"
import SideNav from "./components/sideNav.jsx"
import PokeCard from "./components/pokeCard.jsx"
import { useState } from "react"

function App() {
  const [ showSideMenu, setShowSideMenu ] = useState(false);
  const [ selectedPokemon, setSelectedPokemon ] = useState(0);

  function handleCloseMenu() {
    setShowSideMenu(true);
  }

  function handleToggleMenu() {
    setShowSideMenu(!showSideMenu);
  }

  return (
    <>
      <Header handleToggleMenu={handleToggleMenu}/>
      <SideNav 
      showSideMenu={showSideMenu} 
      selectedPokemon={selectedPokemon}
      setSelectedPokemon={setSelectedPokemon}
      handleCloseMenu={handleCloseMenu}/>
      <PokeCard selectedPokemon={selectedPokemon}/>
    </>
  )
}

export default App
