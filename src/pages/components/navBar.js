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
        <nav>
            <div className="d-flex flex-row justify-content-end align-items-center">
                <div className="d-flex flex-row justify-content-around align-items-center col-12 col-md-6 col-lg-4">
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/projects-and-portfolio">Portfolio</a>
                    <a href="/get-quote">Get Quote</a>
                    <a href="/contact-us">Contact Us</a>
                </div>
            </div>
        </nav>
       
    )
}
export default NavBar;