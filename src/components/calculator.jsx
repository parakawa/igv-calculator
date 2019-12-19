import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import LetterAmount from './letterAmount'

class Calculator extends Component {
    state = {  }
    render() { 
        return ( 
            <Form className='calculator'>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Subtotal</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">IGV (18%)</label>
                    <input type="text" className="form-control" disabled/>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Total</label>
                    <input type="text" className="form-control" inputmode="numeric" pattern="[0-9]*"/>
                </div>
                <LetterAmount/>
                <Button type="submit">
                    Nueva operación
                </Button>
            </Form>
        );
    }
}

export default Calculator;