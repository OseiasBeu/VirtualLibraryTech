import React, {Component} from 'react';
// import {BrowserRoute,Switch, Route, Link} from 'react-router-dom';
import Livro from './Livro';
import './Capapai.css';
import html from './img/html.png';
import css from './img/CSS.png';
import livro1 from './livro1Html/Paginahtml';
class Capapai extends Component{
    render(){
        return(
            <section className="capapai">
            <main>
                <Livro texto="Semana1" />
                <Livro texto="Semana2" />
                <Livro texto="Semana3"/>
                <Livro texto="Semana4"/>
             </main>
            </section>
        );  
    }
}

export default Capapai;