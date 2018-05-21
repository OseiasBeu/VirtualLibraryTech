import React,{Component} from 'react';
import './Rodape.css';
import './ResponsiveRodape.css';
import iconFace from './../img/icon-face.png';
import iconYou from './../img/icon-youtube.png';
import iconInsta from './../img/icon-insta.png';
// import faceIcon from './../img/facebook.png';
// import masterIcon from './../img/mastertech.png';

class Rodape extends Component{
    render(){
        return(
        <footer>
               
            <section className="blocos">
                <ul className="listas">
                <h3>Estação Hack</h3>
                
                <li>O projeto</li>
                <li>Motivação Social</li>
                <li>Como Funciona</li>
                <li>Guia do Hacker</li>
                <li>Quero contratar</li>
                </ul>

                <ul className="listas">
                <h3>Fique por dentro</h3>
                <div className=" icones">
                <li><img src={iconFace}/></li>
                <li><img src={iconYou}/></li>
                <li><img src={iconInsta}/></li>
                </div>
                </ul>

                <ul className="listas">
                <h3>Realização</h3>
                <div className="parceria">
                <li>FACEBOOK  [IMAGEM]</li>
                <li>MASTERTECH [IMAGEM]</li>
                </div>
                </ul>

            </section>
                <h4>Dúvidas?</h4>
                <p>mande um e-mail para:</p>
                <p>estacaohack@mastertech.tech</p>
         </footer>

        );
    }
}
export default Rodape;