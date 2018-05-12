import React,{Component} from 'react';
import './Livro.css';
// import imagem from './hmtl.png'


class Livro extends Component{
    render(){
        return(
            
                <div className="capa">
                 <img src={this.props.src}/>
                 <img src={this.props.src}/>
                 <img src={this.props.src}/>
                 <img src={this.props.src}/>
                  </div>
                
        );
    }
    
}

export default Livro;

