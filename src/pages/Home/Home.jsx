import home from "../../images/home.jpg";
import bal from "../../images/bal.png";
import flyshoes from "../../images/flyshoes.png";
import tshirt from "../../images/tshirt.png";
import Button from "../../components/common/Button";
import { IoCart } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Card from "../../components/customized/Card";
import categoryone from "../../images/categoryone.webp";
import scategory1 from "../../images/s-category1.webp";
import categorytwo from "../../images/categorytwo.webp";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div
        className="bg-cover bg-center bg-no-repeat w-full min-h-screen"
        style={{ backgroundImage: `url(${home})` }}
      >
        <div className="relative pt-28 flex items-center justify-center flex-col">
          <h2 className="absolute z-50 min-[400px]:text-5xl min-[600px]:text-7xl min-[700px]:text-8xl transition-all duration-500 mb-28 text-[#9999] font-black">
            OG SPORTS
          </h2>
          <div className="hadeel relative w-96 h-96">
            <img
              src={bal}
              alt=""
              className="fade-slide max-w-96"
              style={{ animationDelay: "0s" }}
            />
            <img
              src={flyshoes}
              alt=""
              className="fade-slide max-w-96"
              style={{ animationDelay: "3s" }}
            />
            <img
              src={tshirt}
              alt=""
              className="fade-slide max-w-96"
              style={{ animationDelay: "6s" }}
            />
          </div>
          <div className="flex flex-col items-center text-[var(--main-color)] pb-20">
            <h1 className="font-bold mb-3 text-2xl md:text-3xl">
              لجميع المستلزمات الرياضية
            </h1>
            <Button
              className="bg-transparent border-2 border-solid w-1/2 px-3 py-1 rounded-xl flex items-center justify-center gap-1"
              buttonName={
                <>
                  <IoCart /> تسوق الان
                </>
              }
              onClick={() => navigate("/products")}
            />
            <div className="flex items-center mt-2.5 text-2xl gap-3">
              <Button
                buttonType="socialMedia"
                buttonName={
                  <>
                    <FaTelegram />
                  </>
                }
                href={"https://t.me/ogsports1"}
              />
              <Button
                buttonType="socialMedia"
                buttonName={
                  <>
                    <FaWhatsapp />
                  </>
                }
                href={
                  "https://api.whatsapp.com/message/JCVBAXBJWILYO1?autoload=1&app_absent=0"
                }
              />
              <Button
                buttonType="socialMedia"
                buttonName={
                  <>
                    <FaInstagram />
                  </>
                }
                href={
                  "https://www.instagram.com/og_sports_1?igsh=MWM4dHRteGlncmR3Mw%3D%3D&utm_source=qr"
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 grid min-[0px]:grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3 gap-4 w-fit">
        <Card type="image" image={categoryone} />
        <Card
          header="ألبسة رياضية"
          paragraph="لدينا جميع أنواع القمصان الرياضية لجميع النوادي العالمية"
          onClick={() => navigate("/products?category=wear")}
        />
        <Card type="image" image={scategory1} />
        <Card
          header="مستلزمات رياضية"
          paragraph="نبيع أنواع المستلزمات الرياضية المختلفة الخاصة للرياضيين"
          onClick={() => navigate("/products?category=access")}
        />
        <Card type="image" image={categorytwo} />
        <Card
          header="أحذية رياضية"
          paragraph="لدينا أفضل أنواع الأحذية الرياضية للملاعب العشبية والرياضات الأخرى"
          onClick={() => navigate("/products?category=shoes")}
        />
      </div>

      <div>
        
      </div>
    </div>
  );
}
