import React, { Component } from 'react';

class SignInForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            form: {
                email: '',
                password: ''
            }
        }
    }

    render(){
        const { email, password } = this.state.form;
        return (
            <div>
                <h1>Demo Form</h1>
                <form onSubmit={(event) => {this.handleFormSubmit(event)}}>
                    <div>
                        <label>Email </label>
                        <input type="text" name="email" value={email} onChange={ (event) => this.handleChange(event) } />   
                    </div><br/>
                    <div>
                        <label>Password </label>
                        <input type="password" name="password" value ={password} onChange={ (event) => this.handleChange(event) } />   
                    </div><br/>
                <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

    handleChange(event){
        const { name, value } = event.target;

        const { form } = this.state;

        this.setState({form: {[name]: value}});
    }

    handleFormSubmit(event){
        event.preventDefault();
        console.log('Form Submitted:', event.target);
        console.dir(event);
    }
}

export default SignInForm;