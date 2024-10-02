import React from "react";
import { Row, Col, Button, Divider } from "antd";
import "./index.scss";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as AppStoreIcon } from "../../assets/icons/appStore.svg";
import { ReactComponent as GooglePlayIcon } from "../../assets/icons/googlePlay.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Row>
          <Col span={12} className="footer__upperLeftSection">
            <div className="footer__socialIcon">
              <TwitterIcon />
              <InstagramIcon />
            </div>
            <div className="footer__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex.
            </div>
            <div className="footer__btns">
              <Button type="primary" icon={<AppStoreIcon />} className="button">
                APP STORE
              </Button>
              <Button
                type="primary"
                icon={<GooglePlayIcon />}
                className="button"
              >
                GOOGLE PLAY
              </Button>
            </div>
            <Divider />
          </Col>
          <Col span={12} className="footer__upperRightSection">
            <div className="footer__company">
              <h3 className="footer__subHeading">COMPANY</h3>
              <ul className="footer__listStyle">
                <li className="footer__listItem">About BankKaro</li>
                <li className="footer__listItem">Vision and Mission</li>
                <li className="footer__listItem">Our Team Members</li>
                <li className="footer__listItem">Partners and Investors</li>
              </ul>
            </div>
            <div className="footer__blog">
              <h3 className="footer__subHeading">BLOG</h3>
              <ul className="footer__listStyle">
                <li className="footer__listItem">BankKaro Savings</li>
                <li className="footer__listItem">Cashless Makes Perfect</li>
                <li className="footer__listItem">BankKaro No Interest</li>
                <li className="footer__listItem">BankKaro Digital Wallet</li>
              </ul>
            </div>
            <div className="footer__features">
              <h3 className="footer__subHeading">FEATURES</h3>
              <ul className="footer__listStyle">
                <li className="footer__listItem">Card Genius</li>
                <li className="footer__listItem">Lounge Finder</li>
                <li className="footer__listItem">Beat My Card</li>
                <li className="footer__listItem">Compare Cards</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={12} className="footer__lowerLeftSection">
            <div className="footer__lowerText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea.
            </div>
          </Col>
          <Col span={12} className="footer__lowerRightSection">
            <div className="footer__contact">
              <h3 className="footer__subHeading">CONTACT</h3>
              <ul className="footer__listStyle">
                <li className="footer__listItem">Contact Us</li>
                <li className="footer__listItem">Contact Support</li>
              </ul>
            </div>
            <div className="footer__blog">
              <h3 className="footer__subHeading">LEGAL</h3>
              <ul className="footer__listStyle">
                <li className="footer__listItem">Terms</li>
                <li className="footer__listItem">Privacy</li>
              </ul>
            </div>
            <div className="footer__copyright">
              <div>
                &copy; 2024 Bankaro
                <br />
                Powered by Pouring Pounds
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Footer;
