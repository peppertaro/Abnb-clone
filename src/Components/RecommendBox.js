import React from "react";

class RecommendBox extends React.Component {
  render() {
    return (
      <div className="RDCarousel-item">
        <img
          className="Carousel-img"
          src={this.props.RDimg}
          alt={this.props.RDtitle}
        />
      </div>
    );
  }
}

export default RecommendBox;
