import React from 'react';
import {dotsMovement} from '../../assets/js/dots.js';


export default class Swoosh extends React.Component {
    constructor(props){
		super(props);
		this.state ={
            classes: '',
        }
                this.where = this.where.bind(this);

    }
    where(){
        let move = document.getElementById(this.props.id);
		dotsMovement({
            target: move, 
            start: this.props.startEl, 
            end: this.props.endEl, 
            time: 1000, 
            curve: "cubicX", 
            color: ["#009de4", "#06f3a0", "#f30659"],
        });

    }
	componentDidMount(){
        this.where()
       
	}
	render(){
		return (
            <div className="col-12">
                <div id={this.props.id}>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>						
            </div>
        )
    }
}