import React, { Component } from 'react';
import { FlipTable } from './page/FlipTable';

export class Home extends Component {

	style = {
		margin: '150px 0'
	}

	render() {
		return (
			<div>
				<h1>
					Démo React
					<br/>
					<FlipTable style={this.style}/>
				</h1>
			</div>
		)
	}
} 