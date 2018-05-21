import React, {Component} from 'react';
import './Sumario.css';
import './sumResponsivo.css';

class Sumario extends Component{
    render(){
        return(
            <aside>
               
          <h1 class="float-l">
            <a href=" " title="Titulo do Site">Sumário</a>
          </h1>
          
          <input type="checkbox" id="control-nav" />
          <label for="control-nav" class="control-nav"></label>
          <label for="control-nav" class="control-nav-close"></label>

        <nav class="float-r">
            <ul class="list-auto">
            <li>
              <a href="#html" title="html">HTML</a>
            </li>
            <li>
              <a href="#css" title="css">CSS</a>
            </li>
            <li>
              <a href="#JavaScript" title="JavaScript">JavaScript</a>
            </li>
            <li>
              <a href="#React" title="React">REACT</a>
            </li>
          </ul>
        </nav>
   </aside>
        )
    }
}


export default Sumario;