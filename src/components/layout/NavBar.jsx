import MyLink from "../MyLink";

export default function NavBar() {
  return (
    <div className="hidden md:flex items-center gap-4 text-xl">
      <MyLink to="/about">من نحن</MyLink>
      <MyLink to="/products/women">قسم النساء</MyLink>
      <MyLink to="/products/men">قسم الرجال</MyLink>
      <MyLink to="/products">المتجر</MyLink>
      <MyLink to="/">الصفحة الرئيسية</MyLink>
    </div>
  );
}
