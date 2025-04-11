import { IoPersonOutline } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

import MyLink from "../components/MyLink";
import Logo from "../images/Logo.jpg";

export default function NavBar({ menuOpen, setMenuOpen }) {
  const navigate = useNavigate();

  return (
    <nav className="fixed p-2 top-0 w-full z-40 bg-black border-b border-white/10 shadow-lg">
      <div className="flex items-center justify-between p-2.5">
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

        <div className="hidden md:flex items-center gap-4 text-xl">
          <MyLink to="/about">من نحن</MyLink>
          <MyLink to="/store/women">قسم النساء</MyLink>
          <MyLink to="/store/men">قسم الرجال</MyLink>
          <MyLink to="/store">المتجر</MyLink>
          <MyLink to="/">الصفحة الرئيسية</MyLink>
        </div>
        <div className="flex items-center gap-3 text-3xl cursor-pointer">
          <IoCart onClick={() => navigate("/cart")} />
          <IoPersonOutline onClick={() => navigate("/profile")} />
        </div>
      </div>
    </nav>
  );
}
