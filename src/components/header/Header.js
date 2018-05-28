import React, {Component} from 'react';
import './Header.css';
import logoIcone from './../img/logo.svg';
class Header extends Component{
    render(){
        return(
            <header>
                <img alt="" className="imagemLogo" src={logoIcone}/>
                <h1>Master<span>tech</span></h1>
            </header>
        )
    }
}

export default Header;