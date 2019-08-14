import React from 'react';
import Button from '../components/button.js'
const HomeHeader = (props) => {
    return(
        <section className="position-relative overflow-hidden top-rounded">
            <div className="top-parallax pt-5">
                <div className="container d-flex flex-row align-items-center header-box">
                    <div className="col-12 py-md-3 text-center text-white my-4 card">
                        <h1 className="my-4">
                            Need web development? We Can Help. 
                        </h1>
                        <h2 className="my-4">
                            Scroll through to learn more about what sets apart. 
                        </h2>
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-around">
                            <div className="my-4 col-12 dark">
                                <Button simple size='lg' link="/contact-us">Contact Us</Button>
                                <Button size='lg' link="/get-quote">Get Quote</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default HomeHeader;