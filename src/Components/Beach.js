import React from "react";
import { beachList } from "../ListData";
import BeachBox from "./BeachBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
library.add(faAngleLeft, faAngleRight);
class Beach extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bchList: beachList,
      bch: beachList[0]
    };
  }

  Nextbtn = () => {
    const nextCard = this.state.bch.BHindex + 1;
    this.state.bch.BHindex === this.state.bchList.length - 1
      ? this.setState({ onClick: null })
      : this.setState({ bch: this.state.bchList[nextCard] });
  };

  Prevbtn = () => {
    const prevCard = this.state.bch.BHindex - 1;
    this.state.bch.BHindex === 0
      ? this.setState({ onClick: null })
      : this.setState({ bch: this.state.bchList[prevCard] });
  };

  render() {
    return (
      <div className="Beach-section">
        <div className="container">
          <h2 className="title">Head to the beach</h2>
          <div className="Beaches">
            <div className="Beach-box slider-box d-flex">
              <button className="slider-btn" onClick={() => this.Prevbtn()}>
                {" "}
                <FontAwesomeIcon icon="angle-left" className="angle-i m-4" />
              </button>
              <div
                className={`BHcards-slider cards-slider active-slide-${
                  this.state.bch.BHindex
                }`}
              >
                <div
                  className="card-slider-wrapper d-flex"
                  style={{
                    transform: `translateX(-${this.state.bch.BHindex *
                      (100 / this.state.bchList.length)}%)`
                  }}
                >
                  {beachList.map(beachList => (
                    <BeachBox key={beachList.BHkey} beachList={beachList} />
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

export default Beach;
