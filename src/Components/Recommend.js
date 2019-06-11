import React from "react";
import Slider from "react-slick";
import { recommendList } from "../ListData";
import RecommendBox from "./RecommendBox";

class recommend extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesPerRow: 5,
      slidesToScroll: 1
    };
    return (
      <div className="recommend-box">
        <Slider {...settings}>
          {recommendList.map(recommendItem => (
            <RecommendBox
              key={recommendItem.RDkey}
              RDimg={recommendItem.RDimg}
              RDlink={recommendItem.RDlink}
              RDtitle={recommendItem.RDtitle}
              RDprc={recommendItem.RDprc}
            />
          ))}
        </Slider>
      </div>
    );
  }
}

export default recommend;
