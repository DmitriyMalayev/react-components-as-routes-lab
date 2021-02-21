import React from "react";
import { directors } from "../data";

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <div>
          <h3>{director.name}</h3>
          <ul>
            {director.movies} {/* ?? */}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Directors;
