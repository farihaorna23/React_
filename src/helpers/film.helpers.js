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

export const getFilmStats = list => {
  let stat = {};
  let sum = 0;
  let releasedDate = [];

  list.forEach(film => {
    sum += Number(film.rt_score);
    releasedDate.push(film.release_date);
  });

  return {
    acc_score: sum,
    avg_score: sum / list.length,
    total: list.length,
    latest: Math.max(...releasedDate)
  };
};
