import React, { Component } from 'react';
import Styles from './index.less';

export default class Countdown extends Component {

    constructor(props) {
        super(props);

        this.remain = parseInt(this.props.remain, 10);
        this.dhMerge = this.props.dhMerge;

        this.state = {
            d: this._getDay(),
            h: this._getHour(),
            m: this._getMinute(),
            s: this._getSecond()
        }
    }

    componentDidMount() {
        if (this.remain) {
            this._interval = setInterval(this._onTick, 1000);
        }
    }

    componentWillUnmount() {
        this._stop();
    }

    _stop = () => {
        clearInterval(this._interval);
    }

    _onTick = () => {
        if (this.remain == 0) {
            this._stop();
            if (typeof this.props.onComplete == 'function') {
                this.props.onComplete();
            }
            return;
        }

        this.remain--;

        this.setState({
            d: this._getDay(),
            h: this._getHour(),
            m: this._getMinute(),
            s: this._getSecond()
        });
    }

    _getDay = () => {
        let day = parseInt(this.remain / 86400, 10);
        day = this._fillZero(day, 2);
        return day;
    }

    _getHour = () => {
        let hour = parseInt((this.remain % 86400) / 3600, 10);

        if (this.dhMerge) {
           hour = parseInt(this.remain / 86400, 10) * 24 + hour;
        }

        hour = this._fillZero(hour, 2);
        return hour;
    }

    _getMinute = () => {
        let minute = parseInt((this.remain % 3600) / 60, 10);
        minute = this._fillZero(minute, 2);
        return minute;
    }

    _getSecond = () => {
        let second = this.remain % 60;
        second = this._fillZero(second, 2);
        return second;
    }

    _fillZero = (num, digit) => {
        let str = '' + num;
        while (str.length < digit) {
            str = '0' + str;
        }
        return str;
    }

    render() {
        return (
            <span className={Styles.cd + ' cd-override'} ref={(ref) => this.root = ref}>
                {

                    !this.dhMerge && this.state.d !== '00' ?
                        <span className={'num'}><em>{this.state.d}</em><span>天</span></span>
                        :
                        null

                }
                <span className={'num'}><em>{this.state.h}</em><span>时</span></span>
                <span className={'num'}><em>{this.state.m}</em><span>分</span></span>
                <span className={'num'}><em>{this.state.s}</em><span>秒</span></span>
            </span>
        );
    }
}

