export const filterFilmsByDirector = (list, director) => {
  if (director) {
    return list.filter(film => film.director === director);
  } else {
    return list;
  }
};
export const getListOf = (list, str) => {
  let result = list.map(film => film[str]);
  let unique = new Set(result);
  return [...unique];
};
