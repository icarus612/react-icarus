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

class PortfolioCard extends React.Component {
    constructor(props){
        super(props);
        this.cardOpen = this.cardOpen.bind(this);
        this.state = {
            cardDisplay: "none",
        }
    }
    cardOpen = (e) => {
        this.setState({cardDisplay: (this.state.cardDisplay == "none" ? "block" : "none")});
    }
   
    render(){
        return (
            <div className="col-12 col-md-4 col-xl-3 p-2 m-0" >
                <div className='portfolio-card' id={this.props.cardName} >
                    <img src={this.props.image} onClick={this.cardOpen} className='portfolio-img-cover' />
    
                    <div className="modal" onClick={this.cardOpen} style={{display: this.state.cardDisplay}}>
                        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
                            <div className="col-12 col-md-6 align-center">
                                <img src={this.props.image} class="modal-img"/>
                            </div>
                            <div className="col-12 col-md-6">
                                {this.props.children}
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
    
}

export {PulseCard, PulseCardMobile, PortfolioCard};
