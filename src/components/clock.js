import React, { Component } from 'react';
import Time from './time';

class Clock extends Component {
    constructor(props){
        super(props);

        this.state = {
            time: new Date()
        }
    
    }

    tick(){
        this.setState({
            time: new Date()
        })
    }

    componentWillMount(){
        setInterval(() => this.tick(), 1000);
    }

    render(){
        return (
            <div>
                <h1>The time is: <Time time={this.state.time}/></h1>
            </div>
        );
    }
}

export default Clock;