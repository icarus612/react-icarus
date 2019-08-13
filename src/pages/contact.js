import React from 'react';
import '../assets/css/application.css';
import {animateBG} from '../assets/js/colorChanger.js';
import InfoForm from '../components/quoteMachine/infoForm.js'
class Contact extends React.Component {

	constructor(props){
		super(props);
		this.state={
			name: props.name,
			phone: props.phone,
			email: props.email,
			message: props.message
		}
	}
	componentDidMount(){
		animateBG(".color-change-bg", ["#d8bfd8", "#DDA0DD", "#BA55D3", "#9932CC", "#4B0082", "#9370DB", "#DDA0DD"], 2000)
		

	}
	storeInfo(info){
        this.setState({...info});
    }
	render(){
		return (
			<article id="contact">
				<section class="py-5 justify-content-center align-content-center h-100vh d-flex flex-wrap overflow-hidden pt-5 color-change-bg">
							<div class="col-12 col-md-10 col-lg-8 dark mx-4 text-center mx-md-5 container">
								<div class="card">
									<h1 class="my-4">
										Your New Project Starts Here
									</h1>
								
									<InfoForm value={this.state} onChange={this.storeInfo} buttonName='Contact Us' header="Contact us to learn more, online quote builder comming soon."/>								</div>
							</div>
		
				</section>
				
					

		</article>
		);
	}
  
}

export default Contact;
