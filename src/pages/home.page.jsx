import { useState } from "react";
// import "../App.css";

const HomePage = () => {
  const [list, setList] = useState(["ready", "set", "GO"]);
  const [text, setText] = useState("");

  const handleInput = event => {
    setText(event.target.value);
  };

  function onSubmit(event) {
    event.preventDefault();
    setList([...list, text]);
    setText("");
  }
  return (
    <div>
      <h1>Hello World</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={handleInput}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {list.map((word, indx) => {
          return <li key={word + indx}>{word}</li>;
        })}
      </ul>
    </div>
  );
};

export default HomePage;
