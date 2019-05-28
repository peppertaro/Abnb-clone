import React from "react";

class recommend extends React.Component {
  render() {
    return (
      <div className="recommend">
        <div className="bg-yellow">
          <a href={this.props.RDlink} className="rcmd-link">
            <img className="rcmd-img" src={this.props.RDimg} alt="" />
            <div className="rcmd-info">
              <h2 className="rcmd-title">{this.props.RDtitle}</h2>
              <p className="rcmd-prc">{this.props.RDprc}</p>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default recommend;
