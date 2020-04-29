import React , {Component}from 'react'

import RESULT from './Result';
import KEYPAD from './buttons/BUTTON'




export default class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
            this.setState({
                result: (eval(this.state.result) || "" ) + ""
            })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    <RESULT result={this.state.result}/>
                    <KEYPAD onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}