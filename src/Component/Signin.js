import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Redirect } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Headers from './Headers';
import SocialLogin from './SocialLogin';
// import GoogleLogin from 'react-google-login'
import {
    FormLabel,
    FormControl,
    InputGroup
  } from "react-bootstrap";
export class Signin extends Component {
    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
    }
    
    constructor(props)
{
    super(props);
    this.state={
        details:[],
        flag:0
    }

}
componentDidMount(){
    axios.get("http://localhost:3001/users").then((res)=>{
        this.setState({
             details:res.data,
        })
    })
}
validate(){
    let i= 0;
    let details=this.state.details;
    while (i <= Object.keys(details).length) {
        if (document.getElementById("email").value == '' || document.getElementById("password").value == '') {
            alert("Please fill the fields");
            break;
        }

        if ((document.getElementById("email").value == details[i].email) && (document.getElementById("password").value == details[i].password)) {
            this.setState({flag:1})
            // alert("Login Succcessfully");
            document.getElementById("email").value = ''
            document.getElementById("password").value = '';
            break;
        }
        else {
            console.log("no")
            i++;
            if (i == Object.keys(details).length) {
                alert("Your Credientials Does not match please enter correct details");
                break;
            }
        }
    }
  

}


render() {
        return (
            <>
            
            <div>
                <Headers/>
                 <Box
                    component="form"
                    sx={{
                        '& > :not(style)': {
                            my: '1.5rem',
                            mx: '10rem',
                            width: '100ch'
                        }
                    }}
                    autoComplete="off"
                >
                <InputGroup className="mb-3">
          <FormLabel name="email">Email ID = </FormLabel>
          <FormControl name="email" id="email"  />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormLabel name="password">Password = </FormLabel>
          <FormControl name="password" id="password"  />
        </InputGroup>
                    <Button className="mb-5" variant="contained" onClick={() => this.validate()}>LOG IN</Button>
                    <SocialLogin/>
                    <br/>
                    <Link to="/signup">Register Here</Link>
                </Box>
                {console.log(this.state.details)}
                {this.state.flag==1 && <Redirect to ="/home"/>}
            </div>
            
            </>
        )
    }
}

export default Signin