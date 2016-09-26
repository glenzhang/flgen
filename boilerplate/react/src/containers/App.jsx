import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ProlemActionCreator from '../actions';
import AddProblem from '../components/AddProblem.jsx';
import ProblemList from '../components/ProblemList.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { actions } = this.props;
        // 异步加载数据
        actions.fetchProblem();
    }

    render() {
        let { dispatch, problems, actions } = this.props;
        return (
            <div>
                <div>
                    <AddProblem
                        onAddClick={actions.addProblem}
                        />
                    <ProblemList
                        problems={problems}
                        {...actions}
                        />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        problems: state.problems
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ProlemActionCreator, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
