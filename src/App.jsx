import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import NavBar from "./global/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import MobileMenu from "./components/MobileMenu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <NavBar menuopen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store/>}>
          <Route path=":gender" element={<Store />} /> 
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </>
  );
}

export default App;
