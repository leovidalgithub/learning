import React from "react";

export const EventosComponentes = () => {
	const handleClick = (event) => {
		console.log('Hola, soy un evento onClick');
		console.log('event', event);
		console.log('this', this); // <--- this undefined
	}

	return (
		<div>
			<button onClick={handleClick}>Aplástame</button>
		</div>
	)
}

export class MyClass extends React.Component {
	state = {
		Id: 123456
	}

	thas = this;

	// props --> name="Leo"
	// remember check the console 'this' and you will see the 'state' and 'props', among others

	handleClick(event) {
		console.log('Hola desde MyClass handleClick');
		console.log('event', event);
		console.log('this', this); // <--- this 'this' scope is Class context with props, refs, state, etc
		console.log('thas', this.thas);
	}

	render() {
		return (
			<div>
				<button
					onClick={event => {this.handleClick.call(this, event)} }
				>
					Click me
				</button>
			</div>
		)
	}
}