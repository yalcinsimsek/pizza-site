import React from "react";
import "./Hero.css";
import pizza from "../../assets/pizza.png";
import { NavLink } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import { FcAlarmClock } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcInTransit } from "react-icons/fc";



import "./Hero.css";

function Hero() {
  return (
    <div className="container1">
      <div className="heroSection">
        <div className="heroSection_box">
          <div className="heroSection_box_left">
            <h1>Pizzy</h1>
            <p>Daha önce görmediğiniz </p>
            <p>LEZZET !</p>
            <NavLink to="/menu">
              <button className="btn">Sipariş Ver !</button>
            </NavLink>
          </div>
          <div className={"heroSection_box_right"}>
            <img src={pizza} alt="" width={"350px"} height={"350px"} />
          </div>
          <div className="hkyazi">
          <h3>Hakkımızda <FcAbout/></h3>
          <h3>Çalışma Saatleri <FcAlarmClock/></h3>
          <p>
          Hem lezzetli hem hızlı sipariş için Pizzy.
          </p>

          <p>
          Hafta içi : 08:00 - 21:00<br/>
          Cumartesi : 08:00 - 20:00<br/>
            Pazar : Kapalıyız<br/>
          </p>
          <h3>Ücretsiz Teslimat <FcInTransit/></h3>

          <h3>İletişim <FcAssistant/></h3>
          <p>
           Tüm siparişlerinizi kapınıza kadar ücretsiz teslim ediyoruz ! <br/>
           Hiç bir teslimat ÜCRETİ YOK !<br/>
          </p>
          <p>
           Adres : Akdeniz Üniversitesi Antalya Teknokent Konyaaltı/Antalya<br/>
            Mail : pizzy@gmail.com<br/>
           Telefon : 0532 000 1234<br/>
          </p>
          </div>
          <div className={"hkyazi_img"}><img src={arrow} alt="" width={"350px"} height={"350px"} /></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
