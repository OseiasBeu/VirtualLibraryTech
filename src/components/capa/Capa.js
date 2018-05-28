import React, {Component} from 'react';
import Livro from './../capaLivros/Livro';
import Modal from './../modal/Modal'
import './Capa.css';
class Capa extends Component{
    componentWillMount = () =>{
        this.setState({modalAtivo: false});
    }

    alternarModal = () =>{
        let ativo = !this.state.modalAtivo;

        this.setState({ modalAtivo: ativo });
    }
    render(){
   
        return(
            <section className="capapai">
                <Modal ativo={this.state.modalAtivo} alternarModal={this.alternarModal}/>
                
                <Livro texto="Semana1" />
                
                <Livro texto="Semana2" />
                
                <Livro texto="Semana3"/>
                
                <Livro texto="Semana4"/>
             
            </section>
        );  
    }
}

export default Capa;