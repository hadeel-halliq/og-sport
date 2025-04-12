import { useSearchParams } from "react-router-dom";
import MenProducts from "../../components/MenProducts";
import WomenProducts from "../../components/WomenProducts";

export default function Products() {
  const [searchParams] = useSearchParams();
  const gender = searchParams.get("gender");
  return (
    <div>
      {!gender ? (
       <div>ALL</div>
      ) : gender === "men" ? (
        <>
          <h1>قسم الرجال</h1>
          <MenProducts />
        </>
      ) : (
        <>
          <h1>قسم النساء</h1>
          <WomenProducts />
        </>
      )}
    </div>
  );
}
