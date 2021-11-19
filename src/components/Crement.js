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
					<div
						className="my"
						id={this.props.inc}
						onClick={this.props.handleIncrease}
					>
						&#9650;
					</div>
					<div className="my" id={this.props.id2}>
						{this.props.count}
					</div>
					<div
						className="my"
						id={this.props.dec}
						onClick={this.props.handleDecrease}
					>
						&#9660;
					</div>
				</div>
			</>
		);
	}
}

export default Crement;
