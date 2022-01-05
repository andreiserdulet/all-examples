import React from "react";
import "./Underline.scss";
const Underline = ({ width }) => {
  return (
    <>
      <div className="underline" style={{ width: `${width}` }}></div>
    </>
  );
};
export default Underline;
