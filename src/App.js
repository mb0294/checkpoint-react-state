import React, { Component } from 'react';

import './App.css';
import Profil from './profile/Profile';


class App extends Component {
  state = {
    fullname: 'Mehdi Bouzghaya',
    profession: 'Manager',
    imgprofil: './me.jpg',
    counter: 0
}

  render() {
    return  (
    <div>
    <button onClick={()=>this.setState({show:!this.state.show})} >   {this.state.show?"Hide":"Show"} </button>
       {this.state.show? <Profil/> :null}

       </div>

    );
  }
}
  export default App;
