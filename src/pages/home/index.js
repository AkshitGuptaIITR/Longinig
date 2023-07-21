import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import styles from "./home.module.scss";
import MobileBg from "../../assets/background/mobile_bg.svg";
import WebBg from "../../assets/background/web_bg.svg";
import Time from "../../assets/icons/time.svg";
import Risk from "../../assets/icons/risk.svg";
import Aspire from "../../assets/icons/aspire.svg";
import Learn from "../../assets/icons/learn.svg";
import Invest from "../../assets/icons/invest.svg";
import Tick from "../../assets/icons/tick.svg";
import Footer from "../../components/footer";
import BuyingStats from "../../assets/background/buying_stats.svg";
import WebBuyingStats from "../../assets/background/web_buying_stats.png";
import { useMediaQuery } from "react-responsive";
import "animate.css";
import Button from "../../components/button";
import mockup from "../../assets/background/mockup.png";

const infoCard1Content = [
  {
    img: Time,
    heading: "Time-Conscious Investors",
    content:
      "Ideal for individuals with limited time to conduct extensive market analysis. It quickly scans 500 stocks every 15 minutes, saving your valuable time while providing reliable suggestions.",
  },
  {
    img: Risk,
    heading: "Risk-Averse Traders",
    content:
      "Those who prefer to make informed and data-driven decisions can benefit from the filter's accurate analysis, helping minimize risks and enhance their overall trading strategies.",
  },
  {
    img: Aspire,
    heading: "Aspiring Traders",
    content:
      "To access expert-designed algorithms that can help you identify potential movers and gain valuable insights into trading patterns.",
  },
  {
    img: Learn,
    heading: "Learning-Oriented Individuals",
    content:
      "Joining the filter comes with a complimentary 2-hour master class, making it an excellent opportunity for individuals interested in learning more about markets and improving their market analysis skills.",
  },
  {
    img: Invest,
    heading: "Investment Enthusiasts",
    content:
      "Investors looking to maximize their investment returns can benefit from joining this filter as it offers a systematic approach to identify stocks that may experience significant movements in the short term.",
  },
];

const infoCard2Content = [
  "Continuous scanning of 500 Indian stocks data in every 15-minute.",
  "Utilises sophisticated confidential strategy for identifying potential movers.",
  "Identifies promising stocks & generates real-time stock recommendations.",
  "Real-time delivery of stocks with significant hourly movements every 15 minutes.",
];

