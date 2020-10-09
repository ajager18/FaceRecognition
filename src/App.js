import React from 'react';
import {Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageLinkInput from './Components/ImageLinkInput/ImageLinkInput';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import 'tachyons';
import Particles from 'react-particles-js';

const particlesOption =
  {
      particles: {
        number:{
          value: 60,
          density: {
            enable:true,
            value_area:500
          }
      }
   },
        interactivity: {
          events:{
            onhover:{
              enable:true,
              mode:'repulse'
            }
          }
        }
 }


const initialstate = {
      input: '',
      imageUrl: '',
      box: {},
      isSignedIn: false,
      route: 'signin',
      user:{
        id:'',
        name:'',
        email: '',
        entries: 0,
        joined: ''
      }
    };

class App extends Component {
  constructor (){
    super()
    this.state=initialstate
    }

   loadUser = (userD) =>{
    this.setState({user:{
      id: userD[0].id,
      name: userD[0].name,
      email: userD[0].email,
      entries: userD[0].entries,
      joined: userD[0].joined
    }})
  }

  onRouteChange = (param) => {
      if (param==='home')
        this.setState({isSignedIn:true});
      this.setState({route:param})
  }


  onFocus = () => {
    document.getElementById('inp').value='';
  }

  onSignOut = () => {
     this.setState(initialstate);
    this.setState({isSignedIn:false});
    this.onRouteChange('signin');
  }

  findFaceLocation = (clardata) =>{
    const face = clardata.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      topRow: height * face.top_row,
      leftCol: width * face.left_col,
      bottomRow: height - (height * face.bottom_row),
      rightCol: width - (width * face.right_col)
    } 
  }

  displayFaceLocation = (box) => {
      this.setState({box:box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onPictureSubmit = () => {
    this.setState({imageUrl:this.state.input});
    fetch('http://damp-savannah-23447.herokuapp.com/imageurl',{
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
    .then(res=>res.json())
    .then(data=>{
      fetch('http://damp-savannah-23447.herokuapp.com/image',{
      method: 'put',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
          id: this.state.user.id
      }) 
    }).then(res=>res.json())
      .then(count=>{Object.assign(this.state.user,{entries:count})})
      this.displayFaceLocation(this.findFaceLocation(data))});
  }

  render () {
    if (this.state.route==='signin'){
       return( <div className="App f3 vh-80 dt w-100">
        <div className='dtc v-mid tc'>
      <Navigation isSignedIn={this.state.isSignedIn} SignOut={this.onSignOut} onRouteChange={this.onRouteChange} route={this.state.route} />
      <Logo />
      <Particles className= 'particles' params={particlesOption}/>
      <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        </div>
    </div>
    )}
    else if (this.state.route==='register'){
       return(<div className="App f3 vh-80 dt w-100">
        <div className='dtc v-mid tc'>
      <Navigation isSignedIn={this.state.isSignedIn} SignOut={this.onSignOut} onRouteChange={this.onRouteChange} route={this.state.route} />
      <Logo />
      <Particles className= 'particles' params={particlesOption}/>
      <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}  />
        </div>
    </div>
    )}
    else if (this.state.route==='home'){
       return(<div className="App">
      <Particles className= 'particles' params={particlesOption}/>
      <Navigation isSignedIn={this.state.isSignedIn} onSignOut={this.onSignOut} onRouteChange={this.onRouteChange} route={this.state.route} />
      <Logo />
      <Rank name={this.state.user.name} entries={this.state.user.entries} />
      <ImageLinkInput onfocus={this.onFocus} onInputChange={this.onInputChange} onPictureSubmit={this.onPictureSubmit} />
      <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box} />
    </div>
    )}
   ;
}
}

export default App;
