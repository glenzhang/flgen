import React, { Component } from 'react';
import Item from './Item';
import Styles from '../assets/css/item'

export default class ItemList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className={Styles["item-list"]}>
                {this.props.items.map((item, index) =>
                    <Item
                        key={index}
                        item={item}
                        id={index}
                    />
                )}
            </ul>
        );
    }
}