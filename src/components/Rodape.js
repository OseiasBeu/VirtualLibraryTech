import React,{Component} from 'react';
import './Rodape.css';
import iconFace from './img/icon-face.png';
import iconYou from './img/icon-youtube.png';
import iconInsta from './img/icon-insta.png';
import faceIcon from './img/facebook.png';
import masterIcon from './img/mastertech.png';

class Rodape extends Component{
    render(){
        return(
            <footer>
               
                <section className="blocos">
                <ul className="listas">
                <h2>Estação Hack</h2>
                <li>O projeto</li>
                <li>Motivação Social</li>
                <li>Como Funciona</li>
                <li>Guia do Hacker</li>
                <li>Quero contratar</li>
                </ul>

                <ul className="listas">
                <h2>Fique por dentro</h2>
                <div className=" icones">
                <li><img src={iconFace}/></li>
                <li><img src={iconYou}/></li>
                <li><img src={iconInsta}/></li>
                </div>
                </ul>

                <ul className="listas">
                <h2>Realização</h2>
                <div className="parceria">
                <li>FACEBOOK  [IMAGEM]</li>
                <li>MASTERTECH [IMAGEM]</li>
                </div>
                </ul>

                </section>
                <p>Dúvidas? mande um e-mail para: estacaohack@mastertech.tech</p>
            </footer>

        );
    }
}
export default Rodape;