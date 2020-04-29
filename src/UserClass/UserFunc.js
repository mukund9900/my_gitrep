import React, {Component} from 'react';

import Users from '../Users/Users';

export default class UserFunc extends Component {

    state = {
        user: [
            {name: 'Mac', age: 10},
            {name: 'zac', age: 20},
            {name: 'rac', age: 30},
        ],
        title: "Learning state"
    }
    makeMeYounge = ()=>{
        return this.setState(this.state.user.map(function (user) {
            user.age -= 10;
            return user;
        }))

    }

    render() {
        return (
            <div>
            <button onClick={this.makeMeYounge}>Make me little!!!!!!</button>
            <h1>{this.state.title}</h1>
                {this.state.user.map(function (user) {
                    return (<Users age={user.age}>{user.name}</Users>)
                })}
        </div>
        )
    }

}