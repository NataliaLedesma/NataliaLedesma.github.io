import React from "react";
import Plasticor from "../Assets/plasticor.jpg";
import Cacique from "../Assets/cacique.jpg";
import Cal from "../Assets/bolsa-cal-aerea-blanca.jpg";
import Bolsa from "../Assets/bolsa-3d.jpg";


const Testimonial = () => {
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">PRODUCTOS</p>
                <h2 className="primary-heading">OFRECEMOS MARCAS DE CALIDAD</h2>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                    elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                </p>
            </div>
            <div className="testimonial-section-bottom">
                <img src={Plasticor} alt="" />
                <img src={Cacique} alt="" />
                <img src={Cal} alt="" />
                <img src={Bolsa} alt="" />
                
            </div>
        </div>
    );
};

export default Testimonial;