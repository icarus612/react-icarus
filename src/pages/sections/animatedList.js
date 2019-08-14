import React from 'react';
import PulseCard from '../components/card.js';
import {animateLI} from '../../assets/js/listItem.js';

export default class AnimatedList extends React.Component {
    componentDidMount(){
        animateLI()
    }
    render(){
        return (
            <section className="background-dotsLI px-5 flex-nowrap d-flex flex-column pb-5 text-left overflow-visible"  id="list-dot-outer">
                                                                
                <div className="container" id="list-dot-start">
                                <div className="d-flex flex-column flex-sm-row flex-nowrap justify-content-start align-items-stretch" >

                                        <div className='col-2 col-xl-1 image'>
                                                <div className="throbber li-throbber-start">
                                                        <div className="throbber-inner pulse1"></div>
                                                        <div className="animated-dot mv-1"></div>
                                                        <div className="animated-dot mv-2"></div>
                                                        <div className="animated-dot mv-3"></div>
                                                </div>
                                        </div>
                                        <div className="col-10 py-5 text-left">
                                            <h2 className="">
                                                    Heres a breakdown of how it works, and why its better.
                                            </h2>
                                        </div>
                                </div>


                                <div className="d-flex flex-column flex-wrap flex-lg-nowrap justify-content-center align-items-end workflow" id="list-stage">
                                    <div className="throbber mid-throbber">
                                            <div className="throbber-bullets pulse2"></div>
                                    </div>
                                    <PulseCard 
                                        title="Speed"
                                        description="
                                        Building sits off Google Chrome's node.js runtime allows for sites to be built on the back end and use much more javascript than before. Using frameworks like react sites are built optimal for load speeds, and javascript animations load faster and are more interactive than video's or gif's. 
                                        "
                                        pulsar="throbber-bullets pulse3"
                                    />
                                    <PulseCard 
                                        title="Depth"
                                        description="
                                        Building sites that maxamize the use of functional languages like JavaScript, and not just static HTML and CSS, can lead to more dynamic and interactive sites. This is also how more complex sites, like ecommerce or sites that require user to login's.
                                        "
                                        pulsar="throbber-bullets pulse4"
                                    />
                                    <PulseCard 
                                        title="Functionality"
                                        description="
                                        From the more complex asspects of web development (ie. ecommerce, user login, encryption and databases), to the basic nesesities, like contact forms, carousels, search bars, ect. Javascript is responsible for most if not all of your sites functionality. 
                                        "
                                        pulsar="throbber-bullets pulse5"
                                    />

                    </div>
                </div>
            </section>	
        )
    }
}