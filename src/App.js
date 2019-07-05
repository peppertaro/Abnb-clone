import React from "react";
import Nav from "./Components/Nav";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GuestModal from "./Modals/GuestModal";
import Option from "./Components/Option";
import Recommend from "./Components/Recommend";
import AHome from "./Components/AHome";
import Beach from "./Components/Beach";
import TopRate from "./Components/TopRate";
import Dream from "./Components/Dream";
import FooterModal from "./Modals/FooterModal";
import { navList, optionList, HomeList, TopRateList } from "./ListData";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faAngleRight,
  faGlobeEurope,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
library.add(faAngleDown, faAngleRight, faGlobeEurope, faTimes, faAirbnb);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
      startDate: "",
      endDate: ""
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChangeStart(date) {
    this.setState({
      startDate: date
    });
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date
    });
  }

  render() {
    return (
      <div className="root-section">
        <div id="home" className="Home-section">
          <img className="bg_Home_img" src="./img/plzCons-img.jpg" alt="" />
          <div className="bg-bk">
            <div className="header">
              <div className="logo">
                <FontAwesomeIcon
                  icon={["fab", "airbnb"]}
                  className="logo-i m-4"
                />
              </div>
              <div className="header-right">
                {navList.map(NavItem => {
                  return (
                    <Nav
                      key={NavItem.NVkey}
                      NVid={NavItem.NVid}
                      NVlink={NavItem.NVlink}
                      NVname={NavItem.NVname}
                    />
                  );
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
                    <DatePicker
                      selected={this.state.startDate}
                      selectsStart
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
                      onChange={this.handleChangeStart}
                      minDate={this.state.today}
                      id="home-checkin"
                      placeholderText="mm/dd/yyyy"
                      className="f-input"
                    />
                  </div>
                  <div className="f-date-box">
                    <p className="f-check-out f-expl">CHECKOUT</p>
                    <DatePicker
                      selected={this.state.endDate}
                      selectsEnd
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
                      onChange={this.handleChangeEnd}
                      minDate={this.state.startDate}
                      id="home-checkout"
                      placeholderText="mm/dd/yyyy"
                      className="f-input"
                    />
                  </div>
                  <GuestModal />
                  <div id="search-btn">
                    <button variant="flat" id="search" type="submit">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="Options-section">
          <div className="container">
            <h2 className="title">Explore TAbnb</h2>
            <div className="options">
              {optionList.map(optionItem => {
                return (
                  <Option
                    key={optionItem.OPkey}
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
            <div className="A-plus-dsc-box">
              <h2 className="title">Introducing TAbnb Plus</h2>
              <p className="A-plus-dsc">
                A selection of homes verified for quality and design
              </p>
            </div>
            <div className="A-plus-box">
              <img className="A-plus-bg-img" src="./img/laConcha.jpg" alt="" />
              <div className="A-plus-img-box">
                <div className="A-plus-btn">
                  <button
                    variant="flat"
                    id="A-plus-home"
                    className="A-plus-home-btn"
                    type="submit"
                  >
                    EXPLORE HOMES
                    <FontAwesomeIcon icon="angle-right" className="home-i" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Recommend />
        <div id="exp" className="experience-section">
          <div className="container">
            <a href="#experience" alt="">
              <div className="exp-img-box">
                <img className="exp-img" src="./img/Exp.jpg" alt="" />
                <div className="exp-bg">
                  <div className="exp-dsc">
                    <div className="exp-tag">TAbnb EXPERIENCES</div>
                    <div className="exp-title">
                      Learn from the most interesting experts
                    </div>
                    <div className="exp-expl">
                      One-of-a-kind activities hosted by locals, created for the
                      curious.
                    </div>
                    <div className="exp-book">Book experiences</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="A-Homes-section">
          <div className="container">
            <div className="A-Homes-title Title-box">
              <h2 className="title">Places to stay around the world</h2>
              <FontAwesomeIcon icon="angle-right" className="A-home-i" />
            </div>
            <div className="A-Homes">
              {HomeList.map(AHomeItem => {
                return (
                  <AHome
                    key={AHomeItem.HMkey}
                    HMlink={AHomeItem.HMlink}
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
        <Beach />
        <div className="Top-Rated-experience-Section">
          <div className="container">
            <div className="Top-Rated-title Title-box">
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
                    key={TopRateItem.TRkey}
                    TRlink={TopRateItem.TRlink}
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
            <a className="Top-Rated-show showAll" href="#TPShow">
              Show all experiences
              <FontAwesomeIcon icon="angle-right" className="TR-show-i" />
            </a>
          </div>
        </div>
        <Dream />
        <FooterModal />
      </div>
    );
  }
}
export default App;
