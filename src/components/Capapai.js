import React, {Component} from 'react';
import Livro from './Livro';
import './Capapai.css';
import html from './img/html.png';
import css from './img/CSS.png';
import livro1 from './livro1Html/Paginahtml';
class Capapai extends Component{
    render(){
        return(
            <section className="capapai">
            <a href="livro1.js" target="blank"> <Livro texto="Semana1" /> </a>
             <Livro texto="Semana2" />
             <Livro texto="Semana3"/>
             <Livro texto="Semana4"/>
                
               
            </section>
        )
    }
}

export default Capapai;