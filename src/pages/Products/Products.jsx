import { useParams } from "react-router-dom";
import MenProducts from "../../components/MenProducts";
import WomenProducts from "../../components/WomenProducts";

export default function Products() {
  const { gender } = useParams();
  return (
    <div>
      <h1>{gender === "men" ? "قسم الرجال" : "قسم النساء"}</h1>
      {gender === "men" ? <MenProducts /> : <WomenProducts />}
    </div>
  );
}
