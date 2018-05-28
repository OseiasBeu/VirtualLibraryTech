import React, {Component} from 'react';
import './Carroussel.css';
import './ResponsiveCarroussel.css'
import Carousell from 'nuka-carousel';

class Carroussel extends Component {
  render() {    
      return (
          <div className="carousel externo">
              <Carousell slideWidth={"800px"}>
                  <img className="carousel" alt="" src={this.props.imagem1} />
                  <img className="carousel" alt="" src={this.props.imagem2}/>
                  <img className="carousel" alt="" src={this.props.imagem3} />
                  <img className="carousel" alt="" src={this.props.imagem4} /> 
              </Carousell>                
          </div>
      );
  }
}

export default Carroussel;
