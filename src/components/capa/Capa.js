import React, {Component} from 'react';
import Livro from './../capaLivros/Livro';
import './Capa.css';
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