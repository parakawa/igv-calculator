import React, {Component} from 'react';
import './App.css';
import NavBar from './components/navbar'
import Calculator from './components/calculator'
import { IGV } from './enums'

class App extends Component {
	state = { 
		calculatorData: {
			subtotal: '',
			igv: '',
			total: ''
		}
	}
	constructor(){
		super();
		console.log('constructor-app')
		this.newOperation = this.newOperation.bind(this)
	}
	render() { 
		return ( 
		<div>
			<NavBar/>
			<Calculator 
				calculatorData={this.state.calculatorData}
				onChangeSubtotal={this.onChangeSubtotal}
				onChangeTotal={this.onChangeTotal}
				newOperation={this.newOperation}
				/>
		</div>
		);
	}
	onChangeSubtotal = (event) => {
		const subtotal = parseFloat(event.target.value)
		this.setState({
			calculatorData: {
				subtotal: subtotal,
				igv: this.twoDecimals( subtotal * IGV ),
				total: this.twoDecimals( subtotal * (1 + IGV) )
			}
		})
		console.log('evtent', event.target.value)
	}
	onChangeTotal = (event) => {
		const total = parseFloat(event.target.value)
		this.setState({
			calculatorData: {
				subtotal: this.twoDecimals(total / ( 1 + IGV)),
				igv: this.twoDecimals(total / ( 1 + IGV ) * IGV),
				total: total
			}
		})
		console.log('evtent', event.target.value)
	}	
	newOperation() {
		this.setState({
			calculatorData: {
				subtotal: '',
				igv: '',
				total: ''
			}
		})
		console.log('bkdsajk')
	}
	twoDecimals(num) {
		return (Math.round(num * 100) / 100).toFixed(2);
	}
}

export default App;