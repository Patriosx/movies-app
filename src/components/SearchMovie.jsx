import React, { useState } from "react";
import { data } from "../data";

const SearchMovie = (props) => {
  const { movieList, setFilteredResults } = props;
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    // setSearch({ ...search, [e.target.name]: e.target.value });
    setSearch(e.target.value);
  };

  const searchItems = (e, searchValue) => {
    e.preventDefault();
    if (searchValue !== "") {
      const filteredData = movieList.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredResults(filteredData);
      console.log("filtered", filteredData);
    } else {
      setFilteredResults(data);
      console.log("vacio");
    }
  };

  return (
    <div className="col-md-4 col-sm-12 col-xs-12">
      <div className="sidebar">
        <div className="searh-form">
          <h4 className="sb-title">Search for movie</h4>
          <form
            className="form-style-1"
            action=""
            onSubmit={(e) => searchItems(e, search)}
          >
            <div className="row">
              <div className="col-md-12 form-it">
                <label>Movie name</label>
                <input
                  type="text"
                  placeholder="Enter keywords"
                  name="search"
                  value={search}
                  onChange={handleInputChange}
                />
              </div>

              {/*
              <div className="col-md-12 form-it">
              <label>Rating Range</label>
              <select>
                <option value="range">
                  -- Select the rating range below --
                </option>
                <option value="saab">
                  -- Select the rating range below --
                </option>
                <option value="saab">
                  -- Select the rating range below --
                </option>
                <option value="saab">
                  -- Select the rating range below --
                </option>
              </select>
            </div>

            <div className="col-md-12 form-it">
              <label>Release Year</label>
              <div className="row">
                <div className="col-md-6">
                  <select>
                    <option value="range">From</option>
                    <option value="number">10</option>
                    <option value="number">20</option>
                    <option value="number">30</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <select>
                    <option value="range">To</option>
                    <option value="number">20</option>
                    <option value="number">30</option>
                    <option value="number">40</option>
                  </select>
                </div>
              </div>
            </div> 
            */}

              <div className="col-md-12 ">
                <input className="submit" type="submit" value="submit" />
              </div>
            </div>
          </form>
        </div>
        <div className="ads">
          <img src="images/uploads/ads1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
