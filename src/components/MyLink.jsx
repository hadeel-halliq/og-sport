import { Link } from "react-router-dom";

export default function MyLink({ to, onClick, children }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-lg text-[var(--main-color)] my-4 transform transition-transform duration-300`}
    >
      {children}
    </Link>
  );
}