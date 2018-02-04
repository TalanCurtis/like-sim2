import React, { Component } from 'react';
import axios from 'axios';

class Auth extends Component {
    constructor() {
        super()
        this.state = {
            inName: '',
            inPassword: '',
            error: false
        }
    }
    handleLogin(){
        console.log('Login Pushed')
        let body = {
            userName: this.state.inName,
            password: this.state.inPassword
        }
        axios.post('/api/login', body)
        .then(res=>{
            console.log('Login successful')
            this.props.history.push('/Dashboard/'+res.data[0].id)
        })
        .catch(err=>{
            console.log(err)
            this.setState({error:true})
        })
    }
    handleRegister(){
        console.log(' register pushed ')
    }

    render() {
        return (
            <div>
                {this.state.error?<h1>User name or password incorrect</h1>: null}
                <h1>Name</h1>
                <input type="text" value={this.state.inName} onChange={e=>{this.setState({inName:e.target.value})}}/>
                <h1>Password</h1>
                <input type="password" value={this.state.inPassword} onChange={e=>{this.setState({inPassword:e.target.value})}}/>
                <div>
                    <button onClick={()=>{this.handleLogin()}}>Login</button>
                    <button onClick={()=>{this.handleRegister()}} >Register</button>
                </div>
            </div>
        )
    }
}

export default Auth