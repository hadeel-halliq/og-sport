import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/layout/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";
import MobileMenu from "./components/MobileMenu";
import Header from "./components/layout/Header";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Header menuopen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
