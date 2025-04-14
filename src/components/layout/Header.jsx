import { IoPersonOutline } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

import Logo from "../../images/Logo.jpg";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

export default function Header({ menuOpen, setMenuOpen }) {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-40  transition-all duration-200 text-[var(--main-color)] ${
        scrolled ? "bg-black " : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between p-1.5 ">
        <img src={Logo} alt="Logo.pic" className="max-w-12 " />
        <div
          className="w-7 h-8 relative cursor-pointer z-40 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <IoMdClose className="text-2xl " />
          ) : (
            <RxHamburgerMenu className="text-2xl" />
          )}
        </div>
        <NavBar />
        <div className="flex items-center gap-3 text-3xl cursor-pointer">
          <IoCart onClick={() => navigate("/cart")} />
          <IoPersonOutline onClick={() => navigate("/profile")} />
        </div>
      </div>
    </div>
  );
}
