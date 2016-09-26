import React, {
    Component
} from 'react';

import styles from '../css/problem.css';

export default class Problem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li onClick={()=>this.props.resolvedProblem(this.props.problem.id)}
                className={this.props.problem.resolved ? styles.resolved : null}
            >
                {this.props.problem.problem}
            </li>
        );
    }
}