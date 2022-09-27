import { Component } from "react";

class FilmsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };

    // this.controller = new AbortController();
  }

  getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(movie => this.setState({ list: movie }))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getFilms();
  }

  // componentWillUnmount() {
  //   this.controller.abort();
  // }

  render() {
    return (
      <ul>
        {this.state.list.map((item, indx) => {
          return <li key={item + indx}>{item.title}</li>;
        })}
      </ul>
    );
  }
}

export default FilmsList;
