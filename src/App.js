import React from "react";
import Option from "./Option";
import Recommend from "./Recommend";
import { optionList, recommendList } from "./ListData";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
library.add(faAngleDown);

class App extends React.Component {
  render() {
    return (
      <div className="root-section">
        <div className="Home-section">
          <div className="bg-bk">
            <div className="header">
              <div className="logo">
                <img src="./img/A-logo.png" alt="" />
              </div>
              <div className="header-right">
                <a id="h-home" href="#home">
                  Host a home
                </a>
                <a id="h-exp" href="#exp">
                  Host an experience
                </a>
                <a id="help" href="#help">
                  Help
                </a>
                <a id="h-signup" href="#signup">
                  Sign up
                </a>
                <a id="h-login" href="#login">
                  Login
                </a>
              </div>
            </div>
            <div className="container">
              <form className="search-box">
                <h2 className="form-title">
                  Book unique homes and experiences.
                </h2>
                <p className="f-place">WHERE</p>
                <input id="home-place" placeholder="Anywhere" />
                <div className="f-date-box">
                  <p className="f-check-in">CHECKIN</p>
                  <input id="home-checkin" placeholder="mm/dd/yyyy" />
                </div>
                <div className="f-date-box">
                  <p className="f-check-out">CHECKOUT</p>
                  <input id="home-checkout" placeholder="mm/dd/yyyy" />
                </div>
                <p className="f-guests">GUESTS</p>
                <div id="guests">
                  Guests
                  <i>
                    <FontAwesomeIcon icon="angle-down" />
                  </i>
                </div>
                <button id="search" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="Options-section">
          <div className="container">
            <h2 className="title">Explore Airbnb</h2>
            <div className="options">
              {optionList.map(optionItem => {
                return (
                  <Option
                    OPlink={optionItem.OPlink}
                    OPimg={optionItem.OPimg}
                    OPname={optionItem.OPname}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="A-plus-section">
          <div className="container">
            <div className="A-plus-img-box">
              <h2 className="title">Introducing Airbnb Plus</h2>
              <p className="A-plus-dsc">
                A selection of homes verified for quality and design
              </p>
              <div className="A-plus-img-box">
                <button id="A-plus-home">
                  EXPLORE HOMES{" "}
                  <i>
                    <FontAwesomeIcon icon="angle-side" />
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="recommend-section">
          <div className="container">
            <h2 className="title">Recommended for you</h2>
            <div className="recommends">
              {recommendList.map(recommendItem => {
                return (
                  <Recommend
                    RDlink={recommendItem.RDlink}
                    RDimg={recommendItem.RDimg}
                    RDtitle={recommendItem.RDtitle}
                    RDprc={recommendItem.RDprc}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
