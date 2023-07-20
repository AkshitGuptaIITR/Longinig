import React from "react";
import styles from "./header.module.scss";
import Logo from "../../assets/company/mobile_logo.svg";
import Button from "../button";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerCont}>
        <img src={Logo} />
        <Button
          onClick={() => {
            window.location.href =
              "https://cosmofeed.com/vp/6453abd5346dc300206c1eba";
          }}
        >
          SUBSCRIBE NOW
        </Button>
      </div>
    </div>
  );
};

export default Header;
