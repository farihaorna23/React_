import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  filterFilmsByDirector,
  getListOf,
  getFilmStats
} from "../helpers/film.helpers";
const FilmsPage = props => {
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");

  function getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(movie => setList(movie))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getFilms();
  }, []);

  //gets the filtered array
  //filterFilmsByDirector is a function that returns a lost
  let filmsByDirector = filterFilmsByDirector(list, searchDirector);

  let directors = getListOf(list, "director");
  const { avg_score, total, latest } = getFilmStats(filmsByDirector);

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <form>
        <div className="form-group">
          <label htmlFor="searchDirector">Filter By Director</label>
          <select
            name="searchDirector"
            id="searchDirector"
            value={searchDirector}
            onChange={e => setSearchDirector(e.target.value)}
          >
            <option value="">All</option>
            {directors.map(director => {
              return <option value={director}>{director}</option>;
            })}
          </select>
        </div>
      </form>
      <ul>
        {filmsByDirector.map((item, indx) => {
          return (
            <li key={item + indx}>
              {/* when anyone goes to this link, route will see the path, it will match a route, it will render a component specifically by single film component   */}
              <Link to={`/films/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <div>
        <div>
          <span># Of Films</span>
          <span>{total}</span>
        </div>
        <div>
          <span>Average Rating</span>
          <span>{avg_score.toFixed(2)}</span>
        </div>
        <div>
          <span>Latest Film</span>
          <span>{latest}</span>
        </div>
      </div>
    </div>
  );
};

export default FilmsPage;
