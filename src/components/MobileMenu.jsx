import MyLink from "./MyLink";

export default function MobileMenu({ menuOpen, setMenuOpen }) {
  const menuItems = [
    { to: "/", text: " الصفحة الرئيسية" },
    { to: "/store", text: "المتجر" },
    { to: "/store/men", text: "قسم الرجال" },
    { to: "/store/women", text: "قسم النساء" },
    { to: "/about", text: "من نحن" },
  ];
  return (
    <div
      className={`fixed top-24 md:hidden left-0 w-full z-40 bg-black flex flex-col items-center justify-center
        transtion duration-300 ease-in-out
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
        `}
    >
      {menuItems.map((item) => (
        <MyLink
          key={item.to}
          to={item.to}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-black my-4 transform transition-transform duration-300
                      ${
                        menuOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      }`}
        >
          {item.text}
        </MyLink>
      ))}
    </div>
  );
}
