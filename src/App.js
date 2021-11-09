import React from 'react';
import './App.css';
import Crement from './components/Crement.js';
import Mygtukas from './components/Mygtukas.js';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			val1: 5,
			val2: 25,
		};
	}
	render() {
		return (
			<div className="App">
				<div className="app-wrapper">
					<div className="apsas">
						<h1>25 + 5 Click</h1>
						<div className="wrapper">
							<div className="lengths">
								<Crement
									id="break-label"
									name2="break-length"
									name="Break Label"
									inc="break-increment"
									incVal="▲"
									val2={this.state.val1}
									dec="break-decrement"
									decVal="▼"
								/>
								<Crement
									id="session-label"
									name2="session-length"
									name="Session Length"
									inc="session-increment"
									incVal="▲"
									val2={this.state.val2}
									dec="session-decrement"
									decVal="▼"
								/>
							</div>
							<div className="clock">
								<div id="timer-label">Session</div>
								<div id="time-left">{this.state.val2}</div>
							</div>
							<div className="panel">
								<Mygtukas name="play" />
								<Mygtukas name="pause" />
								<Mygtukas name="refresh" />
							</div>
						</div>
						<h4>Nukopijuoti ir nudizaininta by</h4>
						<h5>cool jaches</h5>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
