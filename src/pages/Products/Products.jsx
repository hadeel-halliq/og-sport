import { useSearchParams } from "react-router-dom";
import MenProducts from "../../components/MenProducts";
import WomenProducts from "../../components/WomenProducts";
import MyLink from "../../components/MyLink";

export default function Products() {
  const [searchParams] = useSearchParams();
  const gender = searchParams.get("gender");
  const category = searchParams.get("category")
  return (
    <div>
      {!gender && !category ? (
        <div className="flex gap-4 p-4 mt-32">
            <MyLink to="/products?category=wear"  className="bg-gray-200 px-4 py-2 rounded text-amber-400">
              ألبسة
            </MyLink>
            <MyLink to="/products?category=shoes"  className="bg-gray-200 px-4 py-2 rounded">
              أحذية
            </MyLink>
            <MyLink to="/products?category=access"  className="bg-gray-200 px-4 py-2 rounded">
              مستلزمات
            </MyLink>
        </div>
      ) : gender === "male" ? (
        <>
        <h1>قسم الرجال</h1>
        <MenProducts category={category} />
      </>
      ) : gender === "famle" ? (
        <>
        <h1>قسم النساء</h1>
        <WomenProducts category={category} />
      </>
      ) : null}
    </div>
  );
}





// {!gender ? (
//   <div>ALL</div>
//  ) : gender === "male" ? (
//    <>
//      <h1>قسم الرجال</h1>
//      <MenProducts />
//    </>
//  ) : (
//    <>
//      <h1>قسم النساء</h1>
//      <WomenProducts />
//    </>
//  )}