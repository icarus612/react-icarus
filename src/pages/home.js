import React from 'react';
import '../assets/css/application.css';
import {dotsMovement} from '../assets/js/dots.js';
import {scrollBG} from '../assets/js/colorChanger.js';
import quest from '../assets/images/quest.png'
import daedalus from '../assets/images/daedalus.png'
import anime from '../assets/anime/lib/anime.es.js'


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

		let dotsRTL = document.getElementById("mv1");
		let dotsLTR = document.getElementById("mv2");

		dotsMovement(dotsRTL, ["first", "second"], [-6, 360], 1000, "cubicX", ["#009de4", "#06f3a0", "#f30659"]);
		dotsMovement(dotsLTR, ["third", "fourth"], [-6, 360], 1000, "cubicX", ["#009de4", "#06f3a0", "#f30659"]);
		
	}
	render(){
		return (
			<article id="home" className="overflow-hidden">
					<div  className="color-change-bg">
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
												<a className="btn btn-lg btn-purple" href="contactUs.html">Contact Us</a>
												<a className="btn btn-lg btn-purple-basic disabled" href="getQuote.html">Get Quote</a>
											</div>
										</div>
									</div>
				
								</div>
							</div>
						</section>
						<section className="overflow-visible">
							<div className="overflow-visible container">
								<div className="d-flex flex-row flex-wrap align-items-center" id="containerCheck">
									<div className="col-12">	
										<div className="throbber-bottom" id="first">
											<div className="throbber-inner"></div>
										</div>
									</div>
			
									<div className="col-12">
										<div id="mv1">
											<div className="dot"></div>
											<div className="dot"></div>
											<div className="dot"></div>
											<div className="dot"></div>
											<div className="dot"></div>
										</div>
									</div>
			
									<div className="col-12 col-md-8 col-lg-6">
										<div className="throbber-top" id="second">
											<div className="throbber-inner"></div>
										</div>
										<div className="purple-gradient d-flex flex-column p-5 text-left overflow-visible">
											<h3 className="bold">
												How we differ.
											</h3>
											<h2 className="text-blue">
												JavaScript
											</h2>
											<p>
												Javascript as far as the eye can see. These arn't some basic wordpress sites, we use JavaScript to build things from animations, using anime.js, to full sites, using things like react.js, graphQL, and Gatsby. Not understanding any of this? Thats ok, heres an easier breakdown. Basic websites use things like wordpress or html and css to build their sites, and those things are great for building basic sites. Think of them like brick, wood, paint and furnature. Like building a house, but javascript is like the electricity, and your apliances. Javascript can also use libraries, like the ones mentioned before, to build interactive animations and full sites.
											</p>
											<p className="bold">
												Check out these animated demo landing pages.
											</p>
										</div>
										<div className="throbber-bottom" id="third">
											<div className="throbber-inner"></div>
										</div>
									</div>
									<div className="col-md-4 d-lg-none"></div>
		
									<div className="col-6 col-md-4 col-lg-3">
										<div className="card">
											<a href="https://quest.devicarus.com" target="_blank" > 
												<img className="image" src={quest} />
											</a>
										</div>
									</div>
									<div className="col-6 col-md-4 col-lg-3">
										<div className="card">
											<a href="https://daedalus.devicarus.com" target="_blank" > 
												<img className="image" src={daedalus} />
											</a>
										</div>
									</div>
		
									<div className="col-12">
										<div id="mv2">
											<div className="dot"></div>
											<div className="dot"></div>
											<div className="dot"></div>
											<div className="dot"></div>
											<div className="dot"></div>
										</div>						
									</div>
								</div>
								<div className="throbber-top" id="fourth">
									<div className="throbber-inner"></div>
								</div>
							</div>
							
						</section>
					</div>
		
		
										<section className="background-dotsLI px-5 flex-nowrap d-flex flex-column pb-5 text-left overflow-visible"  id="list-dot-outer">
												
												<div className="container" id="list-dot-start">
																<div className="d-flex flex-column flex-sm-row flex-nowrap justify-content-start align-items-stretch" >
		
																		<div className='col-2 col-xl-1 image'>
																				<div className="throbber top-throbber">
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
																	<div className="col-7 step">
																		<div className="throbber">
																				<div className="throbber-bullets pulse3"></div>
																		</div>
																		<div>
																			<h4 className="description">
																					Speed
																			</h4>
		
																			<p className="description">
																				Building sits off Google Chrome's node.js runtime allows for sites to be built on the back end and use much more javascript than before. Using frameworks like react sites are built optimal for load speeds, and javascript animations load faster and are more interactive than video's or gif's. 
																			</p>
																		</div>
																	</div>
		
																	<div className="col-7 step">
																		<div className="throbber">
																				<div className="throbber-bullets pulse4"></div>
																		</div>
																		<div>
																			<h4 className="description">
																					Debth
																			</h4>
		
																			<p className="description">
																					Building sites that maxamize the use of functional languages like JavaScript, and not just static HTML and CSS, can lead to more dynamic and interactive sites. This is also how more complex sites, like ecommerce or sites that require user to login's.
																			</p>
																		</div>
																	</div>
		
																	<div className="col-7 step">
																		<div className="throbber">
																				<div className="throbber-bullets pulse5"></div>
																		</div>
																		<div>
																			<h4 className="description">
																					Functionality
																			</h4>
																			<p className="description">
																				From the more complex asspects of web development (ie. ecommerce, user login, encryption and databases), to the basic nesesities, like contact forms, carousels, search bars, ect. Javascript is responsible for most if not all of your sites functionality. 
																			</p>
																		</div>
														</div>
													</div>
												</div>
										</section>		
										<section className="flex-nowrap d-flex flex-column py-5 text-left overflow-visible"  id="how-it-works">
											<div className="container d-flex flex-column flex-sm-row flex-nowrap justify-content-center align-items-stretch" >
												<h2 className="indie text-purp h1">
													How it Works
												</h2>
												<p>
													
												</p>
											</div>
										</section>				
		
				  <section className="py-5 position-relative overflow-hidden pt-5" id='contactMe'>
					<div className="container">
					  <div className="col-12 py-md-3 text-center text-white my-4">
						<h3 className="my-4 dark">
						  Like what you see? Contact us or get an online quote.
						</h3>
						<div className="d-flex flex-column flex-md-row justify-content-between align-items-around">
						  <div className="my-4 col-12 dark">
							<a className="btn btn-lg btn-primary btn-purple" href="contactUs.html">Contact Us</a>
		
							<a className="btn btn-lg btn-primary disabled btn-purple btn-disabl" href="getQuote.html">Get Quote</a>
						  </div>
						</div>
					  </div>
		
					</div>
				  </section>
				 
			
		
			</article>
		);
	}
  
}

export default Home;
