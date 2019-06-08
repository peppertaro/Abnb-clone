import React from "react";
import { Carousel } from "react-bootstrap";

class RecommendBox extends React.Component {
  render() {
    return (
      <Carousel.Item>
        <img className="Carousel-img" src={this.props.RDimg} alt="" />
        <Carousel.Caption className="Carousel-info text-light">
          <a href={this.props.RDlink} className="Carousel-link">
            <h3 className="Carousel-title">{this.props.RDtitle}</h3>
            <p className="Carousel-prc">{this.props.RDprc}</p>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
}

export default RecommendBox;
