import { Link } from "react-router-dom";
import "../success/success.css";
import Tick from "./tickgif.gif";
const Success = () => {
  return (
    <>
      <div className="tick-box">
        <div className="success-tick">
          <img src={Tick} />
          <h1>Your order has been received</h1>
        </div>
      </div>
      <div className="home">
        <Link to="/zomato" className="backtohome">
          Return To Home Page
        </Link>
      </div>
    </>
  );
};

export default Success;
