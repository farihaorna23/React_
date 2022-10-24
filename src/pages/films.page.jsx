import { useState, useEffect } from "react";
import { filterFilmsByDirector, getListOf } from "../helpers/film.helpers";
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
          return <li key={item + indx}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default FilmsPage;
