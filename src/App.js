import React, {Component} from 'react';
import './App.css';
import NavBar from './components/navbar'
import Calculator from './components/calculator'

class App extends Component {
	state = {  }
	render() { 
		return ( 
		<div>
			<NavBar/>
			<Calculator/>
		</div>
		);
	}
	}

export default App;