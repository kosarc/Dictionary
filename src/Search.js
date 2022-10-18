import "./Search.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ApiRespone from "./ApiRespone";
import PopUp from "./PopUp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Search() {
  const [value, setValue] = useState("on");
  const [synonymValue, setSynonymValue] = useState("off");
  const [apiResult, setApiResult] = useState(false);
  useEffect(() => {
    launchSubmit();
    // eslint-disable-next-line
  }, [synonymValue]);

  function error(error) {
    toast.info(error.response.data.message, {});
  }

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
    window.scrollTo({
      top: 80,
      behavior: "smooth",
    });
    if (event) {
      setValue(event.target[0].value);
      event.preventDefault();
      let word = event.target[0].value;
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      axios.get(apiUrl).then(handleRespone).catch(error);
      event.target.reset();
    } else {
      let word = synonymValue;
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      axios.get(apiUrl).then(handleRespone).catch(error);
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
              className="form-control w-50 search-line"
              placeholder="Search for a word"
              autoFocus={true}
            />
            <input
              className="btn btn-outline-secondary btn-submit"
              type="submit"
              value="🔍"
            />
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
              placeholder="Search for a word"
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
