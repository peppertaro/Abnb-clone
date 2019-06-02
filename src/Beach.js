import React from "react";
import { Carousel } from "react-bootstrap";
class Beach extends React.Component {
  render() {
    return (
      <Carousel.Item className="bch-img-box">
        <img className="bch-img" src={this.props.BHimg} alt="" />
        <Carousel.Caption className="bch-info text-light">
          <a href={this.props.BHlink} className="bch-link">
            <h3 className="bch-title">{this.props.BHtitle}</h3>
            <p className="bch-prc">{this.props.BHprc}</p>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
}

export default Beach;
