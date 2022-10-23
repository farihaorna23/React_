import { useState, useEffect } from "react";

const FilmsList = props => {
  const [list, setList] = useState([]);

  function getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(movie => setList(movie))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <ul>
      {list.map((item, indx) => {
        return <li key={item + indx}>{item.title}</li>;
      })}
    </ul>
  );
};

export default FilmsList;
