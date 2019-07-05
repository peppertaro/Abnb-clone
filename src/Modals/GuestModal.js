import React from "react";
import ReactModal from "react-modal";
import { GMTypeList } from "../ListData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import GuestTypeBox from "../Components/GuestTypeBox";

library.add(faAngleDown, faAngleUp);
const appElement = document.getElementById("root");
ReactModal.setAppElement(appElement);

const custom = {
  overlay: {
    zIndex: "100",
    backgroundColor: "none",
    position: "absolute",
    animationName: "SlideDown",
    animationDuration: ".5s"
  }
};
class GuestModal extends React.Component {
  constructor() {
    super();
    this.state = {
      GMToggle: false,
      GMicon: "angle-down"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ GMToggle: !this.state.GMToggle });
    this.state.GMicon === "angle-down"
      ? this.setState({ GMicon: "angle-up" })
      : this.setState({ GMicon: "angle-down" });
  }

  render() {
    return (
      <div id="f-guest-box">
        <p className="f-guests f-expl">GUESTS</p>
        <div
          id="f-guest-btn"
          className="f-input"
          onClick={() => {
            this.handleClick();
          }}
        >
          <input id="guests" placeholder="Guests" disabled="disabled" />
          <FontAwesomeIcon icon={this.state.GMicon} className="guest-choice" />
        </div>
        <div id="GTModalRcv" />
        <ReactModal
          className="Guest-modal"
          isOpen={this.state.GMToggle}
          onRequestClose={this.handleClick}
          style={custom}
          parentSelector={() => document.getElementById("GTModalRcv")}
        >
          {GMTypeList.map(GMTypeItem => {
            return (
              <GuestTypeBox
                key={GMTypeItem.GMkey}
                GMtype={GMTypeItem.GMtype}
                GMdsc={GMTypeItem.GMdsc}
                GMidMinus={GMTypeItem.GMidMinus}
                GMnumID={GMTypeItem.GMnumID}
                GMnum={GMTypeItem.GMnum}
                GMidPlus={GMTypeItem.GMidPlus}
              />
            );
          })}
          <div id="GMApply">
            <div
              href="#Apply"
              alt=""
              onClick={() => {
                this.handleClick();
              }}
            >
              Apply
            </div>
          </div>
        </ReactModal>
      </div>
    );
  }
}
export default GuestModal;
