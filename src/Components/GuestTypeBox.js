import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
library.add(faMinus, faPlus);

class GuestTypeBox extends React.Component {
  constructor() {
    super();
    this.state = {
      GMnum: 0,
      GMTotal: 0
    };
  }

  NumMinus() {
    this.state.GMnum === 0
      ? this.setState({ onClick: null })
      : this.setState({ GMnum: this.state.GMnum - 1 });
  }

  NumPlus() {
    this.setState({ GMnum: this.state.GMnum + 1 });
  }

  render() {
    return (
      <div className="Guest-type-box">
        <div className="GuestType">
          <div className="GuestInfo ">
            <h3 className="GMtype">{this.props.GMtype}</h3>
            <p className="GMdsc">{this.props.GMdsc}</p>
          </div>
          <div className="numbers-box">
            <button
              type="button"
              id={this.props.GMidMinus}
              className="GMMinus"
              onClick={() => {
                this.NumMinus();
              }}
            >
              <FontAwesomeIcon icon="minus" />
            </button>
            <p id={this.props.GMnumID} className="GMnum">
              {this.state.GMnum}
            </p>
            <button
              type="button"
              id={this.props.GMidPlus}
              className="GMPlus"
              onClick={() => {
                this.NumPlus();
              }}
            >
              <FontAwesomeIcon icon="plus" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default GuestTypeBox;
