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
                <p>Este modal está aqui</p>
            </section>             
        );
    }
}

export default Modal;