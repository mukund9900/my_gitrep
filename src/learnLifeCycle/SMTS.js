import React, {Component} from 'react';

import MTS from './MTS';

export default class SMTS extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'Mukund',
            age: '24',
            des: 'SMTS',
            peers: [
                {name: 'Mac', des: 'MTS'}, {name: 'BABA', des: 'MTS'}, {name: 'PAPA', des: 'MTS'}
            ],
            org: 'Vymo'
        }
    }
    componentWillMount(){
        console.log('========================= 1');
        /*
        todo: these operation can not be done in component will mount since it get exicuted only once since state change happens it only called render

        console.log('======================= 1');
        if(this.state.peers.length > 4){
            return this.setState({des: 'Tech Lead'});
        }*/
    }
    componentDidMount(){

        /*
         it will get executed once all the constor and willmount and render and child' constuctor = > child' component will mout
        => child' render => child' did mount
         */
        console.log('========================= 2');
    }

    shouldComponentUpdate(nextProps, prevPros){

        /*
        * basicall we use this in order to force or governer the child render method once setstate is called;
        */
        return false; //will not call the child render
        return true; //will actually
    }



    addPeersToSMTS = () => {
        const mts = prompt("Please enter MTS", "Harry Potter");
        var newStatePeer = this.state.peers;
        newStatePeer.push({name: mts, des: 'MTS'});

       return this.setState({peers: newStatePeer});
    }

    render(){
        //todo Please do not call setState in render since setState will call render again
        /*
        * todo
        * since we have child component in this whole component class since the reason,
           every time render call all the child constructir, willmount, render executes

        * */
        return (
            <>
            <button onClick={this.addPeersToSMTS.bind(this)}>ADD MORE PEERS!!!</button>
            <div>
                <h1>NAME: {this.state.name}</h1>
                <h1>Designation: {this.state.des}</h1>
                <h1>Organisation: {this.state.org}</h1>
                {this.state.peers.map(function (mts) {
                    return <MTS des={mts.des}>{mts.name}</MTS>
                })}
            </div>
                </>
        )
    }

}