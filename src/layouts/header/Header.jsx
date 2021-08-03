import { useState, useEffect } from "react";
import globeIcon from "../../assets/img/icon/Globe.svg";
import searchIcon from "../../assets/img/icon/Search.svg";
import cartIcon from "../../assets/img/icon/Cart.svg";
import logo from "../../assets/img/icon/Toi-Black 1.svg";
import profileIcon from "../../assets/img/icon/Profile.svg";
import { NavLink } from "react-router-dom";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./Header.scss";

const Menu = () => {
  return (
    <ul className="nav size-14">
      <li>
        <NavLink to="/design-your-own">
          Design your own
          <div />
        </NavLink>
      </li>
      <li>
        <NavLink to="/collections">
          Collection
          <div />
        </NavLink>
      </li>
      <li>
        <NavLink to="/bags">
          Bags
          <div />
        </NavLink>
      </li>
      <li>
        <NavLink to="/our-story">
          Our story
          <div />
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          News
          <div />
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          Contact
          <div />
        </NavLink>
      </li>
    </ul>
  );
};

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])
  const showDrawer = () => {
    setVisible(!visible);
  };

  const onClose = () => {
    setVisible(false);
  };
  const handleScroll = () => {
    if (window.scrollY >= 10) {
        setIsTop(false);
    } else {
        setIsTop(true);
    }
  };
  return (
    <div
      className={`header-session position-fixed w-100 ${
        !isTop ? "not-at-top" : ""
      } `}
    >
      {!visible && (
        <div className="container-fluid d-flex align-items-center h-100">
          <div className="d-flex align-items-center left-nav">
            <div className="d-none d-md-flex">
              <div className="d-flex align-items-center left-nav-item">
                <img src={globeIcon} alt="img" />
                <div className="ml-1 size-12">English</div>
              </div>
              <div className="d-flex align-items-center left-nav-item">
                <img src={profileIcon} alt="img" />
                <div className="ml-1 size-12">Login</div>
              </div>
              <div className="d-flex align-items-center left-nav-item ml-3">
                <NavLink to="/">
                  <img src={cartIcon} alt="img" />
                </NavLink>
              </div>
              <div className="d-flex align-items-center left-nav-item ml-3">
                <img src={searchIcon} alt="img" />
              </div>
            </div>
          </div>
          <div>
            <NavLink to="/">
              <img src={logo} alt="img" />
            </NavLink>
          </div>
          <div className="right-nav d-flex justify-content-end">
            <div className="desktop-menu">
              <Menu />
            </div>
            <MenuOutlined
              className="size-31 mobile-menu mr-md-5"
              onClick={showDrawer}
            />
          </div>
        </div>
      )}
      
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        visible={visible}
        onClose={onClose}
        className="side-bar"
      >
        <Menu />
      </Drawer>
    </div>
  );
};

export default Header;
