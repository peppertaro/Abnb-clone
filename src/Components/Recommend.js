import React from "react";
import { Carousel } from "react-bootstrap";
import { recommendList } from "../ListData";
import RecommendBox from "./RecommendBox";

class recommend extends React.Component {
  render() {
    return (
      <Carousel className="Recommend-box">
        {recommendList.map((recommendItem, i) => (
          <Carousel.Item {...RecommendBox.props}>
            <img className="rcmd-img" src={recommendItem.RDimg} alt="" />
            <Carousel.Caption className="rcmd-info text-light">
              <a href={recommendItem.RDlink} className="rcmd-link">
                <h3 className="rcmd-title">{recommendItem.RDtitle}</h3>
                <p className="rcmd-prc">{recommendItem.RDprc}</p>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default recommend;
