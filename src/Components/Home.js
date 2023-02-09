import React from "react";
import NavBar from "./NavBar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.jpg";
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return (
    <div className="home-container">
      <NavBar />

      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img  src={BannerBackground} alt="" />
        </div>
      </div>
      <div className="home-text-section">
        <h1 className="primary-heading">
          FF Construcciones. <br />
          Materiales para la construccion.
        </h1>
        <p className="primary-text">
          Consulte por presupuestos, Todos los medios de pago y materiales de
          primera calidad.
        </p>
        <button className="secondary-button">
          CONTACTO <FiArrowRight />
        </button>
      </div>
      <div className="home-image-container">
        <img className="imagenesRedondeadas" src= { BannerImage } alt="" />
      </div>
    </div>
  );
};

export default Home;
