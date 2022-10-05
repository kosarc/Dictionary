import "./Search.css";
import React, { useState } from "react";
import axios from "axios";
import ApiRespone from "./ApiRespone";

function Search() {
  const [value, setValue] = useState(null);
  const [apiResult, setApiResult] = useState(false);
  function handleRespone(respone) {
    console.log(respone.data);
    setApiResult(respone.data);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let word = value;
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleRespone);
  }

  function handleChange(props) {
    setValue(props.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="search"
            className="form-control w-50"
            placeholder="Type a word..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            autoFocus={true}
            onChange={handleChange}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            🔍
          </button>
        </div>
      </form>
      <ApiRespone results={apiResult} />
    </div>
  );
}
export default Search;
