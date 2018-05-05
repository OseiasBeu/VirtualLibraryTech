import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Sumario from './Sumario';
import Livro from './Livro';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Sumario/>
        <Livro/>
        <Livro/>
  

      </div>
      
    );
  }
}

export default App;
