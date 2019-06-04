import React from "react";
import Nav from "./Nav";
import Option from "./Option";
import Recommend from "./Recommend";
import AHome from "./AHome";
import Beach from "./Beach";
import TopRate from "./TopRate";
import FooterModal from "./FooterModal";
import {
  navList,
  optionList,
  recommendList,
  HomeList,
  BeachList,
  TopRateList
} from "./ListData";
import "./App.scss";
import { Button, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faAngleRight,
  faGlobeEurope
} from "@fortawesome/free-solid-svg-icons";
library.add(faAngleDown, faAngleRight, faGlobeEurope);

class App extends React.Component {
  render() {
    return (
      <div className="root-section bg-light">
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
        <div className="experience-section">
          <div className="container">
            <a href="#experience" alt="">
              <div className="exp-img-box">
                <img className="exp-img" src="./img/Exp.jpg" alt="" />
                <div className="exp-bg">
                  <div className="exp-dsc">
                    <div className="exp-tag">AIRBNB EXPERIENCES</div>
                    <div className="exp-title font-weight-bold">
                      Learn from the most interesting experts
                    </div>
                    <div className="exp-expl">
                      One-of-a-kind activities hosted by locals, created for the
                      curious.
                    </div>
                    <div className="exp-book font-weight-bold">
                      Book experiences
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="A-Homes-section">
          <div className="container">
            <div className="A-Homes-title Title-box d-flex">
              <h2 className="title">Places to stay around the world</h2>
              <FontAwesomeIcon icon="angle-right" className="A-home-i" />
            </div>
            <div className="A-Homes">
              {HomeList.map(AHomeItem => {
                return (
                  <AHome
                    HMliink={AHomeItem.HMlink}
                    HMimg={AHomeItem.HMimg}
                    HMplace={AHomeItem.HMplace}
                    HMtitle={AHomeItem.HMtitle}
                    HMprice={AHomeItem.HMprice}
                    HMstar={AHomeItem.HMstar}
                    HMstarnum={AHomeItem.HMstarnum}
                    HMSPhost={AHomeItem.HMSPhost}
                  />
                );
              })}
            </div>
            <div className="A-Home-others">
              <a href="#HomeOthers" alt="" className="showAll">
                Show all(2000+)
                <FontAwesomeIcon icon="angle-right" className="homeOther-i" />
              </a>
            </div>
          </div>
        </div>
        <div className="Beach-section">
          <div className="container">
            <h2 className="title">Head to the beach</h2>
            <Carousel className="Beaches">
              {BeachList.map(beachItem => {
                return (
                  <Beach
                    BHlink={beachItem.BHlink}
                    BHimg={beachItem.BHimg}
                    BHtitle={beachItem.BHtitle}
                    BHprc={beachItem.BHprc}
                  />
                );
              })}
            </Carousel>
          </div>
        </div>
        <div className="Top-Rated-experience-Section">
          <div className="container">
            <div className="Top-Rated-title Title-box d-flex">
              <div className="Top-Rated-title-box">
                <h2 className="title">Top-rated experiences</h2>
                <p className="Top-Rated-expl">
                  Book activities led by local hosts on your next trip
                </p>
              </div>
              <FontAwesomeIcon icon="angle-right" className="Top-Rated-i" />
            </div>
            <div className="Top-Rated-experiences">
              {TopRateList.map(TopRateItem => {
                return (
                  <TopRate
                    TRliink={TopRateItem.TRlink}
                    TRimg={TopRateItem.TRimg}
                    TRplace={TopRateItem.TRplace}
                    TRtitle={TopRateItem.TRtitle}
                    TRprice={TopRateItem.TRprice}
                    TRstar={TopRateItem.TRstar}
                    TRstarnum={TopRateItem.TRstarnum}
                    TRoption={TopRateItem.TRoption}
                  />
                );
              })}
            </div>
            <a className="Top-Rated-show showAll d-flex" href="#TPShow">
              Show all experiences
              <FontAwesomeIcon icon="angle-right" className="TR-show-i" />
            </a>
          </div>
        </div>
        <div
          className="footer-btn bg-light"
          onClick={FooterModal.handleClickOpen}
        >
          <FontAwesomeIcon icon="globe-europe" className="footer-i" />
          Terms, Privacy, Currency & More
        </div>
        <FooterModal />
      </div>
    );
  }
}
export default App;
