import React from 'react';

class Mygtukas extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div
				onClick={() => {
					console.log('it was clicked: ' + this.props.name + ' to be precaise');
				}}
			>
				{this.props.name}
			</div>
		);
	}
}

export default Mygtukas;
