import React from "react";
import { Carousel } from "react-bootstrap";
class Beach extends React.Component {
  render() {
    return (
      <Carousel.Item className="Beach-box Carousel-img-box">
        <img
          className="Carousel-img d-block w-100"
          src={this.props.BHimg}
          alt=""
        />
        <Carousel.Caption className="Beach-info Carousel-info text-light">
          <a href={this.props.BHlink} className="Beach-link Carousel-link">
            <h3 className="Beach-title Carousel-title">{this.props.BHtitle}</h3>
            <p className="Beach-prc Carousel-prc">{this.props.BHprc}</p>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
}

export default Beach;
