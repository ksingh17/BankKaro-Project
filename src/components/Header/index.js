import React from "react";
import { Menu, Button, Row, Col } from "antd";
import "./index.scss";
import { ReactComponent as DownArrow } from "../../assets/icons/downArrow.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";

const Header = () => {
  return (
    <>
      <Row className="header">
        <Col span={3} className="header__heading">
          <span className="bank">BANK</span>
          <span className="karo">KARO</span>
        </Col>
        <Col span={18}>
          <div className="header__menu">
            <ul className="header__list">
              <li className="header__listItem">
                OUR PRODUCTS
                <span>
                  <DownArrow />
                </span>
              </li>
              <li className="header__listItem">
                TOOLS
                <span>
                  <DownArrow />
                </span>
              </li>
              <li className="header__listItem">BLOGS</li>
              <li className="header__listItem">ABOUT US</li>
            </ul>
          </div>
        </Col>
        <Col span={3} className="header__signInBtn">
          <div className="sign-in-section">
            <div className="sign-in-section__container">
              <Button
                className="sign-in-section__button"
                type="primary"
                shape="round"
              >
                Sign In
              </Button>
              <User className="sign-in-section__profile-pic" />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Header;
