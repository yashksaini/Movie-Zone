import React from "react";
import Card from "./Card.js";

const Grid = ({ data }) => {
  return (
    <>
      {data.map((movie) => {
        return (
          <Card
            key={movie.imdbID}
            id={movie.imdbID}
            title={movie.Title}
            image={movie.Poster}
            year={movie.Year}
            type={movie.Type}
          />
        );
      })}
    </>
  );
};

export default Grid;
//  for (let movie of data) {
//    return (
//      <Card
//        key={movie.imdbID}
//        id={movie.imdbID}
//        title={movie.Title}
//        image={movie.Poster}
//        year={movie.Year}
//      />
//    );

//  data.map(({ movie }) => {
//    return (
//      <Card
//        key={movie.imdbID}
//        id={movie.imdbID}
//        title={movie.Title}
//        image={movie.Poster}
//        year={movie.Year}
//      />
//    );
//  });
