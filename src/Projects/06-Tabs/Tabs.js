import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import Loading from "../Generics/Loading";
import "./Tabs.scss";
const url = "https://course-api.com/react-tabs-project";

const Tabs = () => {
  const [tabs, setTabs] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTabs(data);
    setLoading(false);
    return () => setTabs({});
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <Loading />;
  }
  console.log(tabs);
  const { company, title, duties, dates } = tabs[value];
  return (
    <div className="tabs-container">
      <div className="tabs-company-names">
        {tabs.map((item, index) => {
          return (
            <button
              className="tabs-company-btn"
              key={item.id}
              onClick={() => {
                setValue(index);
              }}
            >
              {item.company}
            </button>
          );
        })}
      </div>
      <section className="tabs-info-container">
        <header className="tabs-info">
          <h1 className="tabs-title">{title}</h1>
          <div className="tabs-category">
            <p className="tabs-category-text">{company}</p>
          </div>
          <p className="tabs-dates">{dates}</p>
        </header>
        {duties.map((duty, index) => {
          return (
            <div className="tabs-jobs" key={index}>
              <div className="tabs-icon-column">
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="tabs-icon"
                />
              </div>
              <p className="tabs-duty">{duty}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default Tabs;
