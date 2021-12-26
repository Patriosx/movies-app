import React from "react";
import SingleMovie from "./SingleMovie";
import { useEffect, useState } from "react";
import { data } from "../data";
import PageWrapper from "./PageWrapper";
import Paging from "./Paging";
import SearchMovie from "./SearchMovie";

const MovieList = () => {
  const [currPage, setCurrPage] = useState(1);
  const [movieList, setMovieList] = useState([]);
  const MOVIES_PER_PAGE = 3;
  const [filteredResults, setFilteredResults] = useState([]);
  let totalPages = Math.ceil(movieList.length / MOVIES_PER_PAGE);
  const [moviesPerPage, setMoviesPerPage] = useState([]);

  useEffect(() => {
    setMovieList(data);
  }, []);

  useEffect(() => {
    filteredResults.length > 0 ? paging(filteredResults) : paging(movieList);
    // paging(movieList);
  }, [movieList, currPage, filteredResults]);

  const paging = (lista) => {
    setMoviesPerPage(
      lista.slice((currPage - 1) * MOVIES_PER_PAGE, currPage * MOVIES_PER_PAGE)
    );
  };
  const sorting = (e, list) => {
    console.log(e.target.value);
    let aux;
    switch (e.target.value) {
      case "popularity+":
        aux = list.sort((a, b) => +a.popularity - +b.popularity);
        setMovieList(aux);
        console.log(movieList);
        break;
      case "popularity-":
        aux = list.sort((a, b) => +b.popularity - +a.popularity);
        setMovieList(aux);
        console.log(movieList);
        break;
      case "rating+":
        aux = list.sort((a, b) => +a.vote_average - +b.vote_average);
        setMovieList(aux);
        console.log(movieList);
        break;
      case "rating-":
        aux = list.sort((a, b) => +b.vote_average - +a.vote_average);
        setMovieList(aux);
        console.log(movieList);
        break;
      case "date+":
        aux = list.sort((a, b) => a.release_date.localeCompare(b.release_date));
        setMovieList(aux);
        console.log(movieList);
        break;
      case "date-":
        aux = list.sort((a, b) => b.release_date.localeCompare(a.release_date));
        setMovieList(aux);
        console.log(movieList);
        break;
      default:
        setMovieList(data);
    }
  };

  return (
    <PageWrapper title={"movie listing - list"}>
      <div className="col-md-8 col-sm-12 col-xs-12">
        <div className="topbar-filter">
          <label>Sort by:</label>
          <select
            onChange={(e) => {
              filteredResults > 0
                ? sorting(e, filteredResults)
                : sorting(e, movieList);

              filteredResults > 0 ? paging(filteredResults) : paging(movieList);
            }}
          >
            <option value="">----------------------------</option>
            <option value="popularity-">Popularity Descending</option>
            <option value="popularity+">Popularity Ascending</option>
            <option value="rating-">Rating Descending</option>
            <option value="rating+">Rating Ascending</option>
            <option value="date-">Release date Descending</option>
            <option value="date+">Release date Ascending</option>
          </select>
        </div>

        {/* {filteredResults.length > 0
          ? filteredResults.map((movie, i) => (
              <SingleMovie movie={movie} key={i} />
            ))
          : moviesPerPage.map((movie, i) => (
              <SingleMovie movie={movie} key={i} />
            ))} */}
        {moviesPerPage.map((movie, i) => (
          <SingleMovie movie={movie} key={i} />
        ))}
        <Paging
          total={totalPages}
          currPage={currPage}
          MOVIES_PER_PAGE={MOVIES_PER_PAGE}
          onChange={(page) => setCurrPage(page)}
        />
      </div>
      <SearchMovie
        movieList={movieList}
        setFilteredResults={setFilteredResults}
      />
    </PageWrapper>
  );
};

export default MovieList;
