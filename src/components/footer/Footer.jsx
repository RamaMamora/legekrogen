import React, { useState } from "react";
import { MdContactMail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

const Footer = () => {
  // State til farveændring ved klik
  const [facebookClicked, setFacebookClicked] = useState(false);
  const [instagramClicked, setInstagramClicked] = useState(false);

  return (
    <footer className={styles.footer}>
      <h3>Kundeservice</h3>
      <div className={styles.contactIconsWrapper}>
        <div className={styles.contactDetails}>
          <div className={styles.message}>
            <MdContactMail /> <p>kontakt@legekrogen.dk</p>
          </div>
          <div className={styles.phone}>
            <BsFillTelephoneFill /> <p>+45 23 45 67 89</p>
          </div>
        </div>

        <div className={styles.icons}>
          <p>Følg os</p>
          <div className={styles.socialIcon}>
            {/* Facebook-ikon */}
            <Link
              to="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={facebookClicked ? styles.clicked : styles.default}
              onClick={() => setFacebookClicked(true)} // Skifter farve ved klik
            >
              <FaFacebook />
            </Link>

            {/* Instagram-ikon */}
            <Link
              to="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={instagramClicked ? styles.clicked : styles.default}
              onClick={() => setInstagramClicked(true)} // Skifter farve ved klik
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
