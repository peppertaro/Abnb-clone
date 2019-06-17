import React from "react";
import { recommendList } from "../ListData";
import RecommendBox from "./RecommendBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
library.add(faAngleLeft, faAngleRight);
class Recommend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rcmdList: recommendList,
      rcmd: recommendList[0]
    };
  }

  Nextbtn = () => {
    const nextCard = this.state.rcmd.RDindex + 1;
    this.state.rcmd.RDindex === this.state.rcmdList.length - 1
      ? this.setState({ onClick: null })
      : this.setState({ rcmd: this.state.rcmdList[nextCard] });
  };

  Prevbtn = () => {
    const prevCard = this.state.rcmd.RDindex - 1;
    this.state.rcmd.RDindex === 0
      ? this.setState({ onClick: null })
      : this.setState({ rcmd: this.state.rcmdList[prevCard] });
  };

  render() {
    return (
      <div className="recommend-section">
        <div className="container">
          <h2 className="title">Recommended for you</h2>
          <div className="recommends">
            <div className="recommend-box slider-box d-flex">
              <button className="slider-btn" onClick={() => this.Prevbtn()}>
                {" "}
                <FontAwesomeIcon icon="angle-left" className="angle-i m-4" />
              </button>
              <div
                className={`RDcards-slider cards-slider active-slide-${
                  this.state.rcmd.RDindex
                }`}
              >
                <div
                  className="card-slider-wrapper d-flex"
                  style={{
                    transform: `translateX(-${this.state.rcmd.RDindex *
                      (100 / this.state.rcmdList.length)}%)`
                  }}
                >
                  {recommendList.map(recommendList => (
                    <RecommendBox
                      key={recommendList.RDkey}
                      recommendList={recommendList}
                    />
                  ))}
                </div>
              </div>
              <button className="slider-btn" onClick={() => this.Nextbtn()}>
                {" "}
                <FontAwesomeIcon icon="angle-right" className="angle-i m-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recommend;
