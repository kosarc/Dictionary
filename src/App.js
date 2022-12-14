import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          <a href="/">Dictionary</a>
        </h1>
        <small>
          Definitions from{" "}
          <a href="https://languages.oup.com/" target="_blank" rel="noreferrer">
            Oxford Languages
          </a>
        </small>
        <Search />
      </div>
    </div>
  );
}

export default App;
