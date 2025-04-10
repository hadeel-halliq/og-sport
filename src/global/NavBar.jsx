import { useEffect } from "react";
import Logo from "../images/Logo.jpg";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function NavBar({ menuOpen, setMenuOPen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed p-5 top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="flex items-center justify-between p-2.5">
        <img
          src={Logo}
          alt="Logo.pic"
          className="max-w-12 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50"
        />
        <div
          className="w-7 h-8 relative cursor-pointer z-40 md:hidden"
          onClick={() => setMenuOPen((prev) => !prev)}
        >
          &#9776;
        </div>

        <div className="hidden md:flex items-center gap-4 text-xl">
          <Link to="/about" className="text-gray-300 hoveLtext-white ">
            من نحن
          </Link>
          <Link to="/women" className="text-gray-300 hoveLtext-white ">
            قسم النساء
          </Link>
          <Link to="/men" className="text-gray-300 hoveLtext-white ">
            قسم الرجال
          </Link>
          <Link to="/store" className="text-gray-300 hoveLtext-white ">
            المتجر
          </Link>
          <Link to="/" className="text-gray-300 hoveLtext-white ">
            الصفحة الرئيسية
          </Link>
        </div>
        <div className="flex items-center gap-3 text-3xl cursor-pointer">
          <IoCartOutline className="bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-full" />
          <IoPersonOutline className="bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-full" />
        </div>
      </div>
    </nav>
  );
}
