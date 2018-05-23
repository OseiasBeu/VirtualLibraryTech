import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './../components/header/Header';
import Sumario from './../components/sumario/Sumario';
import Capapai from './../components/capa/Capa';
import Rodape from './../components/footer/Rodape';
import FirstBook from './../segundaPagina/FirstBook';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Sumario/>
        
        <Route path="/" exact component={()=> <Capapai/>}/>
        <Route path="/FirstBook" exact component={()=> <FirstBook/>}/>        

        <Rodape/>
  
      </div>
      
    );
  }
}

export default App;
