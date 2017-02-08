import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <Link to={`/item/${this.props.id}`}>
                    <img src={this.props.item.img} />
                    <div d={this.props.id} className="desc">
                        <h3>{this.props.item.title}</h3>
                        <div>
                            <div>{this.props.item.date}</div>
                            <div>{this.props.item.count}</div>
                        </div>
                    </div>
                </Link>
            </li>
        );
    }
}