import React from 'react';
import './App.css';
import Crement from './components/Crement.js';
// import Counter from './components/Counter.js';

const audis = document.getElementsByTagName('audio')[0];

class App extends React.Component {
	state = {
		// isPlaying: false,
		// timer: 100,
	};

	constructor(props) {
		super(props);
		this.state = {
			breakCount: 5,
			sessionCount: 25,
			timer: 25 * 60,
			currentTimer: 'Session',
			isPlaying: false,
		};

		this.inter = undefined;
	}

	componentWillUnmount() {
		clearInterval(this.inter);
	}

	handlePlayPause = () => {
		const { isPlaying } = this.state;
		if (isPlaying) {
			this.setState({ isPlaying: false });
			clearInterval(this.inter);
		} else {
			this.setState({ isPlaying: true });
			this.inter = setInterval(() => {
				const { timer, currentTimer, sessionCount, breakCount } = this.state;

				if (timer === 0) {
					audis.play();
					this.setState({
						currentTimer: currentTimer === 'Session' ? 'Break' : 'Session',
						timer:
							currentTimer === 'Session' ? breakCount * 60 : sessionCount * 60,
					});
				} else {
					this.setState({ timer: timer - 1 });
				}
			}, 1000);
		}
	};

	handleRefresh = () => {
		this.setState({
			breakCount: 5,
			sessionCount: 25,
			timer: 25 * 60,
			isPlaying: false,
			currentTimer: 'Session',
		});
		clearInterval(this.inter);
		audis.pause();
		audis.currentTime = 0;

		console.log('refresed');
	};

	clocky = () => {
		const { timer } = this.state;
		let min = Math.floor(timer / 60);
		// let sec = timer - min * 60;
		let sec = timer % 60;
		min = min < 10 ? '0' + min : min;
		sec = sec < 10 ? '0' + sec : sec;
		return `${min}:${sec}`;
	};

	handleBreakeDecrease = () => {
		const { breakCount, isPlaying, currentTimer } = this.state;
		if (!isPlaying) {
			this.setState({
				breakCount: breakCount <= 1 ? 1 : breakCount - 1,
			});
			if (!isPlaying && currentTimer === 'Break') {
				this.setState({
					timer: breakCount <= 1 ? 60 : (breakCount - 1) * 60,
				});
			}
		}
	};

	handleBreakeIncrease = () => {
		const { breakCount, isPlaying, currentTimer } = this.state;
		if (!isPlaying) {
			this.setState({
				breakCount: breakCount >= 60 ? 60 : breakCount + 1,
			});
			console.log(currentTimer);
			if (!isPlaying && currentTimer === 'Break') {
				this.setState({
					timer: breakCount >= 60 ? breakCount * 60 : (breakCount + 1) * 60,
				});
			}
		}
	};

	handleSessionIncrease = () => {
		const { sessionCount, isPlaying, currentTimer } = this.state;
		if (!isPlaying) {
			this.setState({
				sessionCount: sessionCount >= 60 ? 60 : sessionCount + 1,
			});
			if (!isPlaying && currentTimer === 'Session') {
				this.setState({
					timer:
						sessionCount >= 60 ? sessionCount * 60 : (sessionCount + 1) * 60,
				});
			}
		}
	};

	handleSessionDecrease = () => {
		const { sessionCount, isPlaying, currentTimer } = this.state;
		if (!isPlaying) {
			this.setState({
				sessionCount: sessionCount <= 1 ? 1 : sessionCount - 1,
			});
			if (!isPlaying && currentTimer === 'Session') {
				this.setState({
					timer: sessionCount <= 1 ? 60 : (sessionCount - 1) * 60,
				});
			}
		}
	};

	render() {
		const { isPlaying, timer, breakCount, sessionCount } = this.state;

		const stilius = { color: 'red' };
		const stilius2 = { color: 'white' };

		const breakProps = {
			id: 'break-label',
			id2: 'break-length',
			name: 'Break Length',
			inc: 'break-increment',
			dec: 'break-decrement',
			count: breakCount,
			handleDecrease: this.handleBreakeDecrease,
			handleIncrease: this.handleBreakeIncrease,
		};

		const sessionProps = {
			id: 'session-label',
			id2: 'session-length',
			name: 'Session Length',
			inc: 'session-increment',
			dec: 'session-decrement',
			count: sessionCount,
			handleDecrease: this.handleSessionDecrease,
			handleIncrease: this.handleSessionIncrease,
		};

		// console.log({ ...breakProps });
		return (
			<div className="App">
				<div className="apsas">
					<h1>Super cool clock</h1>
					<div className="wrapper">
						<div className="lengths">
							<Crement {...breakProps} />
							<Crement {...sessionProps} />
						</div>
						<div className="clock">
							<div id="timer-label" style={timer < 60 ? stilius : stilius2}>
								{this.state.currentTimer}
							</div>
							<div id="time-left" style={timer < 60 ? stilius : stilius2}>
								{this.clocky()}
							</div>
						</div>
						<div className="panel">
							<div id="start_stop" onClick={this.handlePlayPause}>
								{`P${isPlaying ? 'ause' : 'lay'}`}
							</div>
							<div id="reset" onClick={this.handleRefresh}>
								Refresh
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
