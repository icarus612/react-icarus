import React from 'react';
import anime from '../../assets/anime/lib/anime.es.js';
export default class Throbber extends React.Component {
    constructor(props){
		super(props);
		this.state ={
            classes: '',
        }
        this.where = this.where.bind(this);
    }
    where(){
        if (this.props.bottom) this.classes = 'throbber-bottom ';
        if (this.props.top) this.classes = 'throbber-top ';
        this.classes += `${this.props.mobile}-m` 
        return this.classes
    }
	componentDidMount(){
        anime({
			targets: `.throbber-inner`,
			scale: .5,
			border: "2px",
			easing: "easeInCubic",
			direction: "alternate",
			loop: true,
			duration: 1500,
		})
       
	}
	render(){
		return (
            <div className={this.where()} id={this.props.id}>
                <div className="throbber-inner"></div>
            </div>
        )
    }
}