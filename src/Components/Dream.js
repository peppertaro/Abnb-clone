import React from "react";
import { Carousel } from "react-bootstrap";
class Dream extends React.Component {
  render() {
    return (
      <Carousel.Item className="Dream-box Carousel-img-box">
        <a className="Dream-link  link-item" href={this.props.DRlink} alt="">
          {this.props.DRlink}
        </a>
        <Carousel.Caption className="Dream-card">
          <img
            className="Dream-img Carousel-img d-block w-100 "
            src={this.props.DRimg}
            alt=""
          />
          <p className="Dream-place">{this.props.DRplace}</p>
          <p className="Dream-price">
            {" $" + this.props.DRprc + "/night average "}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
}
export default Dream;
