import { Button, Row, Col } from "antd";
import "./index.scss";
import HdfcRegaliaCard from "../../assets/images/hdfcRegaliaCard.png";
import AxisAceCard from "../../assets/images/axisBankAceCard.png";
import IndianOilHdfcCard from "../../assets/images/indianOilHdfcCard.png";
import { ReactComponent as ApplyBtn } from "../../assets/icons/rightArrow.svg";

const PopularCreditCards = () => {
  return (
    <div className="popularCards">
      <div>
        <div className="popularCards__heading">
          Popular credit cards for every dedicated category
        </div>
        <div className="popularCards__btns">
          <Button className="popularCards__btn">Featured</Button>
          <Button className="popularCards__btn">Cashback</Button>
          <Button className="popularCards__btn">Rewards</Button>
          <Button className="popularCards__btn">Fuel</Button>
          <Button className="popularCards__btn">Business</Button>
        </div>
      </div>
      <Row className="bgImage">
        <Col span={8} className="leftImage">
          <img
            src={HdfcRegaliaCard}
            alt="hdfc regalia card"
            className="popularCards__cards"
          />
          <div className="cardInformation">
            <div className="popularCards__cardName">HDFC Regalia</div>
            <div className="popularCards__cardbtns">
              <Button size="small" className="popularCards__cardBtn">
                TRAVEL
              </Button>
              <Button size="small" className="popularCards__cardBtn">
                ONLINE SHOPPING
              </Button>
            </div>
            <div className="popularCards__info">
              <div className="popularCards__cashback">50% Cashback</div>
              <div className="popularCards__cashbackInfo">
                High cashback on online and offline spends
              </div>
            </div>
            <div className="applyNow">
              <span className="apply">Apply Now</span>
              <span>
                <ApplyBtn />
              </span>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div>
            <img
              src={AxisAceCard}
              alt="acis ace credit card"
              className="popularCards__cards"
            />
            <div className="cardInformation">
              <div className="popularCards__cardName">
                Axis Bank Ace Credit Card
              </div>
              <div className="popularCards__cardbtns">
                <Button size="small" className="popularCards__cardBtn">
                  TRAVEL
                </Button>
                <Button size="small" className="popularCards__cardBtn">
                  ONLINE SHOPPING
                </Button>
              </div>
              <div className="popularCards__info">
                <div className="popularCards__cashback">50% Cashback</div>
                <div className="popularCards__cashbackInfo">
                  High cashback on online and offline spends
                </div>
              </div>
              <div className="applyNow">
                <span className="apply">Apply Now</span>

                <span>
                  <ApplyBtn />
                </span>
              </div>
            </div>
          </div>
        </Col>
        <Col span={8} className="rightImage">
          <img
            src={IndianOilHdfcCard}
            alt="indian oil hdfc credit card"
            style={{ width: "380px", marginTop: "32px", height: "280px" }}
          />
          <div className="cardInformation">
            <div className="popularCards__cardName">
              Indian Oil HDFC Credit Card
            </div>
            <div className="popularCards__cardbtns">
              <Button size="small" className="popularCards__cardBtn">
                TRAVEL
              </Button>
              <Button size="small" className="popularCards__cardBtn">
                ONLINE SHOPPING
              </Button>
            </div>
            <div className="popularCards__info">
              <div className="popularCards__cashback">50% Cashback</div>
              <div className="popularCards__cashbackInfo">
                High cashback on online and offline spends
              </div>
            </div>
            <div className="applyNow">
              <span className="apply">Apply Now</span>

              <span>
                <ApplyBtn />
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default PopularCreditCards;
