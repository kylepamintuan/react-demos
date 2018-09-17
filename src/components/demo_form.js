import React, { Component } from 'react';

class DemoForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            name: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('Form Submitted:', this.state);

        this.setState({
            email: '',
            name: '',
            password: ''
        });
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <h1>Demo Form</h1>
                <div>
                    <label>Email </label>
                    <input name="email" type="text" value={this.state.email} onChange={this.handleChange} autoComplete="off"></input>
                </div>
                <div>
                    <label>Name </label>
                    <input name="name" type="text" value={this.state.name} onChange={this.handleChange} autoComplete="off"></input>
                </div>
                <div>
                    <label>Password </label>
                    <input name="password" type="password" value={this.state.password} onChange={this.handleChange}></input>
                </div>
                <button>Submit Form</button>
            </form>
        )
    }
}

export default DemoForm;