import React from 'react';
import '../assets/css/application.css';
import {scrollBG} from '../assets/js/colorChanger.js';
import {PortfolioCard} from './components/card.js';
import quest from '../assets/images/quest.png';
import daedalus from '../assets/images/daedalus.png';
class Portfolio extends React.Component {

	constructor(props){
		super(props);
		
	}
	componentDidMount(){

		scrollBG(".color-change-bg", ["#9932CC", "#4B0082", "#9370DB", "#8068D8"], 3000)
	}
	render(){
		return (
			<section id="portfolio" className="container overflow-hidden">
				<div className="flex-wrap d-flex flex-row justify-content-center align-items-center" >
					<PortfolioCard image={quest} >
						<h2>
							Quest Theme
						</h2>
						<h4>
							By: Project Icarus
						</h4>
						<p>
							Words
						</p>
					</PortfolioCard>
					<PortfolioCard image={daedalus}>
						<h2>
							Daedalus Landing Page
						</h2>
						<h4>
							By: Project Icarus
						</h4>
						<p>
							Words
						</p>
					</PortfolioCard>
				</ div>
			</section>
		);
	} 
  
}

export default Portfolio;