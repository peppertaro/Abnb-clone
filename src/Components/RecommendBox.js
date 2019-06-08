import React from "react";
import { Carousel } from "react-bootstrap";

class RecommendBox extends React.Component {
  render() {
    return (
      <Carousel.Item>
        <img className="rcmd-img" src={this.props.RDimg} alt="" />
        <Carousel.Caption className="rcmd-info text-light">
          <a href={this.props.RDlink} className="rcmd-link">
            <h3 className="rcmd-title">{this.props.RDtitle}</h3>
            <p className="rcmd-prc">{this.props.RDprc}</p>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
}

export default RecommendBox;
