import React, {Component} from 'react';
import RESULT from '../Result';



// basic button functionality


export default class  Button extends Component{

    // clickHandle = ()=>{
    //
    //     if(this.props.children === '+'){
    //         this.setState({operator: this.props.children});
    //     }
    //     else if(!this.state.preVal){
    //         this.setState({preVal: this.props.children})
    //     }
    //     else{
    //         if(this.props.children !== '=') {
    //             this.setState({currentVal: this.props.children})
    //         }
    //     }
    //
    //
    //     if(this.props.children === '='){
    //
    //         let resultele = parseInt(this.state.preVal)||0 + parseInt(this.state.currentVal)||0;
    //
    //         this.setState({result: resultele});
    //         this.setState({
    //             preVal : '',
    //             currentVal: '',
    //             operator: ''
    //         })
    //     }
    //
    //     console.log('================= state >',this.state);
    // }


render() {
        console.log('===============>>>>')
    return (
        <div>
        <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
        <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
    <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
    <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


    <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
    <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
    <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
    <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

    <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
    <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
    <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
    <button name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>


<button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
    <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
    <button name="/" onClick={e => this.props.onClick(e.target.name)}>/</button><br/>
        </div>
)
}

}
