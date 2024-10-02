import { Col, Row } from "antd";
import React from "react";
import PersonalisedOffer from "../../assets/images/personalisedOffer.png";
import EarnRewards from "../../assets/images/rewards.png";
import CompareCards from "../../assets/images/compareCards.png";
import MaxBenefit from "../../assets/images/maxBenefit.png";
import CardKundali from "../../assets/images/cardKundali.png";
import BeatMyCard from "../../assets/images/beatMyCard.png";
import Compare from "../../assets/images/compare.png";
import LoungeFinder from "../../assets/images/loungeFinder.png";

import "./index.scss";
const Features = () => {
  return (
    <div className="features">
      <Row>
        <Col span={6} className="features__images">
          <img src={PersonalisedOffer} alt="Personalised offer" />
          <div className="features__option">
            <div className="features__heading">Personalised Offers</div>
            <div className="features__info">
              Find best Credit Cards based on your spend pattern
            </div>
          </div>
        </Col>
        <Col span={6} className="features__images">
          <img src={EarnRewards} alt="Earn rewards" />
          <div className="features__option">
            <div className="features__heading">Earn Rewards</div>
            <div className="features__info">
              Earn Rewards for every successful Credit Card approval
            </div>
          </div>
        </Col>
        <Col span={6} className="features__image">
          <img src={CompareCards} alt="compare cards" />
          <div className="features__option">
            <div className="features__heading">Compare Cards</div>
            <div className="features__info">
              Compare your existing Cards with best in the industry
            </div>
          </div>
        </Col>
        <Col span={6} className="features__images">
          <img src={MaxBenefit} alt="max benefits" />
          <div className="features__option">
            <div className="features__heading">Max Benifits</div>
            <div className="features__info">
              Get maximum benefits from your Credit Cards
            </div>
          </div>
        </Col>
      </Row>
      <Row className="images">
        <Col span={6}>
          <img src={CardKundali} alt="card kundali" className="features__img" />
        </Col>
        <Col span={6}>
          <img src={BeatMyCard} alt="beat my card" className="features__img" />
        </Col>
        <Col span={6}>
          <img src={Compare} alt="compare cards" className="features__img" />
        </Col>
        <Col span={6}>
          <img
            src={LoungeFinder}
            alt="lounge finder"
            className="features__img"
          />
        </Col>
      </Row>
    </div>
  );
};
export default Features;
