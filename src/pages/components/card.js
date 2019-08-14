import React from 'react';
const Card = (props) => {

        return (
            <div className="col-7 step">
                <div className="throbber">
                    <div className={props.pulsar}></div>
                </div>
                <div>
                    <h4 className="description">
                        {props.title}
                    </h4>

                    <p className="description">
                        {props.description}
                    </p>
                </div>
            </div>
        )
    
    
}
export default Card;
