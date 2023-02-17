/*
https://www.pluralsight.com/guides/how-to-show-and-hide-reactjs-components
*/
import React, { Component } from "react";

const Demo1 = class extends Component {
	constructor() {
		super();
		this.state = {
			name: "React"
		};
	}

	render() {
		return <div>This is Demo1 component</div>;
	}
}

const Demo2 = class extends Component {
	constructor() {
		super();
		this.state = {
			name: "React"
		};
	}

	render() {
		return <div>This is Demo2 component</div>;
	}
}

const Demo3 = class extends Component {
	constructor() {
		super();
		this.state = {
			name: "React"
		};
	}

	render() {
		return <div>This is Demo3 component</div>;
	}
}

export { Demo1, Demo2 as Demo2, Demo3 };