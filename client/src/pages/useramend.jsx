import React from 'react';
import {Link} from 'react-router-dom'
import { db } from '../features/api/api';

const cookies = document.cookie;
let userId = cookies
.split('; ')
.find(row => row.startsWith('user_id='))
.split('=')[1];


class Useramend extends React.Component {
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
            user_id: userId,
            email: this.state.email,
            password: this.state.password,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            address: this.state.address,
            postcode: this.state.postcode,
        }
        db.userAmend(creds);
    }

    

      render() {
            return (

                <div id="useramend-page">
                <h1>Change user info</h1>
                <section>
                    Enter a value into the below fields to change info, leave blank if no change wanted.
                    <form>
                    <input type="hidden" name="_method" value="put" />
                      <label htmlFor="email">E-Mail: </label>
                        <input name="email" type="text" placeholder="email" value={this.state.email} onChange={this.handleInputChange}/>
                      <label htmlFor="password">Password: </label>
                        <input name="password" type="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange}/>
                      <label htmlFor="firstname">Firstname: </label>
                        <input name="firstname" type="text" placeholder="firstname" value={this.state.firstname} onChange={this.handleInputChange}/>
                      <label htmlFor="lastname">Lastname: </label>
                        <input name="lastname" type="text" placeholder="lastname" value={this.state.lastname} onChange={this.handleInputChange}/>
                      <label htmlFor="address">Address: </label>
                       <input name="address" type="text" placeholder="address" value={this.state.address} onChange={this.handleInputChange}/>
                      <label htmlFor="postcode">Postcode: </label>
                        <input name="postcode" type="text" placeholder="postcode" value={this.state.postcode} onChange={this.handleInputChange}/>

                    </form>
                    <div id="useramend-lower">
                    <button onClick={this.handleSubmit}>Amend Info</button>
                    </div>
        
                    {/* <button onClick={test}>TEST</button> */}
                </section>
        
            </div>
            );
    }
}

export default Useramend;
