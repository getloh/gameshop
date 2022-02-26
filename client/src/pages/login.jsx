import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { SERVER } from '../features/api/api';
import { setStatus } from '../features/web/webSlice';
import { db } from '../features/api/api';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
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
        const creds = {email: this.state.email,
        password: this.state.password}
        db.postLogin(creds);
    }

      render() {
        return (

        <div id="login-page">
        <h1>User Login (v2)</h1>
        <section>
            
            <form>
            <label htmlFor="email">E-Mail: </label>
              <input name="email" type="text" placeholder="email" value={this.state.email} onChange={this.handleInputChange}/>
            <label htmlFor="password">Password: </label>
              <input name="password" type="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange}/>
              {/* <input type="submit" value="Login" onClick={this.handleSubmit}/> */}
              <button onClick={this.handleSubmit}>Login</button>
            </form>
            
            
        </section>
        <br /><br /><br />

      <Link to="/signup"><p style={{textAlign: "center"}}>No account? <br /> Sign up!</p></Link>
    </div>
        );
      }
    }

//   const dispatch = useDispatch();



//   let loginURL = SERVER + "/api/login";

//   useEffect(() => {
//     let params = (new URL(document.location)).searchParams;
//     let auth = params.get("auth");
//     if (auth === "fail"){
//       dispatch(setStatus("Login Failed - Wrong credentials?"))
//     }
//     if (auth === "new"){
//       dispatch(setStatus("Account created - You may now login"))
//     }
//     return () => {
//     };
//   }, []);



//   return (
//     <div id="login-page">
//         <h1>User Login</h1>
//         <section>
            
//             <form method='POST' action="http://localhost:8000/api/login">
//             <label htmlFor="email">E-Mail: </label>
//               <input name="email" type="text" placeholder="email"/>
//               <label htmlFor="password">Password: </label>
//               <input name="password" type="password" placeholder="password"/>
//               <input type="submit" value="submit" />
//             </form>
//         </section>
//         <br /><br /><br />
//       <Link to="/signup"><p style={{textAlign: "center"}}>No account? <br /> Sign up!</p></Link>
//     </div>

//   );



// }



export default Login;
