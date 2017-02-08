import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HomeCreator from '../redux/actions/home';
import Home from '../components/Home';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { actions } = this.props;
        actions.getHomeText('Fanli');
    }

    render() {
        return <Home text={this.props.home.text} />;
    }
}

function mapStateToProps(state) {
    return {
        home: state.home
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(HomeCreator, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
