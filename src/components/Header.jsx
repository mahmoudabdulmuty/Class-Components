// #2
// function Header(props) {
// 	return (
// 		<header>
// 			<p>Welcome, {props.username}!</p>
// 		</header>
// 	);
// }

import { Component } from 'react/cjs/react.development';

export default class Header extends Component {
	render() {
		return (
			<header>
				<p>Welcome, {this.props.username}!</p>
			</header>
		);
	}
}
