import React from "react";
class AHome extends React.Component {
  render() {
    return (
      <div className="A-Home-card">
        <a className="A-Home-link link-item" href={this.props.HMlink} alt=" ">
          {this.props.HMlink}
        </a>
        <div className="A-Home-box">
          <img className="A-Home-img" src={this.props.HMimg} alt="" />
          <p className="A-Home-place">{this.props.HMplace}</p>
          <h4 className="A-Home-title">{this.props.HMtitle}</h4>
          <p className="A-Home-price">¥ {this.props.HMprice} per night</p>
          <p className="A-Home-stars d-flex align-items-center">
            <span className={"star" + this.props.HMstar} />
            <span className="StarNum">{this.props.HMstarnum}</span>
            <span className="SPhost">{this.props.HMSPhost}</span>
          </p>
        </div>
      </div>
    );
  }
}
export default AHome;
