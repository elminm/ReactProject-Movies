import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ListPage.css";

const ListPage = () => {
  const movies = useSelector((store) => store.favoriteReducer.movies);

  return (
    <div className="list-page">
      <h1 className="list-page__title">Мой список</h1>
      <ul>
        {movies.map((item) => {
          return (
            <li key={item.imdbID}>
              <a
                target="_blank"
                href={`https://www.imdb.com/title/${item.imdbID}/`}
              >
                {item.Title} ({item.Year})
              </a>
            </li>
          );
        })}
        <br />
        <br />
        <br />
        <br />
        <Link to="/">Back to Home Page</Link>
      </ul>
    </div>
  );
};

export default ListPage;
