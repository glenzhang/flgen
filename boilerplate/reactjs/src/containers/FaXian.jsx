import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FaXianActionCreator from '../redux/actions/faxian';
import ItemList from '../components/ItemList';

const elRoot = document.documentElement;

class FaXian extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getItem();
        window.addEventListener('scroll', this.handleScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, false);
    }

    handleScroll = (e) => {
        let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

        if (scrollTop >= elRoot.offsetHeight - window.innerHeight ) {
            this.getItem();
        }
    }

    getItem = () => {
        let {actions} = this.props;
        actions.fetchItems();
    }

    render() {
        let {items} = this.props;
        return (
            <div>
                <ItemList items={items} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.faxian // 这里不是state.items切记
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(FaXianActionCreator, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FaXian);