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
      <div className="recommend-box d-flex">
        <button className="rcmd-btn" onClick={() => this.Prevbtn()}>
          {" "}
          <FontAwesomeIcon icon="angle-left" className="angle-i m-4" />
        </button>
        <div className={`cards-slider active-slide-${this.state.rcmd.RDindex}`}>
          <div
            className="card-slider-wrapper d-flex"
            style={{
              transform: `translateX(-${this.state.rcmd.RDindex *
                (100 / this.state.rcmdList.length)}%)`
            }}
          >
            {recommendList.map(recommendList => (
              <RecommendBox
                key={recommendList.DRkey}
                recommendList={recommendList}
              />
            ))}
          </div>
        </div>
        <button className="rcmd-btn" onClick={() => this.Nextbtn()}>
          {" "}
          <FontAwesomeIcon icon="angle-right" className="angle-i m-4" />
        </button>
      </div>
    );
  }
}

export default Recommend;
