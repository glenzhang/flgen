import React, { Component } from 'react';
import Styles from './index.less';

const transitionCssProp = "-webkit-transition";
const transformCssProp = "-webkit-transform";
const translateX = "translateX";
const translateY = "translateY";
const translateX0 = "translateX(0)";
const translateX100 = "translateX(100%)";
const translateX_100 = "translateX(-100%)";
const translateY0 = "translateY(0)";
const translateY100 = "translateY(100%)";
const translateY_100 = "translateY(-100%)";

export default class TogglePanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: false
        }

        if (this.props.mask) {
            this._appendMask();
        }

        this.direction = this._directionVerify();
    }

    componentDidMount() {
        //let root = this.root;
        //root.style = 'bottom:0; transform:translateY(100%)';
    }

    toggle() {
        this._setState();
    }

    _setState() {
        let currentStatus = !this.state.status;
        currentStatus ? this._showMask() : this._hideMask();
        this.setState({
            status: currentStatus
        });
    }

    _appendMask = () => {
        let self = this;
        let mask = document.createElement('DIV');
        mask.className = Styles.mask;
        mask.addEventListener('touchmove', function (ev) {
            ev.preventDefault();
        }, false);

        mask.addEventListener('click', function (ev) {
            self._setState();
        });

        document.body.appendChild(mask);

        this.mask = mask;
    }

    _showMask() {
        this.mask.style.display = 'block';
    }

    _hideMask() {
        this.mask.style.display = 'none';
    }

    _directionVerify() {
        let direction = this.props.direction;
        let directionArr = ['up', 'down', 'left', 'right'];
        var returnDirection = 'up';

        if (directionArr.indexOf(direction) != -1) {
            returnDirection = direction;
        }

        return returnDirection;
    }

    render() {
        return (
            <div className={Styles.tp + " " + Styles[this.direction] + " " + (this.state.status ? Styles.show : Styles.hide)}
                ref={(ref) => this.root = ref}>
                {this.props.children}
            </div>
        );
    }
}