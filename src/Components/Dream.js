import React from "react";
import { DreamList } from "../ListData";
import DreamBox from "./DreamBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
library.add(faAngleLeft, faAngleRight);
class Dream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drmList: DreamList,
      drm: DreamList[0]
    };
  }

  Nextbtn = () => {
    const nextCard = this.state.drm.DRindex + 1;
    this.state.drm.DRindex === this.state.drmList.length - 1
      ? this.setState({ onClick: null })
      : this.setState({ drm: this.state.drmList[nextCard] });
  };

  Prevbtn = () => {
    const prevCard = this.state.drm.DRindex - 1;
    this.state.drm.DRindex === 0
      ? this.setState({ onClick: null })
      : this.setState({ drm: this.state.drmList[prevCard] });
  };

  render() {
    return (
      <div className="Dream-section">
        <div className="container">
          <h2 className="title">Your Dreamed places is here</h2>
          <div className="Dreams">
            <div className="Dream-box slider-box">
              <button className="slider-btn" onClick={() => this.Prevbtn()}>
                {" "}
                <FontAwesomeIcon icon="angle-left" className="angle-i" />
              </button>
              <div
                className={`DRcards-slider cards-slider active-slide-${
                  this.state.drm.DRindex
                }`}
              >
                <div
                  className="card-slider-wrapper"
                  style={{
                    transform: `translateX(-${this.state.drm.DRindex *
                      (100 / this.state.drmList.length)}%)`
                  }}
                >
                  {DreamList.map(DreamList => (
                    <DreamBox key={DreamList.DRkey} DreamList={DreamList} />
                  ))}
                </div>
              </div>
              <button className="slider-btn" onClick={() => this.Nextbtn()}>
                {" "}
                <FontAwesomeIcon icon="angle-right" className="angle-i" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dream;