const infoCard3Content = [
  "One month of access to an Algorithmic Trading Filter that suggests potential movers for the next hour.",
  "A free 2-Hour Master Class to guide you on effectively utilizing the filter, enhancing your trading skills, and understanding market patterns.",
  "Valuable Risk Management tips and strategies for risk management to help you make informed decisions and minimize potential losses.",
  "Continuous Improvements and enhancements to the algorithmic filter to adapt to changing market conditions and improve performance.",
  "Timely updates and real-time insights on promising stocks to help you stay ahead of market trends and potential opportunities.",
];
const Home = () => {
  const [showCont1, setShowCont1] = useState(false);
  const [showCont2, setShowCont2] = useState(false);
  const [showCont3, setShowCont3] = useState(false);
  const isDesktopOrTablet = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      if (isDesktopOrTablet) {
        if (window.scrollY > 400) {
          setShowCont1(true);
        } else {
          setShowCont1(false);
        }
        if (window.scrollY > 1000) {
          setShowCont2(true);
        } else {
          setShowCont2(false);
        }

        if (window.scrollY > 1400) {
          setShowCont3(true);
        }
      } else {
        if (window.scrollY > 600) {
          setShowCont1(true);
        } else {
          setShowCont1(false);
        }
        if (window.scrollY > 2000) {
          setShowCont2(true);
        } else {
          setShowCont2(false);
        }

        if (window.scrollY > 2500) {
          setShowCont3(true);
        }
      }
    });
  }, []);

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <img src={isDesktopOrTablet ? WebBg : MobileBg} />
            <h3>10x your market analysis</h3>
            <hr className={styles.line1} />
            <h1>
              Take your trading game to the next level, and don't miss out on
              potential gains!
            </h1>
            <h3
              style={{
                color: "rgba(255, 255, 255, 0.60)",
                marginBottom: "4px",
              }}
            >
              With our exclusive
            </h3>
            <h2>Algorithmic trading filter!</h2>
          </div>
          <div className={styles.persons}>
            <div className={styles.person1}>
              <div className={styles.person1Text}>
                <p>Designed By</p>
                <h2>Kartik Bansal</h2>
                <p>40X portfolio growth in 3 Years</p>
              </div>
            </div>
            <div className={styles.person2}>
              <div className={styles.person2Text}>
                <p>Developed and Tested By</p>
                <h2>Ishank Goyal</h2>
                <p>IIT Roorkee Alumni, Experienced in Hedge Fund and MFT</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.infoCont_1}>
          <h1>Who should Subscribe to this filter and Why?</h1>
          <div className={styles.infoCont_1_cont}>
            {showCont1 &&
              infoCard1Content.map((item, key) => {
                return (
                  <InfoCard1
                    img={item.img}
                    heading={item.heading}
                    content={item.content}
                    key={key}
                  />
                );
              })}
          </div>
        </div>

        <div className={styles.infoCont_2}>
          <h1>How it Works?</h1>
          <div className={styles.infoCont_2_Cont}>
            {showCont2 &&
              infoCard2Content.map((item, key) => {
                return <InfoCard2 content={item} number={key + 1} key={key} />;
              })}
          </div>
        </div>

        <div className={styles.infoCont_3}>
          <h1>What's Included in Your Subscription</h1>
          <div className={styles.infoCont_3_cont}>
            {showCont3 &&
              infoCard3Content.map((item, key) => {
                return <InfoCard3 content={item} key={key} />;
              })}
          </div>
          <button
            onClick={() => {
              window.location.href =
                "https://cosmofeed.com/vp/6453abd5346dc300206c1eba";
            }}
          >
            SUBSCRIBE NOW
          </button>
        </div>
        <div className={styles.buying_stats}>
          <div>
            <h1>
              Join Our Flourishing Community of Satisfied Traders - Trusted and
              Loved by Many!
            </h1>
            {isDesktopOrTablet ? (
              <div className={styles.buyBanner}>
                <h3>Don't Miss the Profit Train</h3>
                <div className={styles.buyBannerContent}>
                  <div className={styles.price}>
                    <h2>₹ 1499 /-</h2>
                    <div>
                      <p>50% off</p>
                      <p>
                        <s>₹ 3999 /-</s>
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => {
                      window.location.href =
                        "https://cosmofeed.com/vp/6453abd5346dc300206c1eba";
                    }}
                  >
                    SUBSCRIBE Now
                  </Button>
                </div>
              </div>
            ) : (
              <div
                className={`${styles.buyBanner} ${styles.mobile}`}
                style={{
                  position: "fixed",
                  bottom: 20,
                  left: 16,
                  color: "white",
                  display: "flex",
                  borderRadius: "16px",
                  border: "1px solid #4f4f4f",
                  width: "84%",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  background: "#232323",
                  alignItems: "center",
                  padding: "12px 12px",
                  zIndex: 100,
                }}
              >
                <div className={styles.buyBannerContent}>
                  <h3 style={{ fontSize: 12 }}>Don't Miss the Profit Train</h3>
                  <div
                    className={styles.price}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "90%",
                    }}
                  >
                    <h2
                      style={{
                        color: "#e2c761",
                        display: "flex",
                        fontSize: "20px",
                        justifyContent: "space-between",
                        margin: 0,
                      }}
                    >
                      ₹ 1499 /-
                    </h2>
                    <div>
                      <p style={{ margin: 0, fontSize: 8 }}>50% off</p>
                      <p style={{ margin: 0, fontSize: 12 }}>
                        <s>₹ 3999 /-</s>
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => {
                    window.location.href =
                      "https://cosmofeed.com/vp/6453abd5346dc300206c1eba";
                  }}
                  style={{
                    width: "fit-content",
                    height: "fit-content",
                    fontSize: 12,
                    padding: 10
                  }}
                >
                  SUBSCRIBE Now
                </Button>
              </div>
            )}
          </div>
          <img
            src={isDesktopOrTablet ? WebBuyingStats : mockup}
            style={{ width: !isDesktopOrTablet && "100%" }}
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const InfoCard1 = ({ img, heading, content }) => {
  return (
    <div className={`${styles.infoCard1} animate__animated animate__fadeInUp`}>
      <img src={img} alt="" />
      <h2>{heading}</h2>
      <p>{content}</p>
    </div>
  );
};

const InfoCard2 = ({ number, content }) => {
  return (
    <div className={`${styles.infoCard2} animate__animated animate__fadeInUp`}>
      <h2>0{number}</h2>
      <div className={styles.contentCont}>
        <p>{content}</p>
      </div>
    </div>
  );
};

const InfoCard3 = ({ content }) => {
  return (
    <div
      className={`${styles.infoCard3} animate__animated animate__fadeInLeft`}
    >
      <img src={Tick} />
      <p>{content}</p>
    </div>
  );
};
export default Home;
