import React, {Component} from 'react';
import './Sumario.css';
import Itemsumario from './Itemsumario';

class Sumario extends Component{
    render(){
        return(
            <aside>
                <p>Sumário</p>
                <Itemsumario item="Introdução"/>
                <Itemsumario item="HTML"/>
                <Itemsumario item="CSS"/>
                <Itemsumario item="JavaScript"/>
                <Itemsumario item="React"/>
                <Itemsumario item="Angular"/>
                <Itemsumario item="API"/>
            </aside>
        )
    }
}


export default Sumario;