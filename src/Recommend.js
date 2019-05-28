import React from 'react';

class recommend extends React.Component{
	render(){
		return(
			<div className="reccomend">
				<img className="rcmd-img" src={this.props.img} />
				<div className="recommend-box">
					<h2 className="rcmd-title">{this.props.title}</h2>
					<p className="rcmd-dsc">{this.props.dsc}</p>
				</div>
			</div>
		)
	}
}

export default recommend;