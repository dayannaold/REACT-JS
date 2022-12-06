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