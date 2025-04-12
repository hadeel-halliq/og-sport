import { useSearchParams } from "react-router-dom";
import MenProducts from "../../components/MenProducts";
import WomenProducts from "../../components/WomenProducts";

export default function Products() {
  const [searchParams] = useSearchParams();
  const gender = searchParams.get("gender") || "women";
  return (
    <div>
      <h1>{gender === "men" ? "قسم الرجال" : "قسم النساء"}</h1>
      {gender === "men" ? <MenProducts /> : <WomenProducts />}
    </div>
  );
}
