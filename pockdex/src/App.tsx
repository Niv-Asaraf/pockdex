

import { GlobalStyles } from "./styles/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TopBar from "./components/TopBar/TopBar";
import MapView from "./components/MapView/MapView";

function App() {
  
    const pokemon = {
            name:"bulbasur",
            iconUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            location : {lat:32.07477235615735, lng:34.792342277259536}
     }

  return (
    <>
    <GlobalStyles/>
   <TopBar/>
   <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/favorites" element={<MapView pokemon = {pokemon}/>} />
    </Routes>
    </>
  )
}

export default App
