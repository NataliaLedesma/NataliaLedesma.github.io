import React from 'react';
import AboutBackground from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/about-background-image.jpg';




const About = () => {
    return (
        <div className="about-section-container">
            <div className="about-background-image-container" >
                <img src= {AboutBackground} alt="" />

            </div>
            <div className="about-section-image-container">
                <img className="imagenesRedondeadas" src= {AboutBackgroundImage} alt="" />
            </div>
            <div className="about-section-text-container">
                <h2 className="primary-heading">
                    Cotizamos sus necesidades. 
                </h2>
                <p className="primary-text">
                    HACEMOS ENVIOS.
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">
                        Ubicación
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default About