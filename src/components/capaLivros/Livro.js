import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Livro.css';
import './ResponsiveLivro.css';


class Livro extends Component{
    render(){
        return(
            
                <div className="capa">
                <Link to="FirstBook"><img alt="" src={this.props.src}/></Link>
                <Link to="FirstBook"><img alt="" src={this.props.src}/></Link>
                <Link to="FirstBook"><img alt="" src={this.props.src}/></Link>
                <Link to="FirstBook"><img alt="" src={this.props.src}/></Link>
                </div>
                
        );
    }
    
}

export default Livro;

