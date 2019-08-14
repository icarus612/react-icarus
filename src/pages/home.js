import React from 'react';
import '../assets/css/application.css';
import {scrollBG} from '../assets/js/colorChanger.js';
import anime from '../assets/anime/lib/anime.es.js';
import HomeHeader from './sections/homeHeader.js'
import HomeMiddle from './sections/homeMiddle.js'
import AnimatedList from './sections/animatedList.js'
import HowItWorks from './sections/howItWorks.js'
import HomeContact from './sections/homeContact.js'

class Home extends React.Component {

	constructor(props){
		super(props);
		
	}
	componentDidMount(){
		anime({
			targets: ".throbber-inner",
			scale: .5,
			border: "2px",
			easing: "easeInCubic",
			direction: "alternate",
			loop: true,
			duration: 1500,
		})
		scrollBG(".color-change-bg", ["#9932CC", "#4B0082", "#9370DB", "#8068D8"], 3000)
	}
	render(){
		return (
			<article id="home" className="overflow-hidden">
				<div  className="color-change-bg">
					<HomeHeader />
					<HomeMiddle />
				</div>			
				<AnimatedList />		
				<HowItWorks />			
				<HomeContact />
			</article>
		);
	}
  
}

export default Home;
