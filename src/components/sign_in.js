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

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    render(){
        const { email, password } = this.state.form;
        return (
            <div>
                <h1>Demo Form</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <div>
                        <label>Email </label>
                        <input type="text" name="email" value={email} onChange={this.handleChange} />   
                    </div><br/>
                    <div>
                        <label>Password </label>
                        <input type="password" name="password" value={password} onChange={this.handleChange} />   
                    </div><br/>
                <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

    handleChange(event){
        const { name, value } = event.target;
        const { form } = this.state;
        this.setState({form: {...form, [name]: value}});
    }

    handleFormSubmit(event){
        event.preventDefault();
        const { form } = this.state;
        console.log('Form Submitted:', form);

        this.setState( {           
            form: {
                email: '',
                password: ''
            }
        });
    }
}

export default SignInForm;