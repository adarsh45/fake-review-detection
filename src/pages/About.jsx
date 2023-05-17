import React from "react";
import ManasiLohare from "../assets/manasi-lohare.jpg";
import MrunalBadade from "../assets/mrunal-badade.jpg";
import ShrutiGaware from "../assets/shruti-gaware.jpg";
import VaishnaviHarale from "../assets/vaishnavi-harale.png";
import "./about.css";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="container p-4">
      <h2 className="h2 text-center p-4">Team Members</h2>
      <div className="row m-auto">
        <div className="img-container col-md-6">
          <img src={ManasiLohare} alt="=" />
          <p>Manasi Lohare</p>
        </div>
        <div className="img-container col-md-6">
          <img src={MrunalBadade} alt="" />
          <p>Mrunal Badade</p>
        </div>
        <div className="img-container col-md-6">
          <img src={ShrutiGaware} alt="" />
          <p>Shruti Gaware</p>
        </div>
        <div className="img-container col-md-6">
          <img src={VaishnaviHarale} alt="" />
          <p>Vaishnavi Harale</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
