import React, { Component } from 'react';
import {Switch,BrowserRoute,Route, Link} from 'react-router-dom';
import './App.css';
import Header from './../components/Header';
import Sumario from './../components/Sumario';
import Capapai from './../components/Capapai';
import Rodape from './../components/Rodape';
import livroHTML from './../segundaPagina/FirstBook';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Sumario/>
        
        <Route path="/" exact component={()=> <Capapai/>}/>
        <Route path="/livroHTML" exact component={()=> <livroHTML/>}/>        

        <Rodape/>
  
      </div>
      
    );
  }
}

export default App;
