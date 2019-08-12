import React from 'react';

export default class FrontEndNeeds extends React.Component{
    constructor(props){
        super(props);
        props= this.props.value;
        this.state= {
            option1: props.option1,
            option2: props.option2,
            option3: props.option3,
            option4: props.option4,
            option5: props.option5,
			option6: props.option6,
            subtotal: 0,
        }
        this.update = this.update.bind(this);
    }
    componentWillUnmount(){
		this.props.onChange(this.state)
	}
    update(e){
        let option = `${e.target.id}`; 
        this.setState({
            [option]: !this.state[option],
            subtotal: this.state[option] ? this.state.subtotal - Number(e.target.value) : this.state.subtotal + Number(e.target.value),
        });        
    }
    render(){
        return (

            <form className="d-flex flex-column flex-wrap flex-md-row justify-content-center align-items-around">
                <h3>Front End Needs</h3>
                <div>
                    <input className="m-2" type="checkbox" id="option1" value={100} onClick={this.update} checked={this.state.option1} />
                    <label >
                        Professionally Written Content
                    </label>
                </div>
                <div>
                    <input className="m-2" type="checkbox" id="option2" value={100} onClick={this.update} checked={this.state.option2} />
                    <label>
                        Events Page
                    </label>
                </div>
                <div>
                    <input className="m-2" type="checkbox" id="option3" value={100} onClick={this.update} checked={this.state.option3} />
                    <label>

                    </label>
                </div>
                <div>
                    <input className="m-2" type="checkbox" id="option4" value={100} onClick={this.update} checked={this.state.option4} />
                    <label>

                    </label>
                </div>
                <div>
                    <input className="m-2" type="checkbox" id="option5" value={100} onClick={this.update} checked={this.state.option5} />
                    <label>

                    </label>
                </div>
                <div>
                    <input className="m-2" type="checkbox" id="option6" value={100} onClick={this.update} checked={this.state.option6} />
                    <label>

                    </label>
                </div>
            </form>
        )
    }
}
    