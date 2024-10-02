import "./index.scss";
import { Button } from "antd";
import Podium from "../../assets/images/podium.png";
import HsbcCard from "../../assets/images/hsbcCard.png";
import AmericanExpressCard from "../../assets/images/americanExpressCard.png";
import SbiCard from "../../assets/images/sbiCard.png";
import CompareCardText from "../../assets/images/compareCardsText.png";
const CompareCards = () => {
  return (
    <div className="compareCards">
      <div className="heading">
        <img src={CompareCardText} alt="compare card" className="compareCardText"/>
      </div>
      <div className="podium">
        <img src={Podium} alt="podium" className="podiumImg" />
      </div>
      <div className="hsbcCard">
        <img src={HsbcCard} alt="HSBC card" />
      </div>
      <div className="americanExpressCard">
        <img src={AmericanExpressCard} alt="American Express card" />
      </div>
      <div className="sbiCard">
        <img src={SbiCard} alt="SBI card" />
      </div>
      <div className="compareCards__background-video-container">
        <video autoPlay loop muted className="background-video">
          <source src="/golden_podium.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="compareCardsInfo">
        <div className="compareCardsText">
          Uncover hidden benefits and find the perfect card for your financial
          goals.
        </div>
        <Button className="compareCardsBtn">Compare Cards</Button>
      </div>
    </div>
  );
};

export default CompareCards;
