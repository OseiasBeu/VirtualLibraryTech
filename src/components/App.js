import React, { Component } from 'react';
import {Switch,BrowserRoute,Route, Link} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Sumario from './Sumario';
import Capapai from './Capapai';
import Rodape from './Rodape';
import Paginahtml from './livro1Html/Paginahtml';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Sumario/>
        
        <Route path="/" exact component={()=> <Capapai/>}/>
        <Route path="/Livrohtml" exact component={()=> <Paginahtml/>}/>        

        <Rodape/>
  
      </div>
      
    );
  }
}

export default App;
