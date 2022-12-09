import React, { Component } from 'react';

class Membro extends Component{
   constructor(props){
    super(props);
    this.state = {
        name: props.name
    };
    this.login = this.login.bind(this);
}
login()
{
    this.setState({name: 'Dayanna'})
}
signout()
{
    this.setState({name:'Dayanna'})
}
    render(){
        return(
            <div>
                <h2>Welcome {this.state.name}</h2>
                <button onClick={this.login}>
                    Login
                </button>
                <button onClick={ () => this.setState({name: ''})}>
                    Sign Out
                </button>
            </div>
        );
    }
}

export default Membro;