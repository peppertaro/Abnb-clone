import React from "react";
import CarouselItem from "react-bootstrap/CarouselItem";
import CarouselCaption from "react-bootstrap/CarouselCaption";
class recommend extends React.Component {
  render() {
    return (
      <div className="recommend">
        <a href={this.props.RDlink} className="rcmd-link">
          <CarouselItem className="rcmd-img-box">
            <img className="rcmd-img" src={this.props.RDimg} alt="" />
            <CarouselCaption className="rcmd-info text-light">
              <h3 className="rcmd-title">{this.props.RDtitle}</h3>
              <p className="rcmd-prc">{this.props.RDprc}</p>
            </CarouselCaption>
          </CarouselItem>
        </a>
      </div>
    );
  }
}

export default recommend;
