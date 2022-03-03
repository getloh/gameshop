import React from 'react';
import { db } from '../features/api/api';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          firstname: '',
          lastname: '',
          address: '',
          postcode: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    handleSubmit(event){
        const creds = {
            email: this.state.email,
            password: this.state.password,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            address: this.state.address,
            postcode: this.state.postcode,
        }
        db.postSignup(creds);
    }

      render() {
            return (

                <div id="signup-page">
                <h1>Sign up</h1>
                <section>
                
                    <form>
                        <label htmlFor="email">E-Mail: </label>
                            <input name="email" type="text" placeholder="email" value={this.state.email} onChange={this.handleInputChange}/>
                        <label htmlFor="password">Password: </label>
                            <input name="password" type="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange}/>
                        <label htmlFor="firstname">Firstname: </label>
                            <input name="firstname" type="text" placeholder="First Name" value={this.state.firstname} onChange={this.handleInputChange}/>
                        <label htmlFor="lastname">Lastname: </label>
                            <input name="lastname" type="text" placeholder="Last Name" value={this.state.lastname} onChange={this.handleInputChange}/>
                        <label htmlFor="address">Address: </label>
                        <input name="address" type="text" placeholder="Address" value={this.state.address} onChange={this.handleInputChange}/>
                        <label htmlFor="postcode">Postcode: </label>
                            <input name="postcode" type="text" placeholder="postcode" value={this.state.postcode} onChange={this.handleInputChange}/>
                        
                    </form>
                    <div id="signup-lower">
                    <button onClick={this.handleSubmit}>Signup</button>
                    </div>
                
                </section>

            </div>
            );
    }
}

export default Signup;
