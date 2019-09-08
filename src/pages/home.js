import React from 'react';
import '../assets/css/application.css';
import {scrollBG} from '../assets/js/colorChanger.js';
import anime from '../assets/anime/lib/anime.es.js';
import HomeHeader from './sections/homeHeader.js'
import HomeMiddle from './sections/homeMiddle.js'
import AnimatedList from './sections/animatedList.js'
import HowItWorks from './sections/howItWorks.js'
import HomeContact from './sections/homeContact.js'
import AnimatedListMobile from './sections/animatedListMobile.js'

class Home extends React.Component {

	constructor(props){
		super(props);
		this.state ={
			dotslist: (window.innerWidth > 700 ? <AnimatedList /> : <AnimatedListMobile />)
		}
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
		window.addEventListener('resize', ()=>{
			this.setState({dotslist: (window.innerWidth > 700 ? <AnimatedList /> : <AnimatedListMobile />)});
		})
	}
	
	render(){
		
		return (
			<article id="home" className="overflow-hidden">
				<HomeHeader />
				<HomeMiddle />
				{this.state.dotslist}	
				<HowItWorks />			
				<HomeContact />
			</article>
		);
	}
  
}

export default Home;
