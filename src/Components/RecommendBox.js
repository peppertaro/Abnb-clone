import React from "react";

const recommendBox = ({ recommendList }) => {
  const { RDindex, RDimg, RDtitle, RDprc, RDlink } = recommendList;
  return (
    <div id={`card-${RDindex}`} className="rcmd-img-box Slide-img-box">
      <img className="rcmd-img Slide-img" src={RDimg} alt="" />
      <div className="rcmd-info Slide-info text-light">
        <h3 className="rcmd-title Slide-title">{RDtitle}</h3>
        <p className="rcmd-prc">{RDprc}</p>
      </div>
      <a href={RDlink} className="rcmd-link link-item">
        {RDlink}
      </a>
    </div>
  );
};
export default recommendBox;
