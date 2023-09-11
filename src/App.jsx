import React from "react";
import Navbar from "./componets/navbar.jsx";
import { Route,Routes } from "react-router-dom";
import Home from "./componets/pages/Home.jsx"
import Basket from "./componets/pages/Basket.jsx"
import  Menu  from "./componets/pages/Menu.jsx"
import Profile from "./componets/pages/Profile.jsx"
import Footer from "./componets/Footer/Footer.jsx";
import Pizzalar from "./componets/pages/Pizzalar.jsx";
import Citircerezler from './componets/pages/Citircerezler.jsx';
import Icecekler from "./componets/pages/Icecekler.jsx";
import Popup from "./componets/Popup.jsx";

export default function App() {
  return (
    <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/basket" element={<Basket/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/menu" element={<Menu/>} />
    <Route path="/pizzalar" element={<Pizzalar/>} />
    <Route path="/citircerezler" element={<Citircerezler/>} />
    <Route path="/icecekler" element={<Icecekler/>} />
  </Routes>
  <Footer/>
  </>
  );
}
