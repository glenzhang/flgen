import React, { Component } from 'react';
import BaseStyle from '../assets/css/base.css';

export default class Master extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>{this.props.children}</div>);
    }
}