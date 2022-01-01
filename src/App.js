import { Component } from 'react';

export default class App extends Component {
	state = {
		goOut: 'Yes'
	};

	toggleGoOut() {
		// setGoOut((prevState) => {
		// 	return prevState === 'Yes' ? 'No' : 'Yes';
		// });
	}
	render() {
		return (
			<div className="state">
				<h1 className="state--title">Should I go out tonight?</h1>
				<div className="state--value" onClick={this.toggleGoOut}>
					<h1>{this.state.goOut}</h1>
				</div>
			</div>
		);
	}
}
