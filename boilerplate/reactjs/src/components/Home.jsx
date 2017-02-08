import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import Styles from '../assets/css/home'

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    // onHandleClick() {
    //     browserHistory.push('/app');
    // }
    
    render() {
        return (
            <div className={Styles.wrap}>
                <h1>Welcome To React@{this.props.text}</h1>
                <section className={"catalog"}>
                    <h6 className={"title"}>Widget</h6>
                    <ul>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/countdown'>Countdown</Link></li>
                        <li><Link to='/togglepanel'>TogglePanel</Link></li>
                        <li><Link to='/faxian'>FaXian</Link></li>
                    </ul>
                </section>
            </div>
        );
    }
}


