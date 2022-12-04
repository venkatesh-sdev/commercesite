import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <p>Shop V Developed By Venkat </p>
      <p>Contact: venkatesh.dev.main@gmail.com</p>
      <p className={styles.FooterIcons}>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
