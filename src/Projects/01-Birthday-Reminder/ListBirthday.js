import React, { useState } from "react";
import "./ListBirthday.scss";
const ListBirthday = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, img } = person;
        return (
          <div className="section-birthday" key={id}>
            <div className="image-birthday-section">
              <img className="image-birthday" src={img} />
            </div>
            <div className="info-birthday">
              <h2 className="name-birthday">{name}</h2>
              <p className="age-birthday"> {age} years</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ListBirthday;
