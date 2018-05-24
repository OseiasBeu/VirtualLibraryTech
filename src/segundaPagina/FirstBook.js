import React,{Component}  from 'react';
import Carroussel from '../components/carrossel/Carroussel';
import com1 from './../components/img/banner/evento1.jpg';
import com2 from './../components/img/banner/evento2.jpg';
import com3 from './../components/img/banner/evento3.jpg';
import com4 from './../components/img/banner/evento4.jpg';

import './FirstBook.css';

class FirstBook extends Component{
    
    render(){
        return(
            <div>
            <Carroussel imagem1={com1} imagem2={com2} imagem3={com3} imagem4={com4}/>    
                <p>Funciona....</p>
                </div>
          
            
        );
    }
}
console.log('Chegou!');

export default FirstBook;