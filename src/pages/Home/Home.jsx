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

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="absolute bg-cover bg-center bg-no-repeat h-full w-full"
        style={{ backgroundImage: `url(${home})`, position: "absolute" }}
      >
        <div className="relative top-32 flex items-center justify-center flex-col">
          <h2 className="absolute z-50 text-4xl  md:text-8xl  text-gray-400 font-bold">
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
          <div className="flex flex-col items-center text-[var(--main-color)]">
            <h1 className=" font-bold mb-3 text-2xl md:text-3xl">
              لجميع المستلزمات الرياضية
            </h1>
            <Button
              className="bg-transparent  border-2 border-solid w-1/2 px-3 py-1  rounded-xl  flex items-center justify-center gap-1"
              buttonName={
                <>
                  <IoCart /> تسوق الان
                </>
              }
              onClick={() => navigate("/products")}
            />
            <div className="flex items-center mt-2.5 text-2xl gap-3">
              <Button buttonType="socialMedia" buttonName={<><FaTelegram/></>} href={"https://t.me/ogsports1"}/>
              <Button buttonType="socialMedia" buttonName={<><FaWhatsapp/></>} href={"https://api.whatsapp.com/message/JCVBAXBJWILYO1?autoload=1&app_absent=0"}/>
              <Button buttonType="socialMedia"buttonName={<><FaInstagram/></>} href={"https://www.instagram.com/og_sports_1?igsh=MWM4dHRteGlncmR3Mw%3D%3D&utm_source=qr"}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
