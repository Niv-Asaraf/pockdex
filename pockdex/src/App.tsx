import { GlobalStyles } from "./styles/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TopBar from "./components/TopBar/TopBar";

function App() {
  

  return (
    <>
      <GlobalStyles />
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={""} />
      </Routes>
    </>
  );
}

export default App;
