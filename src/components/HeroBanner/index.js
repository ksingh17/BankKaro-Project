import React from "react";
import "./index.scss";
import { Col, Row, Button } from "antd";
import Card from "../../assets/images/bannerCard.png";

const HeroBanner = () => {
  return (
    <>
      <div className="heroBanner">
        <div  className="heroBanner__leftSection">
          <div className="content-overlay-text">
            <div className="heroBanner__heading">
              We find the Best Credit Cards for You
            </div>
            <div className="btn">
              <Button className="button">Find A Credit Card</Button>
            </div>
          </div>
        </div>
        <div className="heroBanner__background-video-container">
          <video autoPlay loop muted className="background-video">
            <source src="/abstract-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="content-overlay">
            <img src={Card} alt="banner card" className="heroBanner__img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
