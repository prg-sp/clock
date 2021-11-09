import React from 'react';

class Crement extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<div id={this.props.id}>
					<p> {this.props.name} </p>
					<div id={this.props.inc}>{this.props.incVal}</div>
					<div id={this.props.name2}>{this.props.val2}</div>
					<div id={this.props.dec}>{this.props.decVal}</div>
				</div>
			</>
		);
	}
}

export default Crement;
