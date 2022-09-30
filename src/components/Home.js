import React, { useState } from "react";
import "../styles/home.css";
import Grid from "./Grid.js";

const Home = () => {
  // Constants
  const API_BASE_URL = "https://www.omdbapi.com/";
  const api_key = "fbd9a397";
  let noResult = "";
  // UseState Hooks
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);

  // Function for Getting search results
  const onSearch = () => {
    setResults([]);
    fetch(`${API_BASE_URL}?&apikey=${api_key}&s=${input}`)
      .then((r) => r.json())
      .then((result) => {
        setResults(result.Search);
      });
  };

  // Function for updating input field
  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };

  // Do search on press enter
  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  // Showing the results
  const showResults = () => {
    if (results === undefined) {
      return <div className="noResult">No results Found for " {input} ".</div>;
    }
    if (results && results.length > 0) {
      return <Grid data={results} />;
    }
  };
  return (
    <>
      <div className="box">
        <h1>Movie Zone</h1>
        <p>Search for movie and get details</p>
        <div className="searchBox">
          <input
            type="text"
            placeholder="Type movie name here..."
            className="search_input"
            onChange={onInputChange}
            onKeyDown={onKeyDown}
            value={input}
          />
          <button className="search_btn" onClick={onSearch}>
            <i class="fas fa-search"></i> <span>Search</span>
          </button>
        </div>
      </div>
      <div className="results">{showResults()}</div>
      <div className="results">{noResult}</div>
    </>
  );
};

export default Home;
