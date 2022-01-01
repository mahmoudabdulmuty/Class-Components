import { Component } from 'react';

// export default function App(props) {
//     return (
//         <h1>{props.type} component</h1>
//     )
// }

export default class App extends Component {
	render() {
		return <h1>{this.props.type} Component</h1>;
	}
}
