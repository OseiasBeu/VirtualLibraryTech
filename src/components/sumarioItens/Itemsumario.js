import React, {Component} from 'react';
import './Itemsumario.css';

class Itemsumario extends Component{
    render(){
        return(
            <ul>
                <li className="item">{this.props.item}</li>
            </ul>
        );
    }
}

export default Itemsumario;