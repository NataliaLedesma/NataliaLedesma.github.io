import React from 'react'

const Contact = () => {
    return (
        <div className="contact-page-wrapper">
            <h2 className="primary-heading" >No dude en contactarse</h2>
            <h2 className="primary-heading" >Nos comunicaremos con usted a la brevedad</h2>
            <div className="contact-form-container">
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Telefono" />
                <input type="text" placeholder="email@sumail.com" />
                <button 
                className="secondary-button">Enviar</button>

            </div>

        </div>
    )
}

export default Contact