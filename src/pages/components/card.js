import React from 'react';
const PulseCard = (props) => {

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
const PulseCardMobile =(props)=>{
    return (
        <div className="col-12 step mobile">
            <div className={`throbber-top mobile-${props.mobile}`}>
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
            <div className={`throbber-bottom mobile-${props.mobile}`}>
                <div className={props.pulsar}></div>
            </div>
        </div>
    )
}
export {PulseCard, PulseCardMobile};
