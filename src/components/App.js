import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Sumario from './Sumario';
import Capapai from './Capapai';
import Livro from './Livro';
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
