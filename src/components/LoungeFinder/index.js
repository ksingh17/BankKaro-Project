import { Button, Col, Row } from "antd";
import IndiaGate from "../../assets/images/indiaGate.png";
import Bridge from "../../assets/images/bridge.png";
import HawaMahal from "../../assets/images/hawaMahal.png";
import Lounge1 from "../../assets/images/lounge1.png";
import Lounge2 from "../../assets/images/loung2.png";
import Lounge3 from "../../assets/images/lounge3.png";
import Light from "../../assets/images/light.png";

import "./index.scss";
const LoungeFinder = () => {
  return (
    <div className="loungeFinder">
      <div className="headerSection">
        <div className="loungeFinder__heading">Lounge Finder</div>
        <div className="loungeFinder__subHeading">
          Check which lounges you can access at a click!
        </div>
        <Button className="loungeFinder__tryBtn">Try Lounge Finder</Button>
      </div>
      <Row>
        <Col span={8} className="loungeFinder__section">
          <div className="loungeFinder__area">
            <img src={IndiaGate} alt="india gate" />

            <div className="areaInfo">
              <div className="text">Indra Gandhi Int’l</div>
              <div className="location">IGI New Delhi</div>
            </div>
          </div>
          <img src={Light} alt="light" className="light" />
          <div className="loungeImg">
            <img src={Lounge1} alt="lounge 1" className="loungeFinder__img" />
          </div>
        </Col>
        <Col span={8} className="loungeFinder__section">
          <div className="loungeFinder__area">
            <img src={Bridge} alt="bridge" />
            <div className="areaInfo">
              <div className="text">Indra Gandhi Int’l</div>
              <div className="location">IGI New Delhi</div>
            </div>
          </div>
          <img src={Light} alt="light" className="light" />
          <div className="loungeImg">
            <img src={Lounge2} alt="lounge 2" className="loungeFinder__img" />
          </div>
        </Col>
        <Col span={8} className="loungeFinder__section">
          <div className="loungeFinder__area">
            <img src={HawaMahal} alt="hawa mahal" />

            <div className="areaInfo">
              <div className="text">Indra Gandhi Int’l</div>
              <div className="location">IGI New Delhi</div>
            </div>
          </div>
          <img src={Light} alt="light" className="light" />
          <div className="loungeImg">
            <img src={Lounge3} alt="lounge 3" className="loungeFinder__img" />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default LoungeFinder;
