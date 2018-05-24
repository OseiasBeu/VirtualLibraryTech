import React, {Component} from 'react';
import './Carroussel.css';
import Carousell from 'nuka-carousel';
// import com1 from './../img/banner/evento1.jpg';
// import com2 from './../img/banner/evento2.jpg';
// import com3 from './../img/banner/evento3.jpg';
// import com4 from './../img/banner/evento4.jpg';

class Carroussel extends Component {
  render() {    
      return (
          <div className="carousel externo">
              <Carousell slideWidth={"800px"}>
                  <img className="carousel" src={this.props.imagem1} />
                  <img className="carousel" src={this.props.imagem2}/>
                  <img className="carousel" src={this.props.imagem3} />
                  <img className="carousel" src={this.props.imagem4} /> 
              </Carousell>                
          </div>
      );
  }
}

export default Carroussel;
