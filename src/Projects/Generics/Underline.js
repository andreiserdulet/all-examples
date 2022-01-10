import React from "react";
import "./Underline.scss";
const Underline = ({ width, color }) => {
  return (
    <>
      <div className="underline" style={{ width: `${width}`, background:`${color}` }}></div>
    </>
  );
};
export default Underline;
