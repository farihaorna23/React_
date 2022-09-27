import { Component } from "react";
import "./App.css";
import FilmsList from "./components/filmList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["ready", "set", "GO"],
      text: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInput = event => {
    this.setState({ text: event.target.value });
  };

  onSubmit(event) {
    event.preventDefault();
    this.setState({ list: [...this.state.list, this.state.text], text: "" });
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            id="text"
            value={this.state.text}
            onChange={this.handleInput}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.list.map((word, indx) => {
            return <li key={word + indx}>{word}</li>;
          })}
        </ul>
        <FilmsList />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>React is so cool!</p>
//         <h1>The Selection Series</h1>
//         <p>The Selection Series was writeen by Kiera Cass</p>
//         <ul>
//           <li>The One</li>
//           <li>The Heir</li>
//           <li>The Crown</li>
//         </ul>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
