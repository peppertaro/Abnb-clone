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
    this.state.GMTotal >= 16
      ? this.setState({ onClick: null })
      : this.setState({ GMnum: this.state.GMnum + 1 });
  }

  render() {
    return (
      <div className="Guest-type-box">
        <div className="GuestType d-flex justify-content-between align-items-center p-3">
          <div className="GuestInfo ">
            <h3 className="GMtype">{this.props.GMtype}</h3>
            <p className="GMdsc">{this.props.GMdsc}</p>
          </div>
          <div className="numbers-box d-flex align-items-center">
            <FontAwesomeIcon
              icon="minus"
              id={this.props.GMidMinus}
              className="GMMinus"
              onClick={() => {
                this.NumMinus();
              }}
            />
            <p id={this.props.GMnumID} className="GMnum">
              {this.state.GMnum}
            </p>
            <FontAwesomeIcon
              icon="plus"
              id={this.props.GMidPlus}
              className="GMPlus"
              onClick={() => {
                this.NumPlus();
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default GuestTypeBox;
