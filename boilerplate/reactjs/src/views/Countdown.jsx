import React, {Component} from 'react';
import Countdown from '../fmu/countdown';

export default class CountdownView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ padding: '100px' }}>
                <div>
                    <p>正常情况</p>
                    <Countdown
                        remain={1000000}
                        dhMerge={false}
                        onComplete={
                            () => {
                                console.log('countdown complete');
                            }
                        }
                        />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <p>天和小时合并</p>
                    <Countdown
                        remain={1000000}
                        dhMerge={true}
                        onComplete={
                            () => {
                                console.log('countdown complete');
                            }
                        }
                        />
                </div>
            </div >
        );
    }
};
