import React, {Component} from 'react';
import TogglePanel from '../fmu/togglepanel';

export default class TogglePanelView extends Component {

    constructor(props) {
        super(props);
    }

    onClick = () => {
        this.refs.getTogglePanel.toggle()
    }

    onClick1 = () => {
        this.refs.getTogglePanel1.toggle()
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick}>Toggle</button>
                <button onClick={this.onClick1}>Toggle1</button>

                <TogglePanel mask={true} direction='left'  ref='getTogglePanel'>
                    <div style={{width:'100%', height: '200px', backgroundColor: '#fff'}}>TogglePanel 1</div>
                </TogglePanel>

                <TogglePanel mask={true} direction='up'  ref='getTogglePanel1'>
                    <div style={{width:'100%', height: '200px', backgroundColor: '#fff'}}>TogglePanel 2</div>
                </TogglePanel>

            </div>
        );
    }
}