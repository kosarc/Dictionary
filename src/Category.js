import React, { useState } from "react";
import Play from "./Play";
import Synonyms from "./Synonyms";
import "./Category.css";
import Photos from "./Photos";

function Category(props) {
  const [main, setMain] = useState(false);
  const [all, setAll] = useState(false);
  function handleClickMain() {
    setMain(true);
    setAll(false);
    props.Func("Main");
  }
  function handleClickAll() {
    setAll(true);
    setMain(false);
    props.Func("All");
  }
  if (main === true && all === false)
    return (
      <div className="Category">
        <button onClick={handleClickAll}>All</button>
        <button onClick={handleClickMain} className="main-selected">
          Main
        </button>
        <div>
          <Play audioSrc={props.data[0]} /> <h2>{props.data[0].word}</h2>
          <div>{props.data[0].phonetic}</div>
          <div>
            {props.data[0].meanings.map((value, index) => {
              return (
                <div key={index}>
                  <div className="part-of-speech">{value.partOfSpeech}</div>
                  <ul>
                    {value.definitions.map((value, index) => {
                      return <li key={index}>{value.definition}</li>;
                    })}
                  </ul>
                  <Synonyms words={value} func={props.func} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  else {
    if (main === false && all === true) {
      return (
        <div className="Category">
          <button onClick={handleClickAll} className="all-selected">
            All
          </button>
          <button onClick={handleClickMain}>Main</button>
          <div>
            <Play audioSrc={props.data[0]} />{" "}
            {props.data.map((value, index) => {
              return (
                <span key={index}>
                  <h2>{value.word}</h2>
                  <div className="phonetic">{value.phonetic}</div>
                  {value.meanings.map((meaning, index) => {
                    return (
                      <div key={index}>
                        <div className="part-of-speech">
                          {meaning.partOfSpeech}
                        </div>
                        <ul>
                          {meaning.definitions.map((definition, index) => {
                            return <li key={index}>{definition.definition}</li>;
                          })}
                        </ul>
                        <Synonyms words={meaning} func={props.func} />
                      </div>
                    );
                  })}
                </span>
              );
            })}
          </div>
          <Photos word={props.data[0].word} />
        </div>
      );
    } else {
      return (
        <div className="Category">
          <button onClick={handleClickAll}>All</button>
          <button onClick={handleClickMain}>Main</button>
        </div>
      );
    }
  }
}
export default Category;
