/*
#1 import React from "react";

const Team = (props) => {
  return (
    <div>
      <About username={props.name} 
      role={props.role}
      age={props.age}/>
      <Social fb={props.facebook}/>
      <hr/>
    </div> 

  );
}

const About = (props) => {
  return(
    <div>
      <h2>Hello, I'm {props.username}</h2>
      <h3>I'm a {props.role}</h3>
      <h3>I'm {props.age} Years.</h3> 
    </div>
  );
}
// const Welcome = (props) => {
//   return(
//     <div>
//       <h2>Welcome {props.name}</h2>
//       <h3>I have {props.age} Years.</h3>
//       </div>
//   );
// }

const Social = (props) => {
  return(
    <div>
      <a href={props.fb}> Facebook</a>
      <a>| LinkedIn </a>
      <a>| Youtube </a>
    </div>

  );
}
function App(){
  return(
    <div>
      //{<Welcome name="Dayanna" age="27"/>}
      <h1>Know our team:</h1>
      <Team name="Dayanna" role="Coding" age="27"
      facebook="https://facebook.com"/>
      <Team name="Janet" role="Designer" age="30"
      facebook="https://facebook.com"/>
        <Team name="Amanda" role="Front-end" age="24"
      facebook="https://facebook.com"/>
    </div>
  );
}
export default App;

//components 

import React, { Component } from 'react';

class Team extends Component {
    render(){
      return(
        <div>
          <About name={this.props.name} role={this.props.role} age={this.props.age}/>
          /* <Social/> */
        //<hr/>
        //</div>
      
      // #2 <div>
      //   <h2> Hello. I'm {this.props.name}. </h2>
      //   <h2> Role: {this.props.role} .</h2>
      //   <h2> I'm {this.props.age} Years.</h2>
      // </div>
     // );
    //}
//}
/*
class About extends Component{
  render(){
    return(
      <div>
      <h2> Hello. I'm {this.props.name}. </h2>
      <h2> Role: {this.props.role} .</h2>
      <h2> I'm {this.props.age} Years.</h2>
    </div>
    );
  }
}

// const Social = () => {
//   return(
//     <div>
//     <a>Facebook</a>
//     <a>LinkedIn </a> 
//     </div>
//   );
// }
function App(){
  return(
    <div>
      <h1>Know our team:</h1>
      <Team name="Dayanna" role="Coding" age="27"/>
      <Team name="Janet" role="Marketing" age="30"/>
    </div>

  );
}

export default App;


//STATES
import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Mateus',
      contador: 0
    };
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }
aumentar ()
{
  let state = this.state;
  state.contador += 1;
  this.setState(state);
}
diminuir ()
{
  let state = this.state;
  if (state.contador === 0){
    alert('This is the end!');
    return;
  }
  state.contador -= 1;
  this.setState(state);
}
  render() {
      return(
     <div> 
        <h1>contador</h1>
              {this.state.name} 
            <h3>
        <button onClick={this.diminuir}> - </button>
           {this.state.contador}
        <button onClick={this.aumentar}> + </button>
        </h3>       
      </div>
    );
  }
}
export default App;

//ciclo de vida
import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      time: '00:00:00'
    };
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({ time : new Date().toLocaleTimeString ()})
    }, 1000);
  }

  componentDidUpdate(){
    console.log('Comment');
  }
//  shouldComponentUpdate(){true of false} > componentWillUpadate()
  render () {
    return(
      <div>
        <h1>My project {this.state.time}</h1>
      </div>
    );
  }
}
export default App; 

//Exercise Components

import React, { Component } from 'react';
import Membro from '/Users/don/Desktop/reactjs/system/myapp/src/Components/Membro';

class App extends Component {
  render(){
    return(
      <div>
          <Membro name="guest"/>
      </div>
    );
  }
}

export default App;

//conditional render

import react, { Component } from 'react';

class App extends Component{

    constructor(props){
    super(props);
    this.state = {
      status: false
    };
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }
  logout(){
    this.setState({status: false});
  }
  login(){
    this.setState({status: true});
  }
  render(){
    return(
      <div> 
        {this.state.status ?
        <div> 
            <h2>Welcome to the System</h2>
           <button onClick={this.logout}>Log out here</button> 
        </div> :
        <div>
            <h2>Welcome Guest</h2> 
            <button onClick={this.login}>Login here</button> 
        </div>
        }
      </div>
    );
  }
}

export default App;

//trabalhando com listas.

// RETORNAR A ESSA AULA TRABALHANDO COM LISTAS

error = item nao esta definido.
Buscar solucao de importar minha pasta Components/Feed de maneira compactada

import React, { Component } from 'react';
import Feed from '/Users/don/Desktop/reactjs/system/myapp/src/Components/Feed/index.js'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id:1,username: 'Dayanna', likes:100, comments:212},
        {id:2, username: 'Janet', likes: 120, comments: 24},
        {id:3,username: 'Hellen', likes:30, comments:2},

      ]

    };
  }
  render(){
    return(
      <div>
        {this.state.feed.map((item)=>{
          return(
          <Feed/>
          );
        })}

      </div>
    );
  }
}

export default App;

*/