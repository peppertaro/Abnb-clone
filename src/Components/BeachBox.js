import React from "react";

const BeachBox = ({ beachList }) => {
  const { BHindex, BHimg, BHtitle, BHprc, BHlink } = beachList;
  return (
    <div id={`BHcard-${BHindex}`} className="Beach-img-box Slide-img-box">
      <img className="Beach-img Slide-img" src={BHimg} alt="" />
      <div className="Beach-info Slide-info text-light">
        <h3 className="Beach-title Slide-title">{BHtitle}</h3>
        <p className="Beach-prc">{BHprc}</p>
      </div>
      <a href={BHlink} className="Beach-link link-item">
        {BHlink}
      </a>
    </div>
  );
};
export default BeachBox;
