import { Component } from 'react';
import Greeting from './components/Greeting';
import Header from './components/Header';

// // export default function App(props) {
// //     return (
// //         <h1>{props.type} component</h1>
// //     )
// // }

// export default class App extends Component {
// 	render() {
// 		return <h1>{this.props.type} Component</h1>;
// 	}
// }

///////////////////////////////////////////////////////////

/*

Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug

*/

// #1
// function App() {
//     return (
//         <div>
//             <Header />
//             <Greeting />
//         </div>
//     )
// }

export default class App extends Component {
	render() {
		return (
			<div>
				<Header username="Mahmoud" />
				<Greeting />
			</div>
		);
	}
}
