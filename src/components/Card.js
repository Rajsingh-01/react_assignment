import React from "react";
import './Card.css';

const Card = () => {
    return (
        <>
            <div className="Card-header">
                <div className="Card-heading">
                    <h3>Without proper training, you might:</h3>
                </div>
            </div>

            <div className="card-container">
                <div className="card">
                    <p>Struggle with complex
                        software tools
                    </p>
                </div>
                <div className="card">
                    <p>Feel stuck Withoutstructured
                        learing
                    </p>
                </div>
                <div className="card">
                    <div className="cross-icon">&times;</div>
                    <p>Miss out on monetizing your skills</p>
                </div>
            </div>
        </>
    );
};

export default Card;
