import React, { Component } from 'react';
import {Switch,BrowserRoute,Route, Link} from 'react-router-dom';
import './App.css';
import Header from './../components/header/Header';
import Sumario from './../components/sumario/Sumario';
import Capapai from './../components/capa/Capa';
import Rodape from './../components/footer/Rodape';
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
