import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["ready", "set", "GO"],
      text: ""
    };
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <ul>
          {this.state.list.map((word, indx) => {
            return <li key={word + indx}>{word}</li>;
          })}
        </ul>
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
