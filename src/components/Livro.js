import React,{Component} from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import './Livro.css';
import livrohtml from '../components/livro1Html/Paginahtml';
// import imagem from './hmtl.png'


class Livro extends Component{
    render(){
        return(
            
                <div className="capa">
                <Link to="livrohtml"> <img src={this.props.src}/></Link>
                 <img src={this.props.src}/>
                 <img src={this.props.src}/>
                 <img src={this.props.src}/>
                  

                  <Switch>
                      <Route path="livrohtml" Component={livrohtml}/>
                  </Switch>

                  </div>
                
        );
    }
    
}

export default Livro;

