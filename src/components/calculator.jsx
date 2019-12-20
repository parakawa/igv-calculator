import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import LetterAmount from './letterAmount'

class Calculator extends Component {
    render() { 
        return ( 
            <Form className='calculator'>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Subtotal</label>
                    <input 
                        type='number' 
                        inputMode="numeric" 
                        pattern="[0-9]*" 
                        className="form-control"  
                        onKeyPress={this.isDecimal} 
                        value={this.props.calculatorData.subtotal} 
                        onChange={this.props.onChangeSubtotal}/>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">IGV (18%)</label>
                    <input type="text" value={this.props.calculatorData.igv} className="form-control" disabled/>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Total</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        inputmode="numeric" 
                        pattern="[0-9]*"                        
                        value={this.props.calculatorData.total} 
                        onChange={this.props.onChangeTotal}
                        />
                </div>
                <LetterAmount/>
                <Button type='submit' onClick={this.props.newOperation} >
                    Nueva operación
                </Button>
            </Form>
        );
    };
    isDecimal(evt) {
        // console.log('evt', evt.target.value);
        // console.log('which', evt.target.which)
        // if ((evt.which !== 46 || evt.value.indexOf('.') !== -1) && (evt.which < 48 || evt.which > 57)) {
        //     //event it's fine
    
        // }
        // var input = evt.value;
        // if ((input.indexOf('.') !== -1) && (input.substring(input.indexOf('.')).length > 2)) {
        //     return false;
        // }
    }

}

export default Calculator;