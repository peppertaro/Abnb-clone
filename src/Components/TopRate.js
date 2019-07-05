import React from "react";
class TopRate extends React.Component {
  render() {
    return (
      <div className="Top-Rate-box">
        <a className="Top-Rate-link  link-item" href={this.props.TRlink} alt="">
          {this.props.TRlink}
        </a>
        <div className="Top-Rate-card">
          <img className="Top-Rate-img card-img" src={this.props.TRimg} alt="" />
          <p className="Top-Rate-place card-place">{this.props.TRplace}</p>
          <h4 className="Top-Rate-title card-title">{this.props.TRtitle}</h4>
          <p className="Top-Rate-price card-price">$ {this.props.TRprice} per person</p>
          <p className="Top-Rate-stars Rate-Stars">
            <span className={"star " + this.props.TRstar} />
            <span className="StarNum">{this.props.TRstarnum}</span>
            <span className="SPhost">{this.props.TRSPhost}</span>
          </p>
        </div>
      </div>
    );
  }
}
export default TopRate;
