import React from "react";

const DreamBox = ({ DreamList }) => {
  const { DRindex, DRimg, DRplace, DRprc, DRlink } = DreamList;
  return (
    <div id={`DRcard-${DRindex}`} className="Dream-img-box Slide-img-box">
      <img className="Dream-img Slide-img" src={DRimg} alt="" />
      <div className="Dream-info Slide-info text-light">
        <h3 className="Dream-place Slide-place">{DRplace}</h3>
        <p className="Dream-prc">{`¥ ${DRprc} per night`}</p>
      </div>
      <a href={DRlink} className="Dream-link link-item">
        {DRlink}
      </a>
    </div>
  );
};
export default DreamBox;
