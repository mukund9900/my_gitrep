import React, {Component} from 'react';



export default class MTS extends Component{


    render(){
        return (
            <h3>Name: {this.props.children} | Designation: {this.props.des}
            </h3>
        )
    }
}