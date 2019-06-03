import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <div className="header-link">
        <a
          id={this.props.NVid}
          href={this.props.NVlink}
          className="text-light m-3 p-2 link-font"
        >
          {this.props.NVname}
        </a>
      </div>
    );
  }
}

export default Nav;
