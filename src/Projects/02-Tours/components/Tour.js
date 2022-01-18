import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./Tour.scss";
import Loading from "../../Generics/Loading";
import TourList from "./ToursList";
const Tour = ({ url }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const fetchTours = async () => {
    setIsLoading(true);

    try {
      setIsLoading(false);
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
    return () => setTours({});
  }, []);
  if (isLoading) {
    return (
      <main className="tour-loading">
        <Loading />
      </main>
    );
  }
  return (
    <div className="tour-container">
      {tours.map((tour) => {
        return <TourList key={tour.id} tour={tour} removeTour={removeTour} />;
      })}
      {tours.length === 0 && (
        <div className="tours-btn-revert-container">
          <button
            className="tours-btn-revert"
            onClick={() => {
              fetchTours();
            }}
          >
            Revert
          </button>
        </div>
      )}
    </div>
  );
};
export default Tour;
