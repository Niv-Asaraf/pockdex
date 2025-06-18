

import { GlobalStyles } from "./styles/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";
import TopBar from "./components/TopBar/TopBar";


function App() {


  return (
    <>
    <GlobalStyles/>
   <TopBar/>
   <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/PokemonDetails/:name" element={<PokemonDetailsPage />} />
    </Routes>
    </>
  )
}

export default App
