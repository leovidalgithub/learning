/*
https://www.pluralsight.com/guides/how-to-show-and-hide-reactjs-components
*/
import React, { Component } from 'react';
import { Demo1, Demo2, Demo3 } from './HidingComponentsChilds';

export default class HidingComponentsParent extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			showHideDemo1: false,
			showHideDemo2: true,
			showHideDemo3: false
		};
		// this.hideComponent = this.hideComponent.bind(this);
	}

	toggleComponent(name) {
		switch (name) {
			case 'showHideDemo1':
				this.setState({ ...this.state, showHideDemo1: !this.state.showHideDemo1 });
				break;
			case 'showHideDemo2':
				this.setState({ ...this.state, showHideDemo2: !this.state.showHideDemo2 });
				break;
			case 'showHideDemo3':
				this.setState({ ...this.state, showHideDemo3: !this.state.showHideDemo3 });
				break;
			default:
				break;
		}
	}

	render() {
		const { showHideDemo1, showHideDemo2, showHideDemo3 } = this.state;
		return (
			<div>
				{showHideDemo1 && <Demo1 />}
				<hr />
				{showHideDemo2 && <Demo2 />}
				<hr />
				{showHideDemo3 && <Demo3 />}
				<hr />
				<div>
					<button onClick={() => this.toggleComponent('showHideDemo1')}>
						{showHideDemo1 ? 'Hide' : 'Show'} Demo1 component
					</button>
					<button onClick={() => this.toggleComponent('showHideDemo2')}>
						{showHideDemo2 ? 'Hide' : 'Show'} Demo2 component
					</button>
					<button onClick={() => this.toggleComponent('showHideDemo3')}>
						{showHideDemo3 ? 'Hide' : 'Show'} Demo3 component
					</button>
				</div>
				<hr />
			</div>
		);
	}
}