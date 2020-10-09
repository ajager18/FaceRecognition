import React from 'react';
import {Component} from 'react';

class SignIn extends Component {
  constructor(){
    super()
    this.state={
      email:'',
      password:''
    }
  }

  onSigninEmailChange = (event)=>{
      this.setState({email:event.target.value});
  }

  onSigninPasswordChange = (event)=>{
      this.setState({password:event.target.value});
  }

  onSigninButtonSubmit = () =>{
    fetch('http://damp-savannah-23447.herokuapp.com/signin',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          email:this.state.email,
          password:this.state.password
        })
    }).then(res=>res.json()).then(user=>{
      if (user[0].id) {
        this.props.loadUser(user);  
        this.props.onRouteChange('home');
      } 
      }
    );
  }


  render () {
	return (
<main className="pa4 black-80 center">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
        <input onChange={this.onSigninEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
        <input onChange={this.onSigninPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="">
      <input onClick={this.onSigninButtonSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Sign in"/>
    </div>
  </div>
</main>
		)
  }
}

export default SignIn;