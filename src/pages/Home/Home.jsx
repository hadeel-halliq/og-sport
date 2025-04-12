import home from "../../images/home.jpg";
import bal from "../../images/bal.png";
import flyshoes from "../../images/flyshoes.png";
import tshirt from "../../images/tshirt.png";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
 
  const navigate = useNavigate()
  return (
    <>
      <div
        className="absolute bg-cover bg-center bg-no-repeat h-full w-full"
        style={{ backgroundImage: `url(${home})`, position: "absolute" }}
      >
        <div className="relative top-44 flex items-center justify-center flex-col">
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
          <div>
            <h1>لجميع المستلزمات الرياضية</h1>
            
          </div>
        </div>
      </div>
    </>
  );
}
