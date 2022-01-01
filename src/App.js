import { Component } from 'react';

export default class App extends Component {
	state = {
		count: 0
	};

	render() {
		const add = () => {
			this.setState((prevCount) => ({ count: prevCount.count + 1 }));
		};

		const subtract = () => {
			this.setState((prevCount) => ({ count: prevCount.count - 1 }));
		};
		return (
			<div className="counter">
				<button className="counter--minus" onClick={subtract}>
					–
				</button>
				<div className="counter--count">
					<h1>{this.state.count}</h1>
				</div>
				<button className="counter--plus" onClick={add}>
					+
				</button>
			</div>
		);
	}
}
