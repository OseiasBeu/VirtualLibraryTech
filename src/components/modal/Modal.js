import React, {Component} from 'react';
import './Modal.css';

class Modal extends Component {
    render(){
        let ModalCSS = 'modal'

        if(this.props.ativo){
            ModalCSS += ' ativo';
        }

        return(
            <section className={ModalCSS}>
            <a id="fechar" onClick={this.props.alternarModal}><i class="fas fa-times"></i></a>
                <h2>Bem Vindo!</h2>
                <p>Bem Vindo!</p>
            </section>             
        );
    }
}

export default Modal;