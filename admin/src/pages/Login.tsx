import React , {useState} from 'react';
import {Link} from 'react-router-dom'
import { useEffect } from 'react';
import {orderProperties, userDetailType} from '../features/interfaces';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardHeader, Skeleton } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import Button from '@mui/material/Button';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

interface loginObject{
  email: string;
  password: string;
}

async function postLogin (object :loginObject) {
  try {
    const response = await fetch(`/api/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(object)
    });
    if(response.ok){
      // console.log(response);
      // const jsonResponse = await response.json();
      window.location.replace("/userdash");  // Redirect
      // return jsonResponse;
      return
    }
    throw new Error('Request failed!');
  } catch(error) {
    console.log(error);
  }
}

function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

  useEffect(() => {   
  }, [])

//   const handleChange = (event: any) => {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;

//     setPayload({
//       [name]: value
//     });
//     console.log(payload);
//   }

  

  const handleSubmit = () => {
      const payload = {
        email: email,
        password: password
      }
      postLogin(payload);
  }


  return (
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "95vh"}}>
        <Card sx={{width: "50%", height: "55vh"}}>
          <CardContent sx={{display: "flex", flexDirection: "column", p: 5}}>
          <Typography variant="h2">Login</Typography>
          <br />
          <FormControl>
          <InputLabel htmlFor="component-outlined">Email</InputLabel>
          <OutlinedInput
              name="email"
            id="component-outlined"
            value={email}
            onChange={event => setEmail(event.target.value)}
            label="Email"
          />
        </FormControl>
        <br />
        <FormControl>
          <InputLabel htmlFor="component-outlined">Password</InputLabel>
          <OutlinedInput
              name="password"
            id="component-outlined"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            label="Password"
          />
        </FormControl>
        <br />
        <Button variant="contained" onClick={handleSubmit}>Login</Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;