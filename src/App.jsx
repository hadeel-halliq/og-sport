import { Route, Routes } from "react-router-dom";
import NavBar from "./global/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import { useState } from "react";

function App() {

  const [menuOpen , setMenuOpen] = useState(false)
  return (
    <>
      <NavBar menuopen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        
      </Routes>
    </>
  );
}

export default App;
