import React, { Component } from 'react';
import {Switch,BrowserRoute,Route, Link} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Sumario from './Sumario';
import Capapai from './Capapai';
import Rodape from './Rodape';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Sumario/>
        
          <Capapai/>
        

        <Rodape/>
  
      </div>
      
    );
  }
}

export default App;
