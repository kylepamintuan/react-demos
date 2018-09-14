import React, { Component } from 'react';

export default props => {
    return <span>{props.time.toLocaleTimeString()}</span>
}