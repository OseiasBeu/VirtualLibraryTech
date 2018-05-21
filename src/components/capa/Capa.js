import React, {Component} from 'react';
import Livro from './../capaLivros/Livro';
import './Capa.css';
import html from './../img/html.png';
import css from './../img/CSS.png';
import livro1 from './../../segundaPagina/FirstBook';
class Capa extends Component{
    render(){
        return(
            <section className="capapai">
            
                <Livro texto="Semana1" />
                <Livro texto="Semana2" />
                <Livro texto="Semana3"/>
                <Livro texto="Semana4"/>
             
            </section>
        );  
    }
}

export default Capa;