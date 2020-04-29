import React, {Component} from 'react';

const User = function (props) {
    return (
        <div> Name: {props.children} | Age: {props.age}</div>
    )

}
export default User;