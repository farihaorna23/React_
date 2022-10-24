// import { useState, useEffect } from "react";

// const FilmsList = props => {
//   const [list, setList] = useState([]);
//   const [searchDirector,setSearchDirector] = useState("");

//   function getFilms() {
//     fetch("https://ghibliapi.herokuapp.com/films")
//       .then(res => res.json())
//       .then(movie => setList(movie))
//       .catch(err => console.error(err));
//   }

//   useEffect(() => {
//     getFilms();
//   }, []);

//   return (
//     <h1>Studio Films</h1>
//     <form>
//       <div className="form-group">
//       <label htmlFor="searchDirector">Filter By Director</label>
//       <select name="searchDirector" id="searchDirector" value={searchDirector} onChange={(e) => setSearchDirector(e.target.value)}>
//         <option value="">All</option>
//       </select>
//       </div>
//     </form>
//     <ul>
//       {list.map((item, indx) => {
//         return <li key={item + indx}>{item.title}</li>;
//       })}
//     </ul>
//   );
// };

// export default FilmsList;
