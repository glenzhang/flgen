import React from 'react';
import styles from '../css/problem.css';

export default class AddProblem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    onKeyUp = (ev) => {
        this.setState({
            text: ev.target.value
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        return (
            <div className={styles.box}>
                <input type="text" placeholder="增加problem" onKeyUp={this.onKeyUp}/>
                <button  onClick={()=>this.props.onAddClick(this.state.text)}>Add</button>
            </div>
        );
    }
}