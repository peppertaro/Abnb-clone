import React from "react";
import ReactModal from "react-modal";
import FooterLink from "./FooterLink";
import { FooterABList, FooterDCVList, FooterHTList } from "./ListData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookF, faTwitter, faInstagram);
const appElement = document.getElementsByClassName("footer-modal-box");
ReactModal.setAppElement(appElement);

class FooterModal extends React.Component {
  constructor() {
    super();
    this.state = {
      FooterBoxOpen: false
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
  }

  handleClickOpen() {
    this.setState({ FooterBoxOpen: true });
  }

  handleClickClose() {
    this.setState({ FooterBoxOpen: false });
  }
  render() {
    return (
      <ReactModal
        isOpen={this.state.FooterBoxOpen}
        className="footer-modal"
        overlayClassName="Overlay"
        onRequestClose={this.handleClickClose}
      >
        <div className="footer-modal-box bg-light">
          <div className="container">
            <div className="footer-container">
              <div className="footer-boxes d-flex">
                <div className="footer-box">
                  <h4 className="FT-modal-title">Airbnb</h4>
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
    );
  }
}
export default FooterModal;
