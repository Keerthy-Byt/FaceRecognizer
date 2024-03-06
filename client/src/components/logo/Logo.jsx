import { Tilt } from "react-tilt";
import "./Logo.css";
import face from "../../assets/facial-recognition.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="br2 shadow-2 logo-tilt"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="pa3">
          <img src={face} alt="logo" className="pt1" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
