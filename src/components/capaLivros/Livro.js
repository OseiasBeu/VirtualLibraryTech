import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Livro.css';
import './ResponsiveLivro.css';


class Livro extends Component{
    render(){
        return(
            
                <div className="capa">
                <Link to="livroHTML"> <img src={this.props.src}/></Link>
                 <img src={this.props.src}/>
                 <img src={this.props.src}/>
                 <img src={this.props.src}/>
                </div>
                
        );
    }
    
}

export default Livro;

