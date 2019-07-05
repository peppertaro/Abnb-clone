import React from "react";
class FooterLink extends React.Component {
  render() {
    return (
      <div className="FT-Modal">
        <a
          className="FT-Modal-link"
          id={this.props.FTid}
          href={this.props.FTlink}
          alt=""
        >
          {this.props.FTname}
        </a>
        <span class="badge badge-secondary FT-badge">{this.props.FTbadge}</span>
      </div>
    );
  }
}
export default FooterLink;
