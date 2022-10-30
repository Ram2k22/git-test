import './App.css';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './Components/MenuComponent';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return (
      <div>
        <Navbar dark color="primary">
          <div className='container'>
            <NavbarBrand href="#">React</NavbarBrand>
          </div>
        </Navbar>
        <Menu/>
      </div>
    );
  }
  
}

export default App;
