import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import styles from '../css/master.css'; 

export default class Master extends Component {
    constructor(props) {
        super(props);
    }

    onHandleClick() {
        browserHistory.push('/app');
    }

    render() {
        return (
            <div className={styles.page_wrap}>
                <div>Welcome to react world!</div>
                <div>{this.props.children}</div>
                <div>
                    <Link to="/home">Home</Link>
                    <Link to="/app">App</Link>
                </div>

                <div>
                    <button onClick={this.onHandleClick}>code to app</button>
                </div>
            </div>
        );
    }
}