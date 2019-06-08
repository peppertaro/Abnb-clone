import React from "react";
import { Carousel } from "react-bootstrap";
class Beach extends React.Component {
  render() {
    return (
      <Carousel className="Beach m-2">
        <Carousel.Item className="Carousel-img-box">
          <img className="Carousel-img" src={this.props.BHimg} alt="" />
          <Carousel.Caption className="Carousel-info text-light">
            <a href={this.props.BHlink} className="Carousel-link">
              <h3 className="Carousel-title">{this.props.BHtitle}</h3>
              <p className="Carousel-prc">{this.props.BHprc}</p>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Beach;
