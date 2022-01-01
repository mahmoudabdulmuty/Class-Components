import { Component } from 'react/cjs/react.development';
// #3
// Hint: any "display logic" can be placed inside the `render`

// method before the `return` statement
// function Greeting() {
// 	const date = new Date();
// 	const hours = date.getHours();
// 	let timeOfDay;

// 	if (hours < 12) {
// 		timeOfDay = 'morning';
// 	} else if (hours >= 12 && hours < 17) {
// 		timeOfDay = 'afternoon';
// 	} else {
// 		timeOfDay = 'night';
// 	}
// 	return <h1>Good {timeOfDay} to you, sir or madam!</h1>;
// }

export default class Greeting extends Component {
	render() {
		const date = new Date();
		const hours = date.getHours();
		let timeOfDay;

		if (hours < 12) {
			timeOfDay = 'morning';
		} else if (hours >= 12 && hours < 17) {
			timeOfDay = 'afternoon';
		} else {
			timeOfDay = 'night';
		}
		return <h1>Good {timeOfDay} to you, sir or madam!</h1>;
	}
}
