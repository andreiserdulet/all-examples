import React from "react";
import { Link } from "react-router-dom";
import "./HomeCard.scss";
const HomeCard = ({ project }) => {
  return (
    <>
      {project.map((exercise) => {
        const { id, name, img, url } = exercise;
        return (
          <div key={id} className="card">
            <Link to={url}>
              <div
                className="card-details"
                style={{
                  background: `url(${img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "45% 100%",
                }}
              ></div>
            </Link>

            <button className="btn" type="button">
              <Link to={url}>{name}</Link>
            </button>
          </div>
        );
      })}
    </>
  );
};
export default HomeCard;
