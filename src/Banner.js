import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import "./Banner.css";
import YouTube from 'react-youtube'; 
import movieTrailer from 'movie-trailer'; 

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); 
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "100%", 
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0, 
      modestbranding: 1,
    },
  };

  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      {/* 1. The Video Container (Renders behind the text) */}
      {trailerUrl && (
        <div className="banner__video">
           <YouTube videoId={trailerUrl} opts={opts} />
           {/* This button allows you to close the video */}
           <button className="banner__videoClose" onClick={() => setTrailerUrl("")}>X</button>
        </div>
      )}

      {/* 2. The Text Contents */}
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        
        <div className="banner__buttons">
          <button 
            className="banner__button" 
            onClick={() => handleClick(movie)}
          >
            {trailerUrl ? "Close" : "Play"}
          </button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;