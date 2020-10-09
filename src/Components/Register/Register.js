import React from 'react';
import {Component} from 'react';

class Register extends Component{
constructor(){
    super()
    this.state={
      email:'',
      password:'',
      name:''
    }
  }

  onRegisterEmailChange = (event)=>{
      this.setState({email:event.target.value});
  }

  onRegisterPasswordChange = (event)=>{
      this.setState({password:event.target.value});
  }

  onRegisterNameChange = (event)=>{
      this.setState({name:event.target.value});
  }

  onRegisterButtonSubmit = () =>{
    fetch('http://damp-savannah-23447.herokuapp.com/register',{
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
            name: this.state.name
        })
    }).then(res=>res.json()).then(user=>{
      if (user.id)
      {this.props.loadUser(user);
      this.props.onRouteChange('home');}
    });
  }

  render () {
	return (
<main className="pa4 black-80 center">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f5" htmlFor="name">Name</label>
        <input onChange={this.onRegisterNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name"/>
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
        <input onChange={this.onRegisterEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
        <input onChange={this.onRegisterPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="">
      <input onClick={this.onRegisterButtonSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Register"/>
    </div>
  </div>
</main>
		)
  }
}

export default Register;