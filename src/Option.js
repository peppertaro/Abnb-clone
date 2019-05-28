import React from 'react';

class Option extends React.Component{
	render(){
		return(
			<div className="option">
				<div className="option-box">
						<img className="option-img" src={this.props.img} />
						<p className="option-text">{this.props.name}</p>
				</div>
			</div>
		)
	}
}

export default Option;