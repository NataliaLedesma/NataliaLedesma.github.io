import React from 'react';
import ChooseMeals from '../src/Assets/choose-image.png';
import DeliveryMeals from '../src/Assets/delivery-image.png';
import Documento from '../src/Assets/documento.png';



const Work = () => {

    const workInfoData = [
        {
            image: Documento,
            title: "MATERIALES",
            text: "Solicite el catálogo de materiales.",
        },
        {
            image: ChooseMeals,
            title: "RETIRO",
            text: "Encuentrenos en insertar dirección.",
        },
        {
            image: DeliveryMeals,
            title: "ENVIOS",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },



    ];
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">SERVICIOS</p>
                <h1 className="primary-heading">NUESTROS SERVICIOS</h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                    elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                </p>
            </div>
            <div className="work-section-bottom">
                {workInfoData.map((data) => (
                    <div className="work-section-info" key={data.title}>
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Work;