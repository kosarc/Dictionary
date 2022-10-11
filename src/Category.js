import React, { useState } from "react";
import Play from "./Play";
import Synonyms from "./Synonyms";

function Category(props) {
  const [main, setMain] = useState(false);
  const [all, setAll] = useState(false);
  function handleClickMain() {
    setMain(true);
    setAll(false);
    props.func("Main");
  }
  function handleClickAll() {
    setAll(true);
    setMain(false);
    props.func("All");
  }
  if (main === true && all === false)
    return (
      <div>
        <button onClick={handleClickAll}>All</button>
        <button onClick={handleClickMain}>Main</button>
        <div>
          <Play audioSrc={props.data[0]} /> {props.data[0].word}
          <div>{props.data[0].phonetic}</div>
          <div>
            {props.data[0].meanings.map((value, index) => {
              return (
                <div key={index}>
                  {value.partOfSpeech}
                  <ul>
                    {value.definitions.map((value, index) => {
                      return <li key={index}>{value.definition}</li>;
                    })}
                  </ul>
                  <Synonyms words={value} />
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
        <div>
          <button onClick={handleClickAll}>All</button>
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
                        <Synonyms words={meaning} />
                      </div>
                    );
                  })}
                </span>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={handleClickAll}>All</button>
          <button onClick={handleClickMain}>Main</button>
        </div>
      );
    }
  }
}
export default Category;
