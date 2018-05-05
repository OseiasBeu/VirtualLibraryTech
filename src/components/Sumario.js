import React, {Component} from 'react';
import './Sumario.css';
import Itemsumario from './Itemsumario';

class Sumario extends Component{
    render(){
        return(
            <aside>
                <p>Sumário</p>
                <Itemsumario item="Introdução ao Frontend"/>

            </aside>
        )
    }
}


export default Sumario;