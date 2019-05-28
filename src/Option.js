import React from "react";

class Option extends React.Component {
  render() {
    return (
      <div className="option">
        <a href={this.props.OPLink} className="option-box">
          <img className="option-img" src={this.props.OPimg} alt="" />
          <p className="option-text">{this.props.OPname}</p>
        </a>
      </div>
    );
  }
}

export default Option;
