import Logo from "../../assets/company/mobile_logo.svg";
import Insta from "../../assets/icons/insta.svg";
import Telegram from "../../assets/icons/telegram.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Email from "../../assets/icons/email.svg";
import styles from "./footer.module.scss";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isDesktopOrTablet = useMediaQuery({ minWidth: 768 });
  return (
    <div className={styles.footer}>
      <div className={styles.footer_cont}>
        <div>
          <img src={Logo} className={styles.logo} />
          <div className={styles.follow}>
            <p>Follow us on</p>
            <div>
              <img
                src={Insta}
                onClick={() => {
                  window.location.href =
                    "https://www.instagram.com/the__longing/?igshid=MzRlODBiNWFlZA%3D%3D";
                }}
              />
              <img
                src={Telegram}
                onClick={() => {
                  window.location.href = "https://t.me/OM0111";
                }}
              />
              <img
                onClick={() =>
                  (window.location.href = "https://youtube.com/@kartikbansal20")
                }
                src={Youtube}
              />
            </div>
          </div>
        </div>
        <div className={styles.other_links}>
          <p>Other Links</p>
          <p
            onClick={() =>
              (window.location.href = "https://longing.co.in/#aboutSection")
            }
          >
            {" "}
            About Us
          </p>
          <p
            onClick={() =>
              (window.location.href = "https://longing.co.in/#coursesSection")
            }
          >
            Courses
          </p>
        </div>
        <div className={styles.contact_us}>
          <p>Contact Us</p>
          <div className={styles.email}>
            <img src={Email} />
            <a href="mailto: kartik@longing.co.in">kartik@longing.co.in</a>
          </div>
        </div>
        {!isDesktopOrTablet && (
          <div className={styles.rights}>
            <p>2023, Longing, All rights reserved</p>
          </div>
        )}
      </div>
      {isDesktopOrTablet && (
        <div className={styles.rights}>
          <p>2023, Longing, All rights reserved</p>
        </div>
      )}
    </div>
  );
};

export default Footer;
