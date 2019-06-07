import React from "react";
class AHome extends React.Component {
  render() {
    return (
      <div className="A-Home-card">
        <a className="A-Home-link" href={this.props.HMlink} alt="">
          <img className="A-Home-img" src={this.props.HMimg} alt="" />
          <p className="A-Home-place">{this.props.HMplace}</p>
          <h4 className="A-Home-title">{this.props.HMtitle}</h4>
          <p className="A-Home-price">¥ {this.props.HMprice} per night</p>
          <p className="A-Home-stars">
            <span className="Star">{this.props.HMstar}</span>
            <span className="StarNum">{this.props.HMstarnum}</span>
            <span className="SPhost">{this.props.HMSPhost}</span>
          </p>
        </a>
      </div>
    );
  }
}
export default AHome;
