import React, {Component} from 'react';
import Livro from './Livro'
import './Capapai.css';

class Capapai extends Component{
    render(){
        return(
            <section className="capapai">
                <Livro texto="Semana1"/>
                <Livro texto="Semana2"/>
                <Livro texto="Semana3"/>
                <Livro texto="Semana4"/>   
            </section>
        )
    }
}

export default Capapai;