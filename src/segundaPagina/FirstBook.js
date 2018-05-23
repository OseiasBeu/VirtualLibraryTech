import React,{Component}  from 'react';
import Carroussel from '../components/carrossel/Carroussel'

import './FirstBook.css';

class FirstBook extends Component{
    
    render(){
        return(
            <div>
            <Carroussel/>    
                <p>Funciona....</p>
                </div>
          
            
        );
    }
}
console.log('Chegou!');

export default FirstBook;