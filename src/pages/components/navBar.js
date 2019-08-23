import React from 'react';
import IndexRoutes from '../../routes.js';

let NavBar = (props)=> {
    let toggle = ()=> {
        let linksEl = document.querySelector('.narrowLinks');
        if (linksEl.style.display === 'block') {
                  linksEl.style.display = 'none';
              } else {
                  linksEl.style.display = 'block';
              }
    }
    return (
        <navbar>
            <nav>
            <div className="d-flex flex-row justify-content-end align-items-center">
                    <div className="d-flex flex-row justify-content-around align-items-center col-8 col-md-6 col-lg-4">
                        <a href="/">Home</a>
                        <a href="/about">About Us</a>
                        <a href="/portfolio">Portfolio</a>
                        <a href="/contact-us">Contact Us</a>
                        <a href="/get-quote">Get Quote</a>
                    </div>
                </div>
            </nav>
        </navbar>
       
    )
}
export default NavBar;