/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50">
              <div className="title">
                <h5>İletişime Geç</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Adres</h6>
                    <p>Orhaniye Mahallesi - İnegöl , Bursa</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>E-mail</h6>
                    <p>saadettin@saadettindursun.com.tr</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Telefon</h6>
                    <p>0 539 494 01 23</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="item">

              <div className="social">

              <a href="https://www.linkedin.com/in/saadettindursun/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>

                <a href="https://www.facebook.com/sado1616" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
          
                <a href="https://www.instagram.com/sadettindursun_/" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/@sadettindursun4814" target="_blank" rel="noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2023, Tüm Hakları Saklıdır 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
