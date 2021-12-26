import React from "react";

const SingleMovie = (props) => {
  const { movie } = props;
  const BASE_URL_IMG = "https://image.tmdb.org/t/p/w200";
  return (
    <div className="movie-item-style-2">
      <img src={BASE_URL_IMG + movie.poster_path} alt="" />
      <div className="mv-item-infor">
        <h6>
          <a href="moviesingle.html">
            {movie.title} <span></span>
          </a>
        </h6>
        <p className="rate">
          <i className="ion-android-star"></i>
          <span>{movie.vote_average}</span> /10
        </p>
        <p className="describe">{movie.overview}</p>
        <p className="run-time">Release: {movie.release_date}</p>

        <p>Popularity: {movie.popularity}</p>
      </div>
    </div>
  );
};

export default SingleMovie;
