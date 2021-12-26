/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Paging = (props) => {
  const { total, currPage, onChange, MOVIES_PER_PAGE } = props;

  //Otra forma de crear el numero de paginas
  const getPages = () => {
    const aux = [];
    for (let i = 0; i < total; i++) {
      let page = i + 1;
      aux.push(
        <a
          key={i}
          onClick={() => onChange(page)}
          className={currPage === page ? "active" : ""}
        >
          {page}
        </a>
      );
    }
    return aux;
  };
  return (
    <div className="topbar-filter">
      <label>
        Movies per page: <span className="active">{MOVIES_PER_PAGE}</span>
      </label>
      <div className="pagination2">
        <span>
          Page {currPage} of {total}:
        </span>

        {/* {Array.apply(0, Array(total)).map((page, i) => {
          return (
            <a className="active" href="#">
              {i + 1}
            </a>
            );
        })} */}
        {getPages()}

        <a href="#">
          <i className="ion-arrow-right-b"></i>
        </a>
      </div>
    </div>
  );
};

export default Paging;
