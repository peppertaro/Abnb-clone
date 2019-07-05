import React from "react";
import ReactModal from "react-modal";
import FooterLink from "../Components/FooterLink";
import { FooterABList, FooterDCVList, FooterHTList } from "../ListData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faAirbnb
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookF, faTwitter, faInstagram, faAirbnb);
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
          <div className="footer-modal-box">
            <div className="container">
              <div className="footer-container">
                <div className="footer-boxes">
                  <div className="footer-box">
                    <h4 className="FT-modal-title">TAbnb</h4>
                    {FooterABList.map(FTmodalItem => {
                      return (
                        <FooterLink
                          key={FTmodalItem.FTkey}
                          FTABid={FTmodalItem.FTABid}
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
                          key={FTmodalItem.FTkey}
                          FTDCVid={FTmodalItem.FTDCVid}
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
                          key={FTmodalItem.FTkey}
                          FTHTid={FTmodalItem.FTHTid}
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
                <div className="FT-copyright">
                  <FontAwesomeIcon
                    icon={["fab", "airbnb"]}
                    className="FT-logo-i"
                  />
                  <p className="cr-text">
                    2019 TAbnb clone page, pls lemme know if there's any problem
                  </p>
                  <div className="FT-buttons">
                    <button
                      variant="flat"
                      id="lang"
                      className=" FT-button"
                      type="submit"
                    >
                      English
                    </button>
                    <button
                      variant="flat"
                      id="currency"
                      className="FT-button"
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
