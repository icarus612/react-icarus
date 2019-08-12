import React from 'react';
import '../assets/css/application.css';
import QuoteMachine from '../components/quoteMachine/quoteMachine.js'

  
  class Quote extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<article id="contact">
				<section className="py-5 h-100vh d-flex flex-wrap overflow-hidden color-change-bg">
					<div className='container flex-wrap flex-row d-flex justify-content-center align-items-center'>
						<div className="col-12">
							<div className="card">
								<h1 className="text-center m-4">
									Your New Project Starts Here
								</h1>
								<QuoteMachine />
							</div>
						</div>
					</div>
				</section>
				
					

		</article>
		);
	}
  
}

export default Quote;
