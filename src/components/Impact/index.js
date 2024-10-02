import "./index.scss";
import RatanTata from "../../assets/images/ratan-tata.png";
import { Row, Col } from "antd";

const Impact = () => {
  return (
    <div className="impact">
      <div className="impactDetails">
        <p className="line1">WHAT THEY SAY ABOUT BANKKARO</p>
        <p className="line2">
          See the <span className="impactText">Impact</span> in action
        </p>
      </div>
      <div className="impactInfo">
        <span className="name">Ratan Tata</span>
        <p className="designation">Chairperson Tata Group</p>
      </div>
      <div className="ratanTata">
        <img src={RatanTata} alt="ratan tata" className="img" />
      </div>
      <div className="details">
        “ BankKaro helped me find the perfect credit card that matches my
        spending on groceries and travel. Highly recommend it for personalized
        credit card options. “
      </div>

      <div className="impact__background-video-container">
        <video autoPlay loop muted className="background-video">
          <source src="/ratan_tata_spinner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Impact;
