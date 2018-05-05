import React,{Component} from 'react';
import './Livro.css';

class Livro extends Component{
    render(){
        return(
            
                <div className="capa">{this.props.texto}</div>
                
        );
    }
    
}

export default Livro;