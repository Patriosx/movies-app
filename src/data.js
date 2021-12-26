import axios from "axios";

//https://github.com/cavestri/themoviedb-javascript-library/
//tmdb API
const API_KEY = `api_key=${process.env.REACT_APP_API_KEY}`;
const PAGE = 1;
const URL = `https://api.themoviedb.org/3/movie/popular?${API_KEY}&language=en-US&page=${PAGE}`;
let data = [];
console.log(process.env.YEAH);
const getMovies = async () => {
  try {
    const response = await axios(URL);
    // console.log(response.data.results);
    data = [...response.data.results];
  } catch (error) {
    console.log(error);
  }
};
getMovies();
export { data };
