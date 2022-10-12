import "./Search.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ApiRespone from "./ApiRespone";
import PopUp from "./PopUp";

function Search() {
  const [value, setValue] = useState("on");
  const [synonymValue, setSynonymValue] = useState("off");
  const [apiResult, setApiResult] = useState(false);
  useEffect(() => {
    launchSubmit();
    // eslint-disable-next-line
  }, [synonymValue]);

  function error(error) {}

  function launchSubmit() {
    if (synonymValue === "off") {
      return null;
    } else {
      handleSubmit();
    }
  }

  function handleRespone(respone) {
    setApiResult(respone.data);
  }
  function handleSubmit(event) {
    if (event) {
      setValue(event.target[0].value);
      event.preventDefault();
      let word = event.target[0].value;
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      axios.get(apiUrl).then(handleRespone);
    } else {
      let word = synonymValue;
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      axios.get(apiUrl).catch(error).then(handleRespone);
    }
  }

  function pull_data(data) {
    if (data) {
      setSynonymValue(data);
    }
  }

  if (synonymValue === "off" && value === "on") {
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
      </div>
    );
  } else {
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
        <PopUp />
        <ApiRespone results={apiResult} func={pull_data} />
      </div>
    );
  }
}
export default Search;
