import React from "react";
import ReactModal from "react-modal";
import FooterLink from "../Components/FooterLink";
import { FooterABList, FooterDCVList, FooterHTList } from "../ListData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookF, faTwitter, faInstagram);
const appElement = document.getElementById("root");
ReactModal.setAppElement(appElement);

const custom = {
  overlay: {
    zIndex: "100",
    backgroundColor: "none",
    animationName: "SlideUp",
    animationDuration: ".5s"
  }
};

class FooterModal extends React.Component {
  constructor() {
    super();
    this.state = {
      FooterModalToggle: false,
      icon: "globe-europe",
      dsc: "Terms, Privacy, Currency & More"
    };

    this.handleClick = this.handleClick.bind(this);
  }
  openButton() {
    this.setState({
      icon: "times",
      dsc: "Close"
    });
  }

  closeButton() {
    this.setState({
      icon: "globe-europe",
      dsc: "Terms, Privacy, Currency & More"
    });
  }

  handleClick() {
    this.setState({ FooterModalToggle: !this.state.FooterModalToggle });
  }

  render() {
    return (
      <div className="Footer">
        <div
          id="footer-btn"
          className="bg-light"
          onClick={() => {
            if (this.state.icon === "globe-europe") {
              this.openButton();
              this.handleClick();
            } else {
              this.closeButton();
              this.handleClick();
            }
          }}
        >
          <FontAwesomeIcon icon={this.state.icon} className="footer-i" />
          {this.state.dsc}
        </div>
        <ReactModal
          isOpen={this.state.FooterModalToggle}
          className="footer-modal"
          style={custom}
        >
          <div className="footer-modal-box bg-light">
            <div className="container">
              <div className="footer-container">
                <div className="footer-boxes d-flex">
                  <div className="footer-box">
                    <h4 className="FT-modal-title">TAbnb</h4>
                    {FooterABList.map(FTmodalItem => {
                      return (
                        <FooterLink
                          FTid={FTmodalItem.FTid}
                          FTlink={FTmodalItem.FTlink}
                          FTname={FTmodalItem.FTname}
                          FTbadge={FTmodalItem.FTbadge}
                        />
                      );
                    })}
                  </div>
                  <div className="footer-box">
                    <h4 className="FT-modal-title">Discover</h4>
                    {FooterDCVList.map(FTmodalItem => {
                      return (
                        <FooterLink
                          FTid={FTmodalItem.FTid}
                          FTlink={FTmodalItem.FTlink}
                          FTname={FTmodalItem.FTname}
                          FTbadge={FTmodalItem.FTbadge}
                        />
                      );
                    })}
                  </div>
                  <div className="footer-box">
                    <h4 className="FT-modal-title">Hosting</h4>
                    {FooterHTList.map(FTmodalItem => {
                      return (
                        <FooterLink
                          FTid={FTmodalItem.FTid}
                          FTlink={FTmodalItem.FTlink}
                          FTname={FTmodalItem.FTname}
                          FTbadge={FTmodalItem.FTbadge}
                        />
                      );
                    })}
                  </div>
                  <div className="footer-box">
                    <div className="sns-box">
                      <a
                        href="https://www.facebook.com/kechup.texon.alita"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt=""
                      >
                        <FontAwesomeIcon
                          icon={["fab", "facebook-f"]}
                          className="sns-i"
                        />
                      </a>
                      <a
                        href="https://twitter.com/urt201989"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt=""
                      >
                        <FontAwesomeIcon
                          icon={["fab", "twitter"]}
                          className="sns-i"
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/texonalita/"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt=""
                      >
                        <FontAwesomeIcon
                          icon={["fab", "instagram"]}
                          className="sns-i"
                        />
                      </a>
                    </div>
                    <div className="FT-Modal">
                      <a
                        className="FT-Modal-link "
                        id="Terms"
                        href="#Terms"
                        alt=""
                      >
                        Terms
                      </a>
                    </div>
                    <div className="FT-Modal">
                      <a
                        className="FT-Modal-link "
                        id="Privacy"
                        href="#Privacy"
                        alt=""
                      >
                        Privacy
                      </a>
                    </div>
                    <div className="FT-Modal">
                      <a
                        className="FT-Modal-link "
                        id="SiteMap"
                        href="#SiteMap"
                        alt=""
                      >
                        Site Map
                      </a>
                    </div>
                  </div>
                </div>
                <div className="FT-copyright border-top pt-4 d-flex">
                  <img className="FT-logo" src="/img/A-logo.png" alt="" />
                  <p className="cr-text p-3">
                    © 2019 TAbnb, Inc. All rights reserved.
                  </p>
                  <div className="FT-buttons d-flex justify-content-end">
                    <button
                      variant="flat"
                      id="lang"
                      className=" FT-button bg-light"
                      type="submit"
                    >
                      English
                    </button>
                    <button
                      variant="flat"
                      id="currency"
                      className="FT-button bg-light"
                      type="submit"
                    >
                      JPY - ¥
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ReactModal>
      </div>
    );
  }
}
export default FooterModal;
