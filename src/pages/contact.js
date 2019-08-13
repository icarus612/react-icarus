import React from 'react';
import '../assets/css/application.css';
import {animateBG} from '../assets/js/colorChanger.js';
import ContactSection from './sections/contactSection.js'
class Contact extends React.Component {
	componentDidMount(){
		animateBG(".color-change-bg", ["#d8bfd8", "#DDA0DD", "#BA55D3", "#9932CC", "#4B0082", "#9370DB", "#DDA0DD"], 2000)
	}
	render(){
		return (
			<article class="color-change-bg" id="contact">
				<section class="py-5 justify-content-center align-content-center h-100vh d-flex flex-wrap overflow-hidden pt-5 container">
							<div class="col-12 col-md-10 col-lg-8 dark px-4 text-center mx-md-5 ">
								<div class="card p-5">
									<ContactSection />
								</div>
							</div>
		
				</section>
				
					

		</article>
		);
	}
  
}

export default Contact;
