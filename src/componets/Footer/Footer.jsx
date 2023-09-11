import React from "react";
import "./Footer.css";
import fb from "../../assets/fb.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AiTwotonePhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { BsSignpostFill } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <hr></hr>
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <Link to="/">
              <img src={logo} alt="" width={"80px"} height={"30px"} />
            </Link>
           
              <Link to="/">
                {" "}
                <p>Ana Sayfa</p>{" "}
              </Link>
            

           
              <Link to="menu">
                <p>Menü</p>
              </Link>
            

           
              <Link to="profile">
                <p>Profilim</p>
              </Link>
            

           
              <Link to="basket">
                <p>Sepetim</p>
              </Link>
            
          </div>
          <div className="sb_footer-links_div">
            <h4>Hakkımızda</h4>
            <div className="sb_footer-links_divdiv">
              <h3>Hem lezzetli hem hızlı sipariş için Pizzy.</h3>
              <BsSignpostFill />
              <h3>
                Akdeniz Üniversitesi Antalya Teknokent Konyaaltı/Antalya
              </h3>
              <GrMail />
              <h3>pizzy@gmail.com</h3>
              <AiTwotonePhone />
              <h3> 0532 000 1234</h3>
            </div>
          </div>
          <div className="sb_footer-links_div">
            <h4>Konum</h4>

            <div className="google-map-code">
              <iframe
                className="google-maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25524.751892726163!2d30.606837272644032!3d36.90006013642674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c391467e99891d%3A0xed3f2d6adc507fb3!2zU29mdGFseWEgWWF6xLFsxLFtIEx0ZC4gxZ50aS4!5e0!3m2!1sen!2str!4v1692102267203!5m2!1sen!2str"
                title="Konum"
                width="220"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
          <div className="sb_footer-links_div">
            <h4>Sosyal Medya</h4>
            <div className="socialmedia">
              <p>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={fb} alt="" />
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={insta} alt="" />
                </a>
              </p>
              <p>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twitter} alt="" />
                </a>
              </p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="sb_footer-bellow">
          <div className="sb_footer-copyright">
            <p>@{new Date().getFullYear()} Pizzy. Bütün hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
