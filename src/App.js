import React from "react";
import Nav from "./Nav";
import Option from "./Option";
import Recommend from "./Recommend";
import { navList, optionList, recommendList } from "./ListData";
import "./App.scss";
import { Button, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
library.add(faAngleDown, faAngleRight);

class App extends React.Component {
  render() {
    return (
      <div className="root-section">
        <div className="Home-section">
          <div className="bg-bk">
            <div className="header justify-content-between row px-3 mb-5">
              <div className="logo p-4">
                <img className="logo-img" src="./img/A-logo.png" alt="" />
              </div>
              <div className="header-right row pt-5 mr-2">
                {navList.map(NavItem => {
                  return <Nav NVlink={NavItem.link} NVname={NavItem.NVname} />;
                })}
              </div>
            </div>
            <div className="Search-element">
              <div className="container">
                <form className="search-box">
                  <h2 className="form-title">
                    Book unique places to stay and things to do.
                  </h2>
                  <p className="f-place f-expl">WHERE</p>
                  <input
                    id="home-place"
                    placeholder="Anywhere"
                    className="f-input"
                  />
                  <div className="f-date-box">
                    <p className="f-check-in f-expl">CHECK-IN</p>
                    <input
                      id="home-checkin"
                      placeholder="mm/dd/yyyy"
                      className="f-input"
                    />
                  </div>
                  <div className="f-date-box">
                    <p className="f-check-out f-expl">CHECKOUT</p>
                    <input
                      id="home-checkout"
                      placeholder="mm/dd/yyyy"
                      className="f-input"
                    />
                  </div>
                  <div className="f-guest-box">
                    <p className="f-guests f-expl">GUESTS</p>
                    <div className="f-input-box f-input d-flex justify-content-between px-3">
                      <input
                        id="guests"
                        placeholder="Guests"
                        disabled="disabled"
                      />
                      <FontAwesomeIcon
                        icon="angle-down"
                        className="guest-choice"
                      />
                    </div>
                  </div>
                  <div className="search-btn text-right">
                    <Button
                      variant="flat"
                      id="search"
                      className="btn-danger text-light px-4 py-3"
                      type="submit"
                    >
                      Search
                    </Button>
                  </div>
                </form>
              </div>
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
            <div className="A-plus-box">
              <h2 className="title">Introducing Airbnb Plus</h2>
              <p className="A-plus-dsc">
                A selection of homes verified for quality and design
              </p>
              <div className="A-plus-img-box">
                <div className="A-plus-btn">
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="flat"
                      id="A-plus-home"
                      className="bg-light px-4 py-3"
                      type="submit"
                    >
                      EXPLORE HOMES
                      <FontAwesomeIcon icon="angle-right" className="home-i" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="recommend-section">
          <div className="container">
            <h2 className="title">Recommended for you</h2>
            <Carousel className="recommends">
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
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
