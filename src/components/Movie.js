import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/movie.css";

import IMAGE_NOT_FOUND from "../images/not_found.png";

const Movie = () => {
  // Constants
  const API_BASE_URL = "https://www.omdbapi.com/";
  const api_key = "fbd9a397";

  const { id } = useParams();
  const [movieData, setmovieData] = useState(null);

  useEffect(() => {
    showdata(); // eslint-disable-next-line
  }, []);

  const showdata = () => {
    fetch(`${API_BASE_URL}?&apikey=${api_key}&i=${id}`)
      .then((r) => r.json())
      .then((result) => {
        setmovieData(result);
      });
  };

  // To check data is fected from the api or not
  if (!movieData) {
    return (
      <>
        <div className="show-wait">
          <i class="fas fa-spinner"></i> Getting data.... Please Wait
        </div>
      </>
    );
  } else {
    let image = movieData.Poster;
    if (movieData.Poster === "N/A") {
      image = IMAGE_NOT_FOUND;
    }
    let genre = movieData.Genre;
    const g_tags = genre.split(",");

    let country = movieData.Country;
    const c_tags = country.split(",");

    let language = movieData.Language;
    const l_tags = language.split(",");
    return (
      <>
        <div className="top-box">
          <div className="left-content">
            <img src={image} className="img_box" alt="show"></img>
            <br />
            <button className="rating">
              <i class="fas fa-star"></i> {movieData.imdbRating}/10
            </button>
          </div>
          <div className="right-content">
            <div className="title">
              {movieData.Title} ({movieData.Year})
            </div>
            <hr />
            <div className="type">
              <span>{movieData.Type}</span> (Runtime: {movieData.Runtime})
            </div>
            <div className="type">
              Released On:<span>{movieData.Released}</span>
            </div>
            <div className="details">
              <h4>Storyline</h4>
              <hr />
              <p>{movieData.Plot}</p>
            </div>
            <div className="type">
              Tags:{" "}
              {g_tags.map((g_tag, i) => (
                <span key={i}>{g_tag}</span>
              ))}
            </div>
            <div className="type">
              Language:{" "}
              {l_tags.map((l_tag, i) => (
                <span key={i}>{l_tag}</span>
              ))}
            </div>
          </div>
        </div>
        <hr />
        <div className="top-box">
          <div className="left-content">
            <div className="type">
              Rated: <span>{movieData.Rated}</span>
            </div>
            <div className="type">
              Director: <span>{movieData.Director}</span>
            </div>
          </div>
          <div className="right-content">
            <div className="type">
              <span>Actors</span> {movieData.Actors}
            </div>
            <div className="type">
              <span>Awards</span> {movieData.Awards}
            </div>
            <div className="type">
              Country:{" "}
              {c_tags.map((c_tag, i) => (
                <span key={i}>{c_tag}</span>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Movie;
