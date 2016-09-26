import React, { Component } from 'react';
import Problem from './Problem.jsx';

export default class ProblemList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.problems.map((problem, index) => 
                    <Problem 
                        key={index}
                        problem={problem}
                        resolvedProblem={this.props.resolvedProblem}
                    />
                )}
            </ul>
        );
    }
}